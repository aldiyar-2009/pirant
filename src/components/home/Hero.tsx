import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { assetUrl } from '../../assetUrl';
import { useLang } from '../../i18n/LanguageContext';
import { useLeadModal } from '../lead/LeadModalContext';

const ease = [0.22, 1, 0.36, 1] as const;

/** Радар с расходящимися волнами — «связь» и «безопасность» в одном знаке */
function SignalField() {
  const blips = [[388, 214], [205, 378], [431, 402], [262, 168]];
  return (
    <svg viewBox="0 0 600 600" aria-hidden className="pointer-events-none absolute -right-40 top-1/2 hidden h-[760px] w-[760px] -translate-y-1/2 text-white lg:block xl:-right-24">
      <defs>
        <radialGradient id="sweep-fade" cx="300" cy="300" r="290" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F28C1B" stopOpacity="0" />
          <stop offset="1" stopColor="#F28C1B" stopOpacity="0.28" />
        </radialGradient>
      </defs>
      {[90, 160, 230, 290].map((r) => (
        <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="currentColor" strokeOpacity="0.14" strokeDasharray={r === 290 ? '2 6' : undefined} />
      ))}
      <path d="M300 10V590M10 300H590" stroke="currentColor" strokeOpacity="0.08" />
      <g className="radar-sweep">
        <path d="M300 300 L300 10 A290 290 0 0 1 505 95 Z" fill="url(#sweep-fade)" />
        <path d="M300 300 L505 95" stroke="#F28C1B" strokeOpacity="0.7" strokeWidth="1.5" />
      </g>
      {[0, 1.8, 3.6].map((delay) => (
        <circle key={delay} className="signal-ring" style={{ animationDelay: `${delay}s` }} cx="300" cy="300" r="290" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" />
      ))}
      {blips.map(([x, y], n) => (
        <circle key={n} className="blip" style={{ animationDelay: `${n * 2.1 + 0.6}s` }} cx={x} cy={y} r="4" fill="#F28C1B" />
      ))}
      <circle cx="300" cy="300" r="5" fill="#F28C1B" />
    </svg>
  );
}

export default function Hero() {
  const { t } = useLang();
  const { openLead } = useLeadModal();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  // «Связь. Безопасность. Инфраструктура» — каждое слово своей строкой
  const lines = t('heroTitle').split(/\.\s*/).filter(Boolean);

  return (
    <section ref={ref} className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-navy-900 text-white lg:min-h-[660px]">
      {/* Фон: фото + затемнение слева, чтобы текст читался, а справа картинка оставалась открытой */}
      <motion.div className="absolute inset-0 -z-20" style={{ y: imageY }}>
        <motion.img
          src={assetUrl('/images/dc-corridor.webp')} alt=""
          className="h-full w-full object-cover object-center"
          initial={{ scale: 1.14 }} animate={{ scale: 1.02 }} transition={{ duration: 2.6, ease }}
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy-900/75 lg:bg-gradient-to-r lg:from-navy-900/95 lg:via-navy-900/75 lg:to-navy-900/35" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-navy-900/80 to-transparent" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1.4 }} >
        <SignalField />
      </motion.div>

      <motion.div className="container-site py-20 lg:py-28" style={{ y: copyY, opacity: copyOpacity }}>
        <h1 className="max-w-3xl text-[clamp(2rem,9.2vw,2.6rem)] font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl" aria-label={t('heroTitle')}>
          {lines.map((line, n) => (
            <span key={line} aria-hidden className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={{ y: '105%' }} animate={{ y: '0%' }}
                transition={{ delay: 0.15 + n * 0.14, duration: 0.9, ease }}
              >
                {line}<span className="text-accent">.</span>
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          className="mt-6 max-w-lg text-base text-white/85 sm:text-lg"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.7, ease }}
        >
          {t('heroSubtitle')}
        </motion.p>
        <motion.div
          className="mt-9 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7, ease }}
        >
          <button onClick={openLead} className="btn-accent">{t('contactUs')}</button>
          <a href="#services" className="btn-ghost">{t('viewServices')}</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
