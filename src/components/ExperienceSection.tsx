import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const credlyBadges = [
  { id: "ca934484-ed45-47f5-9584-afab56550903" },
  { id: "6a3f1f9f-e8b9-4b11-a2e6-f4b3cd959945" },
  { id: "cca335fb-1085-45ba-a6cb-2b6cb11a5ceb" },
  { id: "e0ce0cd2-77ce-42c9-b366-bd913c9b30c8" },
  { id: "ee6ea55c-e1b9-417f-a297-116194220f95" },
  { id: "96c85b8b-902e-440c-8bbd-3cea5efa999b" },
  { id: "c1713a48-9df4-4e99-95ca-59ffdb5188d3" },
  { id: "22c24285-10fe-4e20-8457-7bf855bc0aa4" },
  { id: "ffcd6d88-04f8-4782-876b-780fdcb60b28" },
  { id: "6e3b5bfe-eac9-44d1-b92c-59dcaa7fb809" },
];

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Backend Intern - Python Developer",
      company: "Infotact Solutions",
      period: "Dec 2024 - Feb 2025",
      description: "Developed real-world Python applications, collaborating with team to implement solutions. Received direct mentorship from Dr. Ashish Ranjan Dash.",
      skills: ["Python", "Backend Development", "Team Collaboration"],
      certificate_of_completion: "https://drive.google.com/file/d/1p2MF3j-3fIa-G7cvSEPgHNwb898ip76C/view?usp=sharing"
    },
    {
      title: "Salesforce Developer Virtual Intern",
      company: "Salesforce",
      period: "July 2024 - Aug 2024",
      description: "Designed Salesforce applications with Apex triggers and classes, reducing manual effort by 50%. Configured Lightning Web Components and integrated external systems.",
      skills: ["Apex", "LWC", "Salesforce", "RESTful APIs"],
      certificate_of_completion: "https://drive.google.com/file/d/1om_NdlluYTiZydb5Xe9dDa0LS07JmzY4/view?usp=sharing"
    },
    {
      title: "Front-End Web Development Virtual Intern",
      company: "CSRBOX",
      period: "June 2024 - July 2024",
      description: "Built responsive web applications using JavaScript, HTML5, CSS, and JSON. Collaborated with cross-functional teams to design scalable web solutions.",
      skills: ["JavaScript", "HTML5", "CSS", "Responsive Design"],
      certificate_of_completion: "https://drive.google.com/file/d/1MnAi7d8Gj5zVxio4Yqp8zn3bBBQR3Rse/view?usp=sharing"
    }
  ];

  // Helper to extract Google Drive file id and create embed url
  const getGoogleDriveEmbedUrl = (url: string) => {
    // Example: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  // Publications data (updated link, removed embed, layout will be changed below)
  const publications = [
    {
      title: "Decentralized Document Validation System Using Blockchain Technology",
      type: "Published Research Paper",
      description:
        "A research paper proposing a decentralized system for document validation leveraging blockchain technology to ensure authenticity and security.",
      link: "https://www.irjmets.com/uploadedfiles/paper//issue_12_december_2024/65623/final/fin_irjmets1735562655.pdf#:~:text=This%20project%20explores%20the%20development%20of%20a%20Decentralized,System%20%28IPFS%29%20to%20ensure%20document%20authenticity%20and%20integrity.",
      date: "June 2024",
      venue: "IRJMETS"
    }
    // Add more publications here if needed
  ];

  React.useEffect(() => {
    // Dynamically load the Credly embed script once on mount
    const scriptId = "credly-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.async = true;
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      document.body.appendChild(script);
    }
  }, []);

  // --- Certifications Marquee Logic ---
  // Duplicate badges for seamless infinite scroll
  const badgeList = [...credlyBadges, ...credlyBadges];

  // Marquee hover state for pausing animation
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  // Track which badge is hovered for scaling
  const [hoveredBadgeIdx, setHoveredBadgeIdx] = useState<number | null>(null);

  // Handlers for pausing/resuming marquee and scaling badge
  const handleBadgeMouseEnter = (idx: number) => {
    setIsMarqueePaused(true);
    setHoveredBadgeIdx(idx);
  };
  const handleBadgeMouseLeave = () => {
    setIsMarqueePaused(false);
    setHoveredBadgeIdx(null);
  };

  // Inject custom CSS for badge animation and hover shadow
  useEffect(() => {
    const styleId = "credly-badge-marquee-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        @keyframes credly-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .credly-badge-marquee-container {
          overflow: hidden;
          width: 100%;
        }
        .credly-badge-marquee-track {
          display: flex;
          width: max-content;
          animation: credly-marquee-scroll 30s linear infinite;
        }
        .credly-badge-marquee-track.paused {
          animation-play-state: paused !important;
        }
        .credly-badge-marquee-item {
          transition: box-shadow 0.3s, transform 0.3s;
          border-radius: 1rem;
          z-index: 1;
        }
        .credly-badge-marquee-item.is-hovered {
          box-shadow: 0 8px 32px 0 rgba(6,182,212,0.25), 0 1.5px 8px 0 rgba(168,139,250,0.18), 0 0 0 4px rgba(34,211,238,0.15);
          transform: scale(1.10) translateY(-8px);
          z-index: 2;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

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
                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {/* Certificate Embed/Link */}
                    {exp.certificate_of_completion && (
                      <div className="mt-4 flex flex-col items-center">
                        <span className="text-xs text-gray-400 mb-1">Certificate of Completion:</span>
                        <div className="w-full max-w-xs aspect-[4/3] rounded-lg overflow-hidden border border-cyan-500/30 bg-black/60">
                          <iframe
                            src={getGoogleDriveEmbedUrl(exp.certificate_of_completion)}
                            className="w-full h-full"
                            allow="autoplay"
                            title={`Certificate for ${exp.title}`}
                          />
                        </div>
                        <a
                          href={exp.certificate_of_completion}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 text-cyan-400 underline text-xs hover:text-cyan-300 transition"
                        >
                          View Full Certificate
                        </a>
                      </div>
                    )}
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
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-purple-500/20 shadow-lg max-w-3xl mx-auto"
          >
            <h4 className="text-lg font-bold mb-8 text-purple-400 text-center">Education</h4>
            <div className="flex flex-col md:flex-row md:justify-center md:gap-8 gap-6">
              {/* B.Tech Card */}
              <div className="flex-1 bg-gray-900/80 rounded-lg p-6 border border-purple-500/10 shadow-md flex flex-col items-center">
                <h5 className="font-semibold text-white text-center mb-2">B.Tech in Artificial Intelligence</h5>
                <p className="text-cyan-300 text-center mb-1">Vidya Jyothi Institute of Technology</p>
                <p className="text-gray-400 text-sm text-center mb-2">2021 - 2025</p>
                <div className="bg-purple-600/10 px-3 py-1 rounded-full text-purple-300 text-xs font-medium mb-2">
                  CGPA: 7.15/10.0
                </div>
              </div>
              {/* Intermediate Card */}
              <div className="flex-1 bg-gray-900/80 rounded-lg p-6 border border-purple-500/10 shadow-md flex flex-col items-center">
                <h5 className="font-semibold text-white text-center mb-2">MPC - Intermediate</h5>
                <p className="text-cyan-300 text-center mb-1">Sri Chaitanya Junior College</p>
                <p className="text-gray-400 text-sm text-center mb-2">2019 - 2021</p>
                <div className="bg-purple-600/10 px-3 py-1 rounded-full text-purple-300 text-xs font-medium mb-2">
                  CGPA: 8.79/10.0
                </div>
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
            <div className="flex flex-col items-center gap-8">
              {publications.map((pub, idx) => (
                <div
                  key={pub.title}
                  className="w-full max-w-3xl mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-0 border border-purple-500/30 shadow-lg hover:shadow-purple-500/20 transition relative overflow-hidden"
                  style={{
                    boxShadow: "0 8px 32px 0 rgba(58, 0, 128, 0.15), 0 1.5px 8px 0 rgba(0,255,255,0.08)"
                  }}
                >
                  {/* Decorative Gradient Bar */}
                  <div className="h-2 w-full bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500" />
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8">
                    {/* Icon or Badge */}
                    <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-700 via-cyan-700 to-blue-700 shadow-lg border-4 border-gray-900 mt-2 md:mt-0">
                      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="22" fill="url(#pub-grad)" />
                        <path d="M16 20V32H32V20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M24 16V28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 24H28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                          <linearGradient id="pub-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#a78bfa"/>
                            <stop offset="0.5" stopColor="#06b6d4"/>
                            <stop offset="1" stopColor="#6366f1"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    {/* Publication Info */}
                    <div className="flex-1 flex flex-col">
                      <h4 className="text-2xl font-extrabold text-white mb-2 leading-tight">{pub.title}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 bg-purple-700/20 text-purple-300 rounded-full text-xs font-semibold tracking-wide">{pub.type}</span>
                        <span className="inline-block px-3 py-1 bg-cyan-700/20 text-cyan-300 rounded-full text-xs font-semibold tracking-wide">{pub.venue}</span>
                        <span className="inline-block px-3 py-1 bg-gray-800/60 text-gray-300 rounded-full text-xs font-semibold tracking-wide">{pub.date}</span>
                      </div>
                      <p className="text-gray-200 text-base mb-5 leading-relaxed">{pub.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full text-sm font-semibold shadow hover:from-purple-700 hover:to-cyan-700 transition"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
                          </svg>
                          View Full Paper (PDF)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
          
          {/* Credly Certifications Badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50 mb-8"
          >
            {/* Marquee container for horizontal animation */}
            <div className="credly-badge-marquee-container w-full py-2 hidden md:block">
              <div
                className={`credly-badge-marquee-track${isMarqueePaused ? " paused" : ""}`}
                style={{}}
              >
                {badgeList.map((badge, idx) => (
                  <div
                    key={idx}
                    className={`credly-badge-marquee-item mx-3${hoveredBadgeIdx === idx ? " is-hovered" : ""}`}
                    style={{
                      width: 150,
                      height: 270,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => handleBadgeMouseEnter(idx)}
                    onMouseLeave={handleBadgeMouseLeave}
                  >
                    <div
                      data-iframe-width="150"
                      data-iframe-height="270"
                      data-share-badge-id={badge.id}
                      data-share-badge-host="https://www.credly.com"
                      style={{ width: 150, height: 270 }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            {/* Fallback for small screens: show badges in a scrollable row */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 md:hidden">
              {credlyBadges.map((badge, idx) => (
                <div
                  key={badge.id}
                  className="credly-badge-marquee-item"
                  style={{ width: 150, height: 270, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <div
                    data-iframe-width="150"
                    data-iframe-height="270"
                    data-share-badge-id={badge.id}
                    data-share-badge-host="https://www.credly.com"
                    style={{ width: 150, height: 270 }}
                  ></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;