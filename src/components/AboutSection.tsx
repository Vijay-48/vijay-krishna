
import React from 'react';
import { motion } from 'framer-motion';

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
                Vijay Krishna Rachamalla is a final-year B.Tech student specializing in Artificial Intelligence, with a strong passion for Web Development, Android Development, and AI/ML solutions. He has successfully completed multiple internships and certifications from renowned platforms like IBM, AWS, Salesforce, and CSRBOX, gaining hands-on experience in real-world development environments.
              </p>
              
              <p className="text-lg leading-relaxed font-medium metallic-text metallic-text-delay-1">
                Vijay has worked on diverse projects ranging from personal voice assistants, deepfake detection systems, and document verification on blockchain to modern web applications using React and Firebase. He is also an active open-source contributor and constantly explores innovative solutions in both frontend and backend development.
              </p>
              
              <p className="text-lg leading-relaxed font-medium metallic-text metallic-text-delay-2">
                With a growing portfolio on GitHub and a strong professional presence on LinkedIn, Vijay is keen on solving impactful problems using technology, particularly in areas like education, security, and sustainable development.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-6 max-w-md mx-auto">
              <div className="text-center p-4 bg-black border border-white/20 rounded">
                <h4 className="text-2xl font-bold text-white font-mono">7.37</h4>
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