import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative min-h-[90vh] flex flex-col items-center justify-center bg-blushBg overflow-hidden pb-40 border-t border-archBorder/30">
      
      {/* Background Graphic to highlight the couple at the end */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] pointer-events-none flex flex-col justify-end items-center z-0">
        {/* Decorative Arch Behind them */}
        <div className="absolute bottom-0 w-[280px] sm:w-[350px] h-[300px] border-t-4 border-goldAccent/30 rounded-t-full bg-gradient-to-t from-goldAccent/20 to-transparent flex items-center justify-center">
          <div className="absolute bottom-0 w-[240px] sm:w-[310px] h-[260px] border-t border-goldAccent/20 rounded-t-full"></div>
        </div>
        {/* Glow / Halo Effect */}
        <div className="absolute bottom-[-50px] w-[400px] h-[400px] bg-[#fca5a5]/30 mix-blend-multiply blur-[80px] rounded-full"></div>
      </div>



      <div className="relative z-20 flex flex-col items-center text-center w-full px-4 mb-20 sm:mb-32">
        <div className="flex flex-col items-center justify-center pt-8 pb-6 px-6 sm:px-10 bg-white/70 backdrop-blur-md border-[2px] border-goldAccent/30 rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] mb-4 pointer-events-auto">
          <img src="/logo.png" alt="Uthsav Invites Logo" className="w-16 sm:w-20 mb-3 drop-shadow-md" />
          
          <p className="font-serif text-[10px] sm:text-xs tracking-[0.2em] text-textMid uppercase mb-2">
            Designed & Developed By
          </p>
          <h3 className="font-serif text-xl sm:text-2xl tracking-widest text-[#a16f12] font-bold uppercase mb-4">
            Uthsav Invites
          </h3>
          
          <div className="w-1/2 h-px bg-goldAccent/30 mb-4"></div>

          <h3 className="font-serif text-[11px] sm:text-[13px] tracking-wider text-[#dca331] font-semibold uppercase mb-4">
            Sridhar Reddy Nalipi
          </h3>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-2">
            <a href="https://wa.me/917386376302?text=I%20like%20that%20design..." target="_blank" rel="noopener noreferrer" className="text-textMid hover:text-goldAccent transition-transform hover:scale-110">
              <FaWhatsapp size={22} />
            </a>
            <a href="https://www.instagram.com/uthsav_invites/" target="_blank" rel="noopener noreferrer" className="text-textMid hover:text-goldAccent transition-transform hover:scale-110">
              <FaInstagram size={22} />
            </a>
            <a href="https://uthsavinvites.in/" target="_blank" rel="noopener noreferrer" className="text-textMid hover:text-goldAccent transition-transform hover:scale-110">
              <FaGlobe size={20} />
            </a>
          </div>
        </div>
        <p className="font-sans text-[9px] sm:text-[11px] text-textDark tracking-[0.3em] uppercase mt-4">
          Thank you for celebrating with us
        </p>
      </div>

    </footer>
  );
};

export default Footer;
