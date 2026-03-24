import React, { useState, useLayoutEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router";
import { ChevronDown, ChevronUp, Award, X, ArrowRight, ZoomIn, Eye } from "lucide-react";
import { ExperienceType } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { LazyImage } from "./LazyImage";

export function Experience() {
  const { t, currentCompetition, currentProject } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = (searchParams.get('tab') === 'project' ? 'project' : 'competition');
  const [expandedIds, setExpandedIds] = useState<number[]>(() => {
    const expId = searchParams.get('scrollToExp');
    return expId ? [parseInt(expId, 10)] : [];
  });
  const [activeTab, setActiveTab] = useState<"competition" | "project">(initialTab);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const experienceRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useLayoutEffect(() => {
    const expId = searchParams.get('scrollToExp');
    
    if (expId) {
      const id = parseInt(expId, 10);
      
      const element = experienceRefs.current[id];
      if (element) {
        const headerOffset = 100; // Account for fixed header if any
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, [searchParams]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const renderTimeline = (data: ExperienceType[]) => {
    // Helper to format links with experience parameters
    const getExperienceLink = (baseLink?: string, projectId?: string, expId?: number, tab?: string) => {
      if (projectId) return `/project/${projectId}?from=experience&expId=${expId}&tab=${tab}`;
      if (!baseLink) return "";
      if (baseLink.startsWith('http')) return baseLink;
      
      const [path, hash] = baseLink.split('#');
      const separator = path.includes('?') ? '&' : '?';
      return `${path}${separator}from=experience&expId=${expId}&tab=${tab}${hash ? `#${hash}` : ''}`;
    };

    // Sort data chronologically (newest first, oldest last)
    const sortedData = [...data].sort((a, b) => {
      const parseDate = (dateStr: string) => {
        const yearMatch = dateStr.match(/(\d{4})/);
        const monthMatch = dateStr.match(/(\d{1,2})\s*月/);
        const year = yearMatch ? parseInt(yearMatch[1], 10) : 0;
        const month = monthMatch ? parseInt(monthMatch[1], 10) : 0;
        return year * 100 + month;
      };
      return parseDate(b.year) - parseDate(a.year);
    });

    const renderImages = (item: ExperienceType, isFloating: boolean) => {
      if (!item.image && !item.extraImages) return null;
      
      return (
        <div className={`w-full md:w-48 lg:w-56 flex flex-col gap-4 ${isFloating ? 'mb-6 md:mb-2 md:ml-6 lg:ml-8 md:float-right clear-right' : 'shrink-0 md:ml-6 lg:ml-10'}`}>
          {item.image && (
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#111111]">
              {activeTab === "competition" && (item.projectId || item.link) ? (
                <Link 
                  to={getExperienceLink(item.link, item.projectId, item.id, activeTab)}
                  state={{ from: 'experience', expId: item.id, tab: activeTab }}
                  target={!item.projectId && item.link?.startsWith('http') ? "_blank" : "_self"}
                  rel={!item.projectId && item.link?.startsWith('http') ? "noopener noreferrer" : ""}
                  onClick={(e) => e.stopPropagation()}
                  className="relative group block cursor-pointer overflow-hidden rounded-lg"
                >
                  <LazyImage 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500 relative z-10" 
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-black/60 px-4 py-2 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2 shadow-lg backdrop-blur-sm">
                      <Eye size={18} />
                      <span className="text-sm font-medium">查看詳情</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(item.image!);
                  }}
                >
                  <LazyImage 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500 relative z-10" 
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/60 p-3 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-lg backdrop-blur-sm">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {item.extraImages?.map((img, index) => {
            const currentProjectId = item.extraProjectIds?.[index] || item.projectId;
            const currentLink = item.extraLinks?.[index] || item.link;

            return (
              <div key={index} className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#111111]">
                {activeTab === "competition" && (currentProjectId || currentLink) ? (
                  <Link 
                    to={getExperienceLink(currentLink, currentProjectId, item.id, activeTab)}
                    state={{ from: 'experience', expId: item.id, tab: activeTab }}
                    target={!currentProjectId && currentLink?.startsWith('http') ? "_blank" : "_self"}
                    rel={!currentProjectId && currentLink?.startsWith('http') ? "noopener noreferrer" : ""}
                    onClick={(e) => e.stopPropagation()}
                    className="relative group block cursor-pointer overflow-hidden rounded-lg"
                  >
                    <LazyImage 
                      src={img} 
                      alt={`${item.title} 相關圖片 ${index + 1}`} 
                      className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500 relative z-10" 
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-black/60 px-4 py-2 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2 shadow-lg backdrop-blur-sm">
                        <Eye size={18} />
                        <span className="text-sm font-medium">{t("exp.view_details")}</span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div 
                    className="relative group cursor-pointer overflow-hidden rounded-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(img);
                    }}
                  >
                    <LazyImage 
                      src={img} 
                      alt={`${item.title} 相關圖片 ${index + 1}`} 
                      className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500 relative z-10" 
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="bg-black/60 p-3 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-lg backdrop-blur-sm">
                        <ZoomIn size={24} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    };

    return (
    <div className="relative border-l-2 border-green-500/30 ml-4 md:ml-12">
      {sortedData.map((item, index) => (
        <motion.div 
          key={item.id} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          className="mb-12 relative pl-8 md:pl-16"
          ref={el => {
            if (el) experienceRefs.current[item.id] = el;
          }}
        >
          <div className="absolute w-6 h-6 bg-green-500 rounded-full flex items-center justify-center -left-[13px] top-6 shadow-[0_0_15px_rgba(34,197,94,0.6)] border-4 border-[#0a0a0a] z-10"></div>
          <div
            className={`group/card relative bg-[#121212] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-green-500/50 cursor-pointer ${
              expandedIds.includes(item.id) ? "shadow-[0_8px_30px_rgba(34,197,94,0.1)]" : "hover:bg-[#1a1a1a]"
            }`}
            onClick={() => toggleExpand(item.id)}
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
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 md:group-hover/card:opacity-100 z-0 hidden md:block"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(34, 197, 94, 0.08), transparent 40%)`
              }}
            />
            
            <div className="relative z-10 p-6 md:p-8 flex justify-between items-center bg-[#121212]/50">
              <div>
                <span className="inline-block px-3 py-1 bg-white/5 text-green-400 text-sm font-bold rounded-full mb-3 tracking-wider">
                  {item.year}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-base">{item.subtitle}</p>
              </div>
              <div className="text-green-500 bg-green-500/10 p-2 rounded-full">
                {expandedIds.includes(item.id) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
            </div>
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                expandedIds.includes(item.id) ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden min-h-0">
                <div className="px-6 md:px-8 pb-8 pt-0">
                  <div className="w-full h-px bg-white/10 mb-6"></div>
                  <div className={activeTab === "competition" ? "block" : "flex flex-col md:flex-row gap-6 items-start"}>
                    {activeTab === "competition" && renderImages(item, true)}
                    
                    <div className={activeTab === "competition" ? "space-y-4" : "flex-1 space-y-4"}>
                      <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">{item.description}</p>
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        {item.certificate && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCertificate(item.certificate!);
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 text-sm font-medium"
                          >
                            <Award size={18} />
                            {item.certificateText || t("exp.view_cert")}
                          </button>
                        )}
                        {item.certificates && item.certificates.map((cert, idx) => (
                          <button 
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCertificate(cert);
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 text-sm font-medium"
                          >
                            <Award size={18} />
                            {item.certificateText ? `${item.certificateText} ${idx + 1}` : `${t("exp.view_cert")} ${idx + 1}`}
                          </button>
                        ))}
                        {activeTab === "project" && (item.projectId || item.link) && (
                          <Link 
                            to={getExperienceLink(item.link, item.projectId, item.id, activeTab)}
                            state={{ from: 'experience', expId: item.id, tab: activeTab }}
                            target={!item.projectId && item.link?.startsWith('http') ? "_blank" : "_self"}
                            rel={!item.projectId && item.link?.startsWith('http') ? "noopener noreferrer" : ""}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 text-sm font-medium"
                          >
                            {item.projectId ? <Eye size={18} /> : <ArrowRight size={18} />}
                            {t("exp.view_details")}
                          </Link>
                        )}
                      </div>
                    </div>
                    
                    {activeTab !== "competition" && renderImages(item, false)}
                    {activeTab === "competition" && <div className="clear-both"></div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-widest uppercase">{t("exp.title")}</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">{t("exp.desc")}</p>
        </motion.div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#121212] p-1.5 rounded-full inline-flex border border-white/10 relative">
            <button
              onClick={() => setActiveTab("competition")}
              className={`relative z-10 px-6 py-3 md:px-10 md:py-3.5 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                activeTab === "competition"
                  ? "text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("exp.tab.competition")}
            </button>
            <button
              onClick={() => setActiveTab("project")}
              className={`relative z-10 px-6 py-3 md:px-10 md:py-3.5 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                activeTab === "project"
                  ? "text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("exp.tab.project")}
            </button>

            {/* Animated Tab Background Indicator */}
            <div
              className={`absolute top-1.5 bottom-1.5 left-1.5 rounded-full bg-green-500 transition-transform duration-300 ease-in-out shadow-[0_0_15px_rgba(34,197,94,0.4)] ${
                activeTab === "competition" 
                  ? "translate-x-0 w-[calc(50%-0.375rem)]" 
                  : "translate-x-full w-[calc(50%-0.375rem)]"
              }`}
            ></div>
          </div>
        </div>

        <div className="min-h-[500px]">
          {activeTab === "competition" ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {renderTimeline(currentCompetition)}
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {renderTimeline(currentProject)}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal for Regular Images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-200 shadow-lg"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>
          
          <div 
            className="relative max-w-6xl w-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-300"
          >
            <LazyImage 
              src={selectedImage} 
              alt="專案圖片" 
              className="w-auto h-auto max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/20 object-contain relative z-10"
              containerClassName="max-h-[85vh] flex items-center justify-center"
            />
            <p className="text-gray-400 mt-6 tracking-widest text-sm uppercase">
              點擊任意處關閉
            </p>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Certificates */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedCertificate(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-200 shadow-lg"
            onClick={() => setSelectedCertificate(null)}
          >
            <X size={28} />
          </button>
          
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-300"
          >
            <LazyImage 
              src={selectedCertificate} 
              alt="獎狀" 
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/20 relative z-10"
              containerClassName="max-h-[85vh] flex items-center justify-center"
            />
            <p className="text-gray-400 mt-6 text-sm tracking-widest uppercase">點擊任意處關閉</p>
          </div>
        </div>
      )}
    </section>
  );
}