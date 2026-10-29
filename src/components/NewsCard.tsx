import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { assetUrl } from '../assetUrl';
import { useLang } from '../i18n/LanguageContext';
import type { NewsItem } from '../types';

export const LOCALES = { ru: 'ru-RU', kk: 'kk-KZ', en: 'en-GB' } as const;

export default function NewsCard({ item: n }: { item: NewsItem }) {
  const { l, lang } = useLang();
  return (
    <Link to={`/news/${n.id}`} className="group flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_18px_40px_-24px_rgba(7,21,72,0.45)]">
      <div className="overflow-hidden">
        <img src={assetUrl(n.image)} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <time dateTime={n.date} className="flex items-center gap-1.5 text-xs text-ink/60">
          <Calendar size={13} />{new Date(n.date).toLocaleDateString(LOCALES[lang], { day: 'numeric', month: 'long', year: 'numeric' })}
        </time>
        <h3 className="mt-2 font-bold leading-snug text-navy transition-colors group-hover:text-brand">{l(n.title)}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-ink/70">{l(n.text)}</p>
      </div>
    </Link>
  );
}
