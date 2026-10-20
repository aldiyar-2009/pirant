import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Lang, Localized } from '../types';
import { useSite } from '../store/site';
import { ui } from './ui';

export const LANGS: Lang[] = ['ru', 'kk', 'en'];

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Выбирает строку нужного языка из объекта {ru, kk, en} */
  l: (text: Localized) => string;
  /** Строка интерфейса по ключу из ui.ts */
  t: (key: keyof typeof ui) => string;
}

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'ru');

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    const titles: Record<Lang, string> = {
      ru: 'PIRANT Kazakhstan — Связь. Безопасность. Инфраструктура',
      kk: 'PIRANT Kazakhstan — Байланыс. Қауіпсіздік. Инфрақұрылым',
      en: 'PIRANT Kazakhstan — Communication. Security. Infrastructure',
    };
    document.title = titles[lang] || titles.ru;
  }, [lang]);

  const { settings } = useSite();
  const l = useCallback((text: Localized) => text[lang] || text.ru, [lang]);
  // Тексты, отредактированные в панели управления, перекрывают значения по умолчанию из ui.ts (по языкам)
  const t = useCallback((key: keyof typeof ui) => {
    const o = (settings.texts as Record<string, Localized | undefined>)[key];
    if (!o) return l(ui[key]);
    const merged = { ...ui[key], ...Object.fromEntries(Object.entries(o).filter(([, v]) => v && String(v).trim())) } as Localized;
    return l(merged);
  }, [l, settings.texts]);
  const value = useMemo(() => ({ lang, setLang, l, t }), [lang, l, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
