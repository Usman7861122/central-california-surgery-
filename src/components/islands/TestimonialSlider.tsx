import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

type Item = { name: string; source: string; quote: string };

export default function TestimonialSlider({ items }: { items: Item[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const go = useCallback((n: number) => setI((n + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => go(i + 1), 7000);
    return () => clearTimeout(t);
  }, [i, paused, reduce, go]);

  const t = items[i];
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} role="region" aria-roledescription="carousel" aria-label="Patient reviews">
      <svg className="h-12 w-12 text-blue-soft" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true"><path d="M20 10c-7 3-12 9-12 18v10h14V26h-7c0-5 3-8 7-10l-2-6Zm22 0c-7 3-12 9-12 18v10h14V26h-7c0-5 3-8 7-10l-2-6Z"/></svg>
      <div className="relative mt-4 min-h-[16rem] sm:min-h-[13rem]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure key={i} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45 }}>
            <blockquote className="font-display text-2xl leading-snug text-white sm:text-3xl lg:text-[2rem]">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 text-sm text-white/75">
              <span className="font-semibold text-white">{t.name}</span>
              <span className="h-px w-6 bg-white/40" />
              <span>Review on {t.source}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex gap-2" role="tablist" aria-label="Choose review">
          {items.map((_, n) => (
            <button key={n} role="tab" aria-selected={n === i} aria-label={`Review ${n + 1}`} onClick={() => go(n)} className="group py-3">
              <span className={`block h-[3px] rounded-full transition-all ${n === i ? 'w-12 bg-blue-soft' : 'w-6 bg-white/30 group-hover:bg-white/60'}`} />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {[-1, 1].map((d) => (
            <button key={d} onClick={() => go(i + d)} aria-label={d < 0 ? 'Previous review' : 'Next review'} className="grid h-11 w-11 place-items-center rounded-[10px] border border-white/30 text-white transition hover:border-white hover:bg-white/10">
              <svg className={`h-4 w-4 ${d < 0 ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
