import { Link, useParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import CtaBand from '../components/CtaBand';
import Gallery from '../components/Gallery';
import Icon from '../components/Icon';
import Scheme from '../components/Scheme';
import { useLang } from '../i18n/LanguageContext';
import { useLeadModal } from '../components/lead/LeadModalContext';
import { useDirections } from '../store/hooks';
import { useSite } from '../store/site';
import { servicesTranslations } from '../i18n/servicesTranslations';
import { cycleTranslations } from '../i18n/staticContent';
import NotFound from './NotFound';

const colsCls = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' } as const;

export default function ServicePage() {
  const { id } = useParams();
  const { l, t, lang } = useLang();
  const { openLead } = useLeadModal();
  const { directions, partners, settings } = useSite();
  const services = useDirections();
  const c = directions.find((s) => s.id === id);

  if (!c || !c.published) return <NotFound />;

  const trans = c.id ? servicesTranslations[c.id] : undefined;
  const vendors = c.vendors.map((v) => partners.find((p) => p.id === v)).filter((p): p is NonNullable<typeof p> => !!p);

  const tagline = trans?.tagline?.[lang] || c.tagline;
  const lead = trans?.lead?.[lang] || c.lead;

  const specs = c.specs.map((s, idx) => {
    const tr = trans?.specs?.[idx];
    return {
      value: tr?.value?.[lang] || s.value,
      label: tr?.label?.[lang] || s.label,
    };
  });

  const blocks = c.blocks.map((b, bIdx) => {
    const trBlock = trans?.blocks?.[bIdx];
    return {
      ...b,
      title: trBlock?.title?.[lang] || b.title,
      intro: trBlock?.intro?.[lang] || b.intro,
      items: b.items.map((it, itIdx) => {
        const trItem = trBlock?.items?.[itIdx];
        return {
          ...it,
          title: trItem?.title?.[lang] || it.title,
          text: trItem?.text?.[lang] || it.text,
          list: trItem?.list?.[lang] || it.list,
        };
      }),
    };
  });

  const advantages = trans?.advantages?.[lang] || c.advantages;

  const schemeTitle = trans?.scheme?.title?.[lang] || (c.scheme?.title ? c.scheme.title : t('howWeWork'));
  const schemeSteps = c.scheme?.steps.length
    ? c.scheme.steps.map((st, idx) => {
        const trStep = trans?.scheme?.steps?.[idx];
        return {
          title: trStep?.title?.[lang] || st.title,
          text: trStep?.text?.[lang] || st.text,
        };
      })
    : settings.cycle.map((st) => {
        const trStep = cycleTranslations[st.title];
        return {
          title: trStep?.title?.[lang] || st.title,
          text: trStep?.text?.[lang] || st.text,
        };
      });

  const scheme = { title: schemeTitle, steps: schemeSteps };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        {c.hero && <img src={c.hero} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />}
        <div className="container-site py-16 lg:py-24">
          <Link to="/#services" className="text-sm text-white/70 hover:text-white">← {t('allServices')}</Link>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">{l(c.title)}</h1>
          {tagline && <p className="mt-3 text-lg font-semibold text-accent">{tagline}</p>}
          {lead && <p className="mt-4 max-w-2xl text-white/85">{lead}</p>}
          <button onClick={openLead} className="btn-accent mt-8">{t('orderSolution')}</button>
        </div>
      </section>

      {specs.length > 0 && (
        <section className="border-b border-navy/10">
          <div className="container-site py-8">
            <h2 className="sr-only">{t('specsTitle')}</h2>
            <dl className="grid grid-cols-2 gap-4 lg:grid-cols-6">
              {specs.map((s, n) => (
                <div key={n} className="rounded-lg bg-brand-soft p-4">
                  <dd className="text-lg font-extrabold text-navy">{s.value}</dd>
                  <dt className="mt-1 text-xs text-ink/65">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {blocks.filter((b) => b.items.length > 0).map((b, i) => (
        <section key={b.id} className={`py-12 ${i % 2 ? 'bg-brand-soft/60' : ''}`}>
          <div className="container-site">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{b.title}</h2>
            {b.intro && <p className="mt-2 max-w-3xl text-ink/70">{b.intro}</p>}
            <div className={`mt-6 grid gap-4 ${colsCls[b.cols ?? 3]}`}>
              {b.items.map((it, n) => (
                <article key={n} className="overflow-hidden rounded-xl border border-navy/10 bg-white">
                  {it.image && <img src={it.image} alt={it.title} loading="lazy" className={`${b.ratio ?? 'aspect-[16/10]'} w-full object-cover`} />}
                  <div className="p-5">
                    {it.icon && <Icon name={it.icon} size={26} className="text-brand" />}
                    <h3 className={`font-bold text-navy ${it.icon ? 'mt-3' : ''}`}>{it.title}</h3>
                    {it.text && <p className="mt-1.5 text-sm text-ink/70">{it.text}</p>}
                    {it.list && it.list.length > 0 && (
                      <ul className="mt-3 space-y-1.5 text-sm text-ink/75">
                        {it.list.map((x) => (
                          <li key={x} className="flex gap-2">
                            <Check size={16} className="mt-0.5 shrink-0 text-brand" />{x}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Scheme {...scheme} />

      {c.gallery.length > 0 && (
        <section className="py-12">
          <div className="container-site">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{t('galleryTitle')}</h2>
            <Gallery items={c.gallery} />
          </div>
        </section>
      )}

      {advantages.length > 0 && (
        <section className="bg-brand-soft/60 py-12">
          <div className="container-site">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{t('advantagesTitle')}</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {advantages.map((a) => (
                <li key={a} className="flex gap-3 rounded-lg bg-white p-4 text-sm text-ink/80">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent" />{a}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {vendors.length > 0 && (
        <section className="py-12">
          <div className="container-site">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{t('vendorsTitle')}</h2>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {vendors.map((p) => (
                <li key={p.id}>
                  <Link to="/partners" title={p.name} className="flex h-16 items-center justify-center rounded-lg border border-navy/10 px-3 text-center text-sm font-extrabold text-navy/80 hover:border-brand hover:text-brand">
                    {p.logo ? <img src={p.logo} alt={p.name} loading="lazy" className="max-h-8 max-w-full object-contain" /> : p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-t border-navy/10 py-10">
        <div className="container-site">
          <h2 className="text-lg font-bold text-navy">{t('otherServices')}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {services.filter((s) => s.id !== id).map((s) => (
              <li key={s.id}>
                <Link to={`/services/${s.id}`} className="btn-outline !py-2 !text-xs">{l(s.title)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
