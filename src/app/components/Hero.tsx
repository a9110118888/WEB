import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";

// Global flag to track if this is the very first time the Hero component loads in the session
let isInitialHeroLoad = true;

export function Hero() {
  const { language, t } = useLanguage();
  const fullText = "I'm\nYu Chen\nLin.";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  // Capture the load state for this specific mount so it doesn't change during renders
  const isInitial = useRef(isInitialHeroLoad);

  useEffect(() => {
    isInitialHeroLoad = false;
    
    let currentLength = 0;
    let intervalId: NodeJS.Timeout;

    // If initial load, wait for the loading screen (2200ms) + exit transition (600ms)
    // Otherwise, start after a short delay
    const startDelay = isInitial.current ? 2800 : 300;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentLength < fullText.length) {
          currentLength++;
          setDisplayedText(fullText.slice(0, currentLength));
        } else {
          clearInterval(intervalId);
          setIsTypingComplete(true);
        }
      }, 100); // 100ms per character
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  // Calculate base delay for Framer Motion elements
  const delayBase = isInitial.current ? 2.8 : 0;

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center">
      {/* Background Image Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: isInitial.current ? 2.2 : 0, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/ph1.png"
          alt="Yu Chen Lin Background"
          className="w-full h-full object-cover object-[75%_center] md:object-center"
        />
        {/* Overlay: bg-black/20 儀表遮罩疊加層 */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </motion.div>

      {/* Content Container: 左側文字（因主體在右，利用左方留白） */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 flex justify-start pt-16">
        
        {/* 儀表遮罩面板 */}
        <div className="max-w-2xl">
          <div className="mb-4 font-[Azeret_Mono] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white min-h-[130px] md:min-h-[160px] lg:min-h-[190px]">
            {displayedText.split('').map((char, index) => {
              if (char === '\n') return <br key={index} />;
              if (char === "'") return <span key={index} className="text-green-500">'</span>;
              if (char === ".") return <span key={index} className="text-green-500">.</span>;
              return <span key={index}>{char}</span>;
            })}
            <motion.span
              animate={isTypingComplete ? { opacity: 0 } : { opacity: [1, 0] }}
              transition={isTypingComplete ? { duration: 0.3 } : { repeat: Infinity, duration: 0.8 }}
              className="inline-block w-[4px] md:w-[6px] h-[36px] md:h-[45px] lg:h-[55px] bg-green-500 ml-1 md:ml-2 align-middle -mt-2 md:-mt-3"
            />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: delayBase + 0.6, ease: "easeOut" }}
            className="text-white tracking-[0.2em] md:tracking-[0.3em] font-light mb-10 leading-relaxed font-bold text-xs md:text-sm"
          >
            INDUSTRIAL & GRAPHIC & WEB DESIGNER
          </motion.h2>
          
          {/* 按鈕區塊 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: delayBase + 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/#portfolio" 
              className="flex items-center justify-center px-6 py-2.5 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all text-base"
            >{t('hero.cta')}</Link>
            <Link 
              to="/#contact" 
              className="flex items-center justify-center px-6 py-2.5 bg-black/30 border border-white/50 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all text-base"
            >{t('nav.contact')}</Link>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
