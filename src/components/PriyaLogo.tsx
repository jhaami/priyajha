import React from 'react';
import { Sparkles } from 'lucide-react';

interface PriyaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  showSparkle?: boolean;
}

export const PriyaLogo: React.FC<PriyaLogoProps> = ({
  size = 'md',
  variant = 'light',
  showSparkle = true,
}) => {
  const sizeClasses = {
    sm: 'text-xl tracking-tight',
    md: 'text-2xl md:text-3xl tracking-tight',
    lg: 'text-4xl md:text-5xl tracking-normal',
    xl: 'text-5xl md:text-7xl font-bold tracking-normal',
  };

  const priyColor = variant === 'dark' ? 'text-[#D8C5F8]' : 'text-[#5B3A82]';
  const aColor = 'text-[#E96B8A]';
  const dotColor = 'text-[#55B7AD]';

  return (
    <div className="inline-flex items-center gap-1.5 select-none group cursor-pointer">
      <span className={`font-display font-semibold transition-transform duration-300 group-hover:scale-105 ${sizeClasses[size]}`}>
        <span className={`${priyColor} transition-colors duration-300`}>Priy</span>
        <span
          className={`${aColor} font-serif italic font-normal inline-block transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ml-[-0.5px]`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          a
        </span>
        <span className={`${dotColor} font-sans font-black inline-block text-[1.25em] leading-none ml-[-1px]`}>
          .
        </span>
      </span>

      {showSparkle && (
        <span className="relative flex items-center justify-center -top-1 ml-0.5">
          <Sparkles
            className="w-3.5 h-3.5 text-[#E96B8A] transition-all duration-500 group-hover:rotate-45 group-hover:scale-125"
            style={{ filter: 'drop-shadow(0 0 4px rgba(233, 107, 138, 0.4))' }}
          />
        </span>
      )}
    </div>
  );
};
