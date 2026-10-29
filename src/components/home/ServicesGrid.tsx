import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Truck } from 'lucide-react';
import { assetUrl } from '../../assetUrl';
import { useDirections } from '../../store/hooks';
import { useLang } from '../../i18n/LanguageContext';

const AUTOPLAY_MS = 5500;

export default function ServicesGrid() {
  const { l, t } = useLang();
  const services = useDirections();
  const touchStart = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { margin: '-20% 0px' });
  const reduced = useReducedMotion();
  // карусель листается сама, пока её видно и пользователь с ней не взаимодействует
  const autoplay = inView && !hovered && !reduced;
  const slides = [
    ...services.map((service) => ({
      id: service.id,
      title: l(service.title),
      description: l(service.description),
      image: service.image,
      href: `/services/${service.id}`,
    })),
    {
      id: 'special-machines',
      title: t('specialMachines'),
      description: t('specialMachinesDescription'),
      image: '/images/machines/kshm-2-kamaz-43118-23027-50.webp',
      href: '/services/special-machines',
    },
  ];

  const move = (direction: -1 | 1) => {
    setActiveIndex((index) => (index + direction + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setTimeout(() => setActiveIndex((index) => (index + 1) % slides.length), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [autoplay, activeIndex, slides.length]);

  const endTouch =(endX: number) => {
    if (touchStart.current === null) return;
    const distance = endX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
  };

  return (
    <section id="services" className="scroll-mt-24 bg-brand-soft py-16 lg:py-20">
      <div className="container-site">
        <h2 className="text-3xl font-extrabold text-navy">{t('servicesTitle')}</h2>
        <p className="mt-2 max-w-3xl text-ink/70">{t('servicesLead')}</p>
        <div
          ref={stageRef}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          className="relative mt-8 h-[220px] overflow-hidden sm:h-[290px] lg:h-[320px]"
          aria-label={t('servicesTitle')}
          onTouchStart={(event) => {
            touchStart.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => endTouch(event.changedTouches[0]?.clientX ?? 0)}
        >
          <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
            {slides.map((slide, index) => {
              const half = slides.length / 2;
              let offset = (index - activeIndex + slides.length) % slides.length;
              if (offset > half) offset -= slides.length;
              const isVisible = Math.abs(offset) <= 1;

              return (
                <Link
                  key={slide.id}
                  to={slide.href}
                  aria-label={slide.title}
                  aria-hidden={!isVisible}
                  tabIndex={isVisible ? 0 : -1}
                  className="absolute left-1/2 top-2 h-[calc(100%-16px)] w-[min(64vw,540px)] -translate-x-1/2 overflow-hidden rounded-2xl bg-navy-900 shadow-xl transition-[transform,filter] duration-500 ease-out"
                  style={{
                    transform: `translateX(calc(-50% + ${offset * 92}%)) scale(${offset === 0 ? 1 : 0.82})`,
                    filter: offset === 0 ? 'brightness(1)' : 'brightness(0.85)',
                    zIndex: slides.length - Math.abs(offset),
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                >
                  {slide.image ? (
                    <img
                      src={assetUrl(slide.image)}
                      alt={slide.title}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out ${offset === 0 ? 'scale-100' : 'scale-110'}`}
                    />
                  ) : (
                    <div className="grid h-full place-items-center text-white">
                      <Truck size={72} strokeWidth={1.3} />
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label={t('previous')}
            className="absolute left-0 top-[38%] z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand/90 sm:left-3 sm:h-12 sm:w-12"
          >
            <ArrowLeft size={21} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label={t('next')}
            className="absolute right-0 top-[38%] z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand/90 sm:right-3 sm:h-12 sm:w-12"
          >
            <ArrowRight size={21} />
          </button>
        </div>
        <div className="mx-auto mt-4 flex max-w-xs items-center justify-center gap-1.5" aria-hidden>
          {slides.map((slide, index) => (
            <span key={slide.id} className={`relative h-1 overflow-hidden rounded-full bg-navy/15 transition-[width] duration-500 ${index === activeIndex ? 'w-10' : 'w-3'}`}>
              {index === activeIndex && (
                <motion.span
                  key={`${activeIndex}-${autoplay}`}
                  className="absolute inset-0 origin-left bg-accent"
                  initial={{ scaleX: autoplay ? 0 : 1 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: autoplay ? AUTOPLAY_MS / 1000 : 0, ease: 'linear' }}
                />
              )}
            </span>
          ))}
        </div>
        <div className="mx-auto mt-4 max-w-3xl text-center" aria-live="polite">
          <div key={slides[activeIndex].id} className="service-copy-enter">
            <Link
              to={slides[activeIndex].href}
              className="inline-flex text-xl font-bold text-navy transition-colors hover:text-brand sm:text-2xl"
            >
              {slides[activeIndex].title}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">
              {slides[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
