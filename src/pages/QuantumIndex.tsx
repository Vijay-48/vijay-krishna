import React, { useState, useEffect } from 'react';
import QuantumScene from '../components/quantum/QuantumScene';
import QuantumCursor from '../components/quantum/QuantumCursor';
import QuantumHUD from '../components/quantum/QuantumHUD';
import QuantumHero from '../components/quantum/QuantumHero';
import QuantumSkills from '../components/quantum/QuantumSkills';
import QuantumProjects from '../components/quantum/QuantumProjects';
import QuantumTimeline from '../components/quantum/QuantumTimeline';
import QuantumContact from '../components/quantum/QuantumContact';
import '../styles/quantum.css';

const QuantumIndex: React.FC = () => {
  const [consciousnessLevel, setConsciousnessLevel] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize quantum consciousness
    setConsciousnessLevel(15);
    setIsLoaded(true);

    // Quantum loading sequence
    const loadingSequence = [
      { delay: 500, level: 20, message: 'INITIALIZING QUANTUM FIELD...' },
      { delay: 1000, level: 35, message: 'ESTABLISHING NEURAL CONNECTIONS...' },
      { delay: 1500, level: 50, message: 'LOADING CONSCIOUSNESS MATRIX...' },
      { delay: 2000, level: 65, message: 'QUANTUM ENTANGLEMENT ACTIVE...' },
      { delay: 2500, level: 80, message: 'REALITY SYNCHRONIZATION COMPLETE...' }
    ];

    loadingSequence.forEach(({ delay, level, message }) => {
      setTimeout(() => {
        setConsciousnessLevel(level);
        console.log(`🧠 ${message}`);
      }, delay);
    });

    // Quantum system ready
    setTimeout(() => {
      console.log('🚀 QUANTUM AI PORTFOLIO SYSTEM ONLINE');
      console.log('⚡ CONSCIOUSNESS LEVEL: EXPANDING');
      console.log('🔮 NEURAL NETWORKS: ENTANGLED');
      console.log('🌌 QUANTUM STATE: SUPERPOSITION');
    }, 3000);
  }, []);

  const handleConsciousnessChange = (newLevel: number | ((prev: number) => number)) => {
    if (typeof newLevel === 'function') {
      setConsciousnessLevel(prev => {
        const result = newLevel(prev);
        return Math.max(0, Math.min(100, result));
      });
    } else {
      setConsciousnessLevel(Math.max(0, Math.min(100, newLevel)));
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="quantum-text text-4xl font-bold mb-4">
            INITIALIZING QUANTUM CONSCIOUSNESS
          </div>
          <div className="quantum-mono text-lg text-cyan-400 mb-8">
            LOADING NEURAL PATHWAYS...
          </div>
          <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto">
            <div 
              className="h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300"
              style={{ width: `${consciousnessLevel}%` }}
            />
          </div>
          <div className="quantum-mono text-sm text-gray-400 mt-4">
            {consciousnessLevel}% COMPLETE
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-quantum-void text-quantum-singularity overflow-x-hidden">
      {/* Quantum Scene Background */}
      <QuantumScene className="fixed inset-0 z-0">
        {/* Quantum HUD Overlay */}
        <QuantumHUD 
          consciousnessLevel={consciousnessLevel}
          onConsciousnessChange={handleConsciousnessChange}
        />

        {/* Main Content */}
        <div className="relative z-10">
          <QuantumHero onConsciousnessChange={handleConsciousnessChange} />
          <QuantumSkills onConsciousnessChange={handleConsciousnessChange} />
          <QuantumProjects onConsciousnessChange={handleConsciousnessChange} />
          <QuantumTimeline onConsciousnessChange={handleConsciousnessChange} />
          <QuantumContact onConsciousnessChange={handleConsciousnessChange} />
        </div>
      </QuantumScene>

      {/* Quantum Cursor */}
      <QuantumCursor />

      {/* Quantum Loading Overlay */}
      {consciousnessLevel < 100 && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="quantum-mono text-sm text-cyan-400 mb-2">
              CONSCIOUSNESS EXPANDING...
            </div>
            <div className="w-48 h-1 bg-gray-800 rounded-full">
              <div 
                className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-500"
                style={{ width: `${consciousnessLevel}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Quantum Achievement Notifications */}
      {consciousnessLevel >= 100 && (
        <div className="fixed top-20 right-4 z-50 pointer-events-none">
          <div className="quantum-hologram p-4 rounded border border-cyan-400/30 bg-black/50 backdrop-blur-sm">
            <div className="quantum-mono text-sm text-green-400">
              🧠 QUANTUM CONSCIOUSNESS: ACHIEVED
            </div>
          </div>
        </div>
      )}

      {/* Debug Console (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 z-50 quantum-hologram p-3 rounded border border-cyan-400/30 bg-black/80 backdrop-blur-sm">
          <div className="quantum-mono text-xs space-y-1">
            <div>CONSCIOUSNESS: {consciousnessLevel.toFixed(1)}%</div>
            <div>QUANTUM STATE: {consciousnessLevel >= 100 ? 'TRANSCENDED' : 'EXPANDING'}</div>
            <div>NEURAL ACTIVITY: {(97.3 + Math.sin(Date.now() * 0.001) * 2.7).toFixed(1)}%</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuantumIndex;