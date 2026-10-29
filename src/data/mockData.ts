import type { Localized, NewsItem, Partner } from '../types';
import type { IconName } from '../components/Icon';

export const contacts = {
  phone: '+7 778 800 44 77',
  phoneHref: 'tel:+77788004477',
  whatsapp: '77788004477', // формат для wa.me: без + и пробелов
  email: 'info@pirant.kz',
  telegram: '', // логин без @ или ссылка; пусто — кнопка скрыта
  site: 'https://pirant.kz/',
  offices: [
    { id: 'astana', city: { ru: 'Астана', kk: 'Астана', en: 'Astana' }, address: 'г. Астана, район Есиль, ул. А. Ермекова 1/1, 4 этаж, офис 3', mapQuery: '4CPJ+HFC, Астана 020000', phone: '' },
    { id: 'almaty', city: { ru: 'Алматы', kk: 'Алматы', en: 'Almaty' }, address: 'г. Алматы, Бостандыкский район, ул. Туркебаева 257А, оф. 35', mapQuery: '43.233505, 76.881981', phone: '+7 778 800 44 77' },
  ],
};

export const stats = [
  { value: '20+', label: { ru: 'лет на рынке', kk: 'жыл нарықта', en: 'years on the market' } },
  { value: '150+', label: { ru: 'реализованных проектов', kk: 'іске асырылған жоба', en: 'completed projects' } },
  { value: '10+', label: { ru: 'регионов присутствия', kk: 'өңірде өкілдік', en: 'regions covered' } },
];

export const advantages: { icon: IconName; title: Record<'ru' | 'en', string>; text: string }[] = [
  { icon: 'building', title: { ru: 'Комплексный подход', en: 'Integrated approach' }, text: 'Полный цикл работ — от проектирования до сервисной поддержки' },
  { icon: 'shield', title: { ru: 'Надежность и безопасность', en: 'Reliability and security' }, text: 'Решения, соответствующие международным стандартам и требованиям безопасности' },
  { icon: 'users', title: { ru: 'Опыт и экспертиза', en: 'Experience and expertise' }, text: 'Команда сертифицированных специалистов с многолетним опытом реализации проектов' },
  { icon: 'handshake', title: { ru: 'Надежные партнеры', en: 'Trusted partners' }, text: 'Сотрудничество с ведущими мировыми производителями оборудования и технологий' },
];

export const cycle: { icon: IconName; title: string; text: string }[] = [
  { icon: 'clipboard', title: 'Анализ потребностей', text: 'Изучаем задачи заказчика, объект и требования к безопасности.' },
  { icon: 'ruler', title: 'Проектирование', text: 'Разрабатываем архитектуру решения и техническую документацию.' },
  { icon: 'package', title: 'Поставка оборудования', text: 'Поставляем оборудование проверенных мировых производителей.' },
  { icon: 'wrench', title: 'Монтаж и интеграция', text: 'Монтируем системы и интегрируем их с инфраструктурой заказчика.' },
  { icon: 'settings', title: 'Пусконаладка и тестирование', text: 'Настраиваем и проверяем решение в рабочих условиях.' },
  { icon: 'headset', title: 'Сервисное обслуживание', text: 'Обеспечиваем регламентное обслуживание и техническую поддержку.' },
  { icon: 'chart', title: 'Поддержка и развитие', text: 'Помогаем масштабировать и развивать систему вместе с вашими задачами.' },
];

export interface SeedService { id: string; icon: IconName; image: string; title: Localized; description: Localized }
export const services: SeedService[] = [
  {
    id: 'mobile-complexes', icon: 'truck', image: '/images/kshm-main.webp',
    title: { ru: 'Командно-штабные машины и мобильные комплексы связи', kk: 'Қолбасшылық-штабтық машиналар', en: 'Command vehicles and mobile communication units' },
    description: { ru: 'Вездеходное шасси 6х6, до 10 рабочих мест, автономное питание и развёртывание за 10–30 минут.', kk: '6х6 жолсыз шасси, 10 жұмыс орнына дейін, автономды қуат.', en: '6x6 off-road chassis, up to 10 workstations, autonomous power, deployment in 10–30 minutes.' },
  },
  {
    id: 'radio-communication', icon: 'radio', image: '/images/svc-radio.webp',
    title: { ru: 'Профессиональные системы радиосвязи', kk: 'Кәсіби радиобайланыс жүйелері', en: 'Professional radio systems' },
    description: { ru: 'DMR, TETRA, APCO-25, NXDN, КВ/УКВ и диспетчерские системы для промышленности и экстренных служб.', kk: 'DMR, TETRA, APCO-25, NXDN, КВ/УКВ және диспетчерлік жүйелер.', en: 'DMR, TETRA, APCO-25, NXDN, HF/VHF and dispatch systems for industry and emergency services.' },
  },
  {
    id: 'situation-centers', icon: 'monitor', image: '/images/svc-situation.webp',
    title: { ru: 'Ситуационные центры и центры оперативного управления', kk: 'Жағдаяттық орталықтар', en: 'Situation and operations centers' },
    description: { ru: 'Видеостены, рабочие места операторов и единое информационное пространство для принятия решений.', kk: 'Бейнеқабырғалар, оператор орындары, бірыңғай ақпараттық кеңістік.', en: 'Video walls, operator workstations and a unified information space for decision-making.' },
  },
  {
    id: 'data-centers', icon: 'server', image: '/images/dc-container.webp',
    title: { ru: 'Центры обработки данных (ЦОД)', kk: 'Деректерді өңдеу орталықтары (ДӨО)', en: 'Data centers' },
    description: { ru: 'Модульные, контейнерные, стационарные и микро-ЦОД: от проекта до сервисной поддержки.', kk: 'Модульдік, контейнерлік, стационарлық және микро-ДӨО.', en: 'Modular, containerized, stationary and micro data centers, from design to service.' },
  },
  {
    id: 'cyber-security', icon: 'shield', image: '/images/svc-security.webp',
    title: { ru: 'Информационная безопасность', kk: 'Ақпараттық қауіпсіздік', en: 'Information security' },
    description: { ru: 'Защита сети, SOC и SIEM, защита конечных точек, управление доступом и данными.', kk: 'Желі қорғанысы, SOC/SIEM, соңғы нүктелерді қорғау.', en: 'Network security, SOC and SIEM, endpoint protection, identity and data protection.' },
  },
  {
    id: 'c-uav-systems', icon: 'radar', image: '/images/svc-cuav.webp',
    title: { ru: 'Системы обнаружения и противодействия БПЛА', kk: 'Ұшқышсыз аппараттарға қарсы жүйелер', en: 'Counter-UAV detection and defeat systems' },
    description: { ru: 'Радары и RF-сенсоры TERJIN, безопасный перехват управления D-Fend Solutions.', kk: 'TERJIN радарлары және D-Fend басқаруды қауіпсіз ұстау.', en: 'TERJIN radars and RF sensors, D-Fend Solutions safe takeover of drone control.' },
  },
];

export const news: NewsItem[] = [];

type P = [id: string, name: string, description?: string];
const list: P[] = [
  ['hytera', 'Hytera'], ['motorola-solutions', 'Motorola Solutions'], ['icom', 'ICOM'], ['hycomms', 'Hycomms'], ['sepura', 'Sepura'],
  ['paloalto', 'Palo Alto Networks'], ['fortinet', 'Fortinet'], ['check-point', 'Check Point'], ['cisco-secure', 'Cisco Secure'],
  ['crowdstrike', 'CrowdStrike'], ['microsoft-security', 'Microsoft Security'], ['splunk', 'Splunk'], ['ibm-security', 'IBM Security'],
  ['trend-micro', 'Trend Micro'], ['sentinelone', 'SentinelOne'], ['cyberark', 'CyberArk'], ['veeam', 'Veeam'],
  ['huawei', 'Huawei', 'Контейнерный ЦОД (Huawei)'], ['schneider', 'Schneider Electric'], ['vertiv', 'Vertiv'], ['eaton', 'Eaton'],
  ['dell', 'Dell Technologies', 'Серверные и вычислительные решения для надежной работы центров обработки данных'], ['hpe', 'Hewlett Packard Enterprise'],
  ['cisco', 'Cisco', 'Сетевые решения для передачи данных, безопасности и интеграции всех систем'], ['nutanix', 'Nutanix'], ['lenovo', 'Lenovo'], ['netapp', 'NetApp'], ['ibm', 'IBM'], ['fujitsu', 'Fujitsu'],
  ['milestone', 'Milestone', 'Платформа видеонаблюдения (VMS) для интеграции и управления видеонаблюдением'], ['barco', 'Barco', 'Профессиональные видеостены, контроллеры, системы визуализации и управления контентом'],
  ['samsung', 'Samsung', 'Профессиональные дисплеи и видеостены с безупречным качеством изображения'], ['crestron', 'Crestron', 'Системы управления и автоматизации для ситуационных центров'],
  ['eizo', 'EIZO', 'Профессиональные мониторы для операторских рабочих мест'], ['legrand', 'Legrand', 'Инфраструктурные решения для ситуационных центров и систем управления'],
  ['avaya', 'Avaya', 'Коммуникационные платформы и решения для совместной работы и оповещения'],
  ['terjin', 'TERJIN', 'Радары, RF-сенсоры и оптико-электронные системы обнаружения БПЛА; подавление каналов управления'],
  ['d-fend', 'D-Fend Solutions', 'RF Cyber Takeover: безопасный перехват управления БПЛА'],
];
const FEATURED = ['huawei', 'cisco', 'motorola-solutions', 'hytera', 'd-fend', 'terjin', 'dell', 'fortinet'];
export const partners: Partner[] = list.map(([id, name, description]) => ({
  id, name, logo: `/partners/${id}.png`, ...(description ? { description: { ru: description } } : {}), featured: FEATURED.includes(id),
}));
