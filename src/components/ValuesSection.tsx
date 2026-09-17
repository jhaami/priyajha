import React from 'react';
import { Sparkles } from 'lucide-react';
import { valuesList } from '../data/portfolioData';

export const ValuesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative bg-[#FFF9F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#5B3A82] bg-purple-50 border border-purple-200/70 mb-4">
            <Sparkles className="w-4 h-4 text-[#E96B8A]" />
            <span>Character & Mindset</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#292238] tracking-tight">
            What Defines Me
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#292238]/75">
            The values and mindset that guide my journey.
          </p>
        </div>

        {/* 4 Floating Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesList.map((val) => (
            <div
              key={val.id}
              className={`group relative rounded-[28px] p-7 ${val.bgGradient} border ${val.borderColor} shadow-[0_4px_20px_rgba(91,58,130,0.04)] hover:shadow-[0_16px_36px_rgba(91,58,130,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Large Emoji / Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-white/80 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {val.emoji}
                </div>

                <h3 className="font-display text-2xl font-bold text-[#292238] mb-3">
                  {val.title}
                </h3>

                <p className="text-sm text-[#292238]/80 leading-relaxed">
                  &ldquo;{val.description}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-100/60 flex items-center justify-between text-xs font-semibold text-[#5B3A82]">
                <span>Guiding Pillar</span>
                <span className="text-[#E96B8A]">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
