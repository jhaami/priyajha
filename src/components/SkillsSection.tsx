import React, { useState } from 'react';
import {
  BookOpen,
  Brain,
  Clock,
  Feather,
  MessageSquare,
  Palette,
  Scissors,
  Sparkles,
} from 'lucide-react';
import { skillsList } from '../data/portfolioData';

const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'Sparkles':
      return <Sparkles className="w-6 h-6" />;
    case 'Feather':
      return <Feather className="w-6 h-6" />;
    case 'Scissors':
      return <Scissors className="w-6 h-6" />;
    case 'Palette':
      return <Palette className="w-6 h-6" />;
    case 'MessageSquare':
      return <MessageSquare className="w-6 h-6" />;
    case 'Clock':
      return <Clock className="w-6 h-6" />;
    case 'Brain':
      return <Brain className="w-6 h-6" />;
    case 'BookOpen':
      return <BookOpen className="w-6 h-6" />;
    default:
      return <Sparkles className="w-6 h-6" />;
  }
};

export const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'creative' | 'life'>('all');

  const filteredSkills =
    filter === 'all' ? skillsList : skillsList.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#FFF9F5] overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#5B3A82] bg-purple-50 border border-purple-200/70 mb-4">
            <Palette className="w-4 h-4 text-[#E96B8A]" />
            <span>Versatile Aptitude</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#292238] tracking-tight">
            Skills & Talents
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#292238]/75">
            Things I enjoy creating, learning and improving.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-[#5B3A82] text-white shadow-md'
                  : 'bg-white text-[#292238]/70 hover:text-[#5B3A82] border border-purple-100'
              }`}
            >
              All Skills ({skillsList.length})
            </button>
            <button
              onClick={() => setFilter('creative')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === 'creative'
                  ? 'bg-[#E96B8A] text-white shadow-md'
                  : 'bg-white text-[#292238]/70 hover:text-[#E96B8A] border border-purple-100'
              }`}
            >
              🎨 Creative & Styling (4)
            </button>
            <button
              onClick={() => setFilter('life')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === 'life'
                  ? 'bg-[#55B7AD] text-white shadow-md'
                  : 'bg-white text-[#292238]/70 hover:text-[#55B7AD] border border-purple-100'
              }`}
            >
              🧠 Academic & Life Skills (4)
            </button>
          </div>
        </div>

        {/* 8 Modern Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group relative rounded-[24px] p-6 bg-white border border-purple-100/70 shadow-[0_4px_20px_rgba(91,58,130,0.05)] hover:shadow-[0_12px_32px_rgba(91,58,130,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Large Icon inside Circular Colored Container */}
                <div
                  className={`w-14 h-14 rounded-2xl ${skill.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xs`}
                >
                  {getSkillIcon(skill.icon)}
                </div>

                {/* Title */}
                <h4 className="font-display font-bold text-xl text-[#292238] group-hover:text-[#5B3A82] transition-colors mb-2">
                  {skill.title}
                </h4>

                {/* Short Description */}
                <p className="text-sm text-[#292238]/75 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Bottom Subtle Pill */}
              <div className="mt-6 pt-4 border-t border-purple-50 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#292238]/50">
                  {skill.category === 'creative' ? 'Art & Design' : 'Growth & Mindset'}
                </span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: skill.accentColor }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
