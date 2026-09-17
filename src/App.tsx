/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { DreamSection } from './components/DreamSection';
import { SkillsSection } from './components/SkillsSection';
import { HobbiesSection } from './components/HobbiesSection';
import { ValuesSection } from './components/ValuesSection';
import { FutureVisionSection } from './components/FutureVisionSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#292238] flex flex-col selection:bg-[#E96B8A]/20 selection:text-[#5B3A82]">
      {/* Floating Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <DreamSection />
        <SkillsSection />
        <HobbiesSection />
        <ValuesSection />
        <FutureVisionSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Dark Plum Footer */}
      <Footer />
    </div>
  );
}

