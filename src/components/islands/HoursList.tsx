import { useEffect, useState } from 'react';

export type DayHours = { day: string; open: string | null; close: string | null };

const TZ = 'America/Los_Angeles';
const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const toMin = (t: string) => {
  const [time, ap] = t.split(' ');
  let [h, m] = time.split(':').map(Number);
  if (ap === 'PM' && h !== 12) h += 12;
  if (ap === 'AM' && h === 12) h = 0;
  return h * 60 + (m || 0);
};

/** Today + open/closed in the office's time zone, so it is right for visitors anywhere. */
function pacificNow() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: TZ, weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value || '';
  return { day: get('weekday'), minutes: (Number(get('hour')) % 24) * 60 + Number(get('minute')) };
}

export default function HoursList({ hours, dark = false, note }: { hours: DayHours[]; dark?: boolean; note?: string }) {
  const [now, setNow] = useState<{ day: string; minutes: number } | null>(null);
  useEffect(() => {
    setNow(pacificNow());
    const id = setInterval(() => setNow(pacificNow()), 60_000);
    return () => clearInterval(id);
  }, []);

  const today = hours.find((h) => h.day === now?.day);
  const isOpen = !!(now && today?.open && today.close && now.minutes >= toMin(today.open) && now.minutes < toMin(today.close));
  const order = [...hours].sort((a, b) => names.indexOf(a.day) - names.indexOf(b.day));
  const mon = order.filter((h) => h.day !== 'Sunday').concat(order.filter((h) => h.day === 'Sunday'));

  const text = dark ? 'text-white' : 'text-ink';
  const muted = dark ? 'text-white/65' : 'text-slate';
  const line = dark ? 'border-white/15' : 'border-line';

  return (
    <div>
      {now && (
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] font-semibold" style={{ borderColor: isOpen ? '#7fd1a3' : dark ? 'rgba(255,255,255,.25)' : '#dbe3ef', color: isOpen ? (dark ? '#a8e6c3' : '#0f7a46') : dark ? '#fff' : '#4d5d77' }} role="status">
          <span className="h-2 w-2 rounded-full" style={{ background: isOpen ? '#22b36b' : '#9aa7bb' }} aria-hidden="true" />
          {isOpen ? `Open now · until ${today?.close}` : 'Closed right now'}
        </p>
      )}
      <ul className={`divide-y ${dark ? 'divide-white/15' : 'divide-line'} border-y ${line}`}>
        {mon.map((h) => {
          const isToday = now?.day === h.day;
          return (
            <li key={h.day} className={`flex items-center justify-between gap-4 px-3 py-3 text-[15px] transition ${isToday ? (dark ? 'bg-white/10' : 'bg-sky') : ''}`} aria-current={isToday ? 'date' : undefined}>
              <span className={`flex items-center gap-3 ${text} ${isToday ? 'font-semibold' : ''}`}>
                {h.day}
                {isToday && <span className="rounded-full bg-blue px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[.12em] text-white">Today</span>}
              </span>
              <span className={h.open ? `${text} ${isToday ? 'font-semibold' : ''}` : muted}>{h.open ? `${h.open} – ${h.close}` : 'Closed'}</span>
            </li>
          );
        })}
      </ul>
      {note && <p className={`mt-3 text-xs leading-relaxed ${muted}`}>{note}</p>}
    </div>
  );
}
