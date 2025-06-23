
import React from 'react';
import { motion } from 'framer-motion';

const HUDOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Top HUD Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      {/* Bottom HUD Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      {/* Left HUD Bar */}
      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      
      {/* Right HUD Bar */}
      <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      
      {/* Center Crosshair */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 border border-white/20 rounded-full">
          <div className="absolute top-1/2 left-1/2 w-2 h-px bg-white/40 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-px h-2 bg-white/40 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Status Indicators */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs font-mono">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SYSTEM ONLINE
        </motion.div>
      </div>
    </div>
  );
};

export default HUDOverlay;