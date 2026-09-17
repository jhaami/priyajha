import React from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

export const FutureVisionSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-r from-[#442366] via-[#5B3A82] to-[#E96B8A] text-white text-center">
      {/* Abstract Glowing Shapes and Stars */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-pink-300/20 blur-3xl pointer-events-none animate-float-slow" />

      {/* Floating Stars */}
      <div className="absolute top-16 left-[15%] text-yellow-200/80 animate-bounce">
        <Star className="w-5 h-5 fill-yellow-200/50" />
      </div>
      <div className="absolute bottom-20 left-[20%] text-white/60 animate-pulse">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute top-24 right-[18%] text-pink-200/70 animate-float-delayed">
        <Star className="w-6 h-6 fill-pink-200/40" />
      </div>
      <div className="absolute bottom-16 right-[22%] text-teal-200/80">
        <Sparkles className="w-4 h-4" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-white/15 backdrop-blur-md border border-white/25 mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
          <span>Vision & Aspiration</span>
        </div>

        {/* Large Typography */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
          Dream bigger.
          <br />
          Work harder.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white to-teal-100">
            Become better.
          </span>
        </h2>

        {/* Powerful Statement */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          &ldquo;Whatever path the future takes, Priya wants to continue learning, growing, and eventually accomplish something meaningful.&rdquo;
        </p>

        {/* CTA Button */}
        <div>
          <a
            id="future-vision-cta"
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-[#5B3A82] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Follow My Journey</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#E96B8A]" />
          </a>
        </div>
      </div>
    </section>
  );
};
