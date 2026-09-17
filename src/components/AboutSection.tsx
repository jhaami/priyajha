import React from 'react';
import { BookOpen, Compass, Heart, MapPin, Sparkles, Stethoscope } from 'lucide-react';
import { portfolioImages } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-white overflow-hidden">
      {/* Subtle background flourishes */}
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left: Large Portrait/Photo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[400px]">
              {/* Decorative background border frame */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-[#B9A1E8] via-[#E96B8A] to-[#55B7AD] opacity-40 blur-sm transform -rotate-2" />

              <div className="relative rounded-[2.2rem] overflow-hidden bg-white shadow-xl border-4 border-white">
                <img
                  src={portfolioImages.pinkFestive}
                  alt="Priya Kumari Jha"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/5] object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Bottom Polaroid-style tag */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#292238]/90 via-[#292238]/50 to-transparent p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#E96B8A] font-semibold">Roots & Heritage</span>
                  <h4 className="font-display text-xl font-bold">Janakpurdham, Nepal</h4>
                  <p className="text-xs text-white/80 mt-1">Grounded in culture, driven by compassion.</p>
                </div>
              </div>

              {/* Floating quote pill */}
              <div className="absolute -bottom-5 -right-4 glass-card px-4 py-2.5 rounded-2xl border border-white/80 shadow-lg flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#E96B8A] fill-[#E96B8A]" />
                <span className="text-xs font-bold text-[#5B3A82]">Driven by empathy</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Mini Information Cards */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-[#E96B8A] bg-pink-50 border border-pink-200/60 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#292238] tracking-tight mb-6">
              More Than Just a Dreamer.
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#292238]/85 leading-relaxed">
              <p>
                Hello, I&apos;m <strong className="text-[#5B3A82] font-semibold">Priya Kumari Jha</strong>, an
                ambitious and curious learner from Janakpurdham, Nepal. I completed my secondary and higher
                secondary education from Monastic Boarding School and am currently preparing for the
                MBBS entrance examination in Nepal.
              </p>
              <p>
                Becoming a doctor is one of my biggest dreams, but I also believe that personal growth
                comes from exploring different interests, developing creativity, and continuously learning.
                From intricate mehendi art and bridal styling to understanding human anatomy, I find joy in
                both science and creative expression.
              </p>
            </div>

            {/* Colorful Mini Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8">
              {/* Card 1: Janakpurdham */}
              <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-100/80 flex items-start gap-3.5 transition-all duration-300 hover:shadow-sm hover:translate-y-[-2px]">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#5B3A82] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#292238]">Janakpurdham, Nepal</h4>
                  <p className="text-xs text-[#292238]/70 mt-0.5">Historical cultural city & hometown</p>
                </div>
              </div>

              {/* Card 2: Lifelong Learner */}
              <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-100/80 flex items-start gap-3.5 transition-all duration-300 hover:shadow-sm hover:translate-y-[-2px]">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#55B7AD] flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#292238]">Lifelong Learner</h4>
                  <p className="text-xs text-[#292238]/70 mt-0.5">Relentless pursuit of knowledge</p>
                </div>
              </div>

              {/* Card 3: MBBS Aspirant */}
              <div className="p-4 rounded-2xl bg-pink-50/80 border border-pink-100/80 flex items-start gap-3.5 transition-all duration-300 hover:shadow-sm hover:translate-y-[-2px]">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#E96B8A] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#292238]">MBBS Aspirant</h4>
                  <p className="text-xs text-[#292238]/70 mt-0.5">Targeting medical entrance 2026</p>
                </div>
              </div>

              {/* Card 4: Creative & Ambitious */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-100/80 flex items-start gap-3.5 transition-all duration-300 hover:shadow-sm hover:translate-y-[-2px]">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#292238]">Creative & Ambitious</h4>
                  <p className="text-xs text-[#292238]/70 mt-0.5">Art, styling, and big life visions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
