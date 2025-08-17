import React, { useEffect, useState } from 'react';
import anime from 'animejs';

interface QuantumHUDProps {
  consciousnessLevel: number;
  onConsciousnessChange: (level: number) => void;
}

const QuantumHUD: React.FC<QuantumHUDProps> = ({ consciousnessLevel, onConsciousnessChange }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [quantumState, setQuantumState] = useState('ENTANGLED');
  const [neuralActivity, setNeuralActivity] = useState(97.3);

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Quantum state fluctuation
    const stateInterval = setInterval(() => {
      const states = ['ENTANGLED', 'SUPERPOSITION', 'COHERENT', 'TUNNELING'];
      setQuantumState(states[Math.floor(Math.random() * states.length)]);
    }, 3000);

    // Neural activity simulation
    const neuralInterval = setInterval(() => {
      setNeuralActivity(prev => {
        const newActivity = prev + (Math.random() - 0.5) * 2;
        return Math.max(90, Math.min(100, newActivity));
      });
    }, 500);

    return () => {
      clearInterval(timeInterval);
      clearInterval(stateInterval);
      clearInterval(neuralInterval);
    };
  }, []);

  useEffect(() => {
    // Animate consciousness level changes
    const meter = document.querySelector('.consciousness-fill');
    if (meter) {
      anime({
        targets: meter,
        width: `${consciousnessLevel}%`,
        duration: 1000,
        easing: 'easeOutQuart'
      });
    }
  }, [consciousnessLevel]);

  return (
    <>
      {/* Quantum Grid Overlay */}
      <div className="quantum-grid" />

      {/* HUD Corners */}
      <div className="quantum-hud-corner top-left" />
      <div className="quantum-hud-corner top-right" />
      <div className="quantum-hud-corner bottom-left" />
      <div className="quantum-hud-corner bottom-right" />

      {/* Consciousness Meter */}
      <div className="consciousness-meter">
        <div 
          className="consciousness-fill" 
          style={{ width: `${consciousnessLevel}%` }}
        />
        <div className="absolute -top-6 left-0 text-xs quantum-mono">
          CONSCIOUSNESS: {consciousnessLevel.toFixed(1)}%
        </div>
      </div>

      {/* Quantum Status Display */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="quantum-hologram p-4 rounded-lg border border-cyan-400/30 bg-black/50 backdrop-blur-sm">
          <div className="text-center">
            <div className="quantum-text text-lg font-bold mb-2">
              QUANTUM AI SYSTEM
            </div>
            <div className="quantum-mono text-sm space-y-1">
              <div>STATUS: {quantumState}</div>
              <div>NEURAL: {neuralActivity.toFixed(1)}%</div>
              <div>TIME: {currentTime.toLocaleTimeString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Navigation */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="quantum-hologram p-3 rounded-lg border border-cyan-400/30 bg-black/50 backdrop-blur-sm">
          <nav className="space-y-3">
            {[
              { label: 'NEURAL', href: '#hero' },
              { label: 'MATRIX', href: '#about' },
              { label: 'QUANTUM', href: '#skills' },
              { label: 'PROJECTS', href: '#projects' },
              { label: 'TIMELINE', href: '#experience' },
              { label: 'PORTAL', href: '#contact' }
            ].map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="block quantum-mono text-xs text-cyan-400 hover:text-white transition-colors interactive"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    onConsciousnessChange(Math.min(100, consciousnessLevel + 2));
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Quantum Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="quantum-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        />
      ))}

      {/* Data Streams */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="data-stream"
          style={{
            left: `${10 + i * 10}%`,
            height: '100vh',
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random()}s`
          }}
        />
      ))}

      {/* Quantum Entanglement Lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="entanglement-line"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${100 + Math.random() * 200}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </>
  );
};

export default QuantumHUD;