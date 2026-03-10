import { motion } from 'motion/react';
import { Section } from '../components/Section';
import { Cpu, Database, Cloud, Zap } from 'lucide-react';

const focusAreas = [
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Infrastructure",
    description: "Hands-on experience with AWS and Oracle Cloud for deploying scalable applications."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "DevOps Practices",
    description: "Learning CI/CD pipelines, containerization with Docker, and automation."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Backend Development",
    description: "Building robust server-side logic using Java, PHP, and SQL databases."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Continuous Learning",
    description: "Currently pursuing BCA and expanding expertise in modern cloud-native technologies."
  }
];

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-indigo-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-6 block">The Architect</span>
            <h2 className="text-5xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-12 leading-[0.9] tracking-tighter uppercase break-words">
              Bridging <br />
              <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Logic &</span> <br />
              Intelligence
            </h2>
          </motion.div>
        </div>

        <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-gray-400 text-xl leading-relaxed font-light max-w-2xl"
          >
            <p>
              I am a BCA student and an aspiring DevOps & Cloud Engineer with a strong foundation in backend development and cloud infrastructure.
            </p>
            <p>
              My focus is on mastering the tools and practices that power modern software delivery. I have practical experience with Java, PHP, and SQL, and I'm actively exploring the vast ecosystems of AWS and Oracle Cloud.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl hover:border-indigo-500/30 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{area.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{area.description}</p>

                <div className="mt-8 flex items-center gap-2 text-indigo-400 text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-4 h-px bg-indigo-500" />
                  Core Competency
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
