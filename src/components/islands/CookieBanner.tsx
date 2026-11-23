import { useEffect, useRef, useState } from 'react';

type Consent = { analytics: boolean; embeds: boolean; ts: number };
const KEY = 'ccg-cookie-consent-v1';

const read = (): Consent | null => {
  try { const v = localStorage.getItem(KEY); return v ? (JSON.parse(v) as Consent) : null; } catch { return null; }
};

/** Compact cookie notice. Choices are saved in this browser and announced with the "ccg:consent" event,
 *  so analytics or embeds can wait for a yes. Any link with data-cookie-settings reopens it. */
export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [embeds, setEmbeds] = useState(false);
  const first = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = read();
    if (saved) { setAnalytics(saved.analytics); setEmbeds(saved.embeds); (window as any).ccgConsent = saved; }
    else setOpen(true);
    const reopen = (e: Event) => {
      const t = (e.target as HTMLElement).closest('[data-cookie-settings]');
      if (!t) return;
      e.preventDefault();
      const s = read();
      setAnalytics(!!s?.analytics); setEmbeds(!!s?.embeds); setCustom(true); setOpen(true);
    };
    document.addEventListener('click', reopen);
    return () => document.removeEventListener('click', reopen);
  }, []);

  useEffect(() => { if (open) setTimeout(() => first.current?.focus(), 50); }, [open, custom]);

  const save = (a: boolean, e: boolean) => {
    const c: Consent = { analytics: a, embeds: e, ts: Date.now() };
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch { /* private mode: choice lasts for this visit */ }
    (window as any).ccgConsent = c;
    window.dispatchEvent(new CustomEvent('ccg:consent', { detail: c }));
    setAnalytics(a); setEmbeds(e); setOpen(false); setCustom(false);
  };

  if (!open) return null;

  const Toggle = ({ on, set, label, locked }: { on: boolean; set?: (v: boolean) => void; label: string; locked?: boolean }) => (
    <button type="button" role="switch" aria-checked={on} aria-label={label} disabled={locked} onClick={() => set?.(!on)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${on ? 'bg-blue' : 'bg-line'} ${locked ? 'cursor-not-allowed opacity-60' : ''}`}>
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? 'left-[22px]' : 'left-0.5'}`} />
    </button>
  );

  const rows: { k: string; title: string; text: string; on: boolean; set?: (v: boolean) => void; locked?: boolean }[] = [
    { k: 'n', title: 'Necessary', text: 'Keeps the site working and remembers this choice.', on: true, locked: true },
    { k: 'a', title: 'Analytics', text: 'Helps us see which pages are useful.', on: analytics, set: setAnalytics },
    { k: 'e', title: 'Videos and maps', text: 'Lets YouTube and Google Maps load on our pages.', on: embeds, set: setEmbeds },
  ];

  return (
    <div role="dialog" aria-label="Cookie preferences" aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-[90] rounded-[16px] border border-line bg-white p-4 shadow-[0_24px_60px_-18px_rgba(8,26,53,.45)] sm:inset-x-auto sm:bottom-5 sm:left-5 sm:w-[380px] sm:p-5">
      <div className="flex items-start gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky text-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4-4 4 4 0 0 1-5-5Z" /><circle cx="9" cy="11" r=".8" fill="currentColor" /><circle cx="14" cy="15" r=".8" fill="currentColor" /><circle cx="8.5" cy="15.5" r=".8" fill="currentColor" /></svg>
        </span>
        <div>
          <p className="text-[15px] font-semibold text-ink">Your cookie choices</p>
          <p className="mt-1 text-[13px] leading-relaxed text-slate">
            We use cookies to run this site and, only if you agree, to improve it. <a href="/cookie-policy" className="font-semibold text-blue underline-offset-2 hover:underline">Cookie policy</a>
          </p>
        </div>
      </div>

      {custom && (
        <ul className="mt-4 space-y-3 border-t border-line pt-4">
          {rows.map((r) => (
            <li key={r.k} className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[14px] font-semibold text-ink">{r.title}</p>
                <p className="text-[12.5px] leading-snug text-slate">{r.text}</p>
              </div>
              <Toggle on={r.on} set={r.set} label={r.title} locked={r.locked} />
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {custom ? (
          <>
            <button ref={first} type="button" onClick={() => save(analytics, embeds)} className="btn btn-solid !px-4 !py-2.5 !text-[13px]">Save choices</button>
            <button type="button" onClick={() => save(true, true)} className="btn btn-outline !px-4 !py-2.5 !text-[13px]">Accept all</button>
          </>
        ) : (
          <>
            <button ref={first} type="button" onClick={() => save(true, true)} className="btn btn-solid !px-4 !py-2.5 !text-[13px]">Accept all</button>
            <button type="button" onClick={() => save(false, false)} className="btn btn-outline !px-4 !py-2.5 !text-[13px]">Reject extra</button>
            <button type="button" onClick={() => setCustom(true)} className="px-2 py-2 text-[13px] font-semibold text-blue underline-offset-2 hover:underline">Customize</button>
          </>
        )}
      </div>
    </div>
  );
}
