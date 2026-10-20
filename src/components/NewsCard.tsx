import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import { newsTranslations } from '../i18n/staticContent';
import type { NewsItem } from '../types';

export const LOCALES = { ru: 'ru-RU', kk: 'kk-KZ', en: 'en-GB' } as const;

export default function NewsCard({ item: n }: { item: NewsItem }) {
  const { l, lang } = useLang();
  const tr = newsTranslations[n.id];
  const title = tr?.title?.[lang] || l(n.title);
  const text = tr?.text?.[lang] || l(n.text);

  return (
    <Link to={`/news/${n.id}`} className="flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white transition-shadow hover:shadow-lg">
      <img src={n.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover" />
      <div className="flex flex-1 flex-col p-4">
        <time dateTime={n.date} className="flex items-center gap-1.5 text-xs text-ink/60">
          <Calendar size={13} />{new Date(n.date).toLocaleDateString(LOCALES[lang], { day: 'numeric', month: 'long', year: 'numeric' })}
        </time>
        <h3 className="mt-2 font-bold leading-snug text-navy">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-ink/70">{text}</p>
      </div>
    </Link>
  );
}
