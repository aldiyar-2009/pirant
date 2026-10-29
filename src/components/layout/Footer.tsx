import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { useContacts, waUrl } from '../../store/hooks';
import type { ui } from '../../i18n/ui';
import Logo from './Logo';

/** Меню футера по колонкам. «О компании» и «Направления» — блоки на главной, ссылки ведут к ним. */
const footerColumns: { to: string; key: keyof typeof ui }[][] = [
  [
    { to: '/#about', key: 'about' },
    { to: '/#services', key: 'services' },
    { to: '/services/special-machines', key: 'specialMachines' },
  ],
  [
    { to: '/partners', key: 'partners' },
    { to: '/history', key: 'history' },
  ],
];

export default function Footer() {
  const { l, t, tr } = useLang();
  const contacts = useContacts();
  return (
    <footer className="bg-navy-900 py-10 text-sm text-white/80">
      <div className="container-site flex flex-col gap-6 md:flex-row md:justify-between">
        <Logo variant="full" light />
        <nav aria-label={t('footerNav')} className="flex gap-x-10 self-start">
          {footerColumns.map((col, i) => (
            <ul key={i} className="space-y-1">
              {col.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="group flex items-center gap-1.5 py-0.5 hover:text-white">
                    <span aria-hidden className="h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-3" />{t(n.key)}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>
        <div className="space-y-1">
          {contacts.offices.map((o) => (
            <p key={o.id}><b className="text-white">{l(o.city)}:</b> {tr(o.address)}</p>
          ))}
          {contacts.workHours && <p><b className="text-white">{t('workHours')}:</b> {contacts.workHours}</p>}
        </div>
        <div className="space-y-1">
          {contacts.phones.map((p) => <a key={p.id} href={`tel:+${p.number.replace(/\D+/g, '')}`} className="block hover:text-white">{p.number}</a>)}
          <a href={`mailto:${contacts.email}`} className="block hover:text-white">{contacts.email}</a>
          <p className="flex gap-4 pt-1">
            {contacts.whatsapp && <a href={waUrl(contacts.whatsapp)} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>}
          </p>
        </div>
      </div>
      <div className="container-site mt-8 flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {t('legalEntity')}, {t('bin')} 050140010306</p>
        <Link to="/privacy" className="hover:text-white">{t('privacyPolicy')}</Link>
      </div>
    </footer>
  );
}
