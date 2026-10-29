import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assetUrl } from '../assetUrl';
import { useLang } from '../i18n/LanguageContext';
import { useSite } from '../store/site';

const slide = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
};

/** Модели одного подраздела каталога спецмашин каруселью; «Подробнее» ведёт на модель, открытую сейчас */
export default function MachineShowcase({ categoryId }: { categoryId: string }) {
  const { l, t, tr } = useLang();
  const { machineCategories, machines } = useSite();
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const category = machineCategories.find((c) => c.id === categoryId && c.published);
  const list = machines.filter((m) => m.categoryId === categoryId && m.published).sort((a, b) => a.order - b.order);
  if (!category || !list.length) return null;

  const current = list[Math.min(index, list.length - 1)];
  const move = (step: -1 | 1) => setState(([i]) => [(i + step + list.length) % list.length, step]);
  const href = `/services/special-machines/${encodeURIComponent(category.id)}/${encodeURIComponent(current.id)}`;
  const arrowCls = 'absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-navy/10 bg-white text-navy shadow-md transition hover:border-brand hover:text-brand active:scale-95';

  return (
    <section className="py-12">
      <div className="container-site">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{l(category.title)}</h2>
        <div className="relative mt-6" aria-roledescription="carousel" aria-label={l(category.title)}>
          <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
            <AnimatePresence initial={false} custom={dir} mode="wait">
              <motion.div
                key={current.id}
                custom={dir} variants={slide} initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                drag={list.length > 1 ? 'x' : false} dragConstraints={{ left: 0, right: 0 }} dragElastic={0.15}
                onDragEnd={(_, info) => { if (Math.abs(info.offset.x) > 60) move(info.offset.x < 0 ? 1 : -1); }}
                className="grid touch-pan-y md:min-h-[276px] md:grid-cols-2"
              >
                {current.image ? (
                  <img src={assetUrl(current.image)} alt={current.title} draggable={false} className="aspect-[16/10] h-full w-full bg-brand-soft object-cover md:aspect-auto" />
                ) : (
                  <div className="grid aspect-[16/10] place-items-center bg-brand-soft text-sm text-ink/50 md:aspect-auto">{t('vehiclePhotoPlaceholder')}</div>
                )}
                <div className="flex flex-col justify-center p-6 sm:p-9">
                  <p className="text-xs font-semibold tabular-nums text-brand" aria-live="polite">{list.indexOf(current) + 1} / {list.length}</p>
                  <h3 className="mt-3 text-xl font-extrabold leading-snug text-navy sm:text-2xl">{current.title}</h3>
                  {current.description && <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-ink/65">{tr(current.description)}</p>}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {list.length > 1 && (
            <>
              <button type="button" onClick={() => move(-1)} aria-label={t('prev')} className={`${arrowCls} -left-3 sm:-left-5`}><ChevronLeft size={20} /></button>
              <button type="button" onClick={() => move(1)} aria-label={t('next')} className={`${arrowCls} -right-3 sm:-right-5`}><ChevronRight size={20} /></button>
            </>
          )}
        </div>
        <div className="mt-6 flex flex-col items-center gap-2">
          <Link to={href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            {t('more')} <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to={`/services/special-machines/${encodeURIComponent(category.id)}`} className="text-xs text-ink/55 hover:text-brand">{t('vehicleCatalogOpen')}</Link>
        </div>
      </div>
    </section>
  );
}
