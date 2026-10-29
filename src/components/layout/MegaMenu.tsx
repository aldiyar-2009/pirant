import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';
import { useDirections } from '../../store/hooks';
import { useLang } from '../../i18n/LanguageContext';
import ServiceIcon from '../ServiceIcon';

const MotionLink = motion.create(Link);
const item = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
};
const linkCls = 'group flex gap-3 rounded-lg p-3 transition-colors hover:bg-brand-soft';
const iconCls = 'mt-0.5 shrink-0 text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110';

/** Содержимое выпадающего мега-меню «Направления» */
export default function MegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const { l, t } = useLang();
  const services = useDirections();
  return (
    <motion.div
      className="absolute left-0 right-0 top-full hidden overflow-hidden border-t border-navy/10 bg-white shadow-xl lg:block"
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0% 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.18 } }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="container-site grid grid-cols-3 gap-2 py-6" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.03, delayChildren: 0.06 } } }}>
        {services.map((s) => (
          <MotionLink key={s.id} variants={item} to={`/services/${s.id}`} onClick={onNavigate} className={linkCls}>
            <ServiceIcon name={s.icon} className={iconCls} size={22} />
            <span>
              <span className="block text-sm font-bold text-navy">{l(s.title)}</span>
              <span className="mt-1 line-clamp-2 block text-xs text-ink/65">{l(s.description)}</span>
            </span>
          </MotionLink>
        ))}
        <MotionLink variants={item} to="/services/special-machines" onClick={onNavigate} className={linkCls}>
          <Truck className={iconCls} size={22} />
          <span>
            <span className="block text-sm font-bold text-navy">{t('specialMachines')}</span>
            <span className="mt-1 block text-xs text-ink/65">{t('specialMachinesDescription')}</span>
          </span>
        </MotionLink>
      </motion.div>
    </motion.div>
  );
}
