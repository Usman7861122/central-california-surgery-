import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { NavNode, NavCard } from '@/data/navigation';

const paths: Record<string, ReactNode> = {
  doc: <><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 12h5M10 16h5" /></>,
  pdf: <><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 13h5M10 17h3" /></>,
  play: <><circle cx="12" cy="12" r="9" /><path d="m10 8.5 5 3.5-5 3.5z" /></>,
  video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3z" /></>,
  calc: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 12h2M12 12h2M8 16h2M12 16h2" /></>,
  clip: <><path d="M9 4h6v3H9z" /><path d="M8 5.5H6v15h12v-15h-2M9 12h6M9 16h6" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12.5 3 3 5-6" /></>,
  heart: <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.4-7 10-7 10z" />,
  dollar: <><circle cx="12" cy="12" r="9" /><path d="M14.5 9.5c-.4-1-1.4-1.5-2.5-1.5-1.4 0-2.5.7-2.5 1.8 0 2.6 5 1.2 5 3.9 0 1.1-1.1 1.8-2.5 1.8-1.2 0-2.2-.6-2.6-1.6M12 6.5V8m0 8v1.5" /></>,
  link: <><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.700l1-1" /></>,
  pill: <><rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-35 12 12)" /><path d="m9.500 9.500 5 5" /></>,
  utensils: <path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 21V3c-2 1-3 4-3 8h3" />,
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M8 7h7" /></>,
  quote: <path d="M10 8H6v5h3a3 3 0 0 1-3 3M18 8h-4v5h3a3 3 0 0 1-3 3" />,
  star: <path d="m12 3 2.700 5.600 6.100.9-4.400 4.300 1 6.100L12 17l-5.400 2.900 1-6.100L3.200 9.500l6.100-.9z" />,
};

function Icon({ name }: { name?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      {paths[name || 'doc']}
    </svg>
  );
}

function Card({ c, onGo }: { c: NavCard; onGo: () => void }) {
  const ext = c.href.startsWith('http');
  return (
    <a
      href={c.href}
      onClick={onGo}
      {...(ext ? { target: '_blank', rel: 'noopener' } : {})}
      className="card-hover group flex items-center gap-4 border border-line bg-white p-3.5"
    >
      {c.img ? (
        <img src={c.img} alt="" loading="lazy" width="72" height="56" className="img-round h-14 w-[4.5rem] shrink-0 object-cover" />
      ) : (
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-sky text-blue transition group-hover:bg-blue group-hover:text-white">
          <Icon name={c.icon} />
        </span>
      )}
      <span className="min-w-0">
        <span className="flex items-center gap-2 text-[15px] font-semibold leading-snug text-ink">
          {c.label}
          {c.tag && <span className="rounded border border-line px-1.5 py-px text-[10px] font-semibold tracking-wider text-slate">{c.tag}</span>}
        </span>
        {c.desc && <span className="mt-0.5 block text-[13px] leading-snug text-slate">{c.desc}</span>}
      </span>
    </a>
  );
}

export default function MegaNav({ items }: { items: NavNode[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const root = useRef<HTMLElement>(null);

  const show = (i: number) => { clearTimeout(timer.current); setOpen(i); };
  const hide = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(null), 140); };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    const onDoc = (e: MouseEvent) => { if (root.current && !root.current.contains(e.target as Node)) setOpen(null); };
    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDoc);
    return () => { window.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDoc); };
  }, []);

  return (
    <nav ref={root} aria-label="Main" className="hidden items-center gap-5 2xl:gap-7 xl:flex" onMouseLeave={hide} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null); }}>
      {items.map((it, i) => {
        const has = !!it.cards;
        const isOpen = open === i;
        return (
          <div key={it.label} onMouseEnter={() => (has ? show(i) : setOpen(null))}>
            {has ? (
              <button
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => setOpen(isOpen ? null : i)}
                className={`nav-link inline-flex items-center gap-1 whitespace-nowrap text-[14.5px] font-medium ${isOpen ? 'is-open' : ''}`}
              >
                {it.label === 'Insurance Criteria Resources' ? 'Insurance Resources' : it.label}
                <svg viewBox="0 0 12 12" className={`h-2.5 w-2.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m2.500 4.500 3.500 3.500 3.500-3.500" /></svg>
              </button>
            ) : (
              <a href={it.href} className="nav-link whitespace-nowrap text-[14.5px] font-medium" {...(it.href?.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>{it.label}</a>
            )}

            <AnimatePresence>
              {has && isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
                  className="absolute inset-x-0 top-full border-b border-line bg-mist shadow-[0_40px_60px_-30px_rgba(8,26,53,.35)]"
                >
                  <div className="mx-auto grid max-w-[90rem] grid-cols-[17rem_1fr] gap-10 px-6 py-8">
                    <div className="wash-navy relative overflow-hidden rounded-[14px] p-6 text-white">
                      <p className="eyebrow !text-blue-soft">{it.label}</p>
                      <p className="mt-3 font-display text-2xl leading-snug">{it.intro?.title}</p>
                      <p className="mt-3 text-sm leading-relaxed text-white/75">{it.intro?.text}</p>
                      {it.href && <a href={it.href} onClick={() => setOpen(null)} className="btn btn-outline-light mt-6 !px-4 !py-2.5 text-sm">View all</a>}
                    </div>
                    <ul className={`grid content-start gap-3 ${it.cols === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                      {it.cards!.map((c) => (
                        <li key={c.label}><Card c={c} onGo={() => setOpen(null)} /></li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
