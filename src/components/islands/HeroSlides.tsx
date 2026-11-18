import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

type Slide = { src: string; alt: string; pos: string };

export default function HeroSlides({ slides, interval = 5500 }: { slides: Slide[]; interval?: number }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [slides.length, interval, reduce]);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden bg-ink">
      <AnimatePresence initial={false}>
        <motion.img
          key={slides[i].src}
          src={slides[i].src}
          alt={slides[i].alt}
          className="hero-slide absolute inset-0 h-full w-full object-cover md:left-[34%] md:w-[66%]"
          style={{ objectPosition: slides[i].pos, }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: interval / 1000 + 1.5, ease: 'linear' } }}
        />
      </AnimatePresence>
      <div className="absolute bottom-24 right-6 z-10 flex gap-2 md:right-10" role="tablist" aria-label="Choose slide">
        {slides.map((s, n) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={n === i}
            aria-label={`Show photo ${n + 1}`}
            onClick={() => setI(n)}
            className={`h-1.5 rounded-full transition-all duration-500 ${n === i ? 'w-10 bg-white' : 'w-5 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  );
}
