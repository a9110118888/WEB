import React, { useLayoutEffect, useState } from "react";
import { useParams, Link, useLocation, useSearchParams } from "react-router";
import { ArrowLeft, Calendar, Tag, Wrench, ChevronRight, X, ZoomIn, Users } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { LazyImage } from "../components/LazyImage";
import { LazyIframe } from "../components/LazyIframe";
import { useLanguage } from "../context/LanguageContext";

export function ProjectDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { t, currentPortfolio, language } = useLanguage();
  const project = currentPortfolio.find((p) => p.id === Number(id));
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Check URL search params first (most robust), then fallback to location.state
  const fromExperienceParam = searchParams.get('from') === 'experience';
  const fromExperienceState = location.state && (location.state as { from?: string }).from === 'experience';
  const isFromExperience = fromExperienceParam || fromExperienceState;
  
  const expId = searchParams.get('expId');
  const expTab = searchParams.get('tab');
  
  let backLink = `/#portfolio-item-${id}`;
  let backText = t('project.back_portfolio');
  
  if (isFromExperience) {
    if (expId && expTab) {
      backLink = `/?scrollToExp=${expId}&tab=${expTab}#experience`;
    } else {
      backLink = '/#experience';
    }
    backText = t('project.back_exp');
  }

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-6">{t('project.not_found')}</h1>
        <Link to="/" className="text-green-500 hover:text-green-400 flex items-center gap-2">
          <ArrowLeft size={20} /> {t('project.back_home')}
        </Link>
      </div>
    );
  }

  // Check lock status
  const isLocked = (() => {
    if ((project as any).availableDate) {
      const availableDate = new Date((project as any).availableDate);
      const today = new Date();
      return today < availableDate;
    }
    return false;
  })();

  if (isLocked) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#121212] px-6">
        <div className="max-w-md w-full bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className="text-yellow-500"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">{t('project.locked_title')}</h1>
          <p className="text-gray-300 leading-relaxed mb-8">
            {t('project.locked_desc').replace('{date}', (project as any).availableDate)}
          </p>
          <Link to={backLink} className="block w-full py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-colors">
            {t('project.locked_ok')} - {backText}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-24 pb-32 min-h-screen relative">
      {/* Lightbox for zooming images */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-200 shadow-lg z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImg(null);
            }}
            aria-label="Close fullscreen view"
          >
            <X size={28} />
          </button>
          
          <div className="relative max-w-6xl w-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
            <LazyImage 
              src={lightboxImg} 
              alt="Enlarged view" 
              className="w-auto h-auto max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/20 object-contain relative z-10"
              onClick={(e) => e.stopPropagation()}
              containerClassName="max-h-[85vh] flex items-center justify-center"
            />
            <p className="text-gray-400 mt-6 tracking-widest text-sm uppercase text-center w-full">
              點擊任意處關閉
            </p>
          </div>
        </div>
      )}

      {/* Header Image Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] max-h-[600px] overflow-hidden">
        <ImageWithFallback
          src={project.bannerUrl || (project.gallery && project.gallery.length > 0 ? project.gallery[0] : (Array.isArray(project.posterUrl) ? project.posterUrl[0] : project.posterUrl))}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-[#121212]/20"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 container mx-auto">
          <Link to={backLink} className="inline-flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors mb-6 font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 group">
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" /> {backText}
          </Link>
          <h1 className="font-bold text-white mb-4 leading-tight whitespace-pre-line text-[48px]">{project.title}</h1>
          <p className="text-xl md:text-2xl text-green-400 font-light tracking-wide">{project.brief}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-12 md:mt-20 max-w-5xl">
        <div className="space-y-20">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {t("project.overview")}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light whitespace-pre-wrap">
                {project.description}
              </p>
            </section>

            {/* Design Concept & Aesthetics */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {t("project.concept")}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light italic whitespace-pre-wrap">
                {project.designConcept}
              </p>
            </section>

            {/* Challenge & Solution */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {t("project.challenge")}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl border border-red-500/30 shadow-lg bg-[#ce74741a]">
                  <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.8)]"></div> {t("project.challenge_title")}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light whitespace-pre-wrap">
                    {project.challenge}
                  </p>
                </div>
                <div className="bg-green-950/20 p-8 rounded-3xl border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.05)]">
                  <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div> {t("project.solution_title")}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light whitespace-pre-wrap">
                    {project.solution}
                  </p>
                </div>
              </div>
            </section>

            {/* Photo Gallery / Works Showcase */}
            {project.gallery && project.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {t("project.gallery")}
                </h2>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {project.gallery.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="w-full aspect-video rounded-2xl overflow-hidden cursor-zoom-in group border border-white/5 bg-[#1a1a1a] shadow-lg relative"
                      onClick={() => setLightboxImg(img)}
                    >
                      <ImageWithFallback 
                        src={project.id === 8 && idx === 2 ? "https://i.meee.com.tw/mZADBFU.png" : project.id === 8 && idx === 3 ? "https://i.meee.com.tw/WMnTpKh.png" : img} 
                        alt={`${project.title} Gallery ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        style={{ 
                          objectPosition: 
                            project.id === 1 && idx === 1 ? "center 25%" : 
                            project.id === 6 && idx === 0 ? "center 100%" : 
                            project.id === 6 && idx === 1 ? "center 35%" : 
                            "center" 
                        }}
                      />
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                        <ZoomIn size={20} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Video Showcase */}
            {'videoUrl' in project && typeof project.videoUrl === 'string' && (
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {t("project.video")}
                </h2>
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-white/5 bg-[#1a1a1a]">
                  {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
                    <LazyIframe 
                      src={project.videoUrl.includes('watch?v=') ? project.videoUrl.replace('watch?v=', 'embed/') : project.videoUrl.includes('youtu.be/') ? project.videoUrl.replace('youtu.be/', 'youtube.com/embed/') : project.videoUrl.includes('youtube.com/shorts/') ? project.videoUrl.replace('youtube.com/shorts/', 'youtube.com/embed/') : project.videoUrl} 
                      title={`${project.title} Video`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    />
                  ) : project.videoUrl.endsWith('.mp4') || project.videoUrl.includes('.mp4?') ? (
                    <video 
                      src={project.videoUrl} 
                      className="w-full h-full object-cover" 
                      controls 
                      controlsList="nodownload"
                      preload="metadata"
                    />
                  ) : (
                    <LazyIframe 
                      src={project.videoUrl} 
                      title={`${project.title} Video`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    />
                  )}
                </div>
              </section>
            )}

            {/* Process Timeline */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
                <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {t("project.process")}
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-green-500 before:via-green-500/20 before:to-transparent">
                {project.process.map((step, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    {/* Timeline Node */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#121212] bg-green-500 text-black font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)] absolute left-0 md:left-1/2 -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                      {index + 1}
                    </div>
                    {/* Content Card */}
                    <details className="group w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#1a1a1a] border border-white/5 rounded-2xl shadow-lg hover:border-green-500/50 transition-all duration-300 ml-16 md:ml-0 hover:-translate-y-1">
                      <summary className="text-xl font-bold text-white tracking-wide list-none flex justify-between items-center outline-none cursor-pointer [&::-webkit-details-marker]:hidden">
                        {step.phase}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 transition-transform duration-300 group-open:rotate-180">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </summary>
                      <p className="text-gray-400 leading-relaxed font-light whitespace-pre-line mt-4">
                        {step.details}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Reflection */}
            {(project as any).reflection && (
              <section className="mb-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {t("project.reflection")}
                </h2>
                <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden group">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/20 transition-colors duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="flex-1">
                      <p className="text-gray-300 leading-loose font-light whitespace-pre-line text-[15px]">
                        {(project as any).reflection}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Custom PDF for Project 5 */}
            {project.id === 5 && (
              <section className="mb-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {t("project.doc_alt_2")}
                </h2>
                <div className="w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-xl bg-[#1a1a1a]">
                  <LazyIframe 
                    src="https://drive.google.com/file/d/1kE3FwcnZU6JpuMK159-msuXQpOuCyu8q/preview" 
                    className="w-full h-full border-0"
                    allow="autoplay"
                    title={t("project.doc_alt_2")}
                  />
                </div>
              </section>
            )}

            {/* Poster Section */}
            {(project as any).posterUrl && (
              <section className="mb-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {t("project.poster")}
                </h2>
                <div>
                  {Array.isArray((project as any).posterUrl) ? (
                    <div className="grid grid-cols-1 gap-8">
                      {(project as any).posterUrl.map((url: string, index: number) => (
                        <div key={index} className="rounded-2xl overflow-hidden shadow-lg border border-white/5 group relative cursor-pointer" onClick={() => setLightboxImg(url)}>
                          <ImageWithFallback
                            src={url}
                            alt={`${project.title} Poster ${index + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <ZoomIn size={32} className="text-white drop-shadow-lg" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : typeof (project as any).posterUrl === 'string' && ((project as any).posterUrl.includes('drive.google.com') || (project as any).posterUrl.includes('visual-paradigm.com')) ? (
                    <div className="w-full aspect-[4/3] md:aspect-[3/4] max-h-[800px] rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a]">
                      <LazyIframe 
                        src={(project as any).posterUrl.replace('/view?usp=sharing', '/preview').replace('/view?usp=drive_link', '/preview')} 
                        className="w-full h-full border-0"
                        allow="autoplay"
                        title={`${project.title} Poster`}
                      />
                    </div>
                  ) : (
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-white/5 group relative cursor-pointer" onClick={() => setLightboxImg((project as any).posterUrl as string)}>
                      <ImageWithFallback
                        src={(project as any).posterUrl}
                        alt={`${project.title} Poster`}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ZoomIn size={32} className="text-white drop-shadow-lg" />
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* PDF Embed Section */}
            {(project as any).pdfEmbed && (
              <section className="mt-8 mb-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {project.id === 8 ? t("project.doc_alt_1") : t("project.doc")}
                </h2>
                <div className="w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-xl bg-[#1a1a1a]">
                  <LazyIframe 
                    src={(project as any).pdfEmbed.replace('/view?usp=sharing', '/preview')} 
                    className="w-full h-full border-0"
                    allow="autoplay"
                    title={`${project.title} PDF Document`}
                  />
                </div>
              </section>
            )}

            {/* Project Info */}
            <section>
              <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl border border-white/5 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-6 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {t("project.info")}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <div>
                    <div className="flex items-center gap-3 text-gray-400 mb-3">
                      <Tag size={20} className="text-green-500" />
                      <span className="font-medium text-sm uppercase tracking-widest">{t("project.category")}</span>
                    </div>
                    <p className="text-xl text-white font-medium pl-8 md:pl-0">{project.category}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 text-gray-400 mb-3">
                      <Calendar size={20} className="text-green-500" />
                      <span className="font-medium text-sm uppercase tracking-widest">{t("project.date")}</span>
                    </div>
                    <p className="text-xl text-white font-medium pl-8 md:pl-0">{project.date}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 text-gray-400 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      <span className="font-medium text-sm uppercase tracking-widest">{t("project.team")}</span>
                    </div>
                    <div className="flex flex-col gap-4 pl-8 md:pl-0">
                      {!(project as any).team ? (
                        <>
                          <p className="text-xl text-white font-medium leading-relaxed">{t("project.independent")}</p>
                        </>
                      ) : typeof (project as any).team === 'string' ? (
                        <p className="text-xl text-white font-medium">{(project as any).team}</p>
                      ) : (
                        <>
                          {(!(project as any).team.members || (project as any).team.members === '個人獨立專案' || (project as any).team.members === 'Independent Project') ? (
                            <p className="text-xl text-white font-medium leading-relaxed">{t("project.independent")}</p>
                          ) : (
                            <>
                              <p className="text-xl text-white font-medium leading-relaxed">{t("project.team_project")}</p>
                              <p className="text-[15px] text-white font-medium leading-relaxed">{t('project.members')}{(project as any).team.members.replace(/\s*\/\s*/g, ' / ')}</p>
                            </>
                          )}
                          {(project as any).team.advisors && (
                            <p className="text-[15px] text-white font-medium leading-relaxed mt-2">{t('project.advisors')}{(project as any).team.advisors.replace(/\s*\/\s*/g, ' / ')}</p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 text-gray-400 mb-3">
                      <Wrench size={20} className="text-green-500" />
                      <span className="font-medium text-sm uppercase tracking-widest">{t("project.tools")}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-8 md:pl-0">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1.5 bg-[#222] border border-white/10 rounded-lg text-sm text-gray-300 font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex justify-center">
                  <Link to={backLink} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500/10 text-green-500 border border-green-500/30 rounded-xl hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all font-bold group w-full md:w-auto min-w-[200px]">
                    <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
                    <span>{backText}</span>
                  </Link>
                </div>
              </div>
            </section>
            
        </div>
      </div>
    </article>
  );
}