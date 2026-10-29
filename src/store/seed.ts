import { contacts, news, partners, services } from '../data/mockData';
import { servicesContent } from '../data/servicesContent';
import type { Direction, Localized, Machine, MachineCategory, SiteData } from '../types';

/** Иллюстрации каталога сгенерированы ИИ — замените реальными фото, положив файл с тем же именем в assets/images/machines */
const machineImage = (id: string) => `/images/machines/${id}.webp`;
/** У категорий с моделями обложка — фото первой модели */
const categoryCover: Record<string, string> = {
  'command-staff-vehicles': 'kshm-2-kamaz-43118-23027-50',
};

const machineCategories: MachineCategory[] = ([
  ['command-staff-vehicles', { ru: 'Командно-штабные машины и автомобили для МЧС', kk: 'Қолбасшылық-штабтық машиналар және ТЖМ автомобильдері', en: 'Command and staff vehicles and emergency service vehicles' }],
  ['airport-equipment', { ru: 'Аэродромная спецтехника', kk: 'Әуеайлақ арнайы техникасы', en: 'Airfield special equipment' }],
] as [string, Localized][]).map(([id, title], index) => ({ id, title, description: '', image: machineImage(categoryCover[id] ?? id), order: index + 1, published: true }));

const machineList: [categoryId: string, id: string, title: string, description?: string][] = [
  ['command-staff-vehicles', 'kshm-2-kamaz-43118-23027-50', 'КШМ-2 на шасси Камаз 43118-23027-50', 'КШМ-2 обеспечивает условия для управления, беспрерывной связи, работы и отдыха командного состава в комфортных условиях в удаленных районах.'],
  ['command-staff-vehicles', 'kshm-20-kamaz-43118', 'Командно-штабная машина (Мобильный пункт управления с переменным объемом) КШМ-20 Камаз 43118'],
  ['command-staff-vehicles', 'uav-flight-control-kamaz-43118', 'Мобильный пункт управления полетами (БПА) на шасси КАМАЗ 43118'],
  ['command-staff-vehicles', 'command-staff-car-kamaz-43118', 'Командно-штабной автомобиль на шасси КАМАЗ 43118'],
  ['command-staff-vehicles', 'emergency-rescue-mchs-kamaz-43118', 'Аварийно-спасательный автомобиль для МЧС на шасси Камаз 43118'],
  ['command-staff-vehicles', 'emergency-rescue-kamaz-43118', 'Аварийно-спасательный автомобиль на шасси Камаз 43118'],
  ['command-staff-vehicles', 'gas-rescue-kamaz-43118', 'Аварийно-газоспасательный автомобиль на шасси КамАЗ 43118'],
  ['command-staff-vehicles', 'mchs-special-ural-next', 'Специальный автомобиль МЧС на шасси Урал Next'],
];
const machines: Machine[] = machineList.map(([categoryId, id, title, description = ''], index) => ({
  id, categoryId, title, description, image: machineImage(id), gallery: [], specs: [],
  order: index + 1, published: true,
}));

/** Всё содержимое сайта: собирается из data/mockData.ts и data/servicesContent.ts */
export function buildSeed(): SiteData {
  const directions: Direction[] = services.map((s, i) => {
    const c = servicesContent.find((x) => x.id === s.id)!;
    return {
      id: s.id, order: i + 1, published: true, icon: s.icon, title: s.title, description: s.description, image: s.image,
      hero: c.hero, tagline: c.tagline, lead: c.lead,
      specs: c.specs ?? [],
      blocks: c.blocks.map((b, n) => ({ ...b, id: `${s.id}-b${n + 1}` })),
      scheme: c.scheme,
      gallery: c.gallery ?? [],
      advantages: c.advantages,
      vendors: c.vendors,
    };
  });
  return {
    settings: {
      phones: [{ id: 'ph-1', label: 'Основной', number: contacts.phone }],
      whatsapp: contacts.whatsapp, telegram: contacts.telegram, email: contacts.email, site: contacts.site, workHours: '',
      offices: contacts.offices.map((o) => ({ id: o.id, city: o.city, address: o.address, mapQuery: o.mapQuery, phone: o.phone })),
    },
    directions,
    machineCategories,
    machines,
    news: news.map((n) => ({ ...n })),
    partners: partners.map((p) => ({ ...p })),
  };
}
