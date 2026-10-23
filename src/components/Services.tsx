import React from 'react';
import { ArrowUpRight, Dumbbell, Utensils, Users } from 'lucide-react';
import customWorkoutImg from '../assets/images/service_custom_workout_1792738013862.jpg';
import nutritionGuidanceImg from '../assets/images/service_nutrition_guidance_1792738015187.jpg';
import oneOnOneImg from '../assets/images/service_one_on_one_1792738014841.jpg';

interface ServiceItem {
  id: string;
  title: string;
  image: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  whatsappMessage: string;
  keyPoints: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'custom-workouts',
    title: 'Custom Workout Plans',
    image: customWorkoutImg,
    icon: Dumbbell,
    tagline: 'Built For Your Body & Equipment',
    description:
      'Periodized training routines crafted around your unique physical structure, available equipment, and specific performance goals.',
    whatsappMessage: 'Hi Coach Basil, I am interested in getting a Custom Workout Plan.',
    keyPoints: [
      'Tailored exercise selection & progressive overload',
      'Adaptable to bodyweight, home dumbbells, or full setup',
      'Targeted warm-ups & injury prevention protocols',
    ],
  },
  {
    id: 'nutrition-guidance',
    title: 'Nutrition Guidance',
    image: nutritionGuidanceImg,
    icon: Utensils,
    tagline: 'Sustainable Fuel For Real Results',
    description:
      'Practical, non-restrictive dietary guidance aligned with your calorie burn, muscle recovery, energy levels, and lifestyle.',
    whatsappMessage: 'Hi Coach Basil, I would like to get Nutrition Guidance for my fitness goals.',
    keyPoints: [
      'Personalized macronutrient & caloric balance',
      'Realistic everyday meal strategies without starving',
      'Hydration & recovery optimization techniques',
    ],
  },
  {
    id: 'one-on-one-coaching',
    title: '1-on-1 Coaching',
    image: oneOnOneImg,
    icon: Users,
    tagline: 'Private Sessions Right At Your Place',
    description:
      'Direct, hands-on personal coaching sessions conducted in the privacy and comfort of your home or private fitness space.',
    whatsappMessage: 'Hi Coach Basil, I want to book 1-on-1 Coaching sessions at my place.',
    keyPoints: [
      'Immediate real-time form correction & safety cues',
      'Maximum workout intensity with constant motivation',
      'Zero commute time — training brought straight to you',
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#0E0E10] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#FFD21F]"></span>
            <span className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-[#FFD21F]">
              Specialized Offerings
            </span>
          </div>
          <h2 className="font-condensed text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            MY <span className="text-[#FFD21F]">SERVICES</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base sm:text-lg">
            Focused, result-oriented fitness solutions tailored specifically to help you build a stronger, healthier version of yourself.
          </p>
        </div>

        {/* 3 Visual Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-[#141416] border border-neutral-800 hover:border-neutral-700 overflow-hidden flex flex-col transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-[#141416]/20 to-transparent" />
                  
                  {/* Service Number Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="font-condensed font-black text-sm tracking-widest px-3 py-1 bg-black/80 backdrop-blur-md text-[#FFD21F] border border-neutral-800 rounded">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 w-11 h-11 rounded-lg bg-[#FFD21F] text-black flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-condensed text-2xl sm:text-3xl font-black uppercase tracking-wide text-white group-hover:text-[#FFD21F] transition-colors mb-1.5">
                      {service.title}
                    </h3>
                    <p className="font-condensed font-bold text-xs uppercase tracking-wider text-[#FFD21F]/90 mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Key points */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-neutral-800/80">
                      {service.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                          <span className="text-[#FFD21F] font-bold mt-0.5">·</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp CTA for this specific service */}
                  <a
                    href={`https://wa.me/918981407365?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded font-condensed font-bold text-sm uppercase tracking-wider bg-neutral-900 border border-neutral-700 hover:border-[#FFD21F] text-white hover:text-[#FFD21F] transition-colors mt-2"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
