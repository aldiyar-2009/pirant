import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Search, Truck } from 'lucide-react';
import { assetUrl } from '../assetUrl';
import CtaBand from '../components/CtaBand';
import Gallery from '../components/Gallery';
import { useLang } from '../i18n/LanguageContext';
import { norm } from '../store/utils';
import { useSite } from '../store/site';
import NotFound from './NotFound';

function Photo({ src, title, className = '' }: { src: string; title: string; className?: string }) {
  return src
    ? <img src={assetUrl(src)} alt={title} loading="lazy" className={className} />
    : <div className={`grid place-items-center bg-navy-900 text-white/70 ${className}`} aria-label={title}><Truck size={48} strokeWidth={1.4} /></div>;
}

export default function SpecialMachinesCatalog() {
  const { machineCategories } = useSite();
  const { l, t } = useLang();
  const categories = [...machineCategories].filter((c) => c.published).sort((a, b) => a.order - b.order);

  return (
    <main className="container-site py-10 sm:py-14">
      <p className="text-sm text-ink/55">{t('services')} <span className="px-2">—</span>{t('specialMachines')}</p>
      <h1 className="mt-3 text-3xl font-extrabold text-navy sm:text-5xl">{t('specialMachines')}</h1>
      <p className="mt-3 max-w-2xl text-ink/70">{t('specialMachinesDescription')}</p>
      <h2 className="mt-10 text-xl font-bold text-navy">{t('vehicleCategories')}</h2>
      {categories.length === 0 ? (
        <p className="mt-5 rounded-xl border border-dashed border-navy/20 p-6 text-center text-sm text-ink/60">{t('vehicleNoProducts')}</p>
      ) : (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/services/special-machines/${encodeURIComponent(category.id)}`} className="group overflow-hidden rounded-xl border border-navy/10 bg-white transition-shadow hover:shadow-lg">
              <Photo src={category.image} title={l(category.title)} className="aspect-[16/10] w-full object-cover transition-transform group-hover:scale-[1.02]" />
              <div className="flex items-center justify-between gap-3 p-4">
                <div>
                  <h3 className="font-bold text-navy">{l(category.title)}</h3>
                  {category.description && <p className="mt-1 text-sm text-ink/65">{category.description}</p>}
                </div>
                <ArrowRight size={18} className="shrink-0 text-brand" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

export function MachineCategoryPage() {
  const { categoryId = '' } = useParams();
  const { machineCategories, machines } = useSite();
  const { l, t, tr } = useLang();
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const category = machineCategories.find((c) => c.id === categoryId && c.published);
  const products = useMemo(() => machines.filter((m) => m.categoryId === categoryId && m.published), [machines, categoryId]);
  const facets = useMemo(() => {
    const groups = new Map<string, { label: string; values: Set<string> }>();
    for (const product of products) for (const spec of product.specs) {
      const key = norm(spec.label);
      if (!key || !spec.value.trim()) continue;
      const group = groups.get(key) ?? { label: spec.label, values: new Set<string>() };
      group.values.add(spec.value);
      groups.set(key, group);
    }
    return [...groups.entries()].map(([key, group]) => ({ key, label: group.label, values: [...group.values].sort((a, b) => a.localeCompare(b, 'ru')) }));
  }, [products]);
  const visible = useMemo(() => products.filter((product) => {
    const term = norm(query);
    const text = norm(`${product.title} ${product.description} ${product.specs.map((spec) => `${spec.label} ${spec.value}`).join(' ')}`);
    return (!term || text.includes(term)) && facets.every((facet) => {
      const selected = filters[facet.key] ?? [];
      if (!selected.length) return true;
      const values = product.specs.filter((spec) => norm(spec.label) === facet.key).map((spec) => spec.value);
      return selected.some((value) => values.includes(value));
    });
  }), [products, query, facets, filters]);

  if (!category) return <NotFound />;
  const clearFilters = () => { setFilters({}); setQuery(''); };

  return (
    <main className="container-site py-10 sm:py-14">
      <nav className="text-sm text-ink/55">
        <Link to="/services/special-machines" className="hover:text-brand">{t('specialMachines')}</Link>
        <span className="px-2">/</span>{l(category.title)}
      </nav>
      <h1 className="mt-3 text-3xl font-extrabold text-navy sm:text-5xl">{l(category.title)}</h1>
      {category.description && <p className="mt-3 max-w-3xl text-ink/70">{tr(category.description)}</p>}
      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="h-fit rounded-xl border border-navy/10 bg-white p-4">
          <h2 className="font-bold text-navy">{t('vehicleFilter')}</h2>
          <label className="relative mt-4 block">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/45" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t('vehicleSearch')} className="w-full rounded-lg border border-navy/15 py-2 pl-9 pr-3 text-sm outline-none focus:border-brand" />
          </label>
          {facets.map((facet) => (
            <fieldset key={facet.key} className="mt-5">
              <legend className="mb-2 text-sm font-semibold text-navy">{facet.label}</legend>
              <div className="space-y-2">
                {facet.values.map((value) => {
                  const selected = filters[facet.key] ?? [];
                  return (
                    <label key={value} className="flex cursor-pointer items-center gap-2 text-sm text-ink/80">
                      <input type="checkbox" checked={selected.includes(value)} onChange={() => setFilters((current) => ({
                        ...current,
                        [facet.key]: selected.includes(value) ? selected.filter((x) => x !== value) : [...selected, value],
                      }))} className="accent-brand" />
                      {value}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}
          {(query || Object.values(filters).some((values) => values.length > 0)) && (
            <button type="button" onClick={clearFilters} className="mt-5 text-sm font-semibold text-brand hover:underline">{t('vehicleResetFilters')}</button>
          )}
        </aside>
        <section>
          <p className="mb-4 text-sm text-ink/60" role="status">{visible.length} / {products.length}</p>
          {visible.length === 0 ? (
            <p className="rounded-xl border border-dashed border-navy/20 p-6 text-center text-sm text-ink/60">{products.length ? t('vehicleNoResults') : t('vehicleNoProducts')}</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((machine) => (
                <Link key={machine.id} to={`/services/special-machines/${encodeURIComponent(category.id)}/${encodeURIComponent(machine.id)}`} className="group flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white transition-shadow hover:shadow-lg">
                  <Photo src={machine.image} title={machine.title} className="aspect-[4/3] w-full object-contain p-3" />
                  <div className="flex flex-1 flex-col p-4">
                    <h2 className="font-bold text-navy">{machine.title}</h2>
                    {machine.description && <p className="mt-2 line-clamp-3 text-sm text-ink/65">{machine.description}</p>}
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">{t('more')} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export function MachineDetailPage() {
  const { categoryId = '', machineId = '' } = useParams();
  const { machineCategories, machines } = useSite();
  const { l, t, tr } = useLang();
  const category = machineCategories.find((c) => c.id === categoryId && c.published);
  const machine = machines.find((m) => m.id === machineId && m.categoryId === categoryId && m.published);
  if (!category || !machine) return <NotFound />;
  const images = [machine.image, ...machine.gallery.map((image) => image.src)].filter(Boolean);

  return (
    <>
      <main className="container-site py-10 sm:py-14">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink/55">
          <Link to="/services/special-machines" className="hover:text-brand">{t('specialMachines')}</Link>
          <span>/</span>
          <Link to={`/services/special-machines/${encodeURIComponent(category.id)}`} className="hover:text-brand">{l(category.title)}</Link>
        </nav>
        <Link to={`/services/special-machines/${encodeURIComponent(category.id)}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"><ArrowLeft size={16} />{t('backToCategory')}</Link>
        <h1 className="mt-4 text-3xl font-extrabold text-navy sm:text-5xl">{machine.title}</h1>
        {machine.description && <p className="mt-4 max-w-3xl whitespace-pre-line text-ink/75">{tr(machine.description)}</p>}
        {images.length > 0 && (
          <section className="mt-8">
            {machine.gallery.length > 0 && <h2 className="mb-3 text-xl font-bold text-navy">{t('vehiclePhotos')}</h2>}
            <Gallery items={images.map((src, index) => ({ src, caption: machine.gallery[index - (machine.image ? 1 : 0)]?.caption || machine.title }))} />
          </section>
        )}
        {machine.specs.length > 0 && (
          <section className="mt-10 max-w-3xl">
            <h2 className="mb-4 text-xl font-bold text-navy">{t('vehicleCharacteristics')}</h2>
            <dl className="divide-y divide-navy/10 rounded-xl border border-navy/10 bg-white px-4">
              {machine.specs.map((spec, index) => (
                <div key={`${spec.label}-${index}`} className="grid gap-1 py-3 sm:grid-cols-[1fr_1fr]">
                  <dt className="text-sm text-ink/60">{spec.label}</dt>
                  <dd className="text-sm font-semibold text-navy">{tr(spec.value)}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
        {images.length === 0 && machine.specs.length === 0 && !machine.description && (
          <p className="mt-8 rounded-xl border border-dashed border-navy/20 p-6 text-sm text-ink/60">{t('vehicleDetailsEmpty')}</p>
        )}
      </main>
      <CtaBand />
    </>
  );
}
