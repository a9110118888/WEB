import React, { useState } from "react";
import { Globe, ChevronDown, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // 這裡使用了 Web3Forms 作為直接寄信到信箱的服務範例
      // 請前往 https://web3forms.com/ 取得免費的 Access Key，並將下方的 "YOUR_ACCESS_KEY_HERE" 替換掉
      // 這樣就能在背景直接把表單內容寄到你的 yuchen941026@gmail.com
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b6c417b9-7b19-4487-a26f-629ef97e608a",
          subject: `${t('contact.form_subject')} ${data.lastName}${data.firstName}`,
          from_name: `${data.lastName}${data.firstName}`,
          replyto: data.email,
          ...data
        }),
      });

      if (!response.ok) {
        throw new Error(t('contact.error'));
      }
      
      toast.success(t('contact.success'), {
        description: t('contact.success_desc'),
        icon: <CheckCircle2 className="text-green-500" />,
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)"
        }
      });

      // 重設表單
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error(t('contact.error'), {
        description: t('contact.error_desc'),
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)"
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-[#121212] pt-20 md:pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16 md:mb-24">
          
          {/* Left Column: Contact Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 md:mb-8 tracking-widest uppercase font-bold">{t("contact.heading")}</h2>
            <p className="text-gray-300 text-base md:text-lg mb-10 md:mb-16 leading-relaxed max-w-md">{t("contact.subheading")}</p>
            
            <div className="space-y-4 text-white text-base md:text-lg font-light tracking-wide">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-green-500">
                  <Globe size={16} />
                </span>
                yuchen941026@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-green-500">
                  <span className="text-sm">Tel</span>
                </span>
                0928 499 061
              </p>
            </div>
          </motion.div>
          
          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="order-2"
          >
            <form className="space-y-5 md:space-y-6 bg-[#1a1a1a] p-6 sm:p-8 md:p-10 rounded-2xl border border-white/5" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-gray-300 text-sm font-light">{t("contact.form_firstname")}</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    required 
                    className="bg-white/5 text-white border border-white/10 px-4 py-3 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-500" 
                    placeholder={t("contact.form_placeholder_first")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-gray-300 text-sm font-light">{t("contact.form_lastname")}</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    required 
                    className="bg-white/5 text-white border border-white/10 px-4 py-3 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-500" 
                    placeholder={t("contact.form_placeholder_last")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-300 text-sm font-light">{t("contact.form_email")}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required 
                  className="bg-white/5 text-white border border-white/10 px-4 py-3 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-500" 
                  placeholder={t("contact.form_placeholder_email")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-gray-300 text-sm font-light">{t("contact.form_phone")}</label>
                <div className="flex bg-white/5 rounded-md overflow-hidden border border-white/10 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500 transition-all">
                  {/* Phone prefix dropdown mock */}
                  
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full px-4 py-3 text-white focus:outline-none bg-transparent placeholder-gray-500" 
                    placeholder={t("contact.form_placeholder_phone")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-300 text-sm font-light">{t("contact.form_message")}</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  required
                  className="bg-white/5 text-white border border-white/10 px-4 py-3 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-y placeholder-gray-500"
                  placeholder={t("contact.form_placeholder_msg")}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-green-500 text-black font-medium text-lg py-3.5 rounded-md hover:bg-green-400 transition-colors mt-4 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                    {t("contact.form_submitting")}
                  </span>
                ) : t("contact.form_submit")}
              </button>
            </form>
          </motion.div>
          
        </div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-gray-500 text-sm gap-4 md:gap-0">
          <p className="text-center md:text-left">{t('contact.copyright')}</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-green-400 transition-colors">{t('contact.privacy')}</a>
            <a href="#" className="hover:text-green-400 transition-colors">{t('contact.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}