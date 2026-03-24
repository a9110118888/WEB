import React from "react";
import { Outlet, useLocation } from "react-router";
import { Toaster } from "sonner";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";
import { BackToTop } from "./BackToTop";
import { AnimatePresence, motion } from "motion/react";

export function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="font-sans min-h-screen bg-[#121212] text-white selection:bg-green-500/30 selection:text-green-200">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      {isHomePage && <Contact />}
      <BackToTop />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}