import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnvelopeOverlay = ({ onOpenComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Sequence of events:
    // 1. Flap opens (0 - 0.6s)
    // 2. Wait for 0.2s
    // 3. Paper flies up slowly (0.8s - 2.6s)
    // 4. Paper comes down and scales massively (2.6s - 4.0s)

    setTimeout(() => {
      setIsExpanding(true);
    }, 2600);

    setTimeout(() => {
      onOpenComplete();
    }, 4000); // Give it enough time to fully scale up and cover screen
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-textDark/90 backdrop-blur-sm flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Container */}
      <div
        className="relative flex items-center justify-center cursor-pointer"
        style={{ width: '340px', height: '220px' }}
        onClick={handleOpen}
      >

        {/* ENVELOPE BACK */}
        <div className="absolute inset-0 bg-archBorder rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-0 overflow-hidden">
          {/* A slight internal shadow/texture */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* PAPER (The Invitation Letter) */}
        <motion.div
          className="absolute left-1/2 bottom-0 w-[300px] h-[190px] bg-blushBg rounded-t-lg shadow-xl flex flex-col items-center pl-4 pr-4 pt-8"
          initial={{ x: '-50%', y: 0, scale: 1, zIndex: 10 }}
          animate={
            isOpen
              ? {
                y: isExpanding ? 100 : -220, // Fly out and then move down to center when expanding
                scale: isExpanding ? 30 : 1, // Massively expand to cover screen
                zIndex: isExpanding ? 50 : 10,
              }
              : { x: '-50%', y: 0, scale: 1, zIndex: 10 }
          }
          transition={{
            duration: isExpanding ? 1.4 : 2.0,
            delay: isOpen && !isExpanding ? 0.6 : 0,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "center center" }}
        >
          {/* Inner frame on paper */}
          <motion.div
            animate={{ opacity: isExpanding ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="border-2 border-archBorder/40 w-full h-full rounded-md flex flex-col items-center justify-center py-4 relative"
          >
            <h2 className="font-cursive text-4xl text-goldAccent mb-2">You're Invited</h2>

            <div className="absolute bottom-2 text-textMid/50 text-[10px] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-textMid/30"></span>
              <span>❦</span>
              <span className="w-8 h-[1px] bg-textMid/30"></span>
            </div>
          </motion.div>
        </motion.div>

        {/* ENVELOPE BOTTOM FLAP (Front) */}
        <div
          className="absolute bottom-0 left-0 w-0 h-0 z-20 pointer-events-none drop-shadow-md"
          style={{
            borderLeft: '170px solid transparent',
            borderRight: '170px solid transparent',
            borderBottom: '120px solid #ecd3cc', // Lighter than back
          }}
        ></div>

        {/* ENVELOPE LEFT FLAP (Front) */}
        <div
          className="absolute bottom-0 left-0 w-0 h-0 z-20 pointer-events-none drop-shadow-sm"
          style={{
            borderTop: '110px solid transparent',
            borderBottom: '110px solid transparent',
            borderLeft: '170px solid #e1b9b1',
          }}
        ></div>

        {/* ENVELOPE RIGHT FLAP (Front) */}
        <div
          className="absolute bottom-0 right-0 w-0 h-0 z-20 pointer-events-none drop-shadow-sm"
          style={{
            borderTop: '110px solid transparent',
            borderBottom: '110px solid transparent',
            borderRight: '170px solid #e5beb6',
          }}
        ></div>

        {/* ENVELOPE TOP FLAP */}
        <motion.div
          className="absolute top-0 left-0 w-0 h-0 z-30 pointer-events-none drop-shadow-xl"
          style={{
            borderLeft: '170px solid transparent',
            borderRight: '170px solid transparent',
            borderTop: '130px solid var(--color-archBorder)',
            transformOrigin: 'top center',
          }}
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? 180 : 0, zIndex: isOpen ? 5 : 30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Wax Seal - we place it inside the flap so it rotates with it */}
          <motion.div
            className="absolute flex items-center justify-center shadow-lg"
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: 'var(--color-goldAccent)',
              borderRadius: '50%',
              // Center the seal exactly at the tip of the flap (which rests in the middle of the envelope)
              top: '-30px',
              left: '-30px',
              transform: 'rotateX(0deg)',
            }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            {/* Wax seal outer rim styling */}
            <div className="absolute inset-1 rounded-full border-2 border-white/20"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>

      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-20 text-white/70 font-sans tracking-widest text-xs uppercase"
        >
          Tap the envelope to open
        </motion.div>
      )}
    </motion.div>
  );
};

export default EnvelopeOverlay;
