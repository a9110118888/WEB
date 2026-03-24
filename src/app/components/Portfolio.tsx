import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight, X, AlertCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";

export function Portfolio() {
  const { t, currentPortfolio } = useLanguage();
  const navigate = useNavigate();
  const [lockedProject, setLockedProject] = useState<any>(null);

  const handleProjectClick = (e: React.MouseEvent, item: any) => {
    if ((item as any).availableDate) {
      const availableDate = new Date((item as any).availableDate);
      const today = new Date();
      if (today < availableDate) {
        e.preventDefault();
        setLockedProject(item);
        return;
      }
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#121212]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-widest uppercase">
              {t("portfolio.title")}
            </h2>
            <div className="h-1 w-20 bg-green-500 rounded-full"></div>
            <p className="mt-4 text-gray-400 max-w-xl text-lg">
              {t("portfolio.desc")}
            </p>
          </div>
          <Link to="/more-works" className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-medium rounded-full border border-green-500/30 hover:border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] mt-6 md:mt-0 group uppercase tracking-widest text-sm">
            {t("portfolio.more")} <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        {/* CSS Grid (九宮格 3x3 on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPortfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link
                id={`portfolio-item-${item.id}`}
                to={`/project/${item.id}?from=portfolio`}
                state={{ from: 'portfolio' }}
                onClick={(e) => handleProjectClick(e, item)}
                className="group relative h-80 rounded-2xl overflow-hidden block bg-[#1a1a1a]"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                }}
              >
                {/* Hover Glow Effect */}
                <div 
                  className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 md:group-hover:opacity-100 z-20 mix-blend-screen hidden md:block"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(34, 197, 94, 0.15), transparent 40%)`
                  }}
                />
                <ImageWithFallback
                  src={item.imgUrl}
                  alt={item.title}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${item.id === "1" ? "object-contain bg-black" : "object-cover"}`}
                  style={{ 
                    objectPosition: (item as any).coverPosition || "center",
                    transform: (item as any).coverScale ? `scale(${(item as any).coverScale})` : undefined
                  }}
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Text content positioned at the bottom */}
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 whitespace-pre-line">{item.title}</h3>
                      <p className="text-green-400 font-medium tracking-wide">{item.brief}</p>
                    </div>
                    <div className="w-10 h-10 shrink-0 rounded-full bg-green-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] px-0 -mt-[20px] -mb-[20px]">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center md:hidden">
          <Link to="/more-works" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-bold rounded-full border border-green-500/30 hover:border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] uppercase tracking-widest group text-sm w-full justify-center">
            {t("portfolio.more")} <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>

      {/* Locked Project Modal */}
      {lockedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setLockedProject(null)}
          ></div>
          <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl z-10 animate-in fade-in zoom-in duration-300">
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              onClick={() => setLockedProject(null)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                <AlertCircle className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('project.locked_title')}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                {t('project.locked_desc').replace('{date}', lockedProject.availableDate)}
              </p>
              <button 
                onClick={() => setLockedProject(null)}
                className="w-full py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-colors"
              >
                {t('project.locked_ok')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}