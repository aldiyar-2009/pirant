import { useLang } from '../../i18n/LanguageContext';
import { useContacts, waUrl } from '../../store/hooks';
import { officesTranslations } from '../../i18n/staticContent';
import Logo from './Logo';

export default function Footer() {
  const { l, t, lang } = useLang();
  const contacts = useContacts();

  return (
    <footer className="bg-navy-900 py-10 text-sm text-white/80">
      <div className="container-site flex flex-col gap-6 md:flex-row md:justify-between">
        <Logo variant="full" light />
        <div className="space-y-1">
          {contacts.offices.map((o) => {
            const tr = officesTranslations[o.id];
            const address = tr?.address?.[lang] || o.address;
            return (
              <p key={o.id}>
                <b className="text-white">{l(o.city)}:</b> {address}
              </p>
            );
          })}
          {contacts.workHours && (
            <p>
              <b className="text-white">{t('workHours')}:</b>{' '}
              {officesTranslations.astana?.workHours?.[lang] || contacts.workHours}
            </p>
          )}
        </div>
        <div className="space-y-1">
          {contacts.phones.map((p) => (
            <a key={p.id} href={`tel:+${p.number.replace(/\D+/g, '')}`} className="block hover:text-white">
              {p.number}
            </a>
          ))}
          <a href={`mailto:${contacts.email}`} className="block hover:text-white">{contacts.email}</a>
          <p className="flex gap-4 pt-1">
            {contacts.whatsapp && (
              <a href={waUrl(contacts.whatsapp)} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp
              </a>
            )}
          </p>
        </div>
      </div>
      <p className="container-site mt-8 flex flex-wrap items-center justify-between gap-2 text-xs text-white/50">
        <span>© {new Date().getFullYear()} PIRANT Kazakhstan</span>
      </p>
    </footer>
  );
}
