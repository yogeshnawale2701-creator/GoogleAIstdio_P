import { motion } from 'motion/react';
import { Section } from '../components/Section';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Project PP",
    description: "A JavaScript-based project developed during my BCA studies, focusing on frontend interactivity and logic.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/yogeshnawale2701-creator/project_PP",
    github: "https://github.com/yogeshnawale2701-creator/project_PP"
  },
  {
    title: "GitHub Skills Mastery",
    description: "A repository dedicated to mastering GitHub workflows, including branching, merging, and collaboration.",
    tags: ["Git", "GitHub", "Documentation"],
    link: "https://github.com/yogeshnawale2701-creator/skills-introduction-to-github",
    github: "https://github.com/yogeshnawale2701-creator/skills-introduction-to-github"
  },
  {
    title: "Cloud & DevOps Learning",
    description: "Ongoing exploration of AWS and Oracle Cloud infrastructure, implementing CI/CD pipelines and automated deployments.",
    tags: ["AWS", "Oracle Cloud", "DevOps", "CI/CD"],
    link: "https://www.linkedin.com/in/yogesh-nawale-10218225b/",
    github: "https://github.com/yogeshnawale2701-creator"
  }
];

export function Projects() {
  return (
    <Section id="projects" className="bg-black/40">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-indigo-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">Portfolio</span>
          <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase">
            Featured <br />
            <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Creations</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-right"
        >
          <p className="text-gray-500 max-w-xs mb-6 text-sm leading-relaxed">
            Selected projects showcasing my expertise in DevOps, Cloud Infrastructure, and Backend Engineering.
          </p>
          <a 
            href="https://github.com/yogeshnawale2701-creator" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex items-center gap-4 text-white uppercase tracking-widest text-[10px] font-bold"
          >
            Explore All Repositories
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group relative bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-md flex flex-col ${
              idx === 0 ? 'md:col-span-8 h-[500px]' : idx === 1 ? 'md:col-span-4 h-[500px]' : 'md:col-span-12 h-[400px]'
            }`}
          >
            <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/20 transition-colors" />
            
            <div className="relative z-10 p-12 flex flex-col h-full justify-between">
              <div>
                <div className="flex gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full text-[10px] text-white/50 uppercase tracking-widest border border-white/10 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-lg max-w-xl font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors" />
          </motion.div>
        ))}

        {/* Subtle indicator for more content */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="md:col-span-12 flex flex-col items-center gap-4 mt-12 py-8 border-t border-white/5"
        >
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-mono group-hover:text-indigo-400 transition-colors">
              More innovative solutions on GitHub
            </p>
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-indigo-500/50 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
