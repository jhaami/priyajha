import React from 'react';
import { ArrowRight, BookOpen, HeartPulse, Sparkles, Stethoscope } from 'lucide-react';
import { portfolioImages } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FFF9F5] flex items-center"
    >
      {/* Abstract Background Gradient Blobs */}
      <div className="absolute top-10 left-[-8%] w-96 h-96 bg-gradient-to-br from-[#B9A1E8]/35 to-[#E96B8A]/25 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-10 right-[-5%] w-[480px] h-[480px] bg-gradient-to-tr from-[#55B7AD]/25 via-[#B9A1E8]/30 to-[#E96B8A]/20 rounded-full blur-3xl pointer-events-none animate-float-delayed" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-200/25 rounded-full blur-2xl pointer-events-none" />

      {/* Delicate floating background stars */}
      <div className="absolute top-24 left-[12%] text-[#E96B8A] opacity-60 text-lg animate-bounce">✦</div>
      <div className="absolute top-44 right-[18%] text-[#55B7AD] opacity-70 text-xl animate-pulse">✦</div>
      <div className="absolute bottom-20 left-[25%] text-[#5B3A82] opacity-40 text-sm">✦</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Pill Badge */}
            <div
              id="hero-aspirant-badge"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-[#5B3A82] bg-white/85 backdrop-blur-md border border-[#E96B8A]/30 shadow-[0_2px_12px_rgba(91,58,130,0.08)] mb-6 hover:scale-105 transition-transform duration-200"
            >
              <span className="text-[#E96B8A] font-black">✦</span>
              <span className="tracking-widest">MBBS ASPIRANT • NEPAL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#55B7AD] animate-ping" />
            </div>

            {/* Large Inspiring Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] font-bold text-[#292238] leading-[1.12] tracking-tight">
              Dreaming Big.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B3A82] via-[#85459B] to-[#E96B8A]">
                Learning Every Day.
              </span>
              <br />
              Becoming More.
            </h1>

            {/* Prominent Name with Special Color Styling */}
            <div className="mt-5 sm:mt-6 mb-4 flex items-baseline flex-wrap gap-2">
              <span className="text-lg sm:text-xl font-medium tracking-wide text-[#292238]/70 uppercase">
                I am
              </span>
              <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-[#5B3A82]">Priy</span>
                <span className="text-[#E96B8A] italic font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                  a
                </span>
                <span className="text-[#55B7AD] font-black text-[1.2em]">.</span>
                <span className="ml-2 font-display text-2xl sm:text-3xl md:text-4xl text-[#5B3A82]/85 font-medium">
                  Kumari Jha
                </span>
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#292238]/80 max-w-2xl leading-relaxed mt-2 mb-8">
              An ambitious learner from Janakpurdham, Nepal, currently preparing for the
              MBBS entrance examination with a dream of building a meaningful career in medicine,
              while passionately exploring creative arts, design, and continuous self-growth.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                id="hero-cta-explore"
                href="#journey"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#5B3A82] via-[#85459B] to-[#E96B8A] shadow-[0_8px_25px_rgba(233,107,138,0.38)] hover:shadow-[0_12px_32px_rgba(233,107,138,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 text-center"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                id="hero-cta-story"
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-[#5B3A82] bg-white/90 backdrop-blur-md border border-[#B9A1E8]/40 shadow-xs hover:border-[#E96B8A]/60 hover:bg-white hover:text-[#E96B8A] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center"
              >
                <span>View My Story</span>
                <HeartPulse className="w-4 h-4 text-[#E96B8A]" />
              </a>
            </div>

            {/* Quick stats ribbon */}
            <div className="mt-10 pt-6 border-t border-purple-100/80 flex flex-wrap items-center gap-6 text-sm text-[#292238]/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5B3A82]" />
                <span className="font-semibold text-[#292238]">Janakpurdham, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E96B8A]" />
                <span className="font-semibold text-[#292238]">Monastic Alumna</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#55B7AD]" />
                <span className="font-semibold text-[#292238]">Targeting MBBS 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Artistic Portrait Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            {/* Background Glow Blobs */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E96B8A]/30 via-[#B9A1E8]/40 to-[#55B7AD]/30 rounded-[3rem] blur-2xl transform rotate-6 scale-95 pointer-events-none" />

            {/* Floating Decorative Medical & Creative Elements */}
            <div className="absolute -top-3 -right-2 z-20 w-12 h-12 rounded-2xl bg-white shadow-lg border border-pink-100 flex items-center justify-center text-[#E96B8A] animate-float-slow">
              <Stethoscope className="w-6 h-6" />
            </div>

            <div className="absolute bottom-4 -left-3 z-20 w-11 h-11 rounded-2xl bg-white shadow-lg border border-purple-100 flex items-center justify-center text-[#5B3A82] animate-float-delayed">
              <BookOpen className="w-5 h-5" />
            </div>

            <div className="absolute top-1/2 -right-5 z-20 w-9 h-9 rounded-full bg-gradient-to-tr from-[#55B7AD] to-teal-300 text-white shadow-md flex items-center justify-center text-xs font-bold">
              ✦
            </div>

            {/* Main Portrait Container with Organic Frame */}
            <div
              id="hero-portrait-wrapper"
              className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[2.5rem] p-2 sm:p-2.5 bg-gradient-to-b from-[#E96B8A]/60 via-[#B9A1E8]/50 to-[#5B3A82]/60 shadow-[0_20px_50px_-15px_rgba(91,58,130,0.35)]"
            >
              <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-white relative group">
                <img
                  src={portfolioImages.heroDoctor}
                  alt="Priya Kumari Jha - MBBS Aspirant"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle soft gradient overlay at the base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292238]/60 via-transparent to-transparent pointer-events-none opacity-50" />
              </div>
            </div>

            {/* Floating Mini Glass Cards Around Portrait */}
            {/* Card 1: 3.74 GPA Grade 12 */}
            <div
              id="hero-floating-card-gpa"
              className="absolute -bottom-6 right-2 sm:right-6 z-30 glass-card px-4 py-2.5 rounded-2xl border border-white/90 shadow-[0_10px_25px_rgba(91,58,130,0.15)] flex items-center gap-3 animate-float-slow"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B3A82] to-[#85459B] text-white flex items-center justify-center text-lg shadow-xs">
                📚
              </div>
              <div>
                <div className="font-display font-bold text-lg text-[#5B3A82] leading-none">3.74 GPA</div>
                <div className="text-xs font-medium text-[#292238]/70">Grade 12 Science</div>
              </div>
            </div>

            {/* Card 2: MBBS Aspirant */}
            <div
              id="hero-floating-card-mbbs"
              className="absolute -top-4 -left-2 sm:left-2 z-30 glass-card px-4 py-2.5 rounded-2xl border border-white/90 shadow-[0_10px_25px_rgba(233,107,138,0.18)] flex items-center gap-3 animate-float-delayed"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E96B8A] to-pink-400 text-white flex items-center justify-center text-lg shadow-xs">
                🩺
              </div>
              <div>
                <div className="font-display font-bold text-base text-[#292238] leading-none">MBBS Aspirant</div>
                <div className="text-xs font-semibold text-[#55B7AD]">Future White Coat</div>
              </div>
            </div>

            {/* Card 3: Creative Mind */}
            <div
              id="hero-floating-card-creative"
              className="hidden sm:flex absolute top-1/3 -left-8 z-30 glass-card px-3.5 py-2 rounded-2xl border border-white/90 shadow-[0_8px_20px_rgba(85,183,173,0.2)] items-center gap-2"
            >
              <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#55B7AD] flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#5B3A82]">Creative Mind</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
