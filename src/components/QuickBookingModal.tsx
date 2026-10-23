import React, { useState } from 'react';
import { X, MessageCircle, Phone, Send, CheckCircle2 } from 'lucide-react';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [preferredService, setPreferredService] = useState('1-on-1 Coaching');

  if (!isOpen) return null;

  const handleQuickWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = name
      ? `Hello Coach Basil, my name is ${name}. I would like to book a personal training session (${preferredService}) at my place.`
      : `Hello Coach Basil, I would like to book a personal training session (${preferredService}) at my place.`;
    window.open(`https://wa.me/918981407365?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#141416] border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-850 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="font-condensed font-bold text-xs uppercase tracking-widest text-[#FFD21F]">
            Direct Booking
          </span>
          <h3 className="font-condensed text-3xl font-black uppercase text-white tracking-wide mt-1">
            Book With Coach Basil
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Personal training at your place. Choose how you would like to connect.
          </p>
        </div>

        {/* Direct Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a
            href="https://wa.me/918981407365?text=Hello%20Coach%20Basil,%20I%20would%20like%20to%20book%20a%20personal%20training%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/50 text-white transition-all text-center"
          >
            <MessageCircle className="w-6 h-6 text-[#25D366]" />
            <span className="font-condensed font-bold text-sm tracking-wider uppercase">
              WhatsApp
            </span>
            <span className="text-[11px] text-neutral-400 font-mono">+91 8981407365</span>
          </a>

          <a
            href="tel:+918240649650"
            className="flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl bg-[#FFD21F]/15 hover:bg-[#FFD21F]/25 border border-[#FFD21F]/50 text-white transition-all text-center"
          >
            <Phone className="w-6 h-6 text-[#FFD21F]" />
            <span className="font-condensed font-bold text-sm tracking-wider uppercase">
              Phone Call
            </span>
            <span className="text-[11px] text-neutral-400 font-mono">+91 8240649650</span>
          </a>
        </div>

        {/* Quick WhatsApp Form */}
        <form onSubmit={handleQuickWhatsApp} className="space-y-4 pt-4 border-t border-neutral-800">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              Your Name (Optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex"
              className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFD21F]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              Interested Service
            </label>
            <select
              value={preferredService}
              onChange={(e) => setPreferredService(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#FFD21F] cursor-pointer"
            >
              <option value="1-on-1 Coaching">1-on-1 Coaching</option>
              <option value="Custom Workout Plans">Custom Workout Plans</option>
              <option value="Nutrition Guidance">Nutrition Guidance</option>
              <option value="All Services Package">Comprehensive Training & Nutrition</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-lg font-condensed font-bold text-base uppercase tracking-wider bg-[#FFD21F] hover:bg-[#ffe052] text-black transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Send className="w-4 h-4 text-black" />
            <span>Open in WhatsApp</span>
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-neutral-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD21F]" />
          <span>Stronger Body. Better Life.</span>
        </div>
      </div>
    </div>
  );
};
