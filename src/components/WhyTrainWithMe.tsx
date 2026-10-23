import React from 'react';
import { 
  CheckCircle2, 
  Target, 
  BookOpen, 
  CalendarClock, 
  Dumbbell, 
  Apple, 
  UserCheck 
} from 'lucide-react';

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const BENEFITS: BenefitItem[] = [
  {
    id: '01',
    title: 'Increases accountability',
    description: 'Consistent motivation and progress check-ins keep you committed and on track toward your milestones every single week.',
    icon: UserCheck,
  },
  {
    id: '02',
    title: 'Learn about health, fitness, and your body',
    description: 'Master biomechanics, proper form, and long-term sustainable wellness practices so you train smarter, not just harder.',
    icon: BookOpen,
  },
  {
    id: '03',
    title: 'Helps with goal setting',
    description: 'Transform vague fitness desires into realistic, structured targets with clear step-by-step benchmarks.',
    icon: Target,
  },
  {
    id: '04',
    title: "You'll get an individualized plan",
    description: 'Customized workouts specifically formulated around your starting point, physical capabilities, and daily routine.',
    icon: CheckCircle2,
  },
  {
    id: '05',
    title: 'Flexible schedule and format',
    description: 'Training delivered right at your place, scheduled around your availability for ultimate convenience and zero wasted transit time.',
    icon: CalendarClock,
  },
  {
    id: '06',
    title: 'Promotes exercise variety',
    description: 'Engaging, varied functional training movements that prevent plateaus, eliminate boredom, and keep workouts exciting.',
    icon: Dumbbell,
  },
  {
    id: '07',
    title: 'Nutritional advice',
    description: 'Practical, evidence-backed nutritional guidance to fuel your body, optimize recovery, and maximize your results.',
    icon: Apple,
  },
];

export const WhyTrainWithMe: React.FC = () => {
  return (
    <section id="why-train" className="py-20 bg-[#0B0B0C] border-b border-neutral-900 relative">
      {/* Decorative ambient yellow glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-0 w-96 h-96 bg-[#FFD21F]/5 blur-[120px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#FFD21F]"></span>
            <span className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-[#FFD21F]">
              Proven Guidance & Value
            </span>
          </div>
          <h2 className="font-condensed text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            WHY TRAIN <span className="text-[#FFD21F]">WITH ME?</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base sm:text-lg">
            Dedicated 1-on-1 attention designed around your unique lifestyle, personal space, and fitness ambitions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 3; // "Individualized plan" highlighted
            return (
              <div
                key={item.id}
                className={`group relative p-7 rounded-xl transition-all duration-300 ${
                  isFeatured
                    ? 'bg-neutral-900 border-2 border-[#FFD21F]/60 shadow-[0_0_25px_rgba(255,210,31,0.12)]'
                    : 'bg-[#121214] border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60'
                }`}
              >
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-condensed font-bold text-xs tracking-widest text-neutral-500 group-hover:text-[#FFD21F] transition-colors tabular-nums">
                    {item.id}
                  </span>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isFeatured
                      ? 'bg-[#FFD21F] text-black'
                      : 'bg-neutral-800/80 text-[#FFD21F] group-hover:bg-[#FFD21F] group-hover:text-black'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Exact Benefit Title */}
                <h3 className="font-condensed text-xl sm:text-2xl font-black uppercase tracking-wide text-white mb-2.5 group-hover:text-[#FFD21F] transition-colors">
                  {item.title}
                </h3>

                {/* Benefit Detail */}
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom yellow accent underline on hover */}
                <div className="absolute bottom-0 left-7 right-7 h-[2px] bg-[#FFD21F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
            );
          })}

          {/* Quick CTA Card filling the 8th slot in 3-col layout */}
          <div className="p-7 rounded-xl bg-gradient-to-br from-[#17171A] to-[#111113] border border-neutral-800 flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <span className="font-condensed font-bold text-xs tracking-widest text-[#FFD21F] uppercase">
                Ready to Start?
              </span>
              <h3 className="font-condensed text-2xl sm:text-3xl font-black uppercase text-white tracking-wide mt-1 mb-2">
                Stronger Body. Better Life.
              </h3>
              <p className="text-sm text-neutral-300 max-w-xl">
                Experience personal fitness training delivered right to your home. No gym crowds, no commute—just focused results tailored to you.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/918981407365?text=Hi%20Coach%20Basil,%20I'm%20ready%20to%20discuss%20training%20at%20my%20place."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded font-condensed font-bold text-sm uppercase tracking-wider bg-[#FFD21F] text-black hover:bg-[#ffe052] transition-colors"
              >
                <span>Message on WhatsApp</span>
              </a>
              <a
                href="tel:+918240649650"
                className="inline-flex items-center gap-2 px-5 py-3 rounded font-condensed font-bold text-sm uppercase tracking-wider border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
              >
                <span>Call +91 8240649650</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
