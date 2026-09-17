import React from 'react';
import { ArrowDown, Check, Heart, Landmark, Sparkles, Stethoscope } from 'lucide-react';
import { portfolioImages, roadmapSteps } from '../data/portfolioData';

export const DreamSection: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-[#472769] via-[#5B3A82] to-[#8C3A6E] text-white">
      {/* Subtle Background Watermarks & Medical Accents */}
      <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-[450px] h-[450px] rounded-full bg-teal-400/15 blur-3xl pointer-events-none" />

      {/* Decorative background grid and icons */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-white/15 backdrop-blur-md border border-white/25 mb-4 shadow-sm">
            <Stethoscope className="w-3.5 h-3.5 text-[#55B7AD]" />
            <span>The Dream: MBBS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            &ldquo;One day, I want to wear the white coat.&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Priya is currently preparing for the MBBS entrance examination in Nepal,
            working toward her dream of entering the medical field and building a career
            centered around knowledge, compassion, and service.
          </p>
        </div>

        {/* Highlight Image + Quote Card */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-8 border border-white/20 shadow-2xl">
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-lg group">
              <img
                src={portfolioImages.studyNight}
                alt="Priya studying for MBBS"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs font-medium text-white/90 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#55B7AD]" />
                <span>Late night consistency & anatomy prep</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#55B7AD]">Dedication & Purpose</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
              Every formula memorized, every diagram drawn, brings the stethoscope closer.
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Medical entrance preparation demands unrelenting patience, discipline, and emotional strength.
              Through mock tests, continuous revision of physics, chemistry, and biology, Priya approaches
              each study session with focused gratitude and sharp determination.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white font-medium">
                Physics & Chemistry Mastery
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white font-medium">
                Human Physiology & Zoology
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white font-medium">
                High-Yield Question Banks
              </span>
            </div>
          </div>
        </div>

        {/* Illustrated Roadmap: 5 Stages */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              The Path to Medicine
            </h3>
            <p className="text-sm text-white/80 mt-1">A purposeful 5-stage roadmap of perseverance and purpose</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {roadmapSteps.map((stage, idx) => (
              <div key={stage.stepNumber} className="relative group">
                <div className="h-full bg-white rounded-3xl p-5 text-[#292238] shadow-lg border border-purple-100 flex flex-col items-center text-center hover:translate-y-[-4px] transition-all duration-300">
                  {/* Step Number Pill */}
                  <div className="w-8 h-8 rounded-full bg-[#5B3A82]/10 text-[#5B3A82] text-xs font-bold flex items-center justify-center mb-3">
                    0{stage.stepNumber}
                  </div>

                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-50 to-pink-50 border border-purple-100 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                    {stage.icon}
                  </div>

                  <h4 className="font-display font-bold text-lg text-[#292238] mb-2">
                    {stage.title}
                  </h4>

                  <p className="text-xs text-[#292238]/75 leading-relaxed">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Arrow connector for desktop */}
                {idx < roadmapSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white text-[#E96B8A] shadow-md items-center justify-center text-xs font-bold">
                    →
                  </div>
                )}

                {/* Arrow connector for mobile */}
                {idx < roadmapSteps.length - 1 && (
                  <div className="flex md:hidden justify-center py-2 text-white/70">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CAREER VISION: Two Large Side-by-Side Cards */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#55B7AD]">Future Horizons</span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">
              Career Vision & Purpose
            </h3>
            <p className="text-sm text-white/80 max-w-xl mx-auto mt-2">
              Two honorable avenues of serving society with intellect, integrity, and devotion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CARD 1 — DREAM PATH: MBBS & Medicine */}
            <div
              id="career-card-mbbs"
              className="relative bg-white rounded-3xl p-8 sm:p-10 text-[#292238] shadow-2xl border-4 border-white/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute -top-4 -right-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#5B3A82] to-[#E96B8A] text-white text-xs font-bold tracking-wide shadow-md">
                Primary Dream
              </div>

              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-100 to-pink-100 text-[#5B3A82] flex items-center justify-center text-3xl mb-6 shadow-xs">
                  🩺
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#E96B8A]">Dream Path</span>
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#292238] mt-1 mb-4">
                  MBBS & Medicine
                </h4>

                <p className="text-sm sm:text-base text-[#292238]/80 leading-relaxed mb-6">
                  &ldquo;To pursue MBBS and become a knowledgeable, compassionate and responsible doctor.&rdquo;
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#292238]/85">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E96B8A] shrink-0" />
                    <span>Clinical diagnostic expertise & patient healing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E96B8A] shrink-0" />
                    <span>Serving healthcare access in Madhesh Province & Nepal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E96B8A] shrink-0" />
                    <span>Empathy-led, evidence-based medical treatment</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-purple-100 flex items-center justify-between text-xs text-[#5B3A82] font-semibold">
                <span>The White Coat Goal</span>
                <Sparkles className="w-4 h-4 text-[#E96B8A]" />
              </div>
            </div>

            {/* CARD 2 — ALTERNATIVE PATH: Government Service */}
            <div
              id="career-card-gov"
              className="relative bg-white rounded-3xl p-8 sm:p-10 text-[#292238] shadow-2xl border-4 border-white/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute -top-4 -right-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#55B7AD] to-[#5B3A82] text-white text-xs font-bold tracking-wide shadow-md">
                Alternative Honor
              </div>

              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-100 to-purple-100 text-[#55B7AD] flex items-center justify-center text-3xl mb-6 shadow-xs">
                  🏛️
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#55B7AD]">Public Mission</span>
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#292238] mt-1 mb-4">
                  Government Service
                </h4>

                <p className="text-sm sm:text-base text-[#292238]/80 leading-relaxed mb-6">
                  &ldquo;If the journey into medicine takes a different direction, Priya also dreams of building a meaningful career through government service.&rdquo;
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#292238]/85">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#55B7AD] shrink-0" />
                    <span>Public administration, policymaking, and state service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#55B7AD] shrink-0" />
                    <span>Contributing to national development and honest governance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#55B7AD] shrink-0" />
                    <span>Empowering citizens with dignity and transparent service</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-teal-100 flex items-center justify-between text-xs text-[#55B7AD] font-semibold">
                <span>Public Leadership & Integrity</span>
                <Landmark className="w-4 h-4 text-[#5B3A82]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
