import React from 'react';
import { motion } from 'framer-motion';

const DetailsSection = () => {
  return (
    <section className="py-12 px-6 flex flex-col items-center relative">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-serif text-3xl sm:text-4xl text-textDark tracking-widest uppercase mb-12 text-center"
      >
        Event <span className="text-goldAccent font-cursive lowercase text-5xl sm:text-6xl mx-2">&</span> Venue
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-sm bg-archInner/90 p-8 rounded-[3rem] rounded-tl-none rounded-br-none shadow-lg border-[1px] border-archBorder backdrop-blur-sm relative"
      >
        {/* Decorative elements corner */}
        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-goldAccent/60"></div>
        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-goldAccent/60"></div>

        <div className="flex flex-col gap-8 items-center text-center">
          
          {/* Details */}
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-xl tracking-widest text-textDark mb-1">Engagement</h3>
            <p className="font-sans text-xs tracking-[0.2em] text-textMid uppercase mb-6">Ceremony</p>
            
            <div className="flex items-center gap-6 my-2">
              <div className="flex flex-col items-end">
                <span className="font-sans font-semibold text-lg text-textDark">28</span>
                <span className="text-[10px] text-textMid uppercase tracking-widest">May</span>
              </div>
              
              <div className="w-px h-10 bg-archBorder"></div>
              
              <div className="flex flex-col items-start translate-y-1">
                <span className="font-sans font-semibold text-lg text-textDark leading-none">2025</span>
                <span className="font-sans text-xs text-textMid uppercase tracking-wider mt-1">Wednesday</span>
              </div>
            </div>

            <p className="text-sm text-textDark font-sans mt-4 italic">
              Join us for dinner at 8:00 PM
            </p>
          </div>

          <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-archBorder to-transparent my-2"></div>

          {/* Venue */}
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-xl tracking-wider text-textDark mb-2">Royal Palace XYZ</h3>
            <p className="text-textMid text-xs font-sans tracking-wider leading-relaxed uppercase mb-6">
              Meerut, Uttar Pradesh<br/>India
            </p>

            <button className="px-8 py-3 bg-blushBg border border-archBorder/60 text-textDark font-sans text-xs tracking-[0.2em] uppercase hover:bg-archBorder/20 hover:text-textDark transition-all duration-300 shadow-sm relative overflow-hidden group">
              <span className="relative z-10">Open Map</span>
              <div className="absolute inset-0 h-full w-0 bg-archBorder/20 transition-all duration-500 ease-out group-hover:w-full z-0"></div>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DetailsSection;
