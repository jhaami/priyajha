import React from 'react';
import { Award, CheckCircle2, GraduationCap, MapPin, School, Sparkles } from 'lucide-react';
import { educationMilestones } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-[#FFF9F5] overflow-hidden">
      {/* Background radial blurs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#5B3A82] bg-purple-50 border border-purple-200/70 mb-4">
            <GraduationCap className="w-4 h-4 text-[#E96B8A]" />
            <span>Academic Milestones</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#292238] tracking-tight">
            My Academic Journey
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#292238]/75">
            Every milestone is another step toward the dream.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Vertical Gradient Line (Purple → Pink → Teal) */}
          <div
            className="absolute left-6 sm:left-1/2 top-4 bottom-8 w-1 sm:-translate-x-1/2 rounded-full bg-gradient-to-b from-[#5B3A82] via-[#E96B8A] to-[#55B7AD] shadow-[0_0_15px_rgba(233,107,138,0.45)]"
          />

          <div className="space-y-12 sm:space-y-16">
            {educationMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-[#E96B8A] shadow-md flex items-center justify-center text-sm font-bold text-[#5B3A82]">
                      {milestone.step}
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Timeline Card Content */}
                  <div className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${isEven ? 'sm:pr-12' : 'sm:pl-12'}`}>
                    <div className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-purple-100/80 shadow-[0_8px_30px_rgba(91,58,130,0.06)] hover:shadow-[0_16px_40px_rgba(91,58,130,0.14)] hover:-translate-y-1 transition-all duration-300">
                      {/* Top Header Row */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-xl bg-purple-50 text-[#5B3A82]">
                            <School className="w-5 h-5" />
                          </div>
                          <span className="font-display font-bold text-xl sm:text-2xl text-[#292238]">
                            {milestone.grade}
                          </span>
                        </div>

                        {/* GPA Badge */}
                        <div
                          className={`px-4 py-1.5 rounded-full text-white font-display font-bold text-sm bg-gradient-to-r ${milestone.badgeGradient} shadow-sm flex items-center gap-1.5`}
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>GPA {milestone.gpa}</span>
                        </div>
                      </div>

                      {/* Institution Info */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-base text-[#5B3A82] flex items-center gap-1.5">
                          <span>{milestone.institution}</span>
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-[#292238]/70 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-[#E96B8A]" />
                          <span>{milestone.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#292238]/80 leading-relaxed mb-5">
                        {milestone.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-2 pt-4 border-t border-purple-50">
                        {milestone.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-xs sm:text-sm text-[#292238]/85">
                            <CheckCircle2 className="w-4 h-4 text-[#55B7AD] shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Subtle hover gradient corner */}
                      <div className="absolute top-3 right-3 text-[#E96B8A]/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
