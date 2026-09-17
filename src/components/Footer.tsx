import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PriyaLogo } from './PriyaLogo';
import { navItems } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#20182E] text-white pt-16 pb-12 overflow-hidden border-t border-purple-900/40">
      {/* Decorative top soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#E96B8A]/60 to-transparent" />
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#5B3A82]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Left: Signature Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <PriyaLogo size="lg" variant="dark" />
            <p className="font-display italic text-base sm:text-lg text-pink-200/90 mt-2 tracking-wide">
              &ldquo;Dream. Learn. Grow. Serve.&rdquo;
            </p>
            <p className="text-xs text-white/60 mt-1 max-w-sm">
              MBBS Aspirant & Creative Mind from Janakpurdham, Nepal.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-white/80">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#E96B8A] transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 text-[#E96B8A]" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-1.5">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-[#E96B8A] fill-[#E96B8A]" />
            <span>for Priya Kumari Jha</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Janakpurdham, Nepal • Future White Coat</span>
            <Sparkles className="w-3.5 h-3.5 text-[#55B7AD]" />
          </div>

          <div>
            <span>&copy; {new Date().getFullYear()} Priya Kumari Jha. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
