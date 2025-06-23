
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import HUDOverlay from '../components/HUDOverlay';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HUD Grid Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* HUD Corner Elements */}
      <div className="fixed top-4 left-4 z-50">
        <div className="w-16 h-16 border-l-2 border-t-2 border-white/30"></div>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <div className="w-16 h-16 border-r-2 border-t-2 border-white/30"></div>
      </div>
      <div className="fixed bottom-4 left-4 z-50">
        <div className="w-16 h-16 border-l-2 border-b-2 border-white/30"></div>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <div className="w-16 h-16 border-r-2 border-b-2 border-white/30"></div>
      </div>

      {/* Scanning Lines */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse delay-1000"></div>
      </div>

      <HUDOverlay />
      
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
