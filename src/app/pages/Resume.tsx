import React from 'react';
import { ArrowLeft, Download, ExternalLink, Printer } from 'lucide-react';
import { Link } from 'react-router';
import { toast, Toaster } from 'sonner';
import { useLanguage } from '../context/LanguageContext';
import { motion } from "motion/react";

export function Resume() {
  const { t, language } = useLanguage();

  const pdfUrl = language === 'en' 
    ? 'https://drive.google.com/file/d/15MXZwSbXUjfhIJIkcaq90jPkNZ3WQBlJ/view?usp=sharing'
    : 'https://drive.google.com/file/d/1VpEUZJiy_4kX7meuQQFZoMYAZLVrgdnF/view?usp=sharing';

  const previewUrl = language === 'en'
    ? 'https://drive.google.com/file/d/15MXZwSbXUjfhIJIkcaq90jPkNZ3WQBlJ/preview'
    : 'https://drive.google.com/file/d/1VpEUZJiy_4kX7meuQQFZoMYAZLVrgdnF/preview';

  const handlePrint = () => {
    toast.info(t('resume.print_info'), {
      description: t('resume.print_desc'),
      duration: 5000,
      action: {
        label: t('resume.open_new_tab'),
        onClick: () => window.open(pdfUrl, '_blank')
      }
    });
  };

  return (
    <>
      <Toaster position="bottom-right" theme="dark" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="h-screen bg-[#0a0a0a] text-white flex flex-col font-sans overflow-hidden"
      >
      {/* Top Header Navigation */}
      <header className="px-4 md:px-8 py-3 flex items-center justify-between border-b border-white/10 bg-black/80 backdrop-blur-md z-50 flex-shrink-0 print:hidden">
        <Link 
          to="/#about" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span className="font-medium tracking-wide">{t("resume.back_about")}</span>
        </Link>
        <div className="flex items-center gap-3">
          <a 
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors duration-300"
            title={t("resume.open_new_tab")}
          >
            <ExternalLink size={16} />
            <span>{t("resume.open_new_tab")}</span>
          </a>
          <a 
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-green-500 text-black text-sm font-bold rounded-full hover:bg-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300"
          >
            <Download size={16} />
            <span>{t("resume.download") || "下載 PDF"}</span>
          </a>
          <button 
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-green-500 text-black text-sm font-bold rounded-full hover:bg-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300"
            title={t("resume.print")}
          >
            <Printer size={16} />
            <span className="hidden sm:inline">{t("resume.print")}</span>
          </button>
        </div>
      </header>

      {/* Main Content - Fullscreen PDF Viewer */}
      <main className="flex-1 w-full relative bg-[#0a0a0a]">
        
        {/* Loading Indicator (Shows behind iframe initially) */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="flex flex-col items-center gap-3 text-gray-400">
            <div className="w-8 h-8 border-2 border-green-500/30 border-t-green-500 rounded-full animate-spin"></div>
            <p className="text-sm font-medium tracking-wider animate-pulse">{t("resume.loading_pdf")}</p>
          </div>
        </div>

        {/* Iframe for Google Drive PDF Preview */}
        <iframe 
          src={previewUrl} 
          className="absolute inset-0 w-full h-full border-none z-10 print:w-full print:h-screen print:m-0 print:p-0"
          allow="autoplay"
          title="Resume PDF Viewer"
        />
        
      </main>
    </motion.div>
    </>
  );
}