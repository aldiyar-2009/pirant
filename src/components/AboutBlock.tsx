import { useSite } from '../store/site';
import { useLang } from '../i18n/LanguageContext';
import { advantagesTranslations } from '../i18n/staticContent';
import Icon from './Icon';

export default function AboutBlock() {
  const { t, l, lang } = useLang();
  const advantages = useSite().settings.advantages;
  return (
    <section className="py-14 lg:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-navy">{t('about')}</h2>
          <p className="mt-4 text-lg text-ink/80">{t('aboutText')}</p>
          <div className="mt-6 rounded-xl bg-navy p-5 text-white">
            <p className="font-bold text-accent">{t('mission')}</p>
            <p className="mt-2 text-white/85">{t('missionText')}</p>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {advantages.map((a) => {
              const baseRuTitle = a.title.ru;
              const tr = advantagesTranslations[baseRuTitle];
              const title = tr?.title?.[lang] || l(a.title);
              const text = tr?.text?.[lang] || l(a.text);
              return (
                <li key={a.id} className="flex gap-3">
                  <Icon name={a.icon} className="mt-0.5 shrink-0 text-brand" size={26} />
                  <span>
                    <b className="block text-sm text-navy">{title}</b>
                    <span className="text-xs text-ink/70">{text}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <img src="/images/about-building.webp" alt="PIRANT Kazakhstan" loading="lazy" className="h-full max-h-[560px] w-full rounded-2xl object-cover" />
      </div>
    </section>
  );
}
