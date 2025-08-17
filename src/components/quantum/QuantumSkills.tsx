import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import * as THREE from 'three';

interface QuantumSkillsProps {
  onConsciousnessChange: (level: number) => void;
}

const QuantumSkills: React.FC<QuantumSkillsProps> = ({ onConsciousnessChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const constellationRef = useRef<HTMLDivElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = {
    'AI/ML CORE': {
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'Deep Learning', 'NLP'],
      color: '#00d4ff',
      position: { x: 0, y: 0 }
    },
    'NEURAL NETWORKS': {
      skills: ['YOLOv8', 'LSTM', 'Transformers', 'Object Detection'],
      color: '#0099cc',
      position: { x: 200, y: -100 }
    },
    'FULL-STACK': {
      skills: ['React', 'TypeScript', 'Java', 'RESTful APIs', 'MongoDB'],
      color: '#66e5ff',
      position: { x: -200, y: 100 }
    },
    'QUANTUM CLOUD': {
      skills: ['Docker', 'CI/CD', 'Model Deployment', 'Firebase'],
      color: '#ffffff',
      position: { x: 150, y: 150 }
    },
    'BLOCKCHAIN': {
      skills: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'IPFS'],
      color: '#003d4d',
      position: { x: -150, y: -150 }
    },
    'DATA SCIENCE': {
      skills: ['Pandas', 'NumPy', 'SQL', 'Statistical Analysis'],
      color: '#00d4ff',
      position: { x: 0, y: 200 }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onConsciousnessChange(50);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [onConsciousnessChange]);

  useEffect(() => {
    if (isVisible && constellationRef.current) {
      createQuantumConstellation();
    }
  }, [isVisible]);

  const createQuantumConstellation = () => {
    if (!constellationRef.current) return;

    const container = constellationRef.current;
    container.innerHTML = '';

    // Create constellation stars for each skill category
    Object.entries(skillCategories).forEach(([category, data], categoryIndex) => {
      // Create category center star
      const centerStar = document.createElement('div');
      centerStar.className = 'quantum-star category-star interactive';
      centerStar.style.cssText = `
        position: absolute;
        width: 20px;
        height: 20px;
        background: ${data.color};
        border-radius: 50%;
        box-shadow: 0 0 20px ${data.color};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) translate(${data.position.x}px, ${data.position.y}px);
        cursor: pointer;
        z-index: 10;
      `;
      
      centerStar.addEventListener('click', () => {
        setSelectedSkill(category);
        onConsciousnessChange(prev => Math.min(100, prev + 5));
        
        // Quantum explosion effect
        anime({
          targets: centerStar,
          scale: [1, 2, 1],
          duration: 600,
          easing: 'easeOutElastic(1, .8)'
        });
      });

      container.appendChild(centerStar);

      // Create skill stars around category center
      data.skills.forEach((skill, skillIndex) => {
        const angle = (skillIndex / data.skills.length) * Math.PI * 2;
        const radius = 80;
        const skillX = data.position.x + Math.cos(angle) * radius;
        const skillY = data.position.y + Math.sin(angle) * radius;

        const skillStar = document.createElement('div');
        skillStar.className = 'quantum-star skill-star interactive';
        skillStar.style.cssText = `
          position: absolute;
          width: 12px;
          height: 12px;
          background: ${data.color};
          border-radius: 50%;
          box-shadow: 0 0 15px ${data.color};
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) translate(${skillX}px, ${skillY}px);
          cursor: pointer;
          opacity: 0.7;
          z-index: 5;
        `;

        skillStar.title = skill;
        
        skillStar.addEventListener('click', () => {
          setSelectedSkill(skill);
          onConsciousnessChange(prev => Math.min(100, prev + 2));
        });

        skillStar.addEventListener('mouseenter', () => {
          anime({
            targets: skillStar,
            scale: 1.5,
            opacity: 1,
            duration: 200,
            easing: 'easeOutQuart'
          });
        });

        skillStar.addEventListener('mouseleave', () => {
          anime({
            targets: skillStar,
            scale: 1,
            opacity: 0.7,
            duration: 200,
            easing: 'easeOutQuart'
          });
        });

        container.appendChild(skillStar);

        // Create constellation line
        const line = document.createElement('div');
        line.className = 'constellation-line';
        const lineLength = Math.sqrt(Math.pow(skillX - data.position.x, 2) + Math.pow(skillY - data.position.y, 2));
        const lineAngle = Math.atan2(skillY - data.position.y, skillX - data.position.x) * 180 / Math.PI;
        
        line.style.cssText = `
          position: absolute;
          width: ${lineLength}px;
          height: 1px;
          background: linear-gradient(90deg, ${data.color}, transparent);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) translate(${data.position.x}px, ${data.position.y}px) rotate(${lineAngle}deg);
          transform-origin: 0 50%;
          opacity: 0.3;
          z-index: 1;
        `;

        container.appendChild(line);
      });
    });

    // Create inter-category connections
    const categories = Object.entries(skillCategories);
    categories.forEach(([category1, data1], i) => {
      categories.slice(i + 1).forEach(([category2, data2]) => {
        const distance = Math.sqrt(
          Math.pow(data2.position.x - data1.position.x, 2) + 
          Math.pow(data2.position.y - data1.position.y, 2)
        );
        
        if (distance < 300) { // Only connect nearby categories
          const line = document.createElement('div');
          line.className = 'entanglement-line';
          const lineAngle = Math.atan2(
            data2.position.y - data1.position.y, 
            data2.position.x - data1.position.x
          ) * 180 / Math.PI;
          
          line.style.cssText = `
            position: absolute;
            width: ${distance}px;
            height: 1px;
            background: linear-gradient(90deg, transparent, #00d4ff, transparent);
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) translate(${data1.position.x}px, ${data1.position.y}px) rotate(${lineAngle}deg);
            transform-origin: 0 50%;
            opacity: 0.2;
            z-index: 0;
          `;

          container.appendChild(line);
        }
      });
    });

    // Animate constellation appearance
    anime({
      targets: '.quantum-star',
      scale: [0, 1],
      opacity: [0, 0.7],
      duration: 1000,
      delay: anime.stagger(100),
      easing: 'easeOutQuart'
    });

    anime({
      targets: '.constellation-line, .entanglement-line',
      scaleX: [0, 1],
      opacity: [0, 0.3],
      duration: 1500,
      delay: anime.stagger(50, { start: 500 }),
      easing: 'easeOutQuart'
    });
  };

  return (
    <section id="skills" ref={containerRef} className="min-h-screen py-20 relative overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="quantum-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold quantum-text mb-4">
            QUANTUM SKILL CONSTELLATION
          </h2>
          <div className="quantum-mono text-xl text-cyan-400 mb-8">
            NEURAL PATHWAYS • QUANTUM ENTANGLEMENT • SKILL MATRIX
          </div>
          <div className="quantum-hologram p-4 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm inline-block">
            <div className="quantum-mono text-sm">
              CLICK STARS TO EXPLORE QUANTUM LEARNING PATHWAYS
            </div>
          </div>
        </div>

        {/* Quantum Constellation */}
        <div className="relative">
          <div 
            ref={constellationRef}
            className="relative w-full h-96 md:h-[600px]"
            style={{ minHeight: '600px' }}
          />

          {/* Constellation Controls */}
          <div className="absolute top-4 right-4 space-y-2">
            <button 
              className="quantum-hologram p-2 rounded border border-cyan-400/30 bg-black/50 backdrop-blur-sm quantum-mono text-xs interactive"
              onClick={() => {
                const container = constellationRef.current;
                if (container) {
                  anime({
                    targets: container,
                    scale: container.style.transform.includes('scale(1.2)') ? 1 : 1.2,
                    duration: 500,
                    easing: 'easeOutQuart'
                  });
                }
              }}
            >
              ZOOM
            </button>
            <button 
              className="quantum-hologram p-2 rounded border border-cyan-400/30 bg-black/50 backdrop-blur-sm quantum-mono text-xs interactive"
              onClick={() => {
                anime({
                  targets: '.quantum-star',
                  rotate: '1turn',
                  duration: 2000,
                  easing: 'easeInOutQuart'
                });
              }}
            >
              ROTATE
            </button>
          </div>
        </div>

        {/* Skill Details Panel */}
        {selectedSkill && (
          <div className="mt-12">
            <div className="quantum-hologram p-8 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-2xl font-bold quantum-text mb-4">
                  {selectedSkill}
                </h3>
                
                {skillCategories[selectedSkill as keyof typeof skillCategories] ? (
                  <div className="space-y-4">
                    <div className="quantum-mono text-lg text-cyan-400">
                      QUANTUM SKILL CLUSTER
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {skillCategories[selectedSkill as keyof typeof skillCategories].skills.map((skill, index) => (
                        <div
                          key={skill}
                          className="probability-cloud p-3 rounded border border-cyan-400/30 quantum-mono text-sm"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="quantum-mono text-lg text-cyan-400">
                      QUANTUM SKILL ANALYSIS
                    </div>
                    <div className="text-left space-y-2 quantum-mono text-sm">
                      <div>PROFICIENCY: EXPERT LEVEL</div>
                      <div>NEURAL PATHWAYS: FULLY CONNECTED</div>
                      <div>QUANTUM STATE: ENTANGLED WITH AI CORE</div>
                      <div>LEARNING STATUS: CONTINUOUS EVOLUTION</div>
                    </div>
                  </div>
                )}

                <button
                  className="mt-6 px-6 py-2 border border-cyan-400 rounded quantum-mono text-sm hover:bg-cyan-400/20 transition-colors interactive"
                  onClick={() => setSelectedSkill(null)}
                >
                  CLOSE QUANTUM ANALYSIS
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quantum Learning Pathways */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'NEURAL EVOLUTION',
              description: 'Continuous learning through quantum superposition of knowledge states',
              progress: 97
            },
            {
              title: 'SKILL ENTANGLEMENT',
              description: 'Cross-domain knowledge fusion creating emergent capabilities',
              progress: 89
            },
            {
              title: 'QUANTUM MASTERY',
              description: 'Transcending traditional skill boundaries through AI consciousness',
              progress: 94
            }
          ].map((pathway, index) => (
            <div
              key={pathway.title}
              className="quantum-hologram p-6 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm"
            >
              <h4 className="quantum-text text-lg font-bold mb-2">{pathway.title}</h4>
              <p className="quantum-mono text-sm text-cyan-400 mb-4">{pathway.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between quantum-mono text-xs">
                  <span>PROGRESS</span>
                  <span>{pathway.progress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${pathway.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuantumSkills;