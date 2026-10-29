import { FileText } from 'lucide-react';
import { assetUrl } from '../assetUrl';
import { advantages } from '../data/mockData';
import { useLang } from '../i18n/LanguageContext';
import Icon from './Icon';

export default function AboutBlock() {
  const { t, l, tr } = useLang();
  return (
    <section id="about" className="scroll-mt-24 py-14 lg:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-navy">{t('about')}</h2>
          <p className="mt-4 text-lg text-ink/80">{t('aboutText')}</p>
          <div className="mt-6 rounded-xl bg-navy p-5 text-white">
            <p className="font-bold text-accent">{t('mission')}</p>
            <p className="mt-2 text-white/85">{t('missionText')}</p>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-navy/10 p-4">
            <div>
              <p className="font-bold text-navy">{t('licenseTitle')}</p>
              <p className="mt-1 text-sm text-ink/70">{t('licenseDescription')}</p>
            </div>
            <a href="/documents/license-smr-category-ii.pdf" download className="btn-outline !py-2.5">
              <FileText size={16} />{t('licenseDownload')}
            </a>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {advantages.map((a) => (
              <li key={a.title.ru} className="flex gap-3">
                <Icon name={a.icon} className="mt-0.5 shrink-0 text-brand" size={26} />
                <span><b className="block text-sm text-navy">{l({ ru: a.title.ru, en: a.title.en })}</b><span className="text-xs text-ink/70">{tr(a.text)}</span></span>
              </li>
            ))}
          </ul>
        </div>
        <img src={assetUrl('/company-globe.png')} alt={t('companyIllustration')} loading="lazy" className="hidden h-full max-h-[560px] w-full rounded-2xl object-cover lg:block" />
      </div>
    </section>
  );
}
