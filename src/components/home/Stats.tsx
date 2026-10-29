import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { stats } from '../../data/mockData';
import { useLang } from '../../i18n/LanguageContext';

/** «150+» досчитывает от нуля, когда блок попадает в экран */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduced = useReducedMotion();
  const [, num = '', suffix = ''] = value.match(/^(\d+)(.*)$/) ?? [];

  useEffect(() => {
    const el = ref.current;
    if (!el || !num || !inView || reduced) return;
    const controls = animate(0, Number(num), {
      duration: 1.6, ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { el.textContent = `${Math.round(v)}${suffix}`; },
    });
    return () => controls.stop();
  }, [inView, num, suffix, reduced]);

  return <span ref={ref} className="tabular-nums">{num && !reduced ? `0${suffix}` : value}</span>;
}

export default function Stats() {
  const { l } = useLang();
  return (
    <section className="border-b border-navy/10 bg-white">
      <dl className="container-site grid divide-x divide-navy/10 py-9" style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}>
        {stats.map((s) => (
          <div key={s.value} className="flex flex-col-reverse px-2 text-center sm:px-6">
            <dt className="mt-1 text-xs text-ink/70 sm:text-sm">{l(s.label)}</dt>
            <dd className="text-3xl font-extrabold tracking-tight text-navy sm:text-5xl"><CountUp value={s.value} /></dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
