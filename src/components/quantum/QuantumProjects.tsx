import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

interface QuantumProjectsProps {
  onConsciousnessChange: (level: number) => void;
}

const QuantumProjects: React.FC<QuantumProjectsProps> = ({ onConsciousnessChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'HOD NOTIFICATION SYSTEM',
      subtitle: 'QUANTUM STUDENT MONITORING',
      description: 'AI-powered system for detecting unauthorized student movements using computer vision with email alerts and snapshots.',
      tech: ['YOLOv8', 'FaceNet', 'OpenCV', 'LSTM', 'Flask'],
      status: 'QUANTUM ENTANGLED',
      github: 'https://github.com/Vijay-48/HOD-Notification-System-for-Student-Truancy',
      quantumState: 'SUPERPOSITION',
      probability: 97.3
    },
    {
      id: 2,
      title: 'DECENTRALIZED DOCUMENT VERIFICATION',
      subtitle: 'BLOCKCHAIN QUANTUM LEDGER',
      description: 'Tamper-proof platform for secure document verification on distributed ledger with IPFS integration.',
      tech: ['Blockchain', 'Solidity', 'IPFS', 'Web3.js', 'Ethereum'],
      status: 'QUANTUM SECURED',
      github: 'https://github.com/Vijay-48/Decentralized-Document-Verification-System',
      quantumState: 'ENTANGLED',
      probability: 94.7
    },
    {
      id: 3,
      title: 'AI QUANTUM SECURITY AUDITOR',
      subtitle: 'MULTI-DIMENSIONAL CODE ANALYSIS',
      description: 'AI-powered security scanner with multi-model LLM integration, advanced analytics, and comprehensive vulnerability detection.',
      tech: ['Python', 'LLM', 'DeepSeek', 'FastAPI', 'Docker'],
      status: 'PRODUCTION REALITY',
      github: 'https://github.com/Vijay-48/AI-Generated-Code-Security-Auditor',
      quantumState: 'COHERENT',
      probability: 99.1
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onConsciousnessChange(70);
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
    if (isVisible) {
      // Animate probability clouds
      anime({
        targets: '.probability-cloud-project',
        scale: [0, 1],
        opacity: [0, 0.8],
        duration: 1500,
        delay: anime.stagger(200),
        easing: 'easeOutElastic(1, .8)'
      });

      // Animate quantum particles
      anime({
        targets: '.quantum-project-particle',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(50),
        easing: 'easeOutQuart'
      });
    }
  }, [isVisible]);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
    onConsciousnessChange(prev => Math.min(100, prev + 3));

    // Wave function collapse animation
    const projectElement = document.querySelector(`[data-project-id="${projectId}"]`);
    if (projectElement) {
      anime({
        targets: projectElement,
        scale: [1, 1.05, 1],
        duration: 600,
        easing: 'easeOutElastic(1, .8)'
      });

      // Create quantum explosion particles
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'quantum-explosion-particle';
        particle.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00d4ff;
          border-radius: 50%;
          pointer-events: none;
          z-index: 100;
          box-shadow: 0 0 10px #00d4ff;
        `;
        
        projectElement.appendChild(particle);

        const angle = (i / 12) * Math.PI * 2;
        const distance = 100 + Math.random() * 50;

        anime({
          targets: particle,
          translateX: Math.cos(angle) * distance,
          translateY: Math.sin(angle) * distance,
          scale: [1, 0],
          opacity: [1, 0],
          duration: 1000,
          easing: 'easeOutQuart',
          complete: () => {
            if (projectElement.contains(particle)) {
              projectElement.removeChild(particle);
            }
          }
        });
      }
    }
  };

  return (
    <section id="projects" ref={containerRef} className="min-h-screen py-20 relative overflow-hidden">
      {/* Quantum Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="quantum-project-particle absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: 'particleFloat 4s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold quantum-text mb-4">
            QUANTUM PROBABILITY PROJECTS
          </h2>
          <div className="quantum-mono text-xl text-cyan-400 mb-8">
            WAVE FUNCTION COLLAPSE • QUANTUM ENTANGLEMENT • REALITY MANIFESTATION
          </div>
          <div className="quantum-hologram p-4 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm inline-block">
            <div className="quantum-mono text-sm">
              CLICK PROJECTS TO COLLAPSE WAVE FUNCTIONS INTO REALITY
            </div>
          </div>
        </div>

        {/* Quantum Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className="probability-cloud-project relative cursor-pointer interactive"
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Probability Cloud Container */}
              <div className="quantum-hologram p-8 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm h-full relative overflow-hidden">
                
                {/* Quantum State Indicator */}
                <div className="absolute top-4 right-4">
                  <div className="quantum-mono text-xs text-cyan-400">
                    {project.quantumState}
                  </div>
                  <div className="w-16 h-1 bg-gray-800 rounded-full mt-1">
                    <div
                      className="h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-1000"
                      style={{ width: `${project.probability}%` }}
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold quantum-text mb-2">
                      {project.title}
                    </h3>
                    <div className="quantum-mono text-sm text-cyan-400 mb-4">
                      {project.subtitle}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Quantum Tech Stack */}
                  <div className="space-y-2">
                    <div className="quantum-mono text-xs text-cyan-400">
                      QUANTUM TECHNOLOGIES:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded quantum-mono text-xs"
                          style={{ animationDelay: `${techIndex * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-800/50 border border-gray-600/30 rounded quantum-mono text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantum Status */}
                  <div className="flex justify-between items-center pt-4 border-t border-cyan-400/20">
                    <div className="quantum-mono text-xs">
                      STATUS: <span className="text-green-400">{project.status}</span>
                    </div>
                    <div className="quantum-mono text-xs">
                      PROBABILITY: {project.probability}%
                    </div>
                  </div>
                </div>

                {/* Quantum Interference Pattern */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-400/5" />
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                      style={{
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.2}s`,
                        animation: 'quantumPulse 3s ease-in-out infinite'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Quantum Entanglement Lines */}
              {index < projects.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-cyan-400 to-transparent opacity-30" />
              )}
            </div>
          ))}
        </div>

        {/* Expanded Project Details */}
        {selectedProject && (
          <div className="mb-16">
            {projects
              .filter(project => project.id === selectedProject)
              .map(project => (
                <div
                  key={project.id}
                  className="quantum-hologram p-8 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Project Details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold quantum-text mb-2">
                          {project.title}
                        </h3>
                        <div className="quantum-mono text-lg text-cyan-400 mb-4">
                          QUANTUM ANALYSIS COMPLETE
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="quantum-mono text-sm text-cyan-400 mb-2">
                            QUANTUM DESCRIPTION:
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="quantum-mono text-sm text-cyan-400 mb-2">
                            TECHNOLOGY MATRIX:
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.tech.map((tech, index) => (
                              <div
                                key={tech}
                                className="probability-cloud p-2 rounded border border-cyan-400/30 quantum-mono text-sm text-center"
                                style={{ animationDelay: `${index * 0.1}s` }}
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 border border-cyan-400 rounded quantum-mono text-sm hover:bg-cyan-400/20 transition-colors interactive flex items-center space-x-2"
                        >
                          <span>ACCESS QUANTUM CODE</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Quantum Metrics */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="quantum-mono text-sm text-cyan-400 mb-4">
                          QUANTUM METRICS:
                        </h4>
                        <div className="space-y-4">
                          {[
                            { label: 'QUANTUM COHERENCE', value: project.probability },
                            { label: 'NEURAL COMPLEXITY', value: 89 },
                            { label: 'INNOVATION INDEX', value: 94 },
                            { label: 'REALITY STABILITY', value: 97 }
                          ].map((metric, index) => (
                            <div key={metric.label} className="space-y-2">
                              <div className="flex justify-between quantum-mono text-xs">
                                <span>{metric.label}</span>
                                <span>{metric.value}%</span>
                              </div>
                              <div className="w-full bg-gray-800 rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                                  style={{ 
                                    width: `${metric.value}%`,
                                    animationDelay: `${index * 0.2}s`
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="quantum-hologram p-4 rounded border border-cyan-400/30 bg-black/50">
                        <div className="quantum-mono text-xs space-y-1">
                          <div>QUANTUM STATE: {project.quantumState}</div>
                          <div>ENTANGLEMENT: ACTIVE</div>
                          <div>WAVE FUNCTION: COLLAPSED</div>
                          <div>REALITY STATUS: MANIFESTED</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Quantum Project Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: 'QUANTUM PROJECTS', value: '15+', unit: 'REALITIES' },
            { label: 'CODE COMMITS', value: '500+', unit: 'QUANTUM STATES' },
            { label: 'AI MODELS', value: '8', unit: 'NEURAL NETWORKS' },
            { label: 'CONSCIOUSNESS', value: '97.3', unit: 'PERCENT' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="quantum-hologram p-6 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold quantum-text mb-2">
                {stat.value}
              </div>
              <div className="quantum-mono text-sm text-cyan-400 mb-1">
                {stat.label}
              </div>
              <div className="quantum-mono text-xs text-gray-400">
                {stat.unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuantumProjects;