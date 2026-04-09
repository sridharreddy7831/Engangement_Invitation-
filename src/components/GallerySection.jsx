import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=400&q=80"
  ];

  return (
    <section className="py-12 px-6 flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-serif text-2xl text-center text-textDark tracking-widest uppercase mb-10"
      >
        Our Memories
      </motion.h2>

      <div className="grid grid-cols-2 gap-4 w-full">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`overflow-hidden shadow-md border-4 border-archBorder/50 relative group ${index === 0 || index === 3 ? 'aspect-[4/5] rounded-tl-[3rem] rounded-br-[3rem]' : 'aspect-square rounded-tr-[3rem] rounded-bl-[3rem]'}`}
          >
            <div className="absolute inset-0 bg-floralPink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            <img 
              src={src} 
              alt={`Gallery Engagement ${index + 1}`} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
