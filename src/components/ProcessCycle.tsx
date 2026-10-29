import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cycle } from '../data/mockData';
import { useLang } from '../i18n/LanguageContext';
import Icon from './Icon';

/** Этапы проекта: линия «прорисовывается» по мере прокрутки, шаги загораются, когда она до них доходит */
export default function ProcessCycle() {
  const { t, tr } = useLang();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] });
  const fill = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <section className="overflow-hidden py-16 lg:py-20">
      <div className="container-site">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{t('cycleTitle')}</h2>
        <ol ref={ref} className="relative mt-10 grid gap-7 xl:grid-cols-7 xl:gap-4">
          {/* направляющая: вертикальная на узких экранах, горизонтальная на широких */}
          <span aria-hidden className="absolute bottom-6 left-[21px] top-6 w-0.5 bg-navy/10 xl:bottom-auto xl:left-[22px] xl:right-[calc((100%-96px)/7-22px)] xl:top-[21px] xl:h-0.5 xl:w-auto" />
          <motion.span aria-hidden style={{ scaleY: fill }} className="absolute bottom-6 left-[21px] top-6 w-0.5 origin-top bg-accent xl:hidden" />
          <motion.span aria-hidden style={{ scaleX: fill }} className="absolute left-[22px] right-[calc((100%-96px)/7-22px)] top-[21px] hidden h-0.5 origin-left bg-accent xl:block" />

          {cycle.map((s, n) => (
            <motion.li
              key={s.title}
              className="relative flex gap-4 xl:block"
              initial="idle" whileInView="lit" viewport={{ once: true, margin: '0px 0px -38% 0px' }}
            >
              <motion.span
                className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 bg-white"
                variants={{
                  idle: { borderColor: 'rgba(11,31,107,0.15)', color: '#0B1F6B', scale: 0.9 },
                  lit: { borderColor: '#F28C1B', color: '#D97706', scale: 1, transition: { type: 'spring', stiffness: 380, damping: 18, delay: (n % 7) * 0.05 } },
                }}
              >
                <Icon name={s.icon} size={19} />
              </motion.span>
              <motion.div
                className="xl:mt-4 xl:pr-2"
                variants={{ idle: { opacity: 0.35, x: -6 }, lit: { opacity: 1, x: 0, transition: { duration: 0.45, delay: (n % 7) * 0.05 + 0.08 } } }}
              >
                <p className="text-xs font-bold text-accent-dark">{n + 1}</p>
                <h3 className="mt-0.5 text-sm font-bold leading-snug text-navy">{tr(s.title)}</h3>
                <p className="mt-1 max-w-md text-[13px] leading-relaxed text-ink/65">{tr(s.text)}</p>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
