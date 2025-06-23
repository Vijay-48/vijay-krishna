
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [showName, setShowName] = useState(true);
  const [showSkills, setShowSkills] = useState(false);
  const [showBio, setShowBio] = useState(false);

  const skills = ["AI/ML", "Frontend Development", "Innovative Solutions", "Open Source Contributor"];

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowName(false);
      setShowSkills(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowBio(true);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* HUD Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Scanning Effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse delay-1000"></div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">
        <div className="text-center lg:text-left z-10">
          <AnimatePresence mode="wait">
            {showName && (
              <motion.div
                key="name"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
              >
                <h1 className="text-6xl md:text-8xl font-bold text-white font-mono tracking-wider">
                  VIJAY KRISHNA
                </h1>
                <div className="mt-4 text-gray-400 font-mono text-sm">
                  &gt; INITIALIZING SYSTEM...
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showSkills && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="mb-8"
              >
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="px-6 py-3 bg-gray-900 backdrop-blur-sm rounded border border-white/20 hover:border-white/40 shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                      style={{
                        transformStyle: 'preserve-3d',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.1)'
                      }}
                    >
                      <span className="text-white font-mono font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showBio && (
              <motion.div
                key="bio"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <p className="text-lg text-gray-300 leading-relaxed font-mono">
                  &gt; AI-focused B.Tech student with a passion for smart interfaces and innovative solutions.
                </p>
                <div className="mt-4 text-gray-500 font-mono text-sm">
                  STATUS: ONLINE | READY FOR DEPLOYMENT
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="relative group"
          >
            <div 
              className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:rotate-2"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 20px 40px rgba(0,0,0,0.7), 0 0 40px rgba(255,255,255,0.1)',
                background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(0,0,0,0.2))'
              }}
            >
              <img 
                src="/lovable-uploads/bdee0ff2-4ae7-4ff1-9e44-e1a59223c791.png" 
                alt="Vijay Krishna"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* HUD scanning line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 animate-pulse"></div>
            </div>
            
            {/* 3D floating elements around the image */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-cyan-400 rounded-full animate-bounce delay-100"></div>
            <div className="absolute -top-4 -right-4 w-6 h-6 border-2 border-white/40 rotate-45 animate-pulse delay-300"></div>
            <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-cyan-400 rounded-full animate-ping delay-500"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-white/40 rounded-full animate-bounce delay-700"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;