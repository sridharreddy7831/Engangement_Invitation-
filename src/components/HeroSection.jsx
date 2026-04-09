import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden bg-blushBg">
      {/* Background Decor */}
      <img src="/floral-corner.png" className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 mix-blend-multiply opacity-90 object-cover -translate-x-4 -translate-y-4" alt="" />
      <img src="/floral-corner.png" className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 mix-blend-multiply opacity-90 object-cover scale-x-[-1] translate-x-4 -translate-y-4" alt="" />
      <img src="/floral-bottom.png" className="absolute bottom-0 w-full min-w-[500px] h-48 sm:h-64 mix-blend-multiply opacity-90 object-cover" alt="" />

      {/* Arch Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-full h-[92%] max-h-[850px] max-w-sm sm:max-w-md mx-auto flex flex-col items-center justify-evenly py-6 sm:py-8 px-4 sm:px-6 shadow-2xl bg-archInner border-[6px] sm:border-[8px] border-archBorder rounded-t-[10rem] sm:rounded-t-[12rem] rounded-b-xl overflow-hidden"
      >
        {/* Faint Rose Background inside Arch */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-64 h-64 bg-floralPink rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-evenly h-full w-full text-center">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="text-[10px] text-textMid flex items-center justify-center gap-2 mb-1 sm:mb-2">
              <span className="w-6 sm:w-8 h-[1px] bg-textMid/40"></span>
              <span>⚘</span>
              <span className="w-6 sm:w-8 h-[1px] bg-textMid/40"></span>
            </div>
            <h2 className="font-serif text-lg sm:text-2xl tracking-widest text-textDark uppercase leading-tight mb-2 sm:mb-4">
              Engagement<br />Ceremony
            </h2>
            <p className="font-sans text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.25em] text-textMid uppercase px-2">
              You are invited to the engagement of
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="flex flex-col items-center my-2 sm:my-4"
          >
            <h1 className="font-cursive text-4xl sm:text-6xl text-goldAccent text-center leading-none">
              Shivam
            </h1>
            <div className="flex items-center gap-2 sm:gap-3 my-1 sm:my-2">
              {/* <span className="font-cursive text-2xl sm:text-4xl text-textMid">&</span> */}
              <span className="text-lg sm:text-xl opacity-60">💍</span>
            </div>
            <h1 className="font-cursive text-4xl sm:text-6xl text-goldAccent text-center leading-none">
              Shakuntala
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex items-center justify-center gap-3 sm:gap-4 w-full px-2 mt-2 sm:mt-4"
          >
            <div className="flex-1 border-b border-textDark/60 py-2 sm:py-3 text-center">
              <span className="font-serif text-xs sm:text-sm tracking-widest">2025</span>
            </div>

            <div className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-textDark/60 bg-archInner relative shrink-0 -translate-y-1">
              <span className="font-serif text-2xl sm:text-3xl tracking-tight leading-none text-textDark">28</span>
              <span className="font-sans text-[8px] sm:text-[10px] tracking-widest uppercase mt-0.5 sm:mt-1 text-textMid">May</span>
            </div>

            <div className="flex-1 border-b border-textDark/60 py-2 sm:py-3 text-center">
              <span className="font-serif text-[10px] sm:text-sm tracking-widest whitespace-nowrap">8:00 PM</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-2 sm:mt-4"
          >
            <p className="font-serif text-[10px] sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] text-textDark uppercase leading-relaxed max-w-[180px] sm:max-w-[200px] mx-auto">
              Royal Palace XYZ,<br />Meerut
            </p>
            <div className="text-textMid flex items-center justify-center gap-2 mt-2 sm:mt-4 text-[10px]">
              <span className="w-6 h-[1px] bg-textMid/40"></span>
              <span>❦</span>
              <span className="w-6 h-[1px] bg-textMid/40"></span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
