import { useMemo, useState } from 'react';
import { motion } from 'motion/react';

type Unit = 'us' | 'metric';

const bands = [
  { max: 18.5, label: 'Underweight', range: 'Below 18.5', color: '#4f9dff', msg: 'Your BMI is below the healthy range. A doctor can help you find out why and what to do.' },
  { max: 25, label: 'Healthy weight', range: '18.5 to 24.9', color: '#2fb872', msg: 'Your BMI is in the healthy range. Keep up the habits that got you here.' },
  { max: 30, label: 'Overweight', range: '25 to 29.9', color: '#f2c230', msg: 'Your BMI is a little above the healthy range. Small, steady changes can help, and we are happy to talk.' },
  { max: 35, label: 'Obesity, class 1', range: '30 to 34.9', color: '#f08a24', msg: 'Your BMI is in the obesity range. Your health history matters most, so ask us which options may fit you.' },
  { max: 40, label: 'Obesity, class 2', range: '35 to 39.9', color: '#e5483b', msg: 'Many patients with a BMI of 35 or higher talk with us about surgery. A consultation will show if it is right for you.' },
  { max: 100, label: 'Obesity, class 3', range: '40 and above', color: '#c42a3a', msg: 'Surgery is often discussed at this level. Your surgeon will review your full health history with you.' },
];

const MIN = 15;
const MAX = 45;

function Gauge({ bmi }: { bmi: number | null }) {
  const cx = 150, cy = 150, r = 120;
  const pt = (t: number, rad = r) => {
    const a = Math.PI * (1 - t);
    return [cx + rad * Math.cos(a), cy - rad * Math.sin(a)];
  };
  const arc = (t0: number, t1: number) => {
    const [x0, y0] = pt(t0), [x1, y1] = pt(t1);
    return `M ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1}`;
  };
  const edges = [15, 18.5, 25, 30, 35, 40, 45].map((v) => (v - MIN) / (MAX - MIN));
  const shades = bands.map((b) => b.color);
  const t = bmi === null ? 0 : Math.min(1, Math.max(0, (bmi - MIN) / (MAX - MIN)));
  const rot = -90 + t * 180;

  return (
    <svg viewBox="0 0 300 175" className="w-full" role="img" aria-label={bmi ? `BMI gauge showing ${bmi.toFixed(1)}` : 'BMI gauge'}>
      {shades.map((c, i) => (
        <path key={i} d={arc(edges[i] + 0.004, edges[i + 1] - 0.004)} stroke={c} strokeWidth="18" fill="none" strokeLinecap="butt" opacity={bmi === null ? 0.55 : 1} />
      ))}
      <motion.g style={{ originX: '150px', originY: '150px' }} initial={{ rotate: -90 }} animate={{ rotate: bmi === null ? -90 : rot }} transition={{ type: 'spring', stiffness: 60, damping: 14 }}>
        <path d="M150 150 L150 44" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="150" cy="150" r="9" fill="#0061fd" stroke="#fff" strokeWidth="3" />
      </motion.g>
    </svg>
  );
}

export default function BmiCalculator() {
  const [unit, setUnit] = useState<Unit>('us');
  const [ft, setFt] = useState('5');
  const [inch, setInch] = useState('6');
  const [lb, setLb] = useState('');
  const [cm, setCm] = useState('');
  const [kg, setKg] = useState('');

  const bmi = useMemo(() => {
    let h: number, w: number;
    if (unit === 'us') {
      h = (parseFloat(ft) || 0) * 12 + (parseFloat(inch) || 0);
      w = parseFloat(lb);
      if (!h || !w) return null;
      return (703 * w) / (h * h);
    }
    h = parseFloat(cm) / 100;
    w = parseFloat(kg);
    if (!h || !w) return null;
    return w / (h * h);
  }, [unit, ft, inch, lb, cm, kg]);

  const valid = bmi !== null && bmi > 8 && bmi < 90;
  const value = valid ? (bmi as number) : null;
  const band = value ? bands.find((b) => value < b.max)! : null;

  const field = 'w-full rounded-[10px] border border-white/25 bg-white/5 px-4 py-3.5 text-white placeholder-white/40 outline-none transition focus:border-blue-soft focus:bg-white/10';
  const label = 'mb-2 block text-xs font-semibold uppercase tracking-[.18em] text-white/70';

  return (
    <div className="grid gap-8 rounded-[18px] border border-white/15 bg-white/[.06] p-6 shadow-2xl backdrop-blur-md md:grid-cols-2 md:p-10">
      <form onSubmit={(e) => e.preventDefault()} aria-label="BMI calculator">
        <div role="group" aria-label="Units" className="inline-flex rounded-[10px] border border-white/25 p-1">
          {(['us', 'metric'] as Unit[]).map((u) => (
            <button
              key={u}
              type="button"
              onClick={() => setUnit(u)}
              aria-pressed={unit === u}
              className={`rounded-[7px] px-4 py-2 text-xs font-semibold uppercase tracking-widest transition ${unit === u ? 'bg-white text-ink' : 'text-white/75 hover:text-white'}`}
            >
              {u === 'us' ? 'ft / lb' : 'cm / kg'}
            </button>
          ))}
        </div>

        {unit === 'us' ? (
          <div className="mt-7 grid grid-cols-2 gap-4">
            <div><label className={label} htmlFor="ft">Feet</label><input id="ft" inputMode="numeric" className={field} value={ft} onChange={(e) => setFt(e.target.value)} placeholder="5" /></div>
            <div><label className={label} htmlFor="in">Inches</label><input id="in" inputMode="numeric" className={field} value={inch} onChange={(e) => setInch(e.target.value)} placeholder="6" /></div>
            <div className="col-span-2"><label className={label} htmlFor="lb">Weight (lb)</label><input id="lb" inputMode="decimal" className={field} value={lb} onChange={(e) => setLb(e.target.value)} placeholder="e.g. 230" /></div>
          </div>
        ) : (
          <div className="mt-7 grid gap-4">
            <div><label className={label} htmlFor="cm">Height (cm)</label><input id="cm" inputMode="decimal" className={field} value={cm} onChange={(e) => setCm(e.target.value)} placeholder="e.g. 168" /></div>
            <div><label className={label} htmlFor="kg">Weight (kg)</label><input id="kg" inputMode="decimal" className={field} value={kg} onChange={(e) => setKg(e.target.value)} placeholder="e.g. 104" /></div>
          </div>
        )}
        <p className="mt-6 text-xs leading-relaxed text-white/60">BMI is a screening number, not a diagnosis. Only a consultation with your surgeon can tell you if surgery is right for you.</p>
      </form>

      <div className="flex flex-col items-center justify-center text-center" aria-live="polite">
        <div className="w-full max-w-xs"><Gauge bmi={value} /></div>
        <p className="mt-3 font-display text-6xl font-semibold leading-none text-white">{value ? value.toFixed(1) : '--'}</p>
        {band ? (
          <>
            <p className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              <span className="h-3 w-3 rounded-full" style={{ background: band.color }} aria-hidden="true" />
              {band.label}
              <span className="font-normal text-white/70">&middot; BMI {band.range}</span>
            </p>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-white">{band.msg}</p>
          </>
        ) : (
          <p className="mt-4 max-w-xs text-base leading-relaxed text-white/80">Enter your height and weight. Your result and what it means will show here.</p>
        )}
        <ul className="mt-6 grid w-full max-w-sm grid-cols-2 gap-x-4 gap-y-2 text-left text-xs text-white/75" aria-label="BMI ranges">
          {bands.map((b) => (
            <li key={b.label} className={`flex items-center gap-2 ${band && band.label === b.label ? 'font-semibold text-white' : ''}`}>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: b.color }} aria-hidden="true" />
              {b.range}
            </li>
          ))}
        </ul>
        <a href="/appointment" className="btn btn-white mt-7">Talk to a surgeon</a>
      </div>
    </div>
  );
}
