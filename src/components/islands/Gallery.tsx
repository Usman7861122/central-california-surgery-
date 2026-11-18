import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export type GalleryImage = { src: string; alt: string; caption: string; span: string; pos?: string };

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (open === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open, go]);

  return (
    <>
      <ul className="grid auto-rows-[9.5rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] md:grid-cols-4 md:gap-4 lg:auto-rows-[12.5rem]">
        {images.map((im, i) => (
          <li key={im.src} className={`card-hover ${im.span}`}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Enlarge photo: ${im.caption}`}
              className="img-round group relative block h-full w-full overflow-hidden bg-mist text-left"
            >
              <img src={im.src} alt={im.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]" style={{ objectPosition: im.pos || '50% 50%' }} />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent px-4 pb-3.5 pt-12 text-sm font-medium text-white opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 max-md:opacity-100">
                {im.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 md:p-10"
            onClick={() => setOpen(null)}
          >
            <button type="button" onClick={() => setOpen(null)} aria-label="Close" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-[10px] border border-white/30 text-2xl leading-none text-white transition hover:bg-white/10 md:right-8 md:top-8">&times;</button>
            <button type="button" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous photo" className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-[10px] border border-white/30 text-xl text-white transition hover:bg-white/10 md:left-8">&lsaquo;</button>
            <button type="button" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next photo" className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-[10px] border border-white/30 text-xl text-white transition hover:bg-white/10 md:right-8">&rsaquo;</button>
            <motion.figure key={open} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25 }} className="flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img src={images[open].src} alt={images[open].alt} className="img-round max-h-[78vh] w-auto max-w-full object-contain" />
              <figcaption className="mt-4 text-center text-sm text-white/80">{images[open].caption} <span className="text-white/50">&middot; {open + 1} / {images.length}</span></figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
