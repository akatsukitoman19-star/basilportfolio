import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyTrainWithMe } from './components/WhyTrainWithMe';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuickBookingModal } from './components/QuickBookingModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-neutral-100 flex flex-col font-sans selection:bg-[#FFD21F] selection:text-black">
      {/* Navbar with 3-Zone contract */}
      <Navbar onBookClick={() => setIsModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onBookClick={() => setIsModalOpen(true)} />

        {/* 2. Why Train With Me? Section */}
        <WhyTrainWithMe />

        {/* 3. My Services Section */}
        <Services />

        {/* 4. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Booking Modal */}
      <QuickBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Floating WhatsApp Action for Quick Booking */}
      <a
        href="https://wa.me/918981407365?text=Hello%20Coach%20Basil,%20I%20would%20like%20to%20book%20a%20personal%20training%20session."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Coach Basil on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-black shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
      >
        <MessageCircle className="w-7 h-7 fill-black text-black" />
        <span className="sr-only">Book on WhatsApp</span>
        <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Chat on WhatsApp
        </div>
      </a>
    </div>
  );
}
