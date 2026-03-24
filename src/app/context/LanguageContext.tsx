import React, { createContext, useContext, useState, ReactNode } from 'react';
import { portfolioDataEn, competitionDataEn, projectDataEn } from '../data/portfolioEn';
import { portfolioData, competitionData, projectData } from '../data/portfolio';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  currentPortfolio: typeof portfolioData;
  currentCompetition: typeof competitionData;
  currentProject: typeof projectData;
}

const globalAny = globalThis as any;
if (!globalAny.__LanguageContext) {
  globalAny.__LanguageContext = createContext<LanguageContextType | undefined>(undefined);
}
const LanguageContext = globalAny.__LanguageContext;

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const translations = {
    zh: {
      'nav.home': '首頁',
      'nav.about': '關於',
      'nav.skills': '軟體專業',
      'nav.portfolio': '作品集',
      'nav.experience': '經歷',
      'nav.contact': '聯絡方式',
      'site.title': '個人履歷網站',
      
      'hero.greeting': '您好，我是',
      'hero.name': '林煜宸',
      'hero.role': '產品設計師 / 視覺設計師',
      'hero.desc': '專注於結合工業設計與視覺傳達，尋找科技與人性的平衡。',
      'hero.cta': '觀看作品',
      'hero.scroll': '向下滾動',

      'about.title': '關於我',
      'about.title_en': 'About Me',
      'about.school_label': '就讀學校 :',
      'about.school_val': '長庚大學工業設計學系',
      'about.intro_label': '個人簡介 :',
      'about.intro_val': '我是長庚大學工業設計學系二年級學生，熟悉平面設計、網頁前端設計與室內建築設計等多種軟體，並持續學習3D建模與程式開發，以培養跨領域整合能力。個性平易近人、積極進取，具備專案協作、時間管理與創意思考經驗。期望藉由本次人因設計課程，結合專業知識與技術應用，開發出兼具市場潛力與人體工學的創新設計，並在團隊合作中持續成長。',
      'about.resume': '詳細履歷',

      'resume.title': '林煜宸 - 個人履歷',
      'resume.download': '下載 PDF',
      'resume.print': '列印',
      'resume.education': '學歷',
      'resume.experience': '經歷',
      'resume.skills': '專業技能',
      'resume.projects': '精選專案',
      'resume.contact': '聯絡資訊',
      'resume.profile': '個人簡介',
      'resume.print_info': '請點擊 PDF 預覽畫面右上角的「列印」圖示',
      'resume.print_desc': '受限於瀏覽器安全性設定,無法直接從外部按鈕列印跨網域的檔案。',
      'resume.open_new_tab': '在新分頁開啟',
      'resume.back_about': '返回關於',
      'resume.loading_pdf': '載入 PDF 中...',

      'more_works.title': '更多作品',
      'more_works.subtitle': '工業設計與其他專案歷程',
      'more_works.coming_soon': '更多專案內容持續更新中...',

      'skills.title': '軟體專業',
      'skills.desc': '結合 3D 建模與 2D 視覺傳達，能夠獨立完成從概念發想到最終視覺呈現的完整設計流程。',
      'skills.proficiency_note': '（各項技能以百分比表示熟練程度）',
      'skills.3d': '3D 建模與渲染',
      'skills.2d': '視覺與介面設計',
      'skills.other': '其他技能',
      'skills.tab_2d': '平面',
      'skills.tab_3d': '3D',
      'skills.tab_web': '網頁',
      'skills.tab_ai': 'AI',

      'portfolio.title': '作品集組合',
      'portfolio.desc': '探索我在工業設計、視覺傳達與數位介面上的代表作。點擊各項專案了解從概念發想至最終落地的詳細設計歷程。',
      'portfolio.more': '查看更多作品',

      'exp.title': '經驗歷程',
      'exp.desc': '從 2022 年至 2025 年，這裡紀錄著我在設計領域的成長軌跡與獲獎里程碑。',
      'exp.tab.competition': '競賽經歷',
      'exp.tab.project': '設計專案經歷',
      'exp.view_details': '查看詳情',
      'exp.view_cert': '查看證照',

      'project.not_found': '專案不存在',
      'project.back_home': '返回首頁',
      'project.back_portfolio': '返回作品集',
      'project.back_exp': '返回設計專案經歷',
      'project.overview': '專案概述',
      'project.concept': '設計美學與概念',
      'project.gallery': '作品展示',
      'project.video': '影片展示',
      'project.challenge': '挑戰與突破',
      'project.challenge_title': '挑戰 Challenge',
      'project.solution_title': '突破 Breakthrough',
      'project.process': '設計歷程',
      'project.doc': '設計提案簡報-SDGS問題探討與解決',
      'project.reflection': '設計心得與反思',
      'project.poster': '作品成果與海報展示',
      'project.info': '專案資訊',
      'project.category': '領域 Category',
      'project.date': '完成時間 Date',
      'project.team': '設計團隊 Team',
      'project.tools': '主要使用工具 Tools',
      'project.independent': '個人獨立專案',
      'project.team_project': '團隊合作專案',
      'project.members': '團隊人員：',
      'project.advisors': '指導老師：',
      'project.doc_alt_1': '影像與歷史的對話——《流麻溝十五號》電影特映活動設計歷程',
      'project.doc_alt_2': '沃土新生-可分解外殼企畫書',

      'project.locked_title': '專案尚未公開',
      'project.locked_desc': '此專案目前正在參與競賽中，為保護原創設計構想與參賽權益，在競賽報名截止前暫不公開。預計將於 {date} 後開放觀看，感謝您的理解與耐心等候！',
      'project.locked_ok': '了解',
      'contact.title': '聯絡方式',
      'contact.desc': '如果您對我的作品感興趣，或有任何合作機會，歡迎隨時與我聯繫！',
      'contact.heading': '期待您的邀請',
      'contact.subheading': '如果您目前正在尋找實習生，歡迎與我聯絡。我很期待能有機會參與實際的專案，與團隊一起合作，並從業界前輩身上學習更多設計相關的知識與經驗。',
      'contact.email': '電子郵件',
      'contact.social': '社群媒體',
      'contact.form_title': '傳送訊息',
      'contact.form_firstname': '名字 *',
      'contact.form_lastname': '姓氏 *',
      'contact.form_email': '電子郵件 *',
      'contact.form_phone': '電話',
      'contact.form_message': '訊息',
      'contact.form_placeholder_first': '請輸入名字',
      'contact.form_placeholder_last': '請輸入姓氏',
      'contact.form_placeholder_email': '請輸入電子郵件',
      'contact.form_placeholder_phone': '請輸入電話號碼',
      'contact.form_placeholder_msg': '請輸入您的訊息...',
      'contact.form_submit': '傳送訊息',
      'contact.form_submitting': '傳送中...',
      'contact.success': '訊息已成功傳送！',
      'contact.success_desc': '感謝您的來信，我會盡快回覆您。',
      'contact.error': '傳送失敗，請稍後再試。',
      'contact.error_desc': '請稍後再試，或直接透過電子郵件與我聯絡。',
      'contact.form_subject': '網站聯絡表單：來自',
      'contact.copyright': '© 2026 Yu-Chen Lin. All rights reserved.',
      'contact.privacy': '隱私權政策',
      'contact.terms': '服務條款',
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.portfolio': 'Portfolio',
      'nav.experience': 'Experience',
      'nav.contact': 'Contact',
      'site.title': 'Portfolio',

      'hero.greeting': 'Hello, I am',
      'hero.name': 'Yu-Chen Lin',
      'hero.role': 'Product Designer / Visual Designer',
      'hero.desc': 'Focusing on the combination of industrial design and visual communication, seeking the balance between technology and humanity.',
      'hero.cta': 'View Works',
      'hero.scroll': 'Scroll Down',

      'about.title': 'About',
      'about.title_en': 'Me',
      'about.school_label': 'University :',
      'about.school_val': 'Chang Gung University, Industrial Design',
      'about.intro_label': 'Profile :',
      'about.intro_val': 'I am a sophomore at the Department of Industrial Design, Chang Gung University. I am familiar with various software for graphic design, web frontend design, and interior architecture design. I continue to learn 3D modeling and programming to cultivate cross-disciplinary integration skills. I am easy-going, proactive, and have experience in project collaboration, time management, and creative thinking. I hope to combine professional knowledge and technical applications to develop innovative designs with market potential and ergonomics, and continue to grow through teamwork.',
      'about.resume': 'Detailed Resume',

      'resume.title': 'Yu-Chen Lin - Resume',
      'resume.download': 'Download PDF',
      'resume.print': 'Print',
      'resume.education': 'Education',
      'resume.experience': 'Experience',
      'resume.skills': 'Skills',
      'resume.projects': 'Featured Projects',
      'resume.contact': 'Contact',
      'resume.profile': 'Profile',
      'resume.print_info': 'Please click the "Print" icon in the upper right corner of the PDF preview.',
      'resume.print_desc': 'Due to browser security settings, files from other domains cannot be printed directly via external buttons.',
      'resume.open_new_tab': 'Open in new tab',
      'resume.back_about': 'Back to About',
      'resume.loading_pdf': 'Loading PDF...',

      'more_works.title': 'MORE WORKS',
      'more_works.subtitle': 'Industrial Design & Other Projects',
      'more_works.coming_soon': 'More projects coming soon...',

      'skills.title': 'Software Skills',
      'skills.desc': 'Combining 3D modeling with 2D visual communication, capable of independently completing the entire design process from concept ideation to final visual presentation.',
      'skills.proficiency_note': '(Skills are expressed as a percentage of proficiency)',
      'skills.3d': '3D Modeling & Rendering',
      'skills.2d': 'Visual & UI Design',
      'skills.other': 'Other Skills',
      'skills.tab_2d': '2D Design',
      'skills.tab_3d': '3D',
      'skills.tab_web': 'Web Design',
      'skills.tab_ai': 'AI',

      'portfolio.title': 'Portfolio',
      'portfolio.desc': 'Explore my representative works in industrial design, visual communication, and digital interfaces. Click on each project to learn about the detailed design process from concept to completion.',
      'portfolio.more': 'View More',

      'exp.title': 'Experience Journey',
      'exp.desc': 'From 2022 to 2025, this records my growth and award milestones in the design field.',
      'exp.tab.competition': 'Competition Experience',
      'exp.tab.project': 'Design Project Experience',
      'exp.view_details': 'View Details',
      'exp.view_cert': 'View Certificate',

      'project.not_found': 'Project Not Found',
      'project.back_home': 'Back to Home',
      'project.back_portfolio': 'Back to Portfolio',
      'project.back_exp': 'Back to Design Project Experience',
      'project.overview': 'Project Overview',
      'project.concept': 'Design Concept',
      'project.gallery': 'Gallery',
      'project.video': 'Video',
      'project.challenge': 'Challenges & Breakthroughs',
      'project.challenge_title': 'Challenge',
      'project.solution_title': 'Breakthrough',
      'project.process': 'Design Process',
      'project.doc': 'Design Proposal Presentation - SDGs Problem Exploration and Solution',
      'project.reflection': 'Reflection',
      'project.poster': 'Project Results and Poster Display',
      'project.info': 'Project Info',
      'project.category': 'Category',
      'project.date': 'Date',
      'project.team': 'Team',
      'project.tools': 'Tools',
      'project.independent': 'Independent Project',
      'project.team_project': 'Team Project',
      'project.members': 'Members: ',
      'project.advisors': 'Advisors: ',
      'project.doc_alt_1': "Dialogue between Image and History - Design Process of 'Untold Herstory' Special Screening Event",
      'project.doc_alt_2': "New Life in Fertile Soil - Biodegradable Shell Proposal",

      'project.locked_title': 'Project Not Yet Public',
      'project.locked_desc': 'This project is currently participating in a competition. To protect original design concepts and competition rights, it is temporarily closed to the public before the registration deadline. It will be available for viewing after {date}. Thank you for your understanding and patience!',
      'project.locked_ok': 'Got it',
      'contact.title': 'Contact',
      'contact.desc': 'If you are interested in my work or have any collaboration opportunities, feel free to contact me!',
      'contact.heading': 'Looking Forward to Your Invitation',
      'contact.subheading': 'If you are currently looking for an intern, please feel free to contact me. I am looking forward to the opportunity to participate in actual projects, collaborate with the team, and learn more design-related knowledge and experience from industry seniors.',
      'contact.email': 'Email',
      'contact.social': 'Social Media',
      'contact.form_title': 'Send a Message',
      'contact.form_firstname': 'First Name *',
      'contact.form_lastname': 'Last Name *',
      'contact.form_email': 'Email *',
      'contact.form_phone': 'Phone',
      'contact.form_message': 'Message',
      'contact.form_placeholder_first': 'Enter first name',
      'contact.form_placeholder_last': 'Enter last name',
      'contact.form_placeholder_email': 'Enter email address',
      'contact.form_placeholder_phone': 'Enter phone number',
      'contact.form_placeholder_msg': 'Enter your message...',
      'contact.form_submit': 'Send Message',
      'contact.form_submitting': 'Sending...',
      'contact.success': 'Message sent successfully!',
      'contact.success_desc': 'Thank you for your message. I will reply to you as soon as possible.',
      'contact.error': 'Failed to send message.',
      'contact.error_desc': 'Please try again later or contact me via email directly.',
      'contact.form_subject': 'Website Contact Form: From',
      'contact.copyright': '© 2026 Yu-Chen Lin. All rights reserved.',
      'contact.privacy': 'Privacy Policy',
      'contact.terms': 'Terms of Service',
    }
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['zh']] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t,
      currentPortfolio: language === 'en' ? portfolioDataEn : portfolioData,
      currentCompetition: language === 'en' ? competitionDataEn : competitionData,
      currentProject: language === 'en' ? projectDataEn : projectData
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};