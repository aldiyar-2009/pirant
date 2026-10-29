import { Link } from 'react-router-dom';
import { assetUrl } from '../../assetUrl';
import { useLang } from '../../i18n/LanguageContext';
import { useSite } from '../../store/site';
import type { Partner } from '../../types';

function PartnerTile({ p, hidden }: { p: Partner; hidden?: boolean }) {
  return (
    <li aria-hidden={hidden || undefined} className="shrink-0 px-2">
      <Link
        to="/partners" tabIndex={hidden ? -1 : undefined}
        className="flex h-20 w-44 items-center justify-center rounded-lg px-4 text-center font-extrabold text-navy/70 grayscale transition duration-300 hover:text-brand hover:grayscale-0 sm:w-52"
      >
        {p.logo ? <img src={assetUrl(p.logo)} alt={hidden ? '' : p.name} loading="lazy" className="max-h-10 max-w-full object-contain opacity-75 transition-opacity duration-300 hover:opacity-100" /> : p.name}
      </Link>
    </li>
  );
}

/** Логотипы плывут лентой; наведение или фокус останавливают её */
export default function PartnersStrip() {
  const { t } = useLang();
  const list = useSite().partners.filter((p) => p.featured);
  if (!list.length) return null;
  // набор повторяем, чтобы лента была шире любого экрана, затем дублируем для бесшовной петли
  const set = Array.from({ length: Math.ceil(10 / list.length) }, () => list).flat();
  return (
    <section className="border-y border-navy/10 bg-white py-12">
      <div className="container-site">
        <h2 className="text-center text-xl font-bold text-navy">{t('partnersTitle')}</h2>
      </div>
      <div className="marquee mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="marquee-track flex w-max" style={{ ['--marquee-duration' as string]: `${set.length * 3.2}s` }}>
          {set.map((p, n) => <PartnerTile key={`a${n}`} p={p} hidden={n >= list.length} />)}
          {set.map((p, n) => <PartnerTile key={`b${n}`} p={p} hidden />)}
        </ul>
      </div>
      <p className="mt-6 text-center"><Link to="/partners" className="text-sm font-semibold text-brand hover:underline">{t('allPartners')}</Link></p>
    </section>
  );
}
