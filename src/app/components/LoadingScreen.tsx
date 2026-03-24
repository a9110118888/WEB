import React, { useEffect } from "react";
import { motion } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Hide loading screen after 2.2 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => {
      document.body.style.overflow = "unset";
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#121212]"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ 
        opacity: 0,
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-20 h-20 rounded-full border-2 border-green-500 flex items-center justify-center relative"
        >
          {/* Animated rings around the logo */}
          <motion.div 
            className="absolute inset-[-8px] rounded-full border border-green-500/30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute inset-[-16px] rounded-full border border-green-500/10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
            className="text-green-500 text-3xl font-bold font-mono"
          >
            Y
          </motion.span>
        </motion.div>
        
        {/* Loading text and progress bar */}
        <div className="flex flex-col items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-1"
          >
            <span className="text-gray-400 text-sm tracking-widest uppercase">Loading</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1] }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2, times: [0, 0.5, 1] }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.4, times: [0, 0.5, 1] }}
            >
              .
            </motion.span>
          </motion.div>

          <motion.div
            className="h-[2px] bg-green-500/20 rounded-full overflow-hidden w-48 relative"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full bg-green-500 shadow-[0_0_10px_#22c55e]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
