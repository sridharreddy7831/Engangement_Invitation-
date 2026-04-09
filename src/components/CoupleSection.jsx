import React from 'react';
import { motion } from 'framer-motion';

const CoupleSection = () => {
  return (
    <section className="py-16 px-6 flex flex-col items-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-floralPink/20 via-transparent to-transparent pointer-events-none blur-3xl z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center w-full"
      >
        <span className="font-cursive text-floralPurple text-2xl mb-2 italic drop-shadow-sm">Two Hearts, One Soul</span>
        <h2 className="font-serif text-3xl md:text-4xl text-center text-textDark tracking-widest uppercase mb-12">
          Meet the Couple
        </h2>

        <div className="flex flex-row justify-center items-center gap-4 md:gap-8 w-full relative">

          {/* Ambient Glow behind cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-3/5 bg-goldAccent/20 blur-3xl rounded-full pointer-events-none"></div>

          {/* Groom Card */}
          <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex flex-col items-center flex-1 z-10"
          >
            {/* Round Short Pic Style */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white shadow-xl shadow-pink-900/10 border-4 border-white p-1 relative group flex items-center justify-center">
              <div className="absolute -inset-2 rounded-full border border-goldAccent/30 opacity-50 group-hover:scale-105 transition-transform duration-500 pointer-events-none"></div>
              <div className="absolute -inset-4 rounded-full border border-floralPink/30 opacity-30 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>

              <div className="w-full h-full rounded-full overflow-hidden relative border border-archBorder/20">
                <img src="/assets/groom1.jpg" alt="Groom" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center">
              <h3 className="font-cursive text-3xl md:text-4xl text-textDark drop-shadow-sm">Shivam</h3>
              <div className="w-8 h-[1px] bg-goldAccent my-2"></div>
              <span className="text-xs text-textMid uppercase tracking-[0.2em] font-medium">The Groom</span>
            </div>
          </motion.div>

          {/* Center Graphic */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="flex flex-col items-center px-1 z-20 self-center mt-[-4rem]"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-lg border border-goldAccent/30 flex items-center justify-center backdrop-blur-md">
              <span className="font-cursive text-2xl md:text-3xl text-floralPurple drop-shadow-sm">&</span>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex flex-col items-center flex-1 z-10 pt-10" // Gentle stagger
          >
            {/* Round Short Pic Style */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white shadow-xl shadow-purple-900/10 border-4 border-white p-1 relative group flex items-center justify-center">
              <div className="absolute -inset-2 rounded-full border border-goldAccent/30 opacity-50 group-hover:scale-105 transition-transform duration-500 pointer-events-none"></div>
              <div className="absolute -inset-4 rounded-full border border-floralPurple/30 opacity-30 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>

              <div className="w-full h-full rounded-full overflow-hidden relative border border-archBorder/20">
                <img src="/assets/bride1.jpg" alt="Bride" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center">
              <h3 className="font-cursive text-3xl md:text-4xl text-textDark drop-shadow-sm">Shakuntala</h3>
              <div className="w-8 h-[1px] bg-goldAccent my-2"></div>
              <span className="text-xs text-textMid uppercase tracking-[0.2em] font-medium">The Bride</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default CoupleSection;
