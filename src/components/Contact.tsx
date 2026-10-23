import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle, Clock, MapPin, User, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [goal, setGoal] = useState('Strength & Body Conditioning');
  const [preferredTime, setPreferredTime] = useState('Morning');
  const [notes, setNotes] = useState('');
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(label);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const messageParts = [
      `Hello Coach Basil, I'd like to book a personal training session at my place.`,
      name ? `Name: ${name}` : '',
      area ? `Location/Area: ${area}` : '',
      `Goal: ${goal}`,
      `Preferred Slot: ${preferredTime}`,
      notes ? `Notes: ${notes}` : '',
    ].filter(Boolean);

    const fullMessage = messageParts.join('\n');
    const url = `https://wa.me/918981407365?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0B0C] relative">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[#FFD21F]/5 blur-[130px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#FFD21F]"></span>
            <span className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-[#FFD21F]">
              Direct Contact & Booking
            </span>
            <span className="w-6 h-[2px] bg-[#FFD21F]"></span>
          </div>
          <h2 className="font-condensed text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            CONNECT WITH <span className="text-[#FFD21F]">COACH BASIL</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base sm:text-lg max-w-xl mx-auto">
            Ready to train in the comfort of your own space? Reach out directly via WhatsApp or phone call.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Call & WhatsApp Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="p-7 rounded-2xl bg-[#141416] border-2 border-[#25D366]/40 hover:border-[#25D366] transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 blur-2xl pointer-events-none" />
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-black flex items-center justify-center font-bold shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                    <MessageCircle className="w-6 h-6 fill-black text-black" />
                  </div>
                  <div>
                    <span className="font-condensed font-bold text-xs uppercase tracking-widest text-[#25D366]">
                      Fastest Response
                    </span>
                    <h3 className="font-condensed text-2xl font-black text-white uppercase tracking-wider">
                      WhatsApp
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('+91 8981407365', 'whatsapp')}
                  className="text-xs text-neutral-400 hover:text-white px-2 py-1 rounded bg-neutral-800/80 transition-colors"
                  title="Copy WhatsApp number"
                >
                  {copiedNumber === 'whatsapp' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <p className="text-sm text-neutral-300 mb-5">
                Chat directly with Coach Basil to discuss your fitness goals, ask questions, or arrange your first in-home session.
              </p>

              <div className="text-xl sm:text-2xl font-mono font-bold text-white mb-5 tracking-tight">
                +91 8981407365
              </div>

              <a
                href="https://wa.me/918981407365"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded font-condensed font-bold text-base uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-black transition-transform active:scale-98 shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-black text-black" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-7 rounded-2xl bg-[#141416] border-2 border-[#FFD21F]/40 hover:border-[#FFD21F] transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD21F]/10 blur-2xl pointer-events-none" />
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FFD21F] text-black flex items-center justify-center font-bold shadow-[0_0_20px_rgba(255,210,31,0.3)]">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <span className="font-condensed font-bold text-xs uppercase tracking-widest text-[#FFD21F]">
                      Direct Line
                    </span>
                    <h3 className="font-condensed text-2xl font-black text-white uppercase tracking-wider">
                      Phone Call
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('+91 8240649650', 'call')}
                  className="text-xs text-neutral-400 hover:text-white px-2 py-1 rounded bg-neutral-800/80 transition-colors"
                  title="Copy phone number"
                >
                  {copiedNumber === 'call' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <p className="text-sm text-neutral-300 mb-5">
                Prefer to talk directly? Call anytime during standard daytime training hours for immediate consultation.
              </p>

              <div className="text-xl sm:text-2xl font-mono font-bold text-white mb-5 tracking-tight">
                +91 8240649650
              </div>

              <a
                href="tel:+918240649650"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded font-condensed font-bold text-base uppercase tracking-wider bg-[#FFD21F] hover:bg-[#ffe052] text-black transition-transform active:scale-98 shadow-md"
              >
                <Phone className="w-5 h-5" />
                <span>Call +91 8240649650</span>
              </a>
            </div>

            {/* Trust badge */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#FFD21F] shrink-0" />
              <p className="text-xs text-neutral-400">
                Sessions are personalized and delivered directly at your place. Flexible scheduling tailored to your routine.
              </p>
            </div>

          </div>

          {/* Right Column: Quick Session Booking Form (Pre-fills WhatsApp) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#141416] border border-neutral-800">
              <div className="mb-6">
                <span className="font-condensed font-bold text-xs tracking-widest text-[#FFD21F] uppercase">
                  Schedule Assistance
                </span>
                <h3 className="font-condensed text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mt-1">
                  Book A Personal Training Session
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  Fill in your preferred details below to launch a customized WhatsApp message directly to Coach Basil.
                </p>
              </div>

              <form onSubmit={handleWhatsAppBooking} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full pl-9 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFD21F] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Area / Location */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Your Area / Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder="e.g. City / Apartment Area"
                        className="w-full pl-9 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFD21F] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Primary Goal */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Primary Fitness Goal
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-3 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#FFD21F] transition-colors cursor-pointer"
                    >
                      <option value="Strength & Muscle Building">Strength & Muscle Building</option>
                      <option value="Weight Loss & Fat Reduction">Weight Loss & Fat Reduction</option>
                      <option value="Body Recomposition">Body Recomposition</option>
                      <option value="Flexibility & Mobility">Flexibility & Mobility</option>
                      <option value="Nutrition Guidance Only">Nutrition Guidance</option>
                      <option value="General Health & Energy">General Health & Energy</option>
                    </select>
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Preferred Training Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full pl-9 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#FFD21F] transition-colors cursor-pointer"
                      >
                        <option value="Morning (6:00 AM – 10:00 AM)">Morning (6:00 AM – 10:00 AM)</option>
                        <option value="Midday (11:00 AM – 3:00 PM)">Midday (11:00 AM – 3:00 PM)</option>
                        <option value="Evening (4:00 PM – 8:30 PM)">Evening (4:00 PM – 8:30 PM)</option>
                        <option value="Flexible / Weekend only">Flexible / Weekend only</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Additional Notes or Medical History (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell Coach Basil about your training experience, any existing injuries, or specific requests..."
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFD21F] transition-colors resize-none"
                  />
                </div>

                {/* Submit to WhatsApp Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg font-condensed font-black text-lg tracking-wider uppercase bg-[#FFD21F] hover:bg-[#ffe052] text-black transition-transform active:scale-98 shadow-[0_0_20px_rgba(255,210,31,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-5 h-5 text-black" />
                  <span>Send Session Request via WhatsApp</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-2">
                  <CheckCircle className="w-4 h-4 text-[#FFD21F]" />
                  <span>No login required. Direct instant connection with Coach Basil.</span>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
