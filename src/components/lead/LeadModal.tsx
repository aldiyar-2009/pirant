import { useEffect, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useMatch } from 'react-router-dom';
import { X } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';
import { useContacts, useDirections, waUrl } from '../../store/hooks';
import type { Lang } from '../../types';
import { useLeadModal } from './LeadModalContext';

/** текст согласия: [до ссылки, ссылка на политику, после ссылки] — порядок слов в языках разный */
const CONSENT: Record<Lang, [string, string, string]> = {
  ru: ['Даю согласие на сбор и обработку моих персональных данных на условиях ', 'Политики конфиденциальности', ''],
  kk: ['', 'Құпиялылық саясатының', ' шарттарында дербес деректерімді жинауға және өңдеуге келісім беремін'],
  en: ['I consent to the collection and processing of my personal data under the ', 'Privacy Policy', ''],
};

const field ='mt-1 w-full rounded-lg border border-navy/20 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-brand';

export default function LeadModal() {
  const { open, closeLead } = useLeadModal();
  const { lang, l, t } = useLang();
  const services = useDirections();
  const { whatsapp, email } = useContacts();
  const match = useMatch('/services/:id');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) { setSent(false); return; }
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeLead();
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open, closeLead]);

  // Сервера нет: заявка уходит готовым сообщением в WhatsApp компании (или письмом, если WhatsApp не указан)
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const direction = services.find((s) => s.id === d.service_id);
    const text = [
      `${t('leadTitle')} — ${window.location.origin}${window.location.pathname}`,
      `${t('name')}: ${d.name}`,
      `${t('phone')}: ${d.phone}`,
      d.company && `${t('company')}: ${d.company}`,
      direction && `${t('direction')}: ${l(direction.title)}`,
      d.message && `${t('message')}: ${d.message}`,
    ].filter(Boolean).join('\n');
    const url = whatsapp ? waUrl(whatsapp, text) : `mailto:${email}?subject=${encodeURIComponent(t('leadTitle'))}&body=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
    setSent(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] overflow-y-auto bg-navy-900/60 backdrop-blur-md"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, pointerEvents: 'none' }}
          onMouseDown={(e) => e.target === e.currentTarget && closeLead()}
        >
          <div className="flex min-h-full items-center justify-center p-4" onMouseDown={(e) => e.target === e.currentTarget && closeLead()}>
            <motion.div
              role="dialog" aria-modal="true" aria-labelledby="lead-title"
              className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
              initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button onClick={closeLead} aria-label={t('close')} className="absolute right-4 top-4 rounded-lg p-2 text-navy hover:bg-brand-soft">
                <X size={20} />
              </button>

              <h2 id="lead-title" className="pr-10 text-2xl font-extrabold text-navy">{t('leadTitle')}</h2>
              <p className="mt-2 text-sm text-ink/70">{t('formSubtitle')}</p>

              {sent ? (
                <div role="status" className="mt-6 rounded-lg bg-brand-soft p-4 text-sm font-semibold text-navy">
                  {t('sent')}
                  <button onClick={closeLead} className="btn-outline mt-4 w-full">{t('close')}</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 grid gap-3 sm:grid-cols-2">
                  <label className="text-sm font-semibold">{t('name')}
                    <input name="name" required autoComplete="name" className={field} />
                  </label>
                  <label className="text-sm font-semibold">{t('phone')}
                    <input name="phone" type="tel" required autoComplete="tel" placeholder="+7" className={field} />
                  </label>
                  <label className="text-sm font-semibold">{t('company')}
                    <input name="company" autoComplete="organization" className={field} />
                  </label>
                  <label className="text-sm font-semibold">{t('direction')}
                    <select name="service_id" defaultValue={match?.params.id ?? ''} className={field}>
                      <option value="">—</option>
                      {services.map((s) => <option key={s.id} value={s.id}>{l(s.title)}</option>)}
                    </select>
                  </label>
                  <label className="text-sm font-semibold sm:col-span-2">{t('message')}
                    <textarea name="message" rows={3} className={field} />
                  </label>
                  <label className="flex items-start gap-2 text-xs text-ink/70 sm:col-span-2">
                    <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-brand" />
                    <span>
                      {CONSENT[lang][0]}
                      <Link to="/privacy" target="_blank" className="font-semibold text-brand underline">{CONSENT[lang][1]}</Link>
                      {CONSENT[lang][2]}
                    </span>
                  </label>
                  <button type="submit" className="btn-accent sm:col-span-2">{t('send')}</button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
