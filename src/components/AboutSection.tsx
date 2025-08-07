
import React from 'react';
import { motion } from 'framer-motion';

const RESUME_DRIVE_LINK = "https://drive.google.com/file/d/1oQNEmr3kdMSQpuXxmT_my8UQa35KaZGU/view?usp=sharing";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/30 border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">USER PROFILE</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl space-y-6"
          >
            <h3 className="text-3xl font-bold text-white font-mono text-center">VIJAY KRISHNA RACHAMALLA</h3>
            <div className="text-gray-500 font-mono text-sm mb-4 text-center">
              &gt; LOADING PROFILE DATA...
            </div>
            
            <div className="space-y-6 text-center">
              <p className="text-lg leading-relaxed font-medium metallic-text">
                AI Engineer | Full-Stack Developer | Open Source Contributor
              </p>
              
              <p className="text-lg leading-relaxed font-medium metallic-text metallic-text-delay-1">
                Building intelligent systems with Python, TensorFlow, and modern web technologies.<br />
                Proven track record through internships at Salesforce, IBM, and innovative projects in computer vision, NLP, and blockchain.
              </p>
              
              <p className="text-lg leading-relaxed font-medium metallic-text metallic-text-delay-2">
                Ready to contribute: Machine Learning Pipelines • Web Applications • AI Integration • Blockchain Solutions
                <br /><br />
                <span className="text-white/80">📧 Available for opportunities in AI/ML Engineering and Full-Stack Development</span>
              </p>
            </div>

            {/* Resume Button */}
            <div className="flex justify-center pt-2">
              <a
                href={RESUME_DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                download
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                Download Resume
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-6 max-w-md mx-auto">
              <div className="text-center p-4 bg-black border border-white/20 rounded">
                <h4 className="text-2xl font-bold text-white font-mono">7.15</h4>
                <p className="text-gray-400 font-mono">CGPA</p>
              </div>
              <div className="text-center p-4 bg-black border border-white/20 rounded">
                <h4 className="text-2xl font-bold text-white font-mono">15+</h4>
                <p className="text-gray-400 font-mono">PROJECTS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
