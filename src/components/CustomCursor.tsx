import { motion } from 'motion/react';
import { useMousePosition } from '../hooks/useMousePosition';

export function CustomCursor() {
  const { x, y } = useMousePosition();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-white/30 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        animate={{ x: x - 24, y: y - 24 }}
        transition={{ type: 'spring', damping: 25, stiffness: 150, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        animate={{ x: x - 4, y: y - 4 }}
        transition={{ type: 'spring', damping: 35, stiffness: 350, mass: 0.1 }}
      />
    </>
  );
}
