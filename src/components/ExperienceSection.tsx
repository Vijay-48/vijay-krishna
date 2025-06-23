import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Backend Intern - Python Developer",
      company: "Infotact Solutions",
      period: "Dec 2024 - Feb 2025",
      description: "Developed real-world Python applications, collaborating with team to implement solutions. Received direct mentorship from Dr. Ashish Ranjan Dash.",
      skills: ["Python", "Backend Development", "Team Collaboration"]
    },
    {
      title: "Salesforce Developer Virtual Intern",
      company: "Salesforce",
      period: "July 2024 - Aug 2024",
      description: "Designed Salesforce applications with Apex triggers and classes, reducing manual effort by 50%. Configured Lightning Web Components and integrated external systems.",
      skills: ["Apex", "LWC", "Salesforce", "RESTful APIs"]
    },
    {
      title: "Front-End Web Development Virtual Intern",
      company: "CSRBOX",
      period: "June 2024 - July 2024",
      description: "Built responsive web applications using JavaScript, HTML5, CSS, and JSON. Collaborated with cross-functional teams to design scalable web solutions.",
      skills: ["JavaScript", "HTML5", "CSS", "Responsive Design"]
    }
  ];

  const certifications = [
    "AWS Academy - Cloud Architecting & Machine Learning",
    "IBM SkillsBuild - Project Management & Web Development", 
    "Infosys Springboard - R Programming, Computer Vision",
    "Salesforce Virtual Internship - Apex, LWC, Process Automation",
    "Wipro TalentNext - Java Fullstack"
  ];

  const certificateEmbeds = [
    {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7277977941727195138?compact=1",
      aspectRatio: "4/3",
      gridSpan: "col-span-1"
    },
    {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7264257932823777280?compact=1",
      aspectRatio: "4/3", 
      gridSpan: "col-span-1"
    },
    {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7251578880178761728?collapsed=1",
      aspectRatio: "3/4",
      gridSpan: "col-span-1 md:col-span-2 lg:col-span-1"
    },
    {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237922438355795969?compact=1",
      aspectRatio: "4/3",
      gridSpan: "col-span-1"
    },
    {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7233510055751368704?compact=1",
      aspectRatio: "4/3",
      gridSpan: "col-span-1"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience, Publications & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          
          <a
            href="https://www.linkedin.com/in/vijay-krishna-rachamalla-7baa07307/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Professional Experience</h3>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
            
            {/* Timeline Items */}
            <div className="flex justify-between items-center relative z-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex-1 px-4"
                >
                  {/* Timeline Dot */}
                  <div className="flex justify-center mb-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/50 border-4 border-black"></div>
                  </div>
                  
                  {/* Experience Card */}
                  <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-2 text-center">{exp.title}</h4>
                    <div className="text-center mb-3">
                      <span className="text-cyan-400 font-medium text-sm">{exp.company}</span>
                      <div className="text-gray-400 text-xs mt-1">{exp.period}</div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{exp.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/20 shadow-lg max-w-2xl mx-auto"
          >
            <h4 className="text-lg font-bold mb-4 text-purple-400 text-center">Education</h4>
            <div className="space-y-4">
              <div className="text-center">
                <h5 className="font-semibold text-white">B.Tech in Artificial Intelligence</h5>
                <p className="text-cyan-300">Vidya Jyothi Institute of Technology</p>
                <p className="text-gray-400 text-sm">CGPA: 7.37/10.0 • 2021-2025</p>
              </div>
              <div className="text-center">
                <h5 className="font-semibold text-white">MPC - Intermediate</h5>
                <p className="text-cyan-300">Sri Chaitanya Junior College</p>
                <p className="text-gray-400 text-sm">CGPA: 8.79/10.0 • 2019-2021</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Publications Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Publications</h3>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-white mb-2">Decentralized Document Validation System Using Blockchain Technology</h4>
              <p className="text-purple-400 text-sm mb-4">Published Research Paper</p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <iframe 
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7279778743009562624?compact=1" 
                  className="w-full h-96 rounded-lg border border-purple-500/20"
                  frameBorder="0" 
                  allowFullScreen={true}
                  title="Publication - Decentralized Document Validation System"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
          
          {/* Text-based certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50 mb-8"
          >
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/30 transition-colors"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 leading-relaxed">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* LinkedIn Certificate Embeds - Improved Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificateEmbeds.map((embed, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 ${embed.gridSpan}`}
              >
                <div className="w-full" style={{ aspectRatio: embed.aspectRatio }}>
                  <iframe 
                    src={embed.url}
                    className="w-full h-full rounded-lg"
                    frameBorder="0" 
                    allowFullScreen={true}
                    title={`Certificate ${index + 1}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;