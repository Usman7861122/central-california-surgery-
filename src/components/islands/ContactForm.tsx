import { useState, type FormEvent } from 'react';

export default function ContactForm({ endpoint }: { endpoint: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) { setStatus('error'); return; }
    setStatus('sending');
    try {
      const res = await fetch(endpoint, { method: 'POST', body: new FormData(e.currentTarget), headers: { Accept: 'application/json' } });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const field = 'w-full rounded-[10px] border border-line bg-white px-4 py-3.5 text-ink placeholder-slate/60 outline-none transition focus:border-blue focus:ring-4 focus:ring-blue/10';
  const label = 'mb-2 block text-xs font-semibold uppercase tracking-[.18em] text-ink';

  if (status === 'done')
    return (
      <div className="rounded-[14px] border border-line bg-white p-10 text-center" role="status">
        <p className="font-display text-3xl text-ink">Thank you.</p>
        <p className="mt-3">We received your request and will contact you soon.</p>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-[18px] border border-line bg-white p-7 shadow-[0_40px_80px_-44px_rgba(8,26,53,.45)] sm:grid-cols-2 sm:p-10">
      <div><label className={label} htmlFor="c-name">Full name</label><input id="c-name" name="name" required autoComplete="name" className={field} placeholder="Your name" /></div>
      <div><label className={label} htmlFor="c-phone">Phone</label><input id="c-phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="(209) 000-0000" /></div>
      <div className="sm:col-span-2"><label className={label} htmlFor="c-email">Email</label><input id="c-email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@email.com" /></div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="c-topic">I'm interested in</label>
        <select id="c-topic" name="topic" className={field} defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Gastric sleeve</option><option>Gastric bypass</option><option>Duodenal switch</option>
          <option>Hernia repair</option><option>Gallbladder surgery</option><option>Acid reflux</option><option>Not sure yet</option>
        </select>
      </div>
      <div className="sm:col-span-2"><label className={label} htmlFor="c-msg">Message</label><textarea id="c-msg" name="message" rows={4} className={field} placeholder="How can we help?" /></div>
      <p className="text-xs leading-relaxed text-slate sm:col-span-2">Please do not include private medical details in this form. We will discuss them when we call you.</p>
      <div className="sm:col-span-2">
        <button disabled={status === 'sending'} className="btn btn-appt w-full sm:w-auto">{status === 'sending' ? 'Sending...' : 'Request appointment'}</button>
        {status === 'error' && <p role="alert" className="mt-4 text-sm text-ink">We could not send this right now. Please call us instead.</p>}
      </div>
    </form>
  );
}
