/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Scene } from './components/Scene';
import { CustomCursor } from './components/CustomCursor';
import { ClickRipple } from './components/ClickRipple';

export default function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-indigo-500/30">
      <CustomCursor />
      <ClickRipple />
      <Navbar />

      {/* 3D Background removed to avoid WebGL context conflicts */}
      <div className="fixed inset-0 z-0 bg-[#050505]" />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 py-12 border-t border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Yogesh Vishnu Nawale. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm font-mono uppercase tracking-widest">
            <a href="https://github.com/yogeshnawale2701-creator" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/yogesh-nawale-10218225b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
