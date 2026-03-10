import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../utils/cn';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl w-full z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
