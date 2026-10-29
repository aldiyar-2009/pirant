import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CornerDownLeft, Search, X } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';
import { norm } from '../../store/utils';
import { useLeadModal } from '../lead/LeadModalContext';
import Icon from '../Icon';
import { searchEntries, useSearchIndex, type SearchGroup } from './useSearchIndex';

interface Props { open: boolean; onClose: () => void }

/** Подсвечивает найденные слова в заголовке */
function Highlight({ text, query }: { text: string; query: string }) {
  const terms = norm(query).split(' ').filter((s) => s.length > 1);
  if (!terms.length) return <>{text}</>;
  const lower = text.toLowerCase().replace(/ё/g, 'е');
  const marks: [number, number][] = [];
  for (const term of terms) {
    let i = lower.indexOf(term);
    while (i !== -1) { marks.push([i, i + term.length]); i = lower.indexOf(term, i + term.length); }
  }
  if (!marks.length) return <>{text}</>;
  marks.sort((a, b) => a[0] - b[0]);
  const parts: ReactNode[] = [];
  let pos = 0;
  marks.forEach(([s, e], n) => {
    if (s < pos) return;
    parts.push(text.slice(pos, s), <mark key={n} className="rounded-sm bg-accent/25 text-inherit">{text.slice(s, e)}</mark>);
    pos = e;
  });
  parts.push(text.slice(pos));
  return <>{parts}</>;
}

export default function SearchPalette({ open, onClose }: Props) {
  const { t } = useLang();
  const { openLead } = useLeadModal();
  const navigate = useNavigate();
  const index = useSearchIndex();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const results = useMemo(() => searchEntries(index, query), [index, query]);

  const groupName: Record<SearchGroup, string> = {
    services: t('services'), vehicles: t('searchVehicles'), news: t('newsTitle'), partners: t('partners'), pages: t('searchPages'),
  };

  useEffect(() => { setActive(0); }, [query]);
  useEffect(() => {
    if (!open) { setQuery(''); return; }
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const go = (to: string) => { onClose(); navigate(to); };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { e.preventDefault(); onClose(); }
    else if (e.key === 'ArrowDown' && results.length) { e.preventDefault(); setActive((i) => (i + 1) % results.length); }
    else if (e.key === 'ArrowUp' && results.length) { e.preventDefault(); setActive((i) => (i - 1 + results.length) % results.length); }
    else if (e.key === 'Enter' && results[active]) { e.preventDefault(); go(results[active].to); }
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-navy-900/55 px-3 pt-[9vh] backdrop-blur-sm sm:pt-[14vh]"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            role="dialog" aria-modal="true" aria-label={t('search')}
            className="flex max-h-[76vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(7,21,72,0.55)]"
            initial={{ y: -14, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: -10, scale: 0.98, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 34 }}
            onKeyDown={onKeyDown}
          >
            <div className="flex items-center gap-3 border-b border-navy/10 px-4">
              <Search size={20} className="shrink-0 text-brand" />
              <input
                autoFocus value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder={t('searchPlaceholder')} aria-label={t('search')}
                role="combobox" aria-expanded={results.length > 0} aria-controls="site-search-results"
                aria-activedescendant={results[active] ? `sr-${results[active].id}` : undefined}
                className="h-16 w-full bg-transparent text-base text-ink outline-none placeholder:text-ink/40 sm:text-lg"
              />
              <button onClick={onClose} aria-label={t('close')} className="rounded-lg p-2 text-ink/50 hover:bg-brand-soft hover:text-navy"><X size={18} /></button>
            </div>

            <div className="overflow-y-auto overscroll-contain">
              {!query.trim() && <p className="px-5 py-8 text-sm text-ink/60">{t('searchHint')}</p>}
              {query.trim() && !results.length && (
                <div className="px-5 py-8 text-sm text-ink/70">
                  <p>{t('searchEmpty')}</p>
                  <button onClick={() => { onClose(); openLead(); }} className="btn-accent mt-4 !py-2.5">{t('requestQuote')}</button>
                </div>
              )}
              {results.length > 0 && (
                <ul ref={listRef} id="site-search-results" role="listbox" className="p-2">
                  {results.map((r, i) => (
                    <li key={r.id} id={`sr-${r.id}`} role="option" aria-selected={i === active} data-index={i}>
                      <button
                        onClick={() => go(r.to)} onMouseMove={() => i !== active && setActive(i)}
                        className="relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left"
                      >
                        {i === active && (
                          <motion.span layoutId="search-active" className="absolute inset-0 -z-0 rounded-xl bg-brand-soft" transition={{ type: 'spring', stiffness: 600, damping: 40 }} />
                        )}
                        <span className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors ${i === active ? 'bg-brand text-white' : 'bg-navy/[0.06] text-navy'}`}>
                          <Icon name={r.icon ?? 'file'} size={17} />
                        </span>
                        <span className="relative min-w-0 flex-1">
                          <span className="block truncate font-semibold text-navy"><Highlight text={r.title} query={query} /></span>
                          <span className="block truncate text-xs text-ink/55">{r.hint}</span>
                        </span>
                        <span className="relative hidden shrink-0 text-xs text-ink/45 sm:block">{groupName[r.group]}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="hidden items-center gap-4 border-t border-navy/10 bg-brand-soft/60 px-4 py-2 text-xs text-ink/55 sm:flex">
              <span className="flex items-center gap-1"><kbd className="rounded border border-navy/15 bg-white px-1.5">↑</kbd><kbd className="rounded border border-navy/15 bg-white px-1.5">↓</kbd></span>
              <span className="flex items-center gap-1"><kbd className="grid h-5 place-items-center rounded border border-navy/15 bg-white px-1"><CornerDownLeft size={11} /></kbd> {t('searchKeys')}</span>
              <span className="flex items-center gap-1"><kbd className="rounded border border-navy/15 bg-white px-1.5">Esc</kbd> {t('close').toLowerCase()}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
