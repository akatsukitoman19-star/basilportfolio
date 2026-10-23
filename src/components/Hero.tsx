import React, { useRef, useState, useEffect } from 'react';
import { MessageCircle, Award, Phone, Camera, RotateCcw, ShieldCheck } from 'lucide-react';
import defaultPortraitImg from '../assets/images/coach_basil_actual.jpg';

interface HeroProps {
  onBookClick?: () => void;
}

const DEFAULT_PORTRAIT = defaultPortraitImg;
const STORAGE_KEY = 'coach_basil_custom_portrait_v2';

export const Hero: React.FC<HeroProps> = () => {
  const [portraitSrc, setPortraitSrc] = useState<string>(DEFAULT_PORTRAIT);
  const [isCustomPhoto, setIsCustomPhoto] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setPortraitSrc(saved);
      setIsCustomPhoto(true);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPortraitSrc(result);
        setIsCustomPhoto(true);
        try {
          localStorage.setItem(STORAGE_KEY, result);
        } catch {
          // If storage quota exceeded, still display in memory
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetToDefault = () => {
    setPortraitSrc(DEFAULT_PORTRAIT);
    setIsCustomPhoto(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-neutral-900">
      {/* Background radial accent glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FFD21F]/5 blur-[140px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Coach Basil Portrait - Positioned Above Text Section */}
          <div className="order-1 lg:order-1 lg:col-span-5 relative flex justify-center w-full">
            
            {/* Portrait Frame Container */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden border-2 border-neutral-800 bg-neutral-950 shadow-[0_0_40px_rgba(255,210,31,0.15)] group">
              
              {/* Subtle gold glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />

              {/* Coach Portrait Image */}
              <img
                src={portraitSrc}
                alt="Coach Basil - Certified Fitness Coach"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* Corner Gold Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#FFD21F] z-20 pointer-events-none" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#FFD21F] z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#FFD21F] z-20 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FFD21F] z-20 pointer-events-none" />

              {/* Floating Badge on Portrait */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[#FFD21F]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-condensed font-bold text-xs tracking-widest uppercase">
                      Coach Basil
                    </span>
                  </div>
                  <p className="font-condensed font-extrabold text-base tracking-wider text-white uppercase mt-0.5">
                    Your Fitness Partner
                  </p>
                </div>

                {/* Upload / Switch custom portrait button */}
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload Coach Basil's custom photo"
                    className="p-2 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#FFD21F]" />
                    <span className="hidden sm:inline">Change Photo</span>
                  </button>
                  {isCustomPhoto && (
                    <button
                      onClick={resetToDefault}
                      title="Reset to default portrait"
                      className="p-2 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Text & Content Column - Positioned Below Image on Stacked Views */}
          <div className="order-2 lg:order-2 lg:col-span-7 flex flex-col justify-center">
            
            {/* Coach Subtitle & Tagline Header */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <span className="font-condensed font-black text-xs sm:text-sm tracking-[0.25em] uppercase text-[#FFD21F] bg-[#FFD21F]/10 px-3 py-1 rounded border border-[#FFD21F]/30">
                YOUR FITNESS PARTNER
              </span>
              <span className="text-neutral-500 hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-400">
                Stronger Body. Better Life.
              </span>
            </div>

            {/* Coach Name Anchor */}
            <div className="mb-2">
              <h2 className="font-condensed text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
                COACH <span className="text-[#FFD21F]">BASIL</span>
              </h2>
            </div>

            {/* Tagline */}
            <p className="font-condensed font-extrabold text-lg sm:text-2xl text-neutral-300 tracking-wider uppercase mb-5">
              YOUR GOALS. MY MISSION.
            </p>

            {/* Main Headline */}
            <h1 className="font-condensed text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95] mb-6">
              PERSONAL TRAINING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD21F] via-[#FFE26A] to-[#FFD21F]">
                AT YOUR PLACE
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">
              Personalized training and nutrition guidance designed around you, your goals, and the comfort of your own space.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href="https://wa.me/918981407365?text=Hello%20Coach%20Basil,%20I%20would%20like%20to%20book%20a%20personal%20training%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md font-condensed font-black text-lg tracking-wider uppercase bg-[#FFD21F] text-black hover:bg-[#ffe052] transition-all transform active:scale-98 shadow-[0_0_25px_rgba(255,210,31,0.35)] hover:shadow-[0_0_35px_rgba(255,210,31,0.5)] text-center cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 fill-black text-black" />
                <span>Book a Personal Training Session</span>
              </a>

              <a
                href="tel:+918240649650"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-md font-condensed font-bold text-base tracking-wider uppercase border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 text-white hover:border-neutral-500 transition-colors text-center"
              >
                <Phone className="w-5 h-5 text-[#FFD21F]" />
                <span>Call +91 8240649650</span>
              </a>
            </div>

            {/* Certified Fitness Coach Badge */}
            <div className="inline-flex items-center gap-3.5 p-3 sm:p-4 rounded-lg bg-neutral-900/80 border border-neutral-800 self-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD21F] to-[#B38F00] p-0.5 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,210,31,0.3)]">
                <div className="w-full h-full rounded-full bg-[#121214] flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#FFD21F]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-condensed font-bold text-xs uppercase tracking-widest text-[#FFD21F]">
                  Official Credential
                </span>
                <span className="font-condensed font-black text-lg sm:text-xl uppercase tracking-wider text-white">
                  Certified Fitness Coach
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

