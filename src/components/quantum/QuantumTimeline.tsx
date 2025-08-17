import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

interface QuantumTimelineProps {
  onConsciousnessChange: (level: number) => void;
}

const QuantumTimeline: React.FC<QuantumTimelineProps> = ({ onConsciousnessChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const timelineEvents = [
    {
      id: 1,
      year: '2024-2025',
      title: 'BACKEND INTERN',
      company: 'INFOTACT SOLUTIONS',
      type: 'QUANTUM INTERNSHIP',
      description: 'Developed real-world Python applications, collaborating with team to implement solutions. Received direct mentorship from Dr. Ashish Ranjan Dash.',
      skills: ['Python', 'Backend Development', 'Team Collaboration'],
      certificate: 'https://drive.google.com/file/d/1p2MF3j-3fIa-G7cvSEPgHNwb898ip76C/view?usp=sharing',
      quantumState: 'ACTIVE',
      timeDilation: 1.2
    },
    {
      id: 2,
      year: '2024',
      title: 'SALESFORCE DEVELOPER',
      company: 'SALESFORCE',
      type: 'VIRTUAL QUANTUM FIELD',
      description: 'Designed Salesforce applications with Apex triggers and classes, reducing manual effort by 50%. Configured Lightning Web Components and integrated external systems.',
      skills: ['Apex', 'LWC', 'Salesforce', 'RESTful APIs'],
      certificate: 'https://drive.google.com/file/d/1om_NdlluYTiZydb5Xe9dDa0LS07JmzY4/view?usp=sharing',
      quantumState: 'ENTANGLED',
      timeDilation: 1.5
    },
    {
      id: 3,
      year: '2024',
      title: 'FRONTEND DEVELOPER',
      company: 'CSRBOX',
      type: 'WEB QUANTUM INTERFACE',
      description: 'Built responsive web applications using JavaScript, HTML5, CSS, and JSON. Collaborated with cross-functional teams to design scalable web solutions.',
      skills: ['JavaScript', 'HTML5', 'CSS', 'Responsive Design'],
      certificate: 'https://drive.google.com/file/d/1MnAi7d8Gj5zVxio4Yqp8zn3bBBQR3Rse/view?usp=sharing',
      quantumState: 'COHERENT',
      timeDilation: 1.3
    },
    {
      id: 4,
      year: '2021-2025',
      title: 'B.TECH ARTIFICIAL INTELLIGENCE',
      company: 'VIDYA JYOTHI INSTITUTE',
      type: 'QUANTUM EDUCATION',
      description: 'Specialized in AI/ML with focus on neural networks, computer vision, and quantum computing principles. CGPA: 7.15/10.0',
      skills: ['AI/ML', 'Neural Networks', 'Computer Vision', 'Quantum Computing'],
      certificate: null,
      quantumState: 'SUPERPOSITION',
      timeDilation: 4.0
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onConsciousnessChange(85);
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
    if (isVisible && timelineRef.current) {
      createQuantumTimeline();
    }
  }, [isVisible]);

  const createQuantumTimeline = () => {
    // Animate timeline appearance with time dilation effect
    anime({
      targets: '.timeline-event',
      translateX: [100, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(200),
      easing: 'easeOutQuart'
    });

    // Animate quantum timeline curve
    anime({
      targets: '.timeline-curve',
      strokeDashoffset: [1000, 0],
      duration: 2000,
      easing: 'easeInOutQuart',
      delay: 500
    });

    // Animate time dilation particles
    anime({
      targets: '.time-particle',
      scale: [0, 1],
      opacity: [0, 0.8],
      duration: 1500,
      delay: anime.stagger(100),
      easing: 'easeOutElastic(1, .8)'
    });
  };

  const handleEventClick = (eventId: number) => {
    setSelectedEvent(eventId === selectedEvent ? null : eventId);
    onConsciousnessChange(prev => Math.min(100, prev + 4));

    // Time dilation effect
    const eventElement = document.querySelector(`[data-event-id="${eventId}"]`);
    if (eventElement) {
      anime({
        targets: eventElement,
        scale: [1, 1.1, 1],
        duration: 800,
        easing: 'easeOutElastic(1, .8)'
      });

      // Create temporal ripples
      for (let i = 0; i < 6; i++) {
        const ripple = document.createElement('div');
        ripple.className = 'temporal-ripple';
        ripple.style.cssText = `
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #00d4ff;
          border-radius: 50%;
          pointer-events: none;
          z-index: 100;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        `;
        
        eventElement.appendChild(ripple);

        anime({
          targets: ripple,
          scale: [0, 3 + i],
          opacity: [0.8, 0],
          duration: 1000 + i * 200,
          easing: 'easeOutQuart',
          complete: () => {
            if (eventElement.contains(ripple)) {
              eventElement.removeChild(ripple);
            }
          }
        });
      }
    }
  };

  return (
    <section id="experience" ref={containerRef} className="min-h-screen py-20 relative overflow-hidden">
      {/* Quantum Space-Time Background */}
      <div className="absolute inset-0">
        {/* Time Dilation Grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(0, 153, 204, 0.3) 0%, transparent 50%)
              `,
              backgroundSize: '400px 400px',
              animation: 'quantumPulse 8s ease-in-out infinite'
            }}
          />
        </div>

        {/* Temporal Particles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="time-particle absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animation: 'particleFloat 6s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold quantum-text mb-4">
            QUANTUM TIME DILATION TIMELINE
          </h2>
          <div className="quantum-mono text-xl text-cyan-400 mb-8">
            TEMPORAL MECHANICS • SPACE-TIME CURVATURE • EXPERIENCE MANIFOLDS
          </div>
          <div className="quantum-hologram p-4 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm inline-block">
            <div className="quantum-mono text-sm">
              TIMELINE WARPS THROUGH SPACE-TIME • CLICK EVENTS TO DILATE TIME
            </div>
          </div>
        </div>

        {/* Quantum Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Curve */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ minHeight: '800px' }}
          >
            <path
              className="timeline-curve"
              d="M 100 100 Q 300 200 500 300 T 900 500 Q 1100 600 1300 700"
              stroke="#00d4ff"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
              strokeDashoffset="1000"
              opacity="0.6"
            />
          </svg>

          {/* Timeline Events */}
          <div className="relative z-10 space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                data-event-id={event.id}
                className={`timeline-event flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } cursor-pointer interactive`}
                onClick={() => handleEventClick(event.id)}
                style={{
                  transform: `perspective(1000px) rotateX(${index * 5}deg) translateZ(${index * 20}px)`
                }}
              >
                <div className={`max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  {/* Event Card */}
                  <div className="quantum-hologram p-6 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm relative">
                    {/* Quantum State Indicator */}
                    <div className="absolute -top-2 -right-2">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
                    </div>

                    {/* Time Dilation Factor */}
                    <div className="absolute -top-3 -left-3 quantum-hologram px-2 py-1 rounded border border-cyan-400/30 bg-black/50">
                      <div className="quantum-mono text-xs text-cyan-400">
                        T×{event.timeDilation}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Event Header */}
                      <div>
                        <div className="quantum-mono text-sm text-cyan-400 mb-1">
                          {event.year} • {event.type}
                        </div>
                        <h3 className="text-xl font-bold quantum-text mb-1">
                          {event.title}
                        </h3>
                        <div className="quantum-mono text-sm text-gray-400">
                          {event.company}
                        </div>
                      </div>

                      {/* Event Description */}
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {event.description}
                      </p>

                      {/* Quantum Skills */}
                      <div className="space-y-2">
                        <div className="quantum-mono text-xs text-cyan-400">
                          QUANTUM TECHNOLOGIES:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {event.skills.map((skill, skillIndex) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded quantum-mono text-xs"
                              style={{ animationDelay: `${skillIndex * 0.1}s` }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Quantum State */}
                      <div className="flex justify-between items-center pt-2 border-t border-cyan-400/20">
                        <div className="quantum-mono text-xs">
                          STATE: <span className="text-green-400">{event.quantumState}</span>
                        </div>
                        {event.certificate && (
                          <a
                            href={event.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="quantum-mono text-xs text-cyan-400 hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            CERTIFICATE
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Quantum Interference Pattern */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                          style={{
                            top: `${30 + i * 30}%`,
                            animationDelay: `${i * 0.5}s`,
                            animation: 'quantumPulse 4s ease-in-out infinite'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Timeline Connector */}
                  <div className={`absolute top-1/2 ${
                    index % 2 === 0 ? '-right-4' : '-left-4'
                  } w-8 h-px bg-gradient-to-${
                    index % 2 === 0 ? 'r' : 'l'
                  } from-cyan-400 to-transparent`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expanded Event Details */}
        {selectedEvent && (
          <div className="mt-16">
            {timelineEvents
              .filter(event => event.id === selectedEvent)
              .map(event => (
                <div
                  key={event.id}
                  className="quantum-hologram p-8 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Detailed Information */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold quantum-text mb-2">
                          {event.title}
                        </h3>
                        <div className="quantum-mono text-lg text-cyan-400 mb-4">
                          TEMPORAL ANALYSIS COMPLETE
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="quantum-mono text-sm text-cyan-400 mb-2">
                            QUANTUM DESCRIPTION:
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {event.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="quantum-mono text-sm text-cyan-400 mb-2">
                            SKILL MATRIX:
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {event.skills.map((skill, index) => (
                              <div
                                key={skill}
                                className="probability-cloud p-2 rounded border border-cyan-400/30 quantum-mono text-sm text-center"
                                style={{ animationDelay: `${index * 0.1}s` }}
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {event.certificate && (
                        <div className="flex space-x-4">
                          <a
                            href={event.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 border border-cyan-400 rounded quantum-mono text-sm hover:bg-cyan-400/20 transition-colors interactive"
                          >
                            VIEW QUANTUM CERTIFICATE
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Temporal Metrics */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="quantum-mono text-sm text-cyan-400 mb-4">
                          TEMPORAL METRICS:
                        </h4>
                        <div className="space-y-4">
                          {[
                            { label: 'TIME DILATION', value: event.timeDilation * 20 },
                            { label: 'EXPERIENCE DENSITY', value: 92 },
                            { label: 'SKILL ACQUISITION', value: 88 },
                            { label: 'QUANTUM COHERENCE', value: 95 }
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
                          <div>QUANTUM STATE: {event.quantumState}</div>
                          <div>TIME FACTOR: ×{event.timeDilation}</div>
                          <div>TEMPORAL STABILITY: LOCKED</div>
                          <div>CAUSALITY: PRESERVED</div>
                        </div>
                      </div>

                      {/* Certificate Preview */}
                      {event.certificate && (
                        <div className="quantum-hologram p-4 rounded border border-cyan-400/30 bg-black/50">
                          <div className="text-center">
                            <div className="quantum-mono text-xs text-cyan-400 mb-2">
                              QUANTUM CERTIFICATE
                            </div>
                            <div className="w-full h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded border border-cyan-400/30 flex items-center justify-center">
                              <div className="quantum-mono text-xs text-gray-400">
                                CERTIFICATE PREVIEW
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Quantum Education Section */}
        <div className="mt-16">
          <div className="quantum-hologram p-8 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold quantum-text mb-2">
                QUANTUM EDUCATION MATRIX
              </h3>
              <div className="quantum-mono text-lg text-cyan-400">
                ACADEMIC SUPERPOSITION STATE
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="quantum-hologram p-6 rounded border border-cyan-400/30 bg-black/50">
                <h4 className="quantum-text text-lg font-bold mb-4">B.TECH ARTIFICIAL INTELLIGENCE</h4>
                <div className="space-y-2 quantum-mono text-sm">
                  <div>INSTITUTION: Vidya Jyothi Institute of Technology</div>
                  <div>DURATION: 2021 - 2025</div>
                  <div>QUANTUM GPA: 7.15/10.0</div>
                  <div>SPECIALIZATION: Neural Networks, Computer Vision</div>
                </div>
              </div>

              <div className="quantum-hologram p-6 rounded border border-cyan-400/30 bg-black/50">
                <h4 className="quantum-text text-lg font-bold mb-4">MPC INTERMEDIATE</h4>
                <div className="space-y-2 quantum-mono text-sm">
                  <div>INSTITUTION: Sri Chaitanya Junior College</div>
                  <div>DURATION: 2019 - 2021</div>
                  <div>QUANTUM GPA: 8.79/10.0</div>
                  <div>FOCUS: Mathematics, Physics, Chemistry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumTimeline;