
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  updated_at: string;
  topics: string[];
}

const ProjectsSection = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/Vijay-48/repos?sort=updated&per_page=10');
      const data = await response.json();
      // Filter out Portfolio and Personal-Portfolio-Website projects
      const filteredRepos = data.filter((repo: Repository) => 
        !['Portfolio', 'Personal-Portfolio-Website'].includes(repo.name)
      );
      setRepos(filteredRepos);
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
    } finally {
      setLoading(false);
    }
  };

  const featuredProjects = [
    {
      name: "NOVA - AI Voice Assistant",
      description: "Multi-modal AI assistant with multilingual speech-to-text and real-time face recognition. Features secure authentication and voice-driven utilities.",
      tech: ["Python", "Whisper-v3", "DeepFace", "OpenCV", "YOLOv11"],
      status: "In Progress",
      github: "https://github.com/Vijay-48"
    },
    {
      name: "HOD Notification System",
      description: "AI-powered system for detecting unauthorized student movements using computer vision with email alerts and snapshots.",
      tech: ["LSTM", "YOLOv8", "FaceNet", "OpenCV", "Flask"],
      status: "Completed",
      github: "https://github.com/Vijay-48"
    },
    {
      name: "Decentralized Document Verification",
      description: "Tamper-proof platform for secure document verification on distributed ledger with IPFS integration.",
      tech: ["Blockchain", "Solidity", "IPFS", "Web3.js", "Ethereum"],
      status: "Completed",
      github: "https://github.com/Vijay-48"
    }
  ];

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
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">PROJECT DATABASE</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <div className="mt-2 text-gray-500 font-mono text-sm">
            &gt; ACCESSING REPOSITORY...
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 backdrop-blur-sm rounded border border-white/20 p-6 shadow-xl hover:border-white/40 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors font-mono">
                  {project.name}
                </h3>
                <span className={`px-3 py-1 rounded text-xs font-mono border ${
                  project.status === 'In Progress' 
                    ? 'bg-gray-800 text-gray-300 border-gray-600' 
                    : 'bg-black text-white border-gray-500'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-black text-gray-300 rounded text-xs font-mono border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs border border-gray-600 font-mono">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-mono transition-colors"
              >
                <Github size={16} />
                ACCESS
              </a>
            </motion.div>
          ))}
        </div>

        {!loading && repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">RECENT ACTIVITY</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.slice(0, 6).map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/40 backdrop-blur-sm rounded border border-white/20 p-4 hover:border-white/40 transition-all duration-300"
                >
                  <h4 className="font-semibold text-white mb-2 font-mono">{repo.name}</h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {repo.description || 'No description available'}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-mono">
                      {repo.language || 'Multiple'}
                    </span>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;