import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

export default function RotatingWords({ words, interval = 3200 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval, reduce]);

  return (
    <span className="relative inline-block align-baseline">
      {/* all phrases stay in the DOM for search engines + screen readers */}
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true" className="inline-grid overflow-hidden -mb-[.3em] pb-[.3em] pr-[.1em] align-baseline leading-[1.15]">
        {/* invisible copies reserve the width of the longest phrase so the layout never jumps */}
        {words.map((w) => (
          <span key={w} className="invisible col-start-1 row-start-1 whitespace-nowrap pb-[.2em] italic">{w}</span>
        ))}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[i]}
            className="col-start-1 row-start-1 whitespace-nowrap pb-[.2em] bg-gradient-to-r from-[#2d7dff] to-[#7db3ff] bg-clip-text italic text-transparent"
            initial={{ y: '60%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-60%', opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {words[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
