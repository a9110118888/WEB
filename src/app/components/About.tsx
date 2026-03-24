import React from "react";
import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router";
import { motion } from "motion/react";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto relative">
          
          {/* Glassmorphism Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] relative overflow-hidden"
          >
            
            {/* Background Decorative Gradient */}
            <div className="absolute -top-40 -right-40 w-60 md:w-80 h-60 md:h-80 bg-green-500/20 rounded-full blur-[80px] md:blur-[100px]"></div>
            <div className="absolute -bottom-40 -left-40 w-60 md:w-80 h-60 md:h-80 bg-green-500/10 rounded-full blur-[80px] md:blur-[100px]"></div>

            {/* Logo: Cyberpunk Green Ring with Y */}
            <div className="flex justify-center mb-8 md:mb-10 relative z-10">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                {/* Spinning Effect Phase (Crossfades seamlessly without unmounting) */}
                <motion.div 
                  initial={{ rotate: 0, opacity: 0 }}
                  whileInView={{ rotate: 360, opacity: [0, 1, 1, 0] }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    rotate: { duration: 1.5, ease: "easeOut" },
                    opacity: { duration: 1.5, times: [0, 0.1, 0.7, 1] } 
                  }}
                  className="absolute inset-0 rounded-full border-[3px] md:border-4 border-transparent border-t-green-500 border-r-green-500/50 drop-shadow-[0_0_12px_rgba(34,197,94,0.8)] z-20 pointer-events-none"
                />
                
                {/* Solid Lit Phase (Fades in right as the spin finishes to catch the tail) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1,
                    boxShadow: [
                      "0 0 15px rgba(34,197,94,0.6), inset 0 0 10px rgba(34,197,94,0.2)",
                      "0 0 25px rgba(34,197,94,0.9), inset 0 0 15px rgba(34,197,94,0.4)",
                      "0 0 15px rgba(34,197,94,0.6), inset 0 0 10px rgba(34,197,94,0.2)"
                    ]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    opacity: { delay: 1.0, duration: 0.5, ease: "easeIn" },
                    boxShadow: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 rounded-full border-[3px] md:border-4 border-green-500 z-10 pointer-events-none"
                />

                {/* Inner Circle and Y */}
                <div className="absolute inset-1 rounded-full bg-[#121212]/80 backdrop-blur-sm flex items-center justify-center border border-white/5 shadow-[inset_0_0_10px_rgba(34,197,94,0.2)] z-30">
                  <span className="text-3xl md:text-4xl font-bold text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">Y</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white tracking-wide flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
              >
                {t("about.title")} <span className="text-green-500 text-lg sm:text-3xl">{t("about.title_en")}</span>
              </motion.h3>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="space-y-5 md:space-y-6 text-gray-300 text-base md:text-lg leading-relaxed text-left sm:text-center px-2 md:px-0"
              >
                <p>
                  <strong className="block text-green-500 mb-1">{t("about.school_label")}</strong>
                  <span className="text-white">{t("about.school_val")}</span>
                </p>
                <p>
                  <strong className="block text-green-500 mb-1">{t("about.intro_label")}</strong>
                  <span>{t("about.intro_val")}</span>
                </p>
                
                
              </motion.div>

              {/* Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="mt-10 md:mt-12"
              >
                <Link 
                  to="/resume" 
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-green-500 text-black font-bold text-sm md:text-base rounded-full hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  <Download size={18} />
                  {t("about.resume")}
                </Link>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
