import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { stagger } from './variants';

export default function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {children}
    </motion.div>
  );
}
