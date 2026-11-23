import { useState, type FormEvent } from 'react';

const services = ['Gastric sleeve', 'Gastric bypass', 'Duodenal switch', 'Hernia repair', 'Gallbladder surgery', 'Acid reflux', 'Weight loss options (not sure yet)', 'Revision of a past surgery', 'Something else'];
const times = ['Morning', 'Midday', 'Afternoon', 'Any time'];

/** Sends to PUBLIC_FORM_ENDPOINT when it is set. If not, opens the visitor's email app with the request filled in. */
export default function AppointmentForm({ endpoint, email, phone, phoneHref }: { endpoint: string; email: string; phone: string; phoneHref: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'mailto' | 'error'>('idle');
  const [patient, setPatient] = useState('new');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('company')) { setStatus('done'); return; } // honeypot
    if (!endpoint) {
      const g = (k: string) => String(data.get(k) || '').trim();
      const body = [
        'Appointment request', '',
        `Name: ${g('name')}`, `Phone: ${g('phone')}`, `Email: ${g('email')}`,
        `Patient type: ${g('patient') === 'new' ? 'New patient' : 'Existing patient'}`,
        `Interested in: ${g('service') || 'Not chosen'}`,
        `Preferred date: ${g('date') || 'Not chosen'}`, `Preferred time: ${g('time') || 'Any time'}`,
        `Best way to reach me: ${g('contact')}`, `Insurance: ${g('insurance') || 'Not shared'}`, '', g('message'),
      ].join('\n');
      window.location.href = `mailto:${email}?subject=${encodeURIComponent('Appointment request')}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      setStatus(res.ok ? 'done' : 'error');
      if (res.ok) form.reset();
    } catch {
      setStatus('error');
    }
  }

  const field = 'w-full rounded-[10px] border border-line bg-white px-4 py-3.5 text-ink placeholder-slate/60 outline-none transition focus:border-blue focus:ring-4 focus:ring-blue/10';
  const label = 'mb-2 block text-xs font-semibold uppercase tracking-[.18em] text-ink';
  const today = new Date().toISOString().slice(0, 10);

  if (status === 'done')
    return (
      <div className="rounded-[18px] border border-line bg-white p-10 text-center shadow-[0_40px_80px_-44px_rgba(8,26,53,.45)]" role="status">
        <p className="font-display text-3xl text-ink">Thank you.</p>
        <p className="mt-3">We received your request. A member of our team will call you to confirm a time.</p>
        <p className="mt-6 text-sm text-slate">Need us sooner? Call <a className="font-semibold text-blue" href={phoneHref}>{phone}</a>.</p>
      </div>
    );

  if (status === 'mailto')
    return (
      <div className="rounded-[18px] border border-line bg-white p-10 text-center shadow-[0_40px_80px_-44px_rgba(8,26,53,.45)]" role="status">
        <p className="font-display text-3xl text-ink">Almost done.</p>
        <p className="mt-3">Your email app should open with your request filled in. Press send to finish. If nothing opened, email <a className="font-semibold text-blue" href={`mailto:${email}`}>{email}</a> or call <a className="font-semibold text-blue" href={phoneHref}>{phone}</a>.</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn btn-outline mt-7">Back to the form</button>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-[18px] border border-line bg-white p-6 shadow-[0_40px_80px_-44px_rgba(8,26,53,.45)] sm:grid-cols-2 sm:p-10" noValidate={false}>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <fieldset className="sm:col-span-2">
        <legend className={label}>I am a</legend>
        <div className="grid grid-cols-2 gap-3">
          {[['new', 'New patient'], ['existing', 'Existing patient']].map(([v, t]) => (
            <label key={v} className={`flex cursor-pointer items-center gap-3 rounded-[10px] border px-4 py-3.5 text-ink transition ${patient === v ? 'border-blue bg-sky' : 'border-line bg-white hover:border-blue-soft'}`}>
              <input type="radio" name="patient" value={v} checked={patient === v} onChange={() => setPatient(v)} className="h-4 w-4 accent-[#0061fd]" />
              <span className="font-semibold">{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div><label className={label} htmlFor="a-name">Full name</label><input id="a-name" name="name" required autoComplete="name" className={field} placeholder="Your name" /></div>
      <div><label className={label} htmlFor="a-phone">Phone</label><input id="a-phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="(209) 000-0000" /></div>
      <div className="sm:col-span-2"><label className={label} htmlFor="a-email">Email</label><input id="a-email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@email.com" /></div>

      <div className="sm:col-span-2">
        <label className={label} htmlFor="a-service">I'm interested in</label>
        <select id="a-service" name="service" className={field} defaultValue="">
          <option value="" disabled>Select a service</option>
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div><label className={label} htmlFor="a-date">Preferred date</label><input id="a-date" name="date" type="date" min={today} className={field} /></div>
      <div>
        <label className={label} htmlFor="a-time">Preferred time</label>
        <select id="a-time" name="time" className={field} defaultValue="Any time">{times.map((t) => <option key={t}>{t}</option>)}</select>
      </div>

      <div>
        <label className={label} htmlFor="a-contact">Best way to reach me</label>
        <select id="a-contact" name="contact" className={field} defaultValue="Phone call">{['Phone call', 'Text message', 'Email'].map((t) => <option key={t}>{t}</option>)}</select>
      </div>
      <div><label className={label} htmlFor="a-ins">Insurance <span className="font-normal normal-case tracking-normal text-slate">(optional)</span></label><input id="a-ins" name="insurance" className={field} placeholder="Plan name" /></div>

      <div className="sm:col-span-2"><label className={label} htmlFor="a-msg">Anything we should know? <span className="font-normal normal-case tracking-normal text-slate">(optional)</span></label><textarea id="a-msg" name="message" rows={4} className={field} placeholder="Tell us how we can help." /></div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-slate sm:col-span-2">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-[#0061fd]" />
        <span>I agree that Central California Surgery may contact me about this request. I understand this form is not for emergencies or private medical details. In an emergency, call 911.</span>
      </label>

      <div className="sm:col-span-2">
        <button disabled={status === 'sending'} className="btn btn-appt w-full sm:w-auto">{status === 'sending' ? 'Sending...' : 'Request appointment'}</button>
        {status === 'error' && <p role="alert" className="mt-4 text-sm text-ink">We could not send this right now. Please call <a className="font-semibold text-blue" href={phoneHref}>{phone}</a> and we will book you in.</p>}
      </div>
    </form>
  );
}
