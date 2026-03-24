import React, { useState } from 'react';
import { motion } from 'motion/react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export function LazyImage({ src, alt, className, containerClassName = "w-full h-full", style, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // If src is directly empty or null, we might want to immediately set it to error state
  // or just show empty image. Let's rely on the image element's natural behavior
  // but if the user passed a fake placeholder, we will handle that too.

  return (
    <div className={`relative overflow-hidden block ${containerClassName}`}>
      {/* Skeleton / Placeholder */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-white/5 animate-pulse rounded-[inherit] z-0"
        style={{ pointerEvents: isLoaded ? 'none' : 'auto' }}
      />
      
      {/* Actual Image */}
      {hasError ? (
        <div className={`w-full h-full flex flex-col items-center justify-center bg-white/5 text-white/50 border border-white/10 rounded-[inherit] absolute inset-0 z-10 ${className}`} style={style}>
          <svg className="w-8 h-8 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs tracking-widest uppercase">Image Error</span>
        </div>
      ) : (
        <motion.img
          src={src || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setIsLoaded(true);
            setHasError(true);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`w-full h-full object-cover absolute inset-0 z-10 ${className}`}
          style={style}
          {...props}
        />
      )}
    </div>
  );
}