import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0B0C]/90 backdrop-blur-md border-b border-neutral-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
          <div className="w-9 h-9 rounded bg-[#FFD21F] flex items-center justify-center font-black text-black font-condensed text-xl tracking-tighter">
            CB
          </div>
          <div className="flex flex-col">
            <span className="font-condensed font-black text-xl sm:text-2xl tracking-wider text-white uppercase group-hover:text-[#FFD21F] transition-colors">
              COACH BASIL
            </span>
          </div>
        </a>

        {/* Zone 2: Clean single-line text nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase text-neutral-300">
          <a
            href="#why-train"
            className="hover:text-[#FFD21F] transition-colors whitespace-nowrap"
          >
            Why Train
          </a>
          <a
            href="#services"
            className="hover:text-[#FFD21F] transition-colors whitespace-nowrap"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-[#FFD21F] transition-colors whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+918240649650"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white px-3 py-2 rounded border border-neutral-700/80 hover:border-neutral-500 transition-colors"
            title="Call +91 8240649650"
          >
            <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span>Call Now</span>
          </a>

          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded font-condensed font-bold text-sm sm:text-base uppercase tracking-wider text-black bg-[#FFD21F] hover:bg-[#ffe052] transition-transform active:scale-95 shadow-md hover:shadow-[0_0_20px_rgba(255,210,31,0.4)] whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-black text-black" />
            <span>Book Session</span>
          </button>
        </div>
      </div>
    </header>
  );
};
