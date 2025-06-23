
import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillGroups = {
    "AI/ML": [
      "LSTM", "YOLOv8", "FaceNet", "TensorFlow", "OpenCV", "Computer Vision", 
      "Deep Learning", "Neural Networks"
    ],
    "Frontend": [
      "ReactJS", "JavaScript", "TypeScript", "HTML5", "CSS", "Tailwind CSS",
      "Lightning Web Components", "JSON", "Ajax"
    ],
    "Backend & Tools": [
      "Python", "Java", "Apex", "Salesforce", "Git/GitHub", "VS Code",
      "Postman", "Jira", "CI/CD", "RESTful APIs"
    ],
    "Blockchain": [
      "Solidity", "Web3.js", "Ethereum", "IPFS", "Truffle", "Ganache",
      "Smart Contracts", "DeFi"
    ]
  };

  return (
    <section className="py-20 px-4 bg-black border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">SKILLS MATRIX</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <div className="mt-2 text-gray-500 font-mono text-sm">
            &gt; SCANNING CAPABILITIES...
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillGroups).map(([category, skills], groupIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="bg-gray-900/60 backdrop-blur-sm rounded border border-white/20 p-8 shadow-xl hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.7), 0 0 30px rgba(255,255,255,0.05)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0,0,0,0.2))'
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white font-mono">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8, z: -50 }}
                      whileInView={{ opacity: 1, scale: 1, z: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1, 
                        z: 20,
                        rotateY: 10,
                        boxShadow: '0 10px 20px rgba(0,255,255,0.3)'
                      }}
                      className="px-4 py-2 bg-black border border-gray-600 text-white rounded text-sm font-mono shadow-lg hover:border-cyan-400/60 transition-all duration-300 cursor-pointer relative overflow-hidden"
                      style={{
                        transformStyle: 'preserve-3d',
                        background: 'linear-gradient(45deg, rgba(0,0,0,0.8), rgba(255,255,255,0.05))'
                      }}
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* 3D floating indicator */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;