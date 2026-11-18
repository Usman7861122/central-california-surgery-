import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { fadeUp } from './variants';

export default function Reveal({ children, className, delay = 0, as = 'div' }: { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'li' }) {
  const Tag = as === 'li' ? motion.li : motion.div;
  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Tag>
  );
}
