import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import PageHead from '../components/PageHead';
import { assetUrl } from '../assetUrl';
import { useSite } from '../store/site';
import { useLang } from '../i18n/LanguageContext';

export default function History() {
  const { l, t } = useLang();
  const { news } = useSite();
  const ref = useRef<HTMLOListElement>(null);
  // линия времени заполняется по мере чтения
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.7'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const items = news.filter((n) => n.showInHistory).sort((a, b) => a.date.localeCompare(b.date));
  const years = [...new Set([2005, ...items.map((n) => n.year)])].sort((a, b) => a - b);
  return (
    <>
      <PageHead title={t('history')} sub={t('historySub')} />
      <div className="container-site py-14">
        <ol ref={ref} className="relative ml-3 md:ml-0">
          <span aria-hidden className="absolute bottom-0 left-0 top-0 w-0.5 bg-brand/15 md:left-[151px]" />
          <motion.span aria-hidden style={{ scaleY: fill }} className="absolute bottom-0 left-0 top-0 w-0.5 origin-top bg-accent md:left-[151px]" />
          {years.map((y) => (
            <motion.li
              key={y}
              className="relative pb-10 pl-8 md:grid md:grid-cols-[120px_1fr] md:gap-8 md:pl-0"
              initial="out" whileInView="in" viewport={{ once: true, margin: '0px 0px -25% 0px' }}
            >
              <motion.span
                aria-hidden
                className="absolute -left-[7px] top-2 h-4 w-4 rounded-full border-4 border-white bg-accent shadow md:left-[144px] md:top-4"
                variants={{ out: { scale: 0 }, in: { scale: 1, transition: { type: 'spring', stiffness: 500, damping: 20 } } }}
              />
              <motion.p
                className="text-3xl font-extrabold tabular-nums text-accent-dark md:pt-3 md:text-right"
                variants={{ out: { opacity: 0, x: -10 }, in: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              >
                {y}
              </motion.p>
              <motion.div
                className="mt-3 space-y-4 md:mt-0 md:pl-8"
                variants={{ out: { opacity: 0, y: 16 }, in: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.1 } } }}
              >
                {y === 2005 && <article className="rounded-xl border border-navy/10 bg-white p-5"><h2 className="font-bold text-navy">{t('companyFounded')}</h2></article>}
                {items.filter((n) => n.year === y).map((n) => (
                  <article key={n.id} className="group grid overflow-hidden rounded-xl border border-navy/10 bg-white sm:grid-cols-[220px_1fr]">
                    <div className="overflow-hidden"><img src={assetUrl(n.image)} alt="" loading="lazy" className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full" /></div>
                    <div className="p-5"><h2 className="font-bold text-navy">{l(n.title)}</h2><p className="mt-2 text-sm text-ink/70">{l(n.text)}</p></div>
                  </article>
                ))}
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </>
  );
}
