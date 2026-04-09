import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import DetailsSection from './components/DetailsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import EnvelopeOverlay from './components/EnvelopeOverlay';
import { FaMusic, FaPause } from 'react-icons/fa';
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [showEnvelope, setShowEnvelope] = useState(true);

  useEffect(() => {
    if (showEnvelope) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
  }, [showEnvelope]);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    mass: 1.2
  });

  // Transform values for horizontal scroll animation
  // Bride moves from left edge towards center (reduced end value to prevent overlap)
  const brideX = useTransform(smoothProgress, [0, 1], ["-10vw", "15vw"]);
  const brideOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.6, 1, 1, 0.8]);
  const brideScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.1, 1.5]);

  // Groom moves from right edge towards center (reduced end value to prevent overlap)
  const groomX = useTransform(smoothProgress, [0, 1], ["10vw", "-15vw"]);
  const groomOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.6, 1, 1, 0.8]);
  const groomScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.1, 1.5]);

  const namesOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  const namesY = useTransform(smoothProgress, [0.85, 0.95], [30, 0]);
  const namesScale = useTransform(smoothProgress, [0.85, 0.95], [0.8, 1]);

  const [hasBlasted, setHasBlasted] = useState(false);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    // When scroll reaches the point where names are revealing, blast confetti
    if (latest > 0.92 && !hasBlasted) {
      setHasBlasted(true);
      
      const duration = 4000;
      const end = Date.now() + duration;

      const frame = () => {
        // Left Cannon
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 },
          colors: ['#fca5a5', '#dca331', '#ffffff', '#eab308'],
          zIndex: 50
        });
        // Right Cannon
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 },
          colors: ['#fca5a5', '#dca331', '#ffffff', '#eab308'],
          zIndex: 50
        });
        // Center huge blast pop when starting
        if (Date.now() > end - duration + 100 && Date.now() < end - duration + 200) {
           confetti({
             particleCount: 100,
             spread: 100,
             startVelocity: 80,
             origin: { x: 0.5, y: 1 },
             zIndex: 50,
             colors: ['#fca5a5', '#dca331', '#ffffff', '#eab308']
           });
        }

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();

    } else if (latest < 0.85) {
      // Reset if user scrolls up slightly so it can blast again
      setHasBlasted(false);
    }
  });

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Audio play error:", e));
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    let interactionListenersAdded = false;

    const enableAudioOnInteract = () => {
      if (audioRef.current && audioRef.current.paused) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
            removeListeners();
          }).catch(e => {
            console.log("Playback failed on interaction:", e);
          });
        }
      } else if (audioRef.current && !audioRef.current.paused) {
        setIsPlaying(true);
        removeListeners();
      }
    };

    const removeListeners = () => {
      if (interactionListenersAdded) {
        ['click', 'touchstart', 'scroll', 'keydown'].forEach(event => {
          document.removeEventListener(event, enableAudioOnInteract);
        });
        interactionListenersAdded = false;
      }
    };

    // Attempt normal autoplay first
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // If blocked, set up interaction listeners to play sound on interaction
          console.log("Autoplay blocked, waiting for user interaction...");
          
          ['click', 'touchstart', 'scroll', 'keydown'].forEach(event => {
            document.addEventListener(event, enableAudioOnInteract, { passive: true });
          });
          interactionListenersAdded = true;
          
          setIsPlaying(false);
        });
      }
    }

    return () => {
      removeListeners();
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showEnvelope && (
          <EnvelopeOverlay key="envelope" onOpenComplete={() => setShowEnvelope(false)} />
        )}
      </AnimatePresence>

      <div className="relative min-h-screen bg-blushBg flex flex-col font-sans selection:bg-archBorder selection:text-white">

      {/* Background Decor Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-floralPink rounded-full mix-blend-multiply filter blur-[100px] opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-floralPurple rounded-full mix-blend-multiply filter blur-[120px] opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Animated Fixed Couple Elements */}
      <div className="fixed bottom-0 left-0 w-full flex justify-between pointer-events-none z-[100] px-4 pb-2">
        <motion.div
          style={{ x: brideX, opacity: brideOpacity, scale: brideScale }}
          className="flex flex-col items-center origin-bottom"
        >
          <img src="/assets/bride.png" alt="Bride" className="w-150 md:w-48 lg:w-64 drop-shadow-xl" />
        </motion.div>

        <motion.div
          style={{ x: groomX, opacity: groomOpacity, scale: groomScale }}
          className="flex flex-col items-center origin-bottom"
        >
          <img src="/assets/groom.png" alt="Groom" className="w-150 md:w-48 lg:w-64 drop-shadow-xl" />
        </motion.div>
      </div>

      {/* Names AT THEIR LEGS - IN FRONT OF THEM */}
      <motion.div 
        className="fixed bottom-[20px] sm:bottom-[30px] w-full flex justify-center items-center px-4 z-[200] pointer-events-none"
        style={{ opacity: namesOpacity, y: namesY, scale: namesScale }}
      >
         <h2 className="font-cursive text-5xl sm:text-6xl text-goldAccent drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)] whitespace-nowrap">
           Shivam <span className="text-textMid text-3xl mx-2">&</span> Shakuntala
         </h2>
      </motion.div>

      {/* Music Toggle */}
      <button
        onClick={toggleMusic}
        className={`fixed top-4 right-4 z-[9999] p-3 bg-white/80 backdrop-blur-md text-textDark rounded-full shadow-lg border border-archBorder/30 transition-transform ${
          !isPlaying ? "animate-bounce hover:scale-110" : ""
        }`}
        aria-label="Toggle music"
      >
        {isPlaying ? (
           <FaPause size={16} className="animate-[spin_3s_linear_infinite]" />
        ) : (
           <FaMusic size={16} />
        )}
      </button>

      {/* Background Audio */}
      <audio 
        ref={audioRef} 
        src="/assets/music1.mp3" 
        autoPlay 
        loop 
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <main className="relative z-10 flex flex-col w-full mx-auto max-w-lg shadow-[0_0_50px_rgba(0,0,0,0.05)] bg-blushBg min-h-screen border-l border-r border-archBorder/20 overflow-x-hidden">
        <HeroSection />

        <div className="w-full flex justify-center py-8">
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-textMid/30 to-transparent"></div>
        </div>

        <CoupleSection />

        <div className="w-full flex justify-center py-8">
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-textMid/30 to-transparent"></div>
        </div>

        <DetailsSection />

        <div className="w-full flex justify-center py-8">
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-textMid/30 to-transparent"></div>
        </div>

        <GallerySection />

        <Footer />
      </main>
    </div>
    </>
  );
}

export default App;
