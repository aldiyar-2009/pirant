/** ru обязателен; встроенные тексты без перевода используют словарь i18n/content.ts */
export type Lang = 'ru' | 'kk' | 'en';
export type Localized = { ru: string; kk?: string; en?: string };

export interface NewsItem {
  id: number;
  title: Localized;
  date: string; // ISO
  image: string;
  text: Localized;
  showInHistory: boolean;
  year: number;
}

/* ---------------- Направления ---------------- */
export interface Item { icon?: string; title: string; text?: string; list?: string[]; image?: string }
export interface Block { id: string; title: string; intro?: string; cols?: 2 | 3 | 4; ratio?: string; items: Item[] }
export interface Step { title: string; text: string }
export interface Spec { label: string; value: string }
export interface GalleryImage { src: string; caption: string }

/** Направление = карточка на главной + страница /services/:id. Содержимое — в src/data. */
export interface Direction {
  id: string; // совпадает с :id в /services/:id
  order: number;
  published: boolean;
  icon: string;
  title: Localized;
  description: Localized; // кратко, для карточки и меню
  image: string; // картинка карточки
  hero: string; // фон первого экрана страницы
  tagline: string;
  lead: string;
  specs: Spec[];
  blocks: Block[];
  scheme?: { title: string; steps: Step[] };
  gallery: GalleryImage[];
  advantages: string[];
  vendors: string[]; // id партнёров
}

/* ---------------- Партнёры ---------------- */
export interface Partner {
  id: string;
  name: string;
  logo: string; // пусто — показываем название
  description?: Localized;
  featured: boolean; // показывать на главной
}

/* ---------------- Настройки сайта ---------------- */
export interface Settings {
  phones: { id: string; label: string; number: string }[];
  whatsapp: string; // только цифры: 77788004477
  telegram: string; // логин или ссылка; пусто — кнопка скрыта
  email: string;
  site: string;
  workHours: string;
  offices: { id: string; city: Localized; address: string; mapQuery: string; phone: string }[];
}

export interface MachineCategory {
  id: string;
  title: Localized;
  description: string;
  image: string;
  order: number;
  published: boolean;
}

export interface MachineSpec { label: string; value: string }

export interface Machine {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  image: string;
  gallery: GalleryImage[];
  specs: MachineSpec[];
  order: number;
  published: boolean;
}

export interface SiteData {
  settings: Settings;
  directions: Direction[];
  machineCategories: MachineCategory[];
  machines: Machine[];
  news: NewsItem[];
  partners: Partner[];
}
