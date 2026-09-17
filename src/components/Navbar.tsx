import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { PriyaLogo } from './PriyaLogo';
import { navItems } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'education', 'journey', 'skills', 'hobbies', 'gallery', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto transition-all duration-300">
        <nav
          id="main-floating-navbar"
          className={`w-full mx-auto px-5 sm:px-7 py-3 rounded-full flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'glass-nav shadow-[0_12px_40px_-10px_rgba(91,58,130,0.18)] border border-[#E96B8A]/25 backdrop-blur-xl'
              : 'glass-nav shadow-[0_8px_30px_-8px_rgba(91,58,130,0.12)] border border-white/80 backdrop-blur-md'
          }`}
        >
          {/* Left: Brand Logo */}
          <a href="#home" className="flex items-center gap-1">
            <PriyaLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#5B3A82] bg-gradient-to-r from-purple-100/80 to-pink-100/60 font-semibold shadow-xs'
                      : 'text-[#292238]/80 hover:text-[#5B3A82] hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="navbar-cta-journey"
              href="#journey"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#5B3A82] via-[#85459B] to-[#E96B8A] shadow-[0_4px_18px_rgba(233,107,138,0.35)] hover:shadow-[0_6px_25px_rgba(233,107,138,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              <span>My Journey</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#5B3A82] hover:bg-purple-100/60 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-[#292238]/40 backdrop-blur-sm lg:hidden transition-opacity duration-300"
        >
          <div
            id="mobile-nav-card"
            onClick={(e) => e.stopPropagation()}
            className="fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-pink-100 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200"
          >
            <div className="flex items-center justify-between pb-3 border-b border-purple-100">
              <PriyaLogo size="sm" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#55B7AD] bg-teal-50 px-2.5 py-1 rounded-full">
                MBBS Aspirant
              </span>
            </div>

            <div className="flex flex-col gap-1.5 py-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-medium text-[#292238] hover:bg-purple-50 hover:text-[#5B3A82] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#E96B8A]">✦</span>
                </a>
              ))}
            </div>

            <a
              id="mobile-cta-journey"
              href="#journey"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#5B3A82] to-[#E96B8A] shadow-md"
            >
              <span>Explore My Journey</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
