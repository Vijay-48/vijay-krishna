import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

interface QuantumHeroProps {
  onConsciousnessChange: (level: number) => void;
}

const QuantumHero: React.FC<QuantumHeroProps> = ({ onConsciousnessChange }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [quantumState, setQuantumState] = useState('INITIALIZING');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onConsciousnessChange(25);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [onConsciousnessChange]);

  useEffect(() => {
    if (isVisible) {
      // Quantum text materialization sequence
      const timeline = anime.timeline({
        easing: 'easeOutQuart'
      });

      timeline
        .add({
          targets: '.quantum-title',
          opacity: [0, 1],
          translateY: [50, 0],
          scale: [0.8, 1],
          duration: 1000,
          delay: anime.stagger(100)
        })
        .add({
          targets: '.quantum-subtitle',
          opacity: [0, 1],
          translateX: [-100, 0],
          duration: 800,
          delay: anime.stagger(50)
        }, '-=500')
        .add({
          targets: '.quantum-status',
          opacity: [0, 1],
          scale: [0, 1],
          duration: 600,
          delay: anime.stagger(100)
        }, '-=400')
        .add({
          targets: '.quantum-portrait',
          opacity: [0, 1],
          scale: [0.5, 1],
          rotateY: [180, 0],
          duration: 1200
        }, '-=800');

      // Quantum state progression
      const states = ['INITIALIZING', 'LOADING', 'QUANTUM ENTANGLED', 'NEURAL NETWORK ACTIVE', 'CONSCIOUSNESS ONLINE'];
      let stateIndex = 0;

      const stateInterval = setInterval(() => {
        if (stateIndex < states.length - 1) {
          stateIndex++;
          setQuantumState(states[stateIndex]);
          onConsciousnessChange(25 + (stateIndex * 15));
        } else {
          clearInterval(stateInterval);
        }
      }, 1000);

      return () => clearInterval(stateInterval);
    }
  }, [isVisible, onConsciousnessChange]);

  return (
    <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Quantum Neural Network Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="neural-node"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="neural-connection"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 200}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 1.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Quantum Text Section */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="quantum-title opacity-0 text-6xl md:text-8xl font-bold quantum-text">
                VIJAY
              </h1>
              <h1 className="quantum-title opacity-0 text-6xl md:text-8xl font-bold quantum-text">
                KRISHNA
              </h1>
              <h1 className="quantum-title opacity-0 text-6xl md:text-8xl font-bold quantum-text">
                RACHAMALLA
              </h1>
            </div>

            {/* Quantum Subtitle */}
            <div className="space-y-2">
              <h2 className="quantum-subtitle opacity-0 text-2xl md:text-4xl quantum-mono">
                QUANTUM AI ENGINEER
              </h2>
              <div className="quantum-subtitle opacity-0 text-lg quantum-mono text-cyan-400">
                NEURAL NETWORKS • COMPUTER VISION • BLOCKCHAIN
              </div>
            </div>

            {/* Quantum Status */}
            <div className="quantum-status opacity-0 space-y-4">
              <div className="quantum-hologram p-6 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm">
                <div className="space-y-2 quantum-mono text-sm">
                  <div className="flex justify-between">
                    <span>STATUS:</span>
                    <span className="text-cyan-400">{quantumState}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>NEURAL NETWORK:</span>
                    <span className="text-green-400">ENTANGLED</span>
                  </div>
                  <div className="flex justify-between">
                    <span>QUANTUM STATE:</span>
                    <span className="text-blue-400">SUPERPOSITION</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CONSCIOUSNESS:</span>
                    <span className="text-purple-400">EXPANDING</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantum Skills Preview */}
            <div className="quantum-status opacity-0 flex flex-wrap gap-3 justify-center lg:justify-start">
              {['Python', 'TensorFlow', 'React', 'Blockchain', 'Computer Vision'].map((skill, index) => (
                <div
                  key={skill}
                  className="probability-cloud px-4 py-2 rounded-full border border-cyan-400/30 quantum-mono text-sm interactive"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Quantum Portrait */}
          <div className="flex justify-center">
            <div className="quantum-portrait opacity-0 relative">
              <div className="quantum-portal w-80 h-80 relative">
                <img
                  src="/lovable-uploads/bdee0ff2-4ae7-4ff1-9e44-e1a59223c791.png"
                  alt="Vijay Krishna Rachamalla"
                  className="w-full h-full object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
                />
                
                {/* Quantum Overlay Effects */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 via-transparent to-blue-400/20" />
                
                {/* Orbiting Particles */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      animation: `orbit 3s linear infinite`,
                      animationDelay: `${i * 0.375}s`,
                      transformOrigin: `0 ${120 + i * 10}px`
                    }}
                  />
                ))}
              </div>

              {/* Quantum Data Readout */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 quantum-hologram p-3 rounded border border-cyan-400/30 bg-black/50 backdrop-blur-sm">
                <div className="quantum-mono text-xs text-center">
                  <div>QUANTUM SIGNATURE: VKR-2024</div>
                  <div>NEURAL PATTERN: RECOGNIZED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 quantum-status opacity-0">
        <div className="flex flex-col items-center space-y-2 interactive">
          <div className="quantum-mono text-xs">EXPLORE QUANTUM DIMENSIONS</div>
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default QuantumHero;