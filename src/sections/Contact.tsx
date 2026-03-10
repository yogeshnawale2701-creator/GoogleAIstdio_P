import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Section } from '../components/Section';
import { Mail, Send, MapPin, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent! (Simulation)");
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-6 block">Contact</span>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-12 leading-[0.9] tracking-tighter uppercase">
              Let's <br />
              <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Connect</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 font-light leading-relaxed max-w-sm">
              Have a project in mind or want to discuss AI systems? I'm always open to interesting collaborations.
            </p>
            
            <div className="space-y-12">
              <div className="group">
                <p className="text-gray-600 text-[10px] uppercase tracking-widest font-mono mb-2">Direct Email</p>
                <a href="mailto:yogeshnawale2701@gmail.com" className="text-white text-2xl font-bold hover:text-indigo-400 transition-colors">
                  yogeshnawale2701@gmail.com
                </a>
              </div>
              
              <div className="group">
                <p className="text-gray-600 text-[10px] uppercase tracking-widest font-mono mb-2">Social Presence</p>
                <div className="flex gap-6">
                  <a 
                    href="https://www.linkedin.com/in/yogesh-nawale-10218225b/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all group"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/yogeshnawale2701-creator" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all group"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-7">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-2xl space-y-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Send className="w-32 h-32" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
              <div className="space-y-4">
                <label className="text-gray-500 text-[10px] uppercase tracking-widest font-mono">Full Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors text-lg font-light"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-4">
                <label className="text-gray-500 text-[10px] uppercase tracking-widest font-mono">Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors text-lg font-light"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-4 relative z-10">
              <label className="text-gray-500 text-[10px] uppercase tracking-widest font-mono">Your Message</label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none text-lg font-light"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center gap-6 py-6 px-12 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-indigo-500 hover:text-white transition-all disabled:opacity-50 overflow-hidden"
            >
              <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
              <Send className="w-4 h-4 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </Section>
  );
}
