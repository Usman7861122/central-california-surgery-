import { useState } from 'react';

export default function CopyCode({ code }: { code: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(code); setDone(true); setTimeout(() => setDone(false), 2200); } catch { /* clipboard blocked: the code stays visible */ }
  };
  return (
    <div className="card-hover flex items-center justify-between gap-4 border border-dashed border-blue/50 bg-white px-5 py-4">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-slate">Your code</p>
        <p className="mt-1 font-display text-3xl font-semibold tracking-[.12em] text-ink">{code}</p>
      </div>
      <button type="button" onClick={copy} className="btn btn-outline !px-4 !py-2.5 text-sm" aria-live="polite">
        {done ? 'Copied' : 'Copy code'}
      </button>
    </div>
  );
}
