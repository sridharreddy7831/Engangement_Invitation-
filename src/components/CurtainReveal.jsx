import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CurtainReveal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUntied, setIsUntied] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 2500); // unlock after animation completes
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsUntied(true);
    // Wait for untie animation before splitting curtains
    setTimeout(() => {
      setIsOpen(true);
    }, 800);
  };

  // Ultra-realistic red curtain texture
  const curtainTexture = `
    repeating-linear-gradient(
      to right,
      #4a0000 0%,
      #7a0000 10%,
      #a00000 20%,
      #c40000 25%,
      #a00000 30%,
      #7a0000 40%,
      #4a0000 50%
    )
  `;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div 
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-auto"
          exit={{ opacity: 0, transition: { duration: 1, delay: 2 } }}
        >
          {/* Background Shadow when curtains split */}
          <div className="absolute inset-0 bg-black z-0"></div>

          {/* Left Curtain */}
          <motion.div 
            className="absolute top-0 left-0 w-1/2 h-full z-10 origin-left drop-shadow-[20px_0_40px_rgba(0,0,0,0.8)]"
            style={{ 
              background: curtainTexture,
              backgroundSize: "25vw 100%"
            }}
            initial={{ scaleX: 1, x: 0, borderBottomRightRadius: "0%" }}
            exit={{ 
              scaleX: 0.1, 
              x: "-5%",
              borderBottomRightRadius: "60%" 
            }}
            transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Gold Inner Trim */}
            <div className="absolute top-0 right-0 w-3 sm:w-5 h-full bg-gradient-to-r from-[#ffe89c] via-[#dca331] to-[#6e4600] shadow-[inset_2px_0_5px_rgba(255,255,255,0.4),_-5px_0_15px_rgba(0,0,0,0.5)]"></div>
          </motion.div>

          {/* Right Curtain */}
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-full z-10 origin-right drop-shadow-[-20px_0_40px_rgba(0,0,0,0.8)]"
            style={{ 
              background: curtainTexture,
              backgroundSize: "25vw 100%"
            }}
            initial={{ scaleX: 1, x: 0, borderBottomLeftRadius: "0%" }}
            exit={{ 
              scaleX: 0.1, 
              x: "5%",
              borderBottomLeftRadius: "60%" 
            }}
            transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Gold Inner Trim */}
            <div className="absolute top-0 left-0 w-3 sm:w-5 h-full bg-gradient-to-l from-[#ffe89c] via-[#dca331] to-[#6e4600] shadow-[inset_-2px_0_5px_rgba(255,255,255,0.4),_5px_0_15px_rgba(0,0,0,0.5)]"></div>
          </motion.div>

          {/* Top Valance (Scalloped red curtain at top) */}
          <motion.div 
            className="absolute top-0 left-0 w-full z-20 pointer-events-none"
            exit={{ y: "-100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 1000 250" preserveAspectRatio="none" className="w-full h-32 sm:h-48 md:h-64 drop-shadow-2xl">
              <defs>
                <linearGradient id="valanceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4a0000" />
                  <stop offset="12%" stopColor="#a00000" />
                  <stop offset="25%" stopColor="#c40000" />
                  <stop offset="37%" stopColor="#a00000" />
                  <stop offset="50%" stopColor="#4a0000" />
                  <stop offset="62%" stopColor="#a00000" />
                  <stop offset="75%" stopColor="#c40000" />
                  <stop offset="87%" stopColor="#a00000" />
                  <stop offset="100%" stopColor="#4a0000" />
                </linearGradient>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" stopColor="#ffe89c" />
                   <stop offset="50%" stopColor="#dca331" />
                   <stop offset="100%" stopColor="#6e4600" />
                </linearGradient>
              </defs>
              {/* Outer Scallops shape */}
              <path d="M0,0 L1000,0 L1000,50 Q875,220 750,50 Q625,220 500,50 Q375,220 250,50 Q125,220 0,50 Z" fill="url(#valanceGrad)" />
              {/* Gold fringe under scallops */}
              <path d="M0,50 Q125,220 250,50 Q375,220 500,50 Q625,220 750,50 Q875,220 1000,50 L1000,65 Q875,235 750,65 Q625,235 500,65 Q375,235 250,65 Q125,235 0,65 Z" fill="url(#goldGrad)" />
              {/* Left and Right long tails for the valance */}
              <path d="M0,0 L150,0 Q100,150 150,250 Q50,220 0,150 Z" fill="url(#valanceGrad)" />
              <path d="M1000,0 L850,0 Q900,150 850,250 Q950,220 1000,150 Z" fill="url(#valanceGrad)" />
              {/* Fringe for tails */}
              <path d="M150,0 Q100,150 150,250 L160,250 Q110,150 160,0 Z" fill="url(#goldGrad)" opacity="0.8" />
              <path d="M850,0 Q900,150 850,250 L840,250 Q890,150 840,0 Z" fill="url(#goldGrad)" opacity="0.8" />
            </svg>
          </motion.div>

          {/* Left and Right Connected Thread/String */}
          <div className="absolute top-1/2 left-0 w-full h-10 -mt-5 z-30 flex items-center justify-center pointer-events-none">
            {/* Left String */}
            <motion.div 
               className="w-1/2 h-[3px] bg-gradient-to-b from-[#ffe89c] via-[#dca331] to-[#a16f12] shadow-[0_5px_10px_rgba(0,0,0,0.5)] origin-right"
               animate={isUntied ? { rotate: -15, y: 100, opacity: 0 } : { rotate: 0, scaleX: 1, opacity: 1 }}
               transition={{ duration: 0.8, ease: "easeIn" }}
            />
            {/* Right String */}
            <motion.div 
               className="w-1/2 h-[3px] bg-gradient-to-b from-[#ffe89c] via-[#dca331] to-[#a16f12] shadow-[0_5px_10px_rgba(0,0,0,0.5)] origin-left"
               animate={isUntied ? { rotate: 15, y: 100, opacity: 0 } : { rotate: 0, scaleX: 1, opacity: 1 }}
               transition={{ duration: 0.8, ease: "easeIn" }}
            />
          </div>

          {/* Center Tied Knot / Ribbon */}
          <motion.div 
            className="absolute z-40 flex flex-col items-center justify-center cursor-pointer group"
            onClick={handleOpen}
            animate={isUntied ? { scale: 0, opacity: 0, y: 80, rotate: 180 } : { scale: 1, opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "backIn" }}
          >
            <div className="relative flex items-center justify-center h-24 w-40 group-hover:scale-110 transition-transform duration-500 will-change-transform drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
               
               {/* Tail Left */}
               <div className="absolute w-12 h-20 bg-gradient-to-b from-[#e3a830] via-[#c2871b] to-[#784e03] -bottom-14 left-8 -rotate-[20deg]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)" }}></div>
               {/* Tail Right */}
               <div className="absolute w-12 h-24 bg-gradient-to-b from-[#f5bd42] via-[#c2871b] to-[#784e03] -bottom-16 right-6 rotate-[15deg]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)" }}></div>

               {/* Loop Left */}
               <div className="absolute left-0 w-20 h-16 rounded-[45%] bg-gradient-to-br from-[#f2ca6b] via-[#dca331] to-[#8c600c] -rotate-[15deg] shadow-[inset_0_-5px_10px_rgba(0,0,0,0.6)] border border-[#ffe89c]/40"></div>
               
               {/* Loop Right */}
               <div className="absolute right-0 w-20 h-16 rounded-[45%] bg-gradient-to-bl from-[#f2ca6b] via-[#dca331] to-[#8c600c] rotate-[15deg] shadow-[inset_0_-5px_10px_rgba(0,0,0,0.6)] border border-[#ffe89c]/40"></div>

               {/* Center Knot Box */}
               <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#fff7d6] via-[#dca331] to-[#5e3800] shadow-[0_5px_15px_rgba(0,0,0,0.8)] z-10 border-[2px] border-[#ffe89c]/60 flex items-center justify-center animate-[pulse_2s_infinite]">
                 {/* Click Me Text inside knot */}
                 <span className="font-sans text-[9px] sm:text-[11px] font-bold text-[#4a2e00] uppercase tracking-widest leading-none text-center">Open</span>
               </div>
            </div>
            
            <p className="mt-8 text-[#fff] font-serif text-sm sm:text-base tracking-[0.25em] font-medium uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)] opacity-90 group-hover:opacity-100 transition-opacity">
              Click to Untie
            </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CurtainReveal;
