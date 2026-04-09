import React from 'react';
import { motion } from 'framer-motion';

const RSVPSection = () => {
  return (
    <section className="py-12 px-6 flex flex-col items-center relative">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-serif text-3xl sm:text-4xl text-textDark tracking-widest uppercase mb-10 text-center"
      >
        <span className="font-cursive lowercase text-5xl sm:text-6xl text-goldAccent block mb-2">Kindly</span> 
        Respond
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-sm bg-archInner p-8 rounded-t-[50%] rounded-b-3xl shadow-xl border-4 border-archBorder/60 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-floralPurple/5 opacity-30 mix-blend-multiply pointer-events-none"></div>

        <form className="flex flex-col gap-5 items-center relative z-10 pt-4">
          
          <div className="w-full">
            <label className="block font-sans text-[10px] tracking-widest uppercase text-textMid mb-2">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b-2 border-archBorder text-textDark font-sans py-2 focus:outline-none focus:border-goldAccent transition-colors placeholder:text-textMid/40"
              placeholder="Your wonderful name"
            />
          </div>

          <div className="w-full">
            <label className="block font-sans text-[10px] tracking-widest uppercase text-textMid mb-2 mt-2">Will you attend?</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer font-serif italic text-textDark">
                <input type="radio" name="attend" className="accent-archBorder w-4 h-4" defaultChecked />
                Joyfully Accepts
              </label>
              <label className="flex items-center gap-2 cursor-pointer font-serif italic text-textDark">
                <input type="radio" name="attend" className="accent-archBorder w-4 h-4" />
                Regretfully Declines
              </label>
            </div>
          </div>

          <div className="w-full">
            <label className="block font-sans text-[10px] tracking-widest uppercase text-textMid mb-2 mt-2">Wishes for the couple</label>
            <textarea 
              rows="3"
              className="w-full bg-archBorder/10 border border-archBorder/50 rounded-xl text-textDark font-sans p-3 focus:outline-none focus:border-goldAccent transition-colors placeholder:text-textMid/40 resize-none"
              placeholder="Leave a lovely message..."
            ></textarea>
          </div>

          <button 
            type="button"
            className="mt-4 px-10 py-3 bg-archBorder text-white font-sans text-xs tracking-[0.2em] uppercase rounded-full hover:bg-goldAccent transition-all duration-300 shadow-md hover:shadow-lg w-full"
          >
            Send RSVP
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
