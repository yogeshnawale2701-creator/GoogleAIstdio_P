import { motion } from 'motion/react';
import { Section } from '../components/Section';
import { Skills3D } from '../components/Skills3D';

export function Skills() {
  return (
    <Section id="skills" className="bg-black/20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Technical Ecosystem</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          An interactive visualization of my core technologies and their interconnected relationships in modern backend and AI systems.
        </p>
      </div>

      <motion.div
        className="relative w-full bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden"
      >
        <div className="absolute top-8 left-8 z-10">
          <div className="flex flex-col gap-2">
            <span className="text-indigo-400 font-mono text-[10px] uppercase tracking-widest">Interactive Node Map</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white/50 text-[10px] uppercase tracking-widest font-mono">System Online</span>
            </div>
          </div>
        </div>

        <Skills3D />
        
        <div className="absolute bottom-8 right-8 z-10 hidden md:block">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-mono text-right max-w-[200px]">
            Drag to rotate • Hover nodes for details • Connections indicate architectural dependencies
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
