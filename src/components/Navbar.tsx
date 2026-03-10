import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
          <img src="/yvn-logo.png" alt="YVN Logo" className="w-8 h-8 rounded-lg object-cover" />
          <span className="hidden sm:inline">Yogesh Nawale</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="h-4 w-px bg-white/20 mx-2" />
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.8 }}
              href="https://github.com/yogeshnawale2701-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.8 }}
              href="https://www.linkedin.com/in/yogesh-nawale-10218225b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
