import { useMemo } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import { useDirections } from '../../store/hooks';
import { useSite } from '../../store/site';
import { norm, slugify } from '../../store/utils';
import { navLinks } from '../layout/navLinks';

export type SearchGroup = 'services' | 'vehicles' | 'news' | 'partners' | 'pages';

export interface SearchEntry {
  id: string;
  group: SearchGroup;
  title: string;
  /** Короткая строка под заголовком */
  hint: string;
  to: string;
  icon?: string;
  /** Нормализованный текст для поиска: заголовок отдельно — он весит больше */
  nTitle: string;
  nBody: string;
}

// латиница находит кириллицу: «radio» → «Радиосвязь» (radiosvyaz)
const latin = (s: string) => slugify(s).replace(/-/g, ' ');

function entry(e: Omit<SearchEntry, 'nTitle' | 'nBody'>, body: string[]): SearchEntry {
  const nTitle = norm(e.title);
  const text = norm(body.filter(Boolean).join(' '));
  return { ...e, nTitle: `${nTitle} ${latin(e.title)}`, nBody: `${text} ${latin(text)}` };
}

/** Всё, что можно найти на сайте, на текущем языке */
export function useSearchIndex(): SearchEntry[] {
  const { l, t, tr } = useLang();
  const { news, partners, machineCategories, machines } = useSite();
  const directions = useDirections();

  return useMemo(() => {
    const out: SearchEntry[] = [];

    for (const d of directions) {
      const blocks = d.blocks.flatMap((b) => [b.title, b.intro ?? '', ...b.items.flatMap((i) => [i.title, i.text ?? '', ...(i.list ?? [])])]);
      out.push(entry(
        { id: `d-${d.id}`, group: 'services', title: l(d.title), hint: l(d.description), to: `/services/${d.id}`, icon: d.icon },
        [l(d.description), tr(d.tagline), tr(d.lead), ...d.advantages.map(tr), ...blocks.map(tr), d.title.ru],
      ));
    }

    const cats = machineCategories.filter((c) => c.published);
    out.push(entry(
      { id: 'special-machines', group: 'vehicles', title: t('specialMachines'), hint: t('specialMachinesDescription'), to: '/services/special-machines', icon: 'truck' },
      [t('specialMachinesDescription'), t('vehicleCatalog')],
    ));
    for (const c of cats) {
      out.push(entry(
        { id: `mc-${c.id}`, group: 'vehicles', title: l(c.title), hint: c.description || t('specialMachines'), to: `/services/special-machines/${encodeURIComponent(c.id)}`, icon: 'truck' },
        [c.description, c.title.ru],
      ));
    }
    for (const m of machines) {
      const c = cats.find((x) => x.id === m.categoryId);
      if (!m.published || !c) continue;
      out.push(entry(
        { id: `m-${m.id}`, group: 'vehicles', title: m.title, hint: l(c.title), to: `/services/special-machines/${encodeURIComponent(c.id)}/${encodeURIComponent(m.id)}`, icon: 'truck' },
        [m.description, l(c.title), ...m.specs.map((s) => `${s.label} ${s.value}`)],
      ));
    }

    for (const n of [...news].sort((a, b) => b.date.localeCompare(a.date))) {
      out.push(entry(
        { id: `n-${n.id}`, group: 'news', title: l(n.title), hint: String(n.year || n.date.slice(0, 4)), to: `/news/${n.id}`, icon: 'megaphone' },
        [l(n.text), n.title.ru],
      ));
    }

    for (const p of partners) {
      out.push(entry(
        { id: `p-${p.id}`, group: 'partners', title: p.name, hint: p.description ? l(p.description) : t('partners'), to: '/partners', icon: 'handshake' },
        [p.description ? l(p.description) : ''],
      ));
    }

    const pages = [{ to: '/', key: 'home' as const }, ...navLinks.filter((n) => n.to !== '/services'), { to: '/news', key: 'newsTitle' as const }];
    for (const p of pages) {
      out.push(entry({ id: `page-${p.to}`, group: 'pages', title: t(p.key), hint: p.to, to: p.to, icon: 'file' }, []));
    }

    return out;
  }, [directions, machineCategories, machines, news, partners, l, t, tr]);
}

/** Все слова запроса должны встретиться; совпадение в заголовке и в начале слова ценнее */
export function searchEntries(index: SearchEntry[], query: string, limit = 24): SearchEntry[] {
  const terms = norm(query).split(' ').filter(Boolean);
  if (!terms.length) return [];
  const scored: { e: SearchEntry; score: number }[] = [];
  for (const e of index) {
    let score = 0;
    for (const term of terms) {
      const ti = e.nTitle.indexOf(term);
      if (ti === 0) score += 12;
      else if (ti > 0) score += e.nTitle[ti - 1] === ' ' ? 8 : 5;
      else if (e.nBody.includes(` ${term}`) || e.nBody.startsWith(term)) score += 3;
      else if (e.nBody.includes(term)) score += 1;
      else { score = 0; break; }
    }
    if (score > 0) scored.push({ e, score: score + (e.group === 'services' ? 1 : 0) });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((s) => s.e);
}
