import React from 'react';
import {
  BookMarked,
  Compass,
  Crown,
  Headphones,
  Music2,
  Sparkles,
} from 'lucide-react';
import { hobbiesList } from '../data/portfolioData';

const getHobbyIcon = (iconName: string) => {
  switch (iconName) {
    case 'BookMarked':
      return <BookMarked className="w-7 h-7" />;
    case 'Headphones':
      return <Headphones className="w-7 h-7" />;
    case 'Compass':
      return <Compass className="w-7 h-7" />;
    case 'Music2':
      return <Music2 className="w-7 h-7" />;
    case 'Sparkle':
      return <Sparkles className="w-7 h-7" />;
    case 'Crown':
      return <Crown className="w-7 h-7" />;
    default:
      return <Sparkles className="w-7 h-7" />;
  }
};

export const HobbiesSection: React.FC = () => {
  return (
    <section id="hobbies" className="py-20 md:py-28 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#E96B8A] bg-pink-50 border border-pink-200/70 mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Passions & Leisure</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#292238] tracking-tight">
            Life Beyond Academics
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#292238]/75">
            Because life is more than textbooks and exams.
          </p>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Reading Books (Large 7-col) */}
          <div className="md:col-span-7 rounded-[28px] p-8 bg-gradient-to-br from-[#B9A1E8]/20 via-purple-50/70 to-white border border-purple-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 text-purple-200/40 text-9xl font-display font-black pointer-events-none group-hover:scale-110 transition-transform">
              01
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#5B3A82] shadow-xs border border-purple-100">
                  {hobbiesList[0].badge}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white text-[#5B3A82] shadow-xs flex items-center justify-center">
                  {getHobbyIcon(hobbiesList[0].icon)}
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#292238] mb-3">
                {hobbiesList[0].title}
              </h3>
              <p className="text-sm sm:text-base text-[#292238]/75 max-w-lg leading-relaxed">
                {hobbiesList[0].subtitle}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-purple-100/60 flex items-center gap-2 text-xs font-semibold text-[#5B3A82]">
              <span>Curiosity, reflective thinking & lifelong knowledge</span>
            </div>
          </div>

          {/* Card 2: Music (5-col) */}
          <div className="md:col-span-5 rounded-[28px] p-8 bg-gradient-to-br from-[#E96B8A]/20 via-pink-50/70 to-white border border-pink-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 text-pink-200/40 text-9xl font-display font-black pointer-events-none group-hover:scale-110 transition-transform">
              02
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#E96B8A] shadow-xs border border-pink-100">
                  {hobbiesList[1].badge}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white text-[#E96B8A] shadow-xs flex items-center justify-center">
                  {getHobbyIcon(hobbiesList[1].icon)}
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#292238] mb-3">
                {hobbiesList[1].title}
              </h3>
              <p className="text-sm text-[#292238]/75 leading-relaxed">
                {hobbiesList[1].subtitle}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-pink-100/60 flex items-center gap-2 text-xs font-semibold text-[#E96B8A]">
              <span>Rhythm & focus companion</span>
            </div>
          </div>

          {/* Card 3: Travelling (5-col) */}
          <div className="md:col-span-5 rounded-[28px] p-8 bg-gradient-to-br from-[#55B7AD]/20 via-teal-50/70 to-white border border-teal-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 text-teal-200/40 text-9xl font-display font-black pointer-events-none group-hover:scale-110 transition-transform">
              03
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#55B7AD] shadow-xs border border-teal-100">
                  {hobbiesList[2].badge}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white text-[#55B7AD] shadow-xs flex items-center justify-center">
                  {getHobbyIcon(hobbiesList[2].icon)}
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#292238] mb-3">
                {hobbiesList[2].title}
              </h3>
              <p className="text-sm text-[#292238]/75 leading-relaxed">
                {hobbiesList[2].subtitle}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-teal-100/60 flex items-center gap-2 text-xs font-semibold text-[#55B7AD]">
              <span>Exploring heritage, landscapes & fresh perspectives</span>
            </div>
          </div>

          {/* Card 4: Dancing (7-col) */}
          <div className="md:col-span-7 rounded-[28px] p-8 bg-gradient-to-br from-[#E96B8A]/25 via-rose-50/70 to-white border border-rose-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 text-rose-200/40 text-9xl font-display font-black pointer-events-none group-hover:scale-110 transition-transform">
              04
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-rose-600 shadow-xs border border-rose-100">
                  {hobbiesList[3].badge}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white text-rose-600 shadow-xs flex items-center justify-center">
                  {getHobbyIcon(hobbiesList[3].icon)}
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#292238] mb-3">
                {hobbiesList[3].title}
              </h3>
              <p className="text-sm sm:text-base text-[#292238]/75 max-w-lg leading-relaxed">
                {hobbiesList[3].subtitle}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-100/60 flex items-center gap-2 text-xs font-semibold text-rose-600">
              <span>Joyful rhythm, classical posture & stage confidence</span>
            </div>
          </div>

          {/* Card 5: Mehendi (6-col) */}
          <div className="md:col-span-6 rounded-[28px] p-8 bg-gradient-to-br from-[#B9A1E8]/20 via-amber-50/70 to-white border border-amber-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-amber-700 shadow-xs border border-amber-100">
                {hobbiesList[4].badge}
              </span>
              <div className="w-12 h-12 rounded-2xl bg-white text-amber-700 shadow-xs flex items-center justify-center">
                {getHobbyIcon(hobbiesList[4].icon)}
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#292238] mb-2">
              {hobbiesList[4].title}
            </h3>
            <p className="text-sm text-[#292238]/75 leading-relaxed">
              {hobbiesList[4].subtitle}
            </p>
          </div>

          {/* Card 6: Fashion (6-col) */}
          <div className="md:col-span-6 rounded-[28px] p-8 bg-gradient-to-br from-pink-100/50 via-purple-50/50 to-white border border-pink-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#E96B8A] shadow-xs border border-pink-100">
                {hobbiesList[5].badge}
              </span>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#E96B8A] shadow-xs flex items-center justify-center">
                {getHobbyIcon(hobbiesList[5].icon)}
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#292238] mb-2">
              {hobbiesList[5].title}
            </h3>
            <p className="text-sm text-[#292238]/75 leading-relaxed">
              {hobbiesList[5].subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
