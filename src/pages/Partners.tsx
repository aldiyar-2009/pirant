import PageHead from '../components/PageHead';
import { assetUrl } from '../assetUrl';
import { useSite } from '../store/site';
import { useLang } from '../i18n/LanguageContext';

export default function Partners() {
  const { l, t } = useLang();
  const { partners } = useSite();
  return (
    <>
      <PageHead title={t('partners')} sub={t('partnersSub')} />
      <div className="container-site py-10">
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <li key={p.id} className="rounded-xl border border-navy/10 bg-white p-5">
              <div className="flex h-14 items-center text-xl font-extrabold text-navy">{p.logo ? <img src={assetUrl(p.logo)} alt={p.name} loading="lazy" className="max-h-12 max-w-[70%] object-contain" /> : p.name}</div>
              {p.description && <p className="mt-3 text-sm text-ink/70">{l(p.description)}</p>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
