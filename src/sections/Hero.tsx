import { motion } from 'motion/react';
import { Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden bg-black">
      {/* Left Pane: Massive Typography */}
      <div className="flex-1 z-10 p-12 md:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-indigo-500 font-mono text-sm uppercase tracking-[0.3em] mb-4 block">
            DevOps & Cloud Explorer
          </span>
          <h1 className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.85] tracking-tighter uppercase mb-8">
            Yogesh <br />
            <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
              Vishnu <br /> Nawale
            </span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-light">
            BCA Student passionate about Cloud Infrastructure, DevOps, and Backend Development. Skilled in Java, PHP, and AWS.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 text-white uppercase tracking-widest text-xs font-bold"
            >
              <span className="w-12 h-px bg-white/30 group-hover:w-20 transition-all duration-500" />
              Explore Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 text-white/50 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors"
            >
              <span className="w-12 h-px bg-white/10 group-hover:w-20 transition-all duration-500" />
              Get in Touch
            </motion.a>

            <div className="flex gap-4 ml-4">
              <motion.a
                href="https://github.com/yogeshnawale2701-creator"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#fff' }}
                className="text-white/30 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/yogesh-nawale-10218225b/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#fff' }}
                className="text-white/30 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Pane: Visual Accent */}
      <div className="hidden md:flex flex-1 h-full items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <div className="absolute w-[40vw] h-[40vw] rounded-full border border-white/5 animate-pulse" />
          <div className="absolute w-[30vw] h-[30vw] rounded-full border border-white/10" />
          <div className="absolute w-[20vw] h-[20vw] rounded-full border border-white/20" />
          
          <div className="writing-mode-vertical-rl rotate-180 text-[10px] text-white/20 uppercase tracking-[1em] font-mono absolute right-12">
            Scalability • Intelligence • Performance • Architecture
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-12 flex items-center gap-4"
      >
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
        <span className="text-white/30 text-[10px] uppercase tracking-widest font-mono">Scroll for more</span>
      </motion.div>
    </section>
  );
}
