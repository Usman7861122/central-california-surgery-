import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { NavNode } from '@/data/navigation';

export default function MobileMenu({ items, phone, phoneHref }: { items: NavNode[]; phone: string; phoneHref: string }) {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="relative z-[70] grid h-11 w-11 place-items-center rounded-[10px] border border-ink/25 text-ink"
        style={open ? { color: '#fff', borderColor: 'rgba(255,255,255,.4)' } : undefined}
      >
        <span className="relative block h-3.5 w-5">
          <span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
          <span className={`absolute left-0 top-[14px] h-px w-5 bg-current transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="wash-navy fixed inset-0 z-[60] flex flex-col justify-center px-8 pt-16"
          >
            <ul className="max-h-[62vh] space-y-0 overflow-y-auto">
              {items.map((i, n) => (
                <motion.li key={i.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * n + 0.1 }} className="border-b border-white/10">
                  {i.cards ? (
                    <>
                      <button type="button" aria-expanded={sub === n} onClick={() => setSub(sub === n ? null : n)} className="flex w-full items-center justify-between py-3.5 text-left font-display text-2xl text-white">
                        {i.label}
                        <span className={`text-xl text-blue-soft transition ${sub === n ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
                      </button>
                      {sub === n && (
                        <ul className="grid gap-1 pb-4 pl-1">
                          {i.cards.map((c) => (
                            <li key={c.label}>
                              <a href={c.href} onClick={() => setOpen(false)} {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})} className="block py-2 text-[15px] text-white/80">{c.label}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a href={i.href} onClick={() => setOpen(false)} className="block py-3.5 font-display text-2xl text-white">{i.label}</a>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <a href="/appointment" onClick={() => setOpen(false)} className="btn btn-appt on-dark justify-center">Book appointment</a>
              <a href={phoneHref} className="btn btn-outline-light justify-center">Call {phone}</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
