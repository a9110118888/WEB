import React, { useState } from 'react';
import { motion } from 'motion/react';

interface LazyIframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  containerClassName?: string;
  loadingMessage?: string;
}

export function LazyIframe({ 
  src, 
  title, 
  className, 
  containerClassName = "", 
  loadingMessage = "Loading interactive content...",
  ...props 
}: LazyIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden w-full h-full bg-[#111] rounded-2xl border border-white/10 ${containerClassName}`}>
      {/* Skeleton / Loading State */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex flex-col items-center justify-center bg-[#151515] z-10"
        style={{ pointerEvents: isLoaded ? 'none' : 'auto' }}
      >
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute inset-0 border-4 border-green-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <div className="text-green-500/80 text-sm tracking-widest uppercase font-medium animate-pulse">
          {loadingMessage}
        </div>
      </motion.div>
      
      {/* Actual Iframe */}
      <motion.iframe
        src={src}
        title={title}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full h-full border-0 absolute inset-0 z-0 ${className}`}
        allowFullScreen
        {...props}
      />
    </div>
  );
}