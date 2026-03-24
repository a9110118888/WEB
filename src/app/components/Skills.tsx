import React, { useState } from "react";
import { Layers, Cuboid, Monitor, Cpu } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AUTOCAD_BASE64 } from "../data/images";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

type TabKey = "平面" | "3D" | "網頁" | "AI";

const skillData: Record<TabKey, { name: string; progress: number }[]> = {
  平面: [
    { name: "Illustrator", progress: 85 },
    { name: "Photoshops", progress: 60 },
    { name: "Canva", progress: 90 },
  ],
  "3D": [
    { name: "PTC Creo", progress: 60 },
    { name: "Autodesk AutoCAD", progress: 40 },
    { name: "SketchUp", progress: 20 },
  ],
  網頁: [
    { name: "Figma", progress: 70 },
    { name: "Google Sites", progress: 95 },
    { name: "Wix", progress: 70 },
  ],
  AI: [
    { name: "Gemini", progress: 85 },
    { name: "ChatGPT", progress: 90 },
    { name: "Figma Make", progress: 90 },
    { name: "Claude", progress: 75 },
    { name: "Artlist", progress: 70 },
  ],
};

const tabIcons: Record<TabKey, React.ReactNode> = {
  平面: <Layers size={20} />,
  "3D": <Cuboid size={20} />,
  網頁: <Monitor size={20} />,
  AI: <Cpu size={20} />,
};

export function Skills() {
  const [activeTab, setActiveTab] = useState<TabKey>("平面");
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-widest uppercase">
            {t("skills.title")}
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">{t("skills.desc")}</p>
          <p className="mt-2 text-green-500/80 text-sm">
            {t('skills.proficiency_note')}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 md:mb-12"
        >
          {(Object.keys(skillData) as TabKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center justify-center gap-2 px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 w-[calc(50%-6px)] sm:w-auto ${
                activeTab === tab
                  ? "bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                  : "bg-[#1f1f1f] text-gray-400 hover:bg-[#2a2a2a] hover:text-white"
              }`}
            >
              {tabIcons[tab]}
              {tab === '平面' ? t('skills.tab_2d') : tab === '3D' ? t('skills.tab_3d') : tab === '網頁' ? t('skills.tab_web') : t('skills.tab_ai')}
            </button>
          ))}
        </motion.div>

        {/* Skill Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="group/skill relative bg-[#121212]/80 backdrop-blur-xl border border-white/10 rounded-3xl min-h-[300px] overflow-hidden"
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
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 md:group-hover/skill:opacity-100 z-0 hidden md:block"
            style={{
              background: `radial-gradient(800px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(34, 197, 94, 0.08), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
              >
              {skillData[activeTab].map((skill, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#222] flex items-center justify-center border border-white/5 shadow-inner overflow-hidden">
                      {/* Software Icon Placeholder (Using colored square as per standard mockup practice or initial letter) */}
                      {skill.name === "Illustrator" ? (
                        <ImageWithFallback 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYZ-s_4KM_H7JkE5B0ZUofREIDHWnccKOTw&s" 
                          alt="Illustrator" 
                          className="w-full h-full object-cover" 
                        />
                      ) : skill.name === "Photoshops" ? (
                        <ImageWithFallback 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFo0J6E3t1f-LsIqy_sgwody_oh3viUwV66Q&s" 
                          alt="Photoshops" 
                          className="w-full h-full object-cover" 
                        />
                      ) : skill.name === "Canva" ? (
                        <ImageWithFallback 
                          src="https://cdn-1.webcatalog.io/catalog/canva/canva-icon-unplated.png?v=1769992514930" 
                          alt="Canva" 
                          className="w-full h-full object-cover" 
                        />
                      ) : skill.name === "PTC Creo" ? (
                        <ImageWithFallback 
                          src="https://yt3.googleusercontent.com/Gf4T-85Yj_rQ51nleVZ85X8NOJ_3Vi6wr43RU_j2XIANUDGoFqIOLKrBFlfnghuR5c64AKSbEw=s900-c-k-c0x00ffffff-no-rj" 
                          alt="PTC Creo" 
                          className="w-full h-full object-cover" 
                        />
                      ) : skill.name === "Figma" ? (
                        <ImageWithFallback 
                          src="https://play-lh.googleusercontent.com/hoVBnPBRehmXsCqESLXRH2E3OTxklkwKZlb1psn7imm0VUSobn2nevS9RRFWb9GM4-o=w240-h480-rw" 
                          alt="Figma" 
                          className="w-full h-full object-cover" 
                        />
                      ) : skill.name === "Wix" ? (
                        <ImageWithFallback 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUfczX4_5Evj9qmYHAiHCwJG74BaiGnDuVQ&s" 
                          alt="Wix" 
                          className="w-full h-full object-cover" 
                        />
                      ) : skill.name === "Google Sites" || skill.name === "google sites" ? (
                        <ImageWithFallback 
                          src="https://static.vecteezy.com/system/resources/previews/042/158/719/non_2x/google-sites-logo-icon-free-vector.jpg" 
                          alt="Google Sites" 
                          className="w-full h-full object-cover" 
                        />
                      ) : skill.name === "Gemini" ? (
                        <ImageWithFallback 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp4HwLhAE0e-bxVLJzo0IWEsBp9KpZJIicg&s" 
                          alt="Gemini" 
                          className="w-full h-full object-cover" 
                        />
                      ) : skill.name === "ChatGPT" ? (
                        <ImageWithFallback 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YWdwYUAZWzyLBI4YU-I0HySB8zAVoRiRog&s" 
                          alt="ChatGPT" 
                          className="w-full h-full object-cover" 
                        />
                      ) : skill.name === "Figma Make" ? (
                        <ImageWithFallback 
                          src="https://play-lh.googleusercontent.com/hoVBnPBRehmXsCqESLXRH2E3OTxklkwKZlb1psn7imm0VUSobn2nevS9RRFWb9GM4-o=w240-h480-rw" 
                          alt="Figma Make" 
                          className="w-full h-full object-cover" 
                        />
                      ) : skill.name === "Claude" ? (
                        <ImageWithFallback 
                          src="https://avatars.slack-edge.com/2025-05-14/8891273522918_30c38bf627ac73075db6_512.png" 
                          alt="Claude" 
                          className="w-full h-full object-cover" 
                        />
                      ) : skill.name === "Artlist" ? (
                        <ImageWithFallback 
                          src="https://i.meee.com.tw/VEX3j3x.png" 
                          alt="Artlist" 
                          className="w-full h-full object-cover" 
                        />
                      ) : skill.name === "Autodesk AutoCAD" ? (
                        <ImageWithFallback 
                          src={AUTOCAD_BASE64}
                          alt="Autodesk AutoCAD" 
                          className="w-full h-full object-cover scale-110" 
                        />
                      ) : skill.name === "SketchUp" ? (
                        <ImageWithFallback 
                          src="https://saisol.in/wp-content/uploads/2025/09/SketchUp-Logo.jpg" 
                          alt="SketchUp" 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold text-white tracking-tighter">
                          {skill.name.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <span className="text-xl text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-green-500 font-bold">{skill.progress}%</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-3 bg-[#222] rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                  ></motion.div>
                </div>
              </div>
            ))}
            </motion.div>
          </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}