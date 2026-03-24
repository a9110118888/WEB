import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      if (location.pathname !== "/") return;
      
      const sections = ["home", "about", "skills", "portfolio", "experience", "contact"];
      let currentSection = "";
      
      // Calculate scroll position with an offset for the fixed navbar
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
          }
        }
      }
      
      // If we are at the top, highlight home
      if (!currentSection && window.scrollY < 100) {
        currentSection = "home";
      } else if (!currentSection && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        // If we reached the bottom of the page, highlight contact
        currentSection = "contact";
      }
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, activeSection]);

  const navLinks = [
    { name: t("nav.home"), href: "/", section: "home" },
    { name: t("nav.about"), href: "/#about", section: "about" },
    { name: t("nav.skills"), href: "/#skills", section: "skills" },
    { name: t("nav.portfolio"), href: "/#portfolio", section: "portfolio" },
    { name: t("nav.experience"), href: "/#experience", section: "experience" },
    { name: t("nav.contact"), href: "/#contact", section: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-xl md:text-2xl font-bold tracking-wider text-white hover:text-green-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500 text-sm transition-transform duration-300 group-hover:scale-110">
            Y
          </span>
          {t("site.title")}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isPortfolioRelatedPath = location.pathname === "/more-works" || location.pathname.startsWith("/project/");
            let isActive = false;
            
            if (location.pathname === "/") {
              isActive = activeSection === link.section;
            } else if (isPortfolioRelatedPath && link.section === "portfolio") {
              isActive = true;
            }

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm uppercase tracking-widest font-medium transition-all duration-300 transform hover:scale-110 inline-block ${
                  isActive
                    ? "text-green-500 scale-105"
                    : "text-gray-300 hover:text-green-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          {/* Language Switcher Dropdown */}
          <div className="relative group ml-4">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer py-2">
              <Globe size={18} />
              <span className="text-sm font-medium">{language === 'zh' ? '中文' : 'EN'}</span>
            </button>
            <div className="absolute right-0 top-full mt-0 w-32 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 z-50">
              <div className="p-2 flex flex-col">
                <button
                  onClick={() => setLanguage('zh')}
                  className={`text-left px-4 py-2 text-sm rounded-lg transition-colors ${language === 'zh' ? 'bg-green-500/20 text-green-500 font-bold' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                >
                  中文
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-left px-4 py-2 text-sm rounded-lg transition-colors ${language === 'en' ? 'bg-green-500/20 text-green-500 font-bold' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav Toggle & Language (Mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative">
            <button 
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors cursor-pointer p-1"
              onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
            >
              <Globe size={20} />
            </button>
            <div className={`absolute right-0 top-full mt-2 w-28 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl transition-all duration-300 z-50 ${isMobileLangOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="p-2 flex flex-col">
                <button
                  onClick={() => {
                    setLanguage('zh');
                    setIsMobileLangOpen(false);
                  }}
                  className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${language === 'zh' ? 'bg-green-500/20 text-green-500' : 'text-gray-300 hover:bg-white/5'}`}
                >
                  中文
                </button>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setIsMobileLangOpen(false);
                  }}
                  className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${language === 'en' ? 'bg-green-500/20 text-green-500' : 'text-gray-300 hover:bg-white/5'}`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
          <button
            className="text-gray-300 hover:text-white"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsMobileLangOpen(false);
            }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[72px] bg-[#121212]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => {
            const isPortfolioRelatedPath = location.pathname === "/more-works" || location.pathname.startsWith("/project/");
            let isActive = false;
            
            if (location.pathname === "/") {
              isActive = activeSection === link.section;
            } else if (isPortfolioRelatedPath && link.section === "portfolio") {
              isActive = true;
            }

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium border-b border-white/5 pb-4 last:border-0 last:pb-0 ${
                  isActive ? "text-green-500" : "text-gray-300 hover:text-green-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
