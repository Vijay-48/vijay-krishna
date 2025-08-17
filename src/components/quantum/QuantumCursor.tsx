import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const QuantumCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Create cursor trail elements
    const trailCount = 10;
    const trails: HTMLDivElement[] = [];

    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'quantum-cursor-trail';
      trail.style.cssText = `
        position: fixed;
        width: ${20 - i * 1.5}px;
        height: ${20 - i * 1.5}px;
        background: radial-gradient(circle, rgba(0, 212, 255, ${0.8 - i * 0.08}) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: screen;
        transform: translate(-50%, -50%);
      `;
      document.body.appendChild(trail);
      trails.push(trail);
    }

    trailRefs.current = trails;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Update main cursor
      if (cursorRef.current) {
        anime({
          targets: cursorRef.current,
          left: e.clientX,
          top: e.clientY,
          duration: 0,
          easing: 'linear'
        });
      }

      // Update trail with quantum delay
      trails.forEach((trail, index) => {
        anime({
          targets: trail,
          left: e.clientX,
          top: e.clientY,
          duration: 100 + index * 50,
          easing: 'easeOutQuart',
          delay: index * 20
        });
      });
    };

    const handleMouseClick = () => {
      // Quantum explosion effect on click
      const explosion = document.createElement('div');
      explosion.style.cssText = `
        position: fixed;
        left: ${mousePos.current.x}px;
        top: ${mousePos.current.y}px;
        width: 4px;
        height: 4px;
        background: #00d4ff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 20px #00d4ff;
      `;
      document.body.appendChild(explosion);

      anime({
        targets: explosion,
        scale: [1, 20],
        opacity: [1, 0],
        duration: 600,
        easing: 'easeOutQuart',
        complete: () => {
          document.body.removeChild(explosion);
        }
      });

      // Create quantum particles
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: fixed;
          left: ${mousePos.current.x}px;
          top: ${mousePos.current.y}px;
          width: 3px;
          height: 3px;
          background: #66e5ff;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px #66e5ff;
        `;
        document.body.appendChild(particle);

        const angle = (i / 8) * Math.PI * 2;
        const distance = 100 + Math.random() * 50;

        anime({
          targets: particle,
          translateX: Math.cos(angle) * distance,
          translateY: Math.sin(angle) * distance,
          scale: [1, 0],
          opacity: [1, 0],
          duration: 800 + Math.random() * 400,
          easing: 'easeOutQuart',
          complete: () => {
            document.body.removeChild(particle);
          }
        });
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('interactive')) {
        // Quantum hover effect
        if (cursorRef.current) {
          anime({
            targets: cursorRef.current,
            scale: 1.5,
            duration: 200,
            easing: 'easeOutQuart'
          });
        }

        trails.forEach((trail, index) => {
          anime({
            targets: trail,
            scale: 1.3 - index * 0.05,
            duration: 200 + index * 20,
            easing: 'easeOutQuart'
          });
        });
      }
    };

    const handleMouseLeave = () => {
      // Reset cursor scale
      if (cursorRef.current) {
        anime({
          targets: cursorRef.current,
          scale: 1,
          duration: 200,
          easing: 'easeOutQuart'
        });
      }

      trails.forEach((trail, index) => {
        anime({
          targets: trail,
          scale: 1,
          duration: 200 + index * 20,
          easing: 'easeOutQuart'
        });
      });
    };

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleMouseClick);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      // Cleanup
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleMouseClick);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);

      trails.forEach(trail => {
        if (document.body.contains(trail)) {
          document.body.removeChild(trail);
        }
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="quantum-cursor"
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default QuantumCursor;