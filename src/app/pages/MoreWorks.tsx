import React, { useState, useLayoutEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { ChevronLeft, ChevronRight, ArrowLeft, X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { LazyImage } from "../components/LazyImage";

const MINOR_WORKS = [
  {
    id: "m1",
    title: { zh: "圖書館視聽中心海報", en: "Library Audiovisual Center Posters" },
    desc: { 
      zh: "在長庚大學圖書館視聽中心任職期間，負責「每月主題選播」企劃與視覺海報設計，從內容篩選、主題發想至視覺呈現皆獨立完成。透過資訊與視覺整合，提升內容傳達的清晰度與吸引力，並負責網站內容上架與維護。", 
      en: "During my tenure at the Chang Gung University Library Audiovisual Center, I was responsible for the planning and visual poster design of the \"Monthly Theme Selection.\" I independently completed the process from content screening and theme conceptualization to visual presentation. Through the integration of information and visuals, I enhanced the clarity and attractiveness of content delivery, and was also responsible for uploading and maintaining website content."
    },
    images: [
      "https://i.meee.com.tw/4Su0Mff.jpg",
      "https://i.meee.com.tw/GsJOe4H.jpg",
      "https://i.meee.com.tw/eGc4dJv.jpg",
      "https://i.meee.com.tw/uVxPBCU.jpg",
      "https://i.meee.com.tw/iloIaUl.jpg",
      "https://i.meee.com.tw/LiKIlAI.jpg"
    ]
  },
  {
    id: "m2",
    title: { zh: "圖書館資料櫃標籤", en: "Library File Cabinet Labels" },
    desc: { 
      zh: "在圖書館任職期間，重新設計並優化館內所有資料櫃標籤系統。針對原有手寫且老舊、缺乏視覺識別的問題，導入清晰的資訊架構與圖像化設計，提升辨識效率與整體一致性，改善使用者查找體驗。", 
      en: "During my tenure at the library, I redesigned and optimized the entire file cabinet labeling system. Addressing the issues of the original handwritten, outdated labels lacking visual identity, I introduced a clear information architecture and graphical design. This improved recognition efficiency and overall consistency, enhancing the user search experience."
    },
    images: [
      "https://i.meee.com.tw/atTlF0I.jpg",
      "https://i.meee.com.tw/Xu3iXLQ.jpg",
      "https://i.meee.com.tw/ECg7PFt.jpg"
    ]
  },
  {
    id: "m3",
    title: { zh: "Cube Design - 光的方向", en: "Cube Design - Direction of Light" },
    desc: { 
      zh: "《光的方向（The Direction of Light）》是我進入工業設計系後完成的第一件作品，也是一段從迷惘到逐漸找到方向的過程。歷經三次設計調整，我試著用最簡單的點、線、面，去表達人在人生中追尋目標的樣子：球體像是在人海中的我們，各自擁有不同背景；階梯象徵著每個人選擇的路，有高有低、有快有慢；而中央的光，則像是那個一直存在心中的方向，默默指引著我們前進。這個作品不只是形式的練習，更是我第一次嘗試把抽象的情感轉化為可以被看見、被感受的設計。", 
      en: "\"The Direction of Light\" is the first project I completed after entering the Department of Industrial Design, representing a journey from confusion to gradually finding my path. After three design revisions, I attempted to express how people pursue their goals in life using the simplest elements of dots, lines, and planes. The spheres represent us in the sea of humanity, each with a different background; the stairs symbolize the paths we choose, some high, some low, some fast, some slow. The central light acts as the guiding direction that always exists within our hearts, silently leading us forward. This project is not merely an exercise in form, but my first attempt to transform abstract emotions into visible, tangible design."
    },
    images: [
      "https://i.meee.com.tw/dO4PTPA.jpg",
      "https://i.meee.com.tw/dhhb29i.jpg",
      "https://i.meee.com.tw/Mwec7rO.png",
      "https://i.meee.com.tw/KqeSXaZ.jpg",
      "https://i.meee.com.tw/kE2pdVa.jpg",
      "https://i.meee.com.tw/NOJ5aQB.png"
    ]
  }
];

const ProjectRow = ({ work, language, index }: { work: any; language: 'zh' | 'en'; index: number }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const totalImages = work.images.length;

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) scroll('right');
      else scroll('left');
    }
    setTouchStartX(null);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setActiveIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    }
  };

  const [lightboxImage, setLightboxImage] = useState<{ src: string, rotation: number } | null>(null);

  const getVisualPosition = (idx: number) => {
    let diff = idx - activeIndex;
    if (diff > Math.floor(totalImages / 2)) diff -= totalImages;
    else if (diff < -Math.floor(totalImages / 2)) diff += totalImages;
    return diff;
  };

  return (
    <div id={work.id} className="relative px-5 pb-5 pt-0 md:px-8 md:pb-8 md:pt-0 w-full group bg-green-900/10 border border-green-500/30 rounded-[32px] mb-12 shadow-[0_0_30px_rgba(34,197,94,0.05)] scroll-mt-32">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500/5 rounded-full blur-[60px] -z-10 pointer-events-none"></div>
      
      {/* Corner Accents for the large container */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-green-500/50 rounded-tl-[32px]"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-green-500/50 rounded-br-[32px]"></div>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-2 md:mt-2 lg:mt-4">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-5/12 flex flex-col items-start text-left z-10 order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-6 w-full">
            <div className="w-8 h-1.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <h2 className={`font-bold tracking-widest text-white text-shadow-sm leading-tight m-0 ${language === 'en' ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`}>
              {work.title[language]}
            </h2>
          </div>
          
          {/* HUD Style Description Block */}
          <div className="w-full">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify font-light opacity-90">
              {work.desc[language]}
            </p>
          </div>
        </div>

        {/* Right Side: 3D Carousel Section */}
        <div className="w-full lg:w-7/12 flex flex-col items-center relative order-1 lg:order-2">
          <div className="relative flex items-center justify-center w-full h-[280px] md:h-[380px] lg:h-[420px] overflow-visible">
            
            {/* Left Arrow */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 md:-left-4 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 backdrop-blur-xl border border-green-500/40 flex items-center justify-center text-white hover:border-green-400 hover:text-green-400 hover:bg-black/90 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] group/btn"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="transform group-hover/btn:-translate-x-1 transition-transform" />
            </button>

            {/* 3D Carousel Container */}
            <div 
              className="relative w-full h-full flex items-center justify-center perspective-[1000px] touch-pan-y"
              style={{ transformStyle: 'preserve-3d' }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {work.images.map((img: string, i: number) => {
                const position = getVisualPosition(i);
                const isCenter = position === 0;
                const isLeft = position === -1;
                const isRight = position === 1;
                const isHidden = Math.abs(position) > 1;

                // Determine if the card should be landscape
                const isLandscape = work.id === 'm2' || (work.id === 'm3' && i === 3);

                // 3D transforms
                let translateX = 0;
                let rotateY = 0;
                let scale = 1;
                let opacity = 1;
                let zIndex = 10;
                let brightness = "brightness-100";
                let zOffset = 0;

                if (isLeft) {
                  translateX = isLandscape ? -60 : -75; // Adjusted for smaller space, pulled in further for landscape
                  rotateY = 30;      // Tilted inward
                  scale = 0.8;
                  opacity = 0.85;
                  zIndex = 5;
                  brightness = "brightness-[0.55]";
                } else if (isRight) {
                  translateX = isLandscape ? 60 : 75; // Adjusted for smaller space, pulled in further for landscape
                  rotateY = -30;
                  scale = 0.8;
                  opacity = 0.85;
                  zIndex = 5;
                  brightness = "brightness-[0.55]";
                } else if (isHidden) {
                  scale = 0.5;
                  opacity = 0;
                  zIndex = 0;
                  translateX = position < 0 ? -150 : 150;
                  rotateY = position < 0 ? 50 : -50;
                } else if (isCenter) {
                  zIndex = 20;
                  scale = 1.1; // Slightly popped out
                  rotateY = 0;
                  zOffset = 50; // Pulled closer to camera
                  brightness = "brightness-110 drop-shadow-[0_0_25px_rgba(34,197,94,0.3)]";
                }

                return (
                  <div 
                    key={i} 
                    className={`absolute transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${brightness} ${isHidden ? 'pointer-events-none' : ''}`}
                    style={{
                      transform: `translateX(${translateX}%) translateZ(${zOffset}px) scale(${scale}) rotateY(${rotateY}deg)`,
                      opacity: opacity,
                      zIndex: zIndex,
                      width: isLandscape ? 'min(260px, 45vw)' : 'min(220px, 40vw)', // Smaller width for landscape to avoid overlap
                      aspectRatio: isLandscape ? '4/3' : '3/4', // Landscape aspect ratio for specific images
                      pointerEvents: isHidden ? 'none' : 'auto'
                    }}
                    onClick={() => {
                      if (isLeft) scroll('left');
                      if (isRight) scroll('right');
                      if (isCenter) setLightboxImage({ src: img, rotation: work.id === 'm2' && i === 1 ? 0 : 0 });
                    }}
                  >
                    {/* Inner Card Styling */}
                    <div className={`w-full h-full rounded-[20px] overflow-hidden relative border-[1.5px] transition-all duration-[800ms] shadow-2xl ${isCenter ? 'border-green-400 shadow-[0_20px_50px_rgba(0,0,0,0.9)]' : 'border-green-600/50 shadow-black/80'}`}>
                      {/* Glowing highlight for center card */}
                      {isCenter && (
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-transparent to-transparent z-10 pointer-events-none mix-blend-screen"></div>
                      )}
                      
                      <LazyImage 
                        src={img} 
                        alt={`${work.title[language]} image ${i + 1}`}
                        className={`w-full h-full bg-black transition-transform duration-500 ${(work.id === 'm3' && (i === 1 || i === 2 || i === 3)) ? 'object-contain' : 'object-cover'}`}
                        style={work.id === 'm2' && i === 1 ? { transform: 'rotate(0deg) scale(1.15)' } : work.id === 'm3' && i === 1 ? { transform: 'scale(1.2)' } : work.id === 'm3' && i === 2 ? { transform: 'scale(1.1)' } : work.id === 'm3' && i === 3 ? { transform: 'scale(1.35) translateX(4%)' } : {}}
                        containerClassName="absolute inset-0 w-full h-full"
                      />
                      
                      {/* Darkening overlay for side cards */}
                      {!isCenter && (
                        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 hover:bg-black/20 z-10" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 md:-right-4 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 backdrop-blur-xl border border-green-500/40 flex items-center justify-center text-white hover:border-green-400 hover:text-green-400 hover:bg-black/90 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] group/btn"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-3 items-center -mt-6 z-10 relative">
            {work.images.map((_: any, i: number) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-500 rounded-full h-2 ${
                  activeIndex === i 
                    ? 'w-8 bg-green-400 shadow-[0_0_12px_rgba(34,197,94,0.9)]' 
                    : 'w-2 bg-white/20 hover:bg-white/60 hover:w-3'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-200 shadow-lg z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImage(null);
            }}
            aria-label="Close fullscreen view"
          >
            <X size={28} />
          </button>
          
          <div className="relative max-w-6xl w-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
            <LazyImage 
              src={lightboxImage.src} 
              alt="Fullscreen view"
              className="w-auto h-auto max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/20 object-contain relative z-10"
              style={{ transform: `rotate(${lightboxImage.rotation}deg)` }}
              containerClassName="max-h-[85vh] flex items-center justify-center"
            />
            <p className="text-gray-400 mt-6 tracking-widest text-sm uppercase">
              點擊任意處關閉
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export function MoreWorks() {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const state = location.state as { from?: string; expId?: number; tab?: string } | null;
  const isFromExperience = state?.from === 'experience' || searchParams.get('from') === 'experience';
  
  const expId = state?.expId || searchParams.get('expId');
  const tab = state?.tab || searchParams.get('tab');

  let backLink = '/#portfolio';
  let backText = t("project.back_portfolio");
  
  if (isFromExperience && expId && tab) {
    backLink = `/?scrollToExp=${expId}&tab=${tab}#experience`;
    backText = t("project.back_exp");
  }

  useLayoutEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-[#060606] text-white pb-16 font-sans relative overflow-x-hidden">
      
      {/* Cyberpunk Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 10%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 10%, transparent 100%)'
        }}
      ></div>

      {/* Header Image Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] max-h-[600px] overflow-hidden z-10">
        <LazyImage
          src="https://images.unsplash.com/photo-1755963969894-689c05281ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBhcmNoaXRlY3R1cmUlMjBkYXJrJTIwbmVvbnxlbnwxfHx8fDE3NzQxOTkyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="More Works Banner"
          className="w-full h-full object-cover object-center relative z-10"
          containerClassName="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/60 to-[#060606]/20"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 container mx-auto">
          {/* Top Pill Back Button */}
          <Link 
            to={backLink} 
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-green-500 text-green-400 font-medium tracking-wide transition-all duration-300 group backdrop-blur-md bg-black/40 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] mb-6 w-fit"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" /> 
            {backText}
          </Link>

          <h1 className="font-bold text-white mb-4 leading-tight whitespace-pre-line text-[48px] tracking-wider">
            {t('more_works.title')}
          </h1>
          <p className="text-xl md:text-2xl text-green-400 font-light tracking-wide opacity-90">
            {t('more_works.subtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-12 md:mt-20 max-w-7xl relative z-10">
        {/* Projects List */}
        <div className="w-full flex flex-col gap-8">
          {MINOR_WORKS.map((work, index) => (
            <ProjectRow key={work.id} work={work} language={language} index={index} />
          ))}
        </div>

        {/* Bottom Pill Back Button */}
        <div className="w-full mt-8 mb-8 flex justify-center">
          <Link 
            to={backLink} 
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-green-500 text-green-400 font-bold tracking-widest transition-all duration-300 group backdrop-blur-md bg-black/60 hover:bg-green-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] text-lg"
          >
            <ArrowLeft size={22} className="transform group-hover:-translate-x-1 transition-transform" />
            <span>{backText}</span>
          </Link>
        </div>

        {/* Coming Soon Notice */}
        <div className="w-full mb-16 flex justify-center items-center gap-3 text-green-500/60 font-light tracking-widest text-sm md:text-base">
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-green-500/40"></div>
          <span className="text-center">{t('more_works.coming_soon')}</span>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-green-500/40"></div>
        </div>
      </div>
      
    </div>
  );
}
