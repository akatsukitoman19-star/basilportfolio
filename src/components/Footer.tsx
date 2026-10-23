import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070708] border-t border-neutral-900 text-neutral-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-neutral-850">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded bg-[#FFD21F] flex items-center justify-center font-black text-black font-condensed text-lg">
                CB
              </div>
              <span className="font-condensed font-black text-2xl tracking-wider text-white uppercase">
                COACH BASIL
              </span>
            </div>
            <p className="font-condensed font-bold text-xs uppercase tracking-widest text-[#FFD21F] mb-2">
              YOUR FITNESS PARTNER · CERTIFIED FITNESS COACH
            </p>
            <p className="text-sm text-neutral-400 max-w-sm">
              Personal training and nutrition guidance designed around you, your goals, and the comfort of your own space.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 flex flex-col gap-2.5">
            <span className="font-condensed font-bold text-xs uppercase tracking-widest text-neutral-500">
              Quick Links
            </span>
            <a href="#why-train" className="text-sm hover:text-[#FFD21F] transition-colors w-fit">
              Why Train With Me
            </a>
            <a href="#services" className="text-sm hover:text-[#FFD21F] transition-colors w-fit">
              My Services
            </a>
            <a href="#contact" className="text-sm hover:text-[#FFD21F] transition-colors w-fit">
              Contact & Booking
            </a>
          </div>

          {/* Contact Actions */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-condensed font-bold text-xs uppercase tracking-widest text-neutral-500">
              Direct Inquiries
            </span>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="tel:+918240649650"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold text-neutral-200 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
                <span>+91 8240649650</span>
              </a>
              <a
                href="https://wa.me/918981407365"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded bg-neutral-900 border border-neutral-800 hover:border-[#25D366] text-xs font-semibold text-neutral-200 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>+91 8981407365</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Coach Basil. All rights reserved.</p>
          <p className="font-condensed font-bold uppercase tracking-wider text-neutral-300">
            Stronger Body. Better Life.
          </p>
        </div>
      </div>
    </footer>
  );
};
