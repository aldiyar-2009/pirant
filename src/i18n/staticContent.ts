import type { Lang } from '../types';

export interface LocalizedCycleStep {
  title: Record<Lang, string>;
  text: Record<Lang, string>;
}

export const cycleTranslations: Record<string, LocalizedCycleStep> = {
  'Анализ потребностей': {
    title: { ru: 'Анализ потребностей', kk: 'Қажеттіліктерді талдау', en: 'Needs Analysis' },
    text: {
      ru: 'Изучаем задачи заказчика, объект и требования к безопасности.',
      kk: 'Тапсырыс берушінің міндеттерін, нысанды және қауіпсіздік талаптарын жан-жақты зерттейміз.',
      en: 'We analyze customer objectives, facility specifics, and security requirements.',
    },
  },
  'Проектирование': {
    title: { ru: 'Проектирование', kk: 'Жобалау', en: 'Engineering & Design' },
    text: {
      ru: 'Разрабатываем архитектуру решения и техническую документацию.',
      kk: 'Шешім сәулеті мен егжей-тегжейлі техникалық құжаттаманы әзірлейміз.',
      en: 'We develop solution architecture and comprehensive technical documentation.',
    },
  },
  'Поставка оборудования': {
    title: { ru: 'Поставка оборудования', kk: 'Жабдықтарды жеткізу', en: 'Equipment Supply' },
    text: {
      ru: 'Поставляем оборудование проверенных мировых производителей.',
      kk: 'Сенімді әлемдік өндірушілердің жоғары сапалы жабдықтарын жеткіземіз.',
      en: 'We deliver hardware directly from trusted global manufacturers.',
    },
  },
  'Монтаж и интеграция': {
    title: { ru: 'Монтаж и интеграция', kk: 'Монтаждау және интеграция', en: 'Installation & Integration' },
    text: {
      ru: 'Монтируем системы и интегрируем их с инфраструктурой заказчика.',
      kk: 'Жүйелерді орнатамыз және тапсырыс берушінің қолданыстағы инфрақұрылымымен кіріктіреміз.',
      en: 'We deploy systems and integrate them seamlessly into existing infrastructure.',
    },
  },
  'Пусконаладка и тестирование': {
    title: { ru: 'Пусконаладка и тестирование', kk: 'Іске қосу және сынау', en: 'Commissioning & Testing' },
    text: {
      ru: 'Настраиваем и проверяем решение в рабочих условиях.',
      kk: 'Шешімді нақты жұмыс жағдайында баптап, кешенді сынақтан өткіземіз.',
      en: 'We configure and rigorously test the solution in operational conditions.',
    },
  },
  'Сервисное обслуживание': {
    title: { ru: 'Сервисное обслуживание', kk: 'Сервистік қызмет көрсету', en: 'Maintenance & Service' },
    text: {
      ru: 'Обеспечиваем регламентное обслуживание и техническую поддержку.',
      kk: 'Жоспарлы регламенттік қызмет көрсету мен жедел техникалық қолдауды қамтамасыз етеміз.',
      en: 'We provide scheduled maintenance and continuous technical support.',
    },
  },
  'Поддержка и развитие': {
    title: { ru: 'Поддержка и развитие', kk: 'Қолдау және дамыту', en: 'Support & Evolution' },
    text: {
      ru: 'Помогаем масштабировать и развивать систему вместе с вашими задачами.',
      kk: 'Жүйені міндеттеріңіздің өсуіне қарай кеңейтуге және жаңғыртуға көмектесеміз.',
      en: 'We help scale and adapt systems alongside your evolving business needs.',
    },
  },
};

export const advantagesTranslations: Record<string, { title: Record<Lang, string>; text: Record<Lang, string> }> = {
  'Комплексный подход': {
    title: { ru: 'Комплексный подход', kk: 'Кешенді тәсіл', en: 'Turnkey Approach' },
    text: {
      ru: 'Полный цикл работ — от проектирования до сервисной поддержки',
      kk: 'Жұмыстың толық циклі — жобалаудан бастап сервистік қолдауға дейін',
      en: 'Full project lifecycle: from engineering and deployment to service support',
    },
  },
  'Надежность и безопасность': {
    title: { ru: 'Надежность и безопасность', kk: 'Сенімділік пен қауіпсіздік', en: 'Reliability & Security' },
    text: {
      ru: 'Решения, соответствующие международным стандартам и требованиям безопасности',
      kk: 'Халықаралық стандарттар мен қатаң қауіпсіздік талаптарына толық сәйкестік',
      en: 'Solutions compliant with international standards and strict security requirements',
    },
  },
  'Опыт и экспертиза': {
    title: { ru: 'Опыт и экспертиза', kk: 'Тәжірибе мен сараптама', en: 'Experience & Expertise' },
    text: {
      ru: 'Команда сертифицированных специалистов с многолетним опытом реализации проектов',
      kk: 'Көпжылдық тәжірибесі бар сертификатталған кәсіби мамандар тобы',
      en: 'A dedicated team of certified specialists with years of proven project expertise',
    },
  },
  'Надежные партнеры': {
    title: { ru: 'Надежные партнеры', kk: 'Сенімді серіктестер', en: 'Trusted Partners' },
    text: {
      ru: 'Сотрудничество с ведущими мировыми производителями оборудования и технологий',
      kk: 'Әлемдік жетекші жабдық пен технология өндірушілерімен тікелей ынтымақтастық',
      en: 'Direct collaboration with world-leading equipment and software manufacturers',
    },
  },
};

export const officesTranslations: Record<string, { city: Record<Lang, string>; address: Record<Lang, string>; workHours: Record<Lang, string> }> = {
  astana: {
    city: { ru: 'Астана', kk: 'Астана', en: 'Astana' },
    address: {
      ru: 'ЖК Sanzhar Premium Deluxe, г. Астана',
      kk: 'Sanzhar Premium Deluxe ТК, Астана қ.',
      en: 'Sanzhar Premium Deluxe residential complex, Astana',
    },
    workHours: { ru: 'Пн–Пт 9:00–18:00', kk: 'Дүй–Жұм 9:00–18:00', en: 'Mon–Fri 9:00–18:00' },
  },
  almaty: {
    city: { ru: 'Алматы', kk: 'Алматы', en: 'Almaty' },
    address: {
      ru: 'г. Алматы, Бостандыкский район, ул. Туркебаева 257А, оф. 35',
      kk: 'Алматы қ., Бостандық ауданы, Түркебаев к-сі 257А, 35-кеңсе',
      en: 'Almaty, Bostandyk district, Turkebayev str. 257A, office 35',
    },
    workHours: { ru: 'Пн–Пт 9:00–18:00', kk: 'Дүй–Жұм 9:00–18:00', en: 'Mon–Fri 9:00–18:00' },
  },
};

export const newsTranslations: Record<number, { title: Record<Lang, string>; text: Record<Lang, string> }> = {
  1: {
    title: {
      ru: 'Поставлен комплект командно-штабных машин для экстренных служб',
      kk: 'Шұғыл қызметтер үшін қолбасшылық-штабтық машиналар кешені жеткізілді',
      en: 'Command vehicle fleet delivered to emergency services',
    },
    text: {
      ru: 'Завершили поставку и пусконаладку мобильных комплексов связи на вездеходном шасси 6х6 с автономным питанием и климат-контролем.',
      kk: 'Автономды қоректендіруі және климат-бақылауы бар 6х6 жолсыз шассиіндегі мобильді байланыс кешендерін жеткізу мен баптау сәтті аяқталды.',
      en: 'Completed delivery and commissioning of mobile communication units on 6x6 off-road chassis with autonomous power and climate control.',
    },
  },
  2: {
    title: {
      ru: 'Запущена сеть DMR для промышленного предприятия',
      kk: 'Өнеркәсіптік кәсіпорын үшін DMR желісі іске қосылды',
      en: 'DMR network launched for an industrial facility',
    },
    text: {
      ru: 'Цифровая радиосвязь с диспетчерской консолью, записью переговоров и интеграцией с системами предприятия.',
      kk: 'Диспетчерлік консолі, келіссөздерді жазу және кәсіпорын жүйелерімен интеграциясы бар цифрлық радиобайланыс.',
      en: 'Digital radio communication featuring dispatch console, voice recording, and full enterprise integration.',
    },
  },
  3: {
    title: {
      ru: 'Представили комплексное решение против БПЛА',
      kk: 'Ұшқышсыз аппараттарға (БПЛА) қарсы кешенді шешім таныстырылды',
      en: 'Comprehensive Counter-UAS solution presented',
    },
    text: {
      ru: 'Совместная система TERJIN и D-Fend Solutions: обнаружение, идентификация, перехват и нейтрализация для защиты критически важных объектов.',
      kk: 'TERJIN және D-Fend Solutions бірлескен жүйесі: аса маңызды нысандарды қорғау үшін анықтау, сәйкестендіру, ұстап алу және бейтараптандыру.',
      en: 'Joint TERJIN and D-Fend Solutions system: detection, identification, safe takeover, and neutralization for critical infrastructure.',
    },
  },
  4: {
    title: {
      ru: 'Введён в эксплуатацию контейнерный ЦОД',
      kk: 'Контейнерлік деректерді өңдеу орталығы (ДӨО) пайдалануға берілді',
      en: 'Containerized data center commissioned',
    },
    text: {
      ru: 'Быстрое развёртывание ИТ-инфраструктуры на удалённой площадке: мобильное решение для любых условий и локаций.',
      kk: 'Қашықтағы алаңда АТ-инфрақұрылымын жедел өрістету: кез келген ауа райы мен орындарға арналған мобильді шешім.',
      en: 'Rapid IT infrastructure deployment at a remote site: a rugged mobile solution for all operational environments.',
    },
  },
  5: {
    title: {
      ru: 'Открыт ситуационный центр для государственного заказчика',
      kk: 'Мемлекеттік тапсырыс беруші үшін жағдаяттық орталық ашылды',
      en: 'Situation center inaugurated for a government customer',
    },
    text: {
      ru: 'Видеостена, рабочие места операторов и единое информационное пространство для оперативного управления.',
      kk: 'Жедел басқаруға арналған бейнеқабырға, операторлардың жұмыс орындары және бірыңғай ақпараттық кеңістік.',
      en: 'Video wall, operator consoles, and an integrated information environment for real-time mission-critical management.',
    },
  },
  6: {
    title: {
      ru: 'Запущен центр мониторинга информационной безопасности',
      kk: 'Ақпараттық қауіпсіздікті бақылау орталығы (SOC) іске қосылды',
      en: 'Information security monitoring center (SOC) launched',
    },
    text: {
      ru: 'Мониторинг событий 24/7, корреляция и выявление инцидентов, реагирование на угрозы.',
      kk: '24/7 оқиғаларды бақылау, оқыс оқиғаларды анықтау мен салыстыру, қауіп-қатерлерге жедел ден қою.',
      en: '24/7 continuous event monitoring, threat correlation, incident detection, and rapid automated response.',
    },
  },
  7: {
    title: {
      ru: 'Построен стационарный ЦОД для крупного предприятия',
      kk: 'Ірі кәсіпорын үшін стационарлық ДӨО салынды',
      en: 'Stationary data center constructed for a large enterprise',
    },
    text: {
      ru: 'Капитальное решение для размещения критически важной ИТ-инфраструктуры с резервированием систем.',
      kk: 'Жүйелерді резервтеумен аса маңызды АТ-инфрақұрылымын орналастыруға арналған күрделі инженерлік шешім.',
      en: 'A heavy-duty capital facility for hosting mission-critical IT infrastructure with full system redundancy.',
    },
  },
  8: {
    title: {
      ru: 'Открыт офис в Алматы',
      kk: 'Алматы қаласында өкілдік кеңсе ашылды',
      en: 'Almaty branch office opened',
    },
    text: {
      ru: 'Расширили присутствие компании и начали работу с заказчиками по всей стране.',
      kk: 'Компания қызметінің ауқымын кеңейтіп, бүкіл еліміз бойынша тапсырыс берушілермен тікелей жұмысты бастадық.',
      en: 'We expanded our geographic footprint and started direct customer engagements across the country.',
    },
  },
};

export const partnerDefaultsTranslations: Record<string, Record<Lang, string>> = {
  radio: {
    ru: 'Профессиональная радиосвязь',
    kk: 'Кәсіби радиобайланыс',
    en: 'Professional radio communications',
  },
  security: {
    ru: 'Решения для кибер- и информационной безопасности',
    kk: 'Кибер және ақпараттық қауіпсіздік шешімдері',
    en: 'Cyber and information security solutions',
  },
  servers: {
    ru: 'Серверы, инфраструктура и ЦОД',
    kk: 'Серверлер, желілік инфрақұрылым және ДӨО',
    en: 'Servers, infrastructure and data centers',
  },
  video: {
    ru: 'Видеоаналитика, видеостены и системы визуализации',
    kk: 'Бейнеталдау, бейнеқабырғалар және визуализация жүйелері',
    en: 'Video analytics, video walls and visualization systems',
  },
  cuav: {
    ru: 'Системы противодействия БПЛА',
    kk: 'Дронға қарсы күрес және қорғаныс жүйелері',
    en: 'Counter-UAS and drone defense systems',
  },
};

export const partnerCustomDescriptions: Record<string, Record<Lang, string>> = {
  veeam: {
    ru: 'Резервное копирование и восстановление данных',
    kk: 'Деректердің резервтік көшірмесін жасау және қалпына келтіру',
    en: 'Data backup and disaster recovery',
  },
  huawei: {
    ru: 'ЦОД, контейнерные решения, серверы; решения для ситуационных центров и видеостен',
    kk: 'ДӨО, контейнерлік шешімдер, серверлер; жағдаяттық орталықтар мен бейнеқабырғалар',
    en: 'Data centers, container solutions, servers; video walls and command center systems',
  },
  dell: {
    ru: 'Серверные и вычислительные решения для надежной работы центров обработки данных',
    kk: 'Деректерді өңдеу орталықтарының сенімді жұмысына арналған серверлік және есептеу шешімдері',
    en: 'Server and computing solutions for mission-critical data center operations',
  },
  cisco: {
    ru: 'Сетевые решения для передачи данных, безопасности и интеграции всех систем',
    kk: 'Деректерді беруге, қауіпсіздікке және жүйелерді интеграциялауға арналған желілік шешімдер',
    en: 'Enterprise networking, data transmission, and cybersecurity integration',
  },
  milestone: {
    ru: 'Платформа видеонаблюдения (VMS) для интеграции и управления видеонаблюдением',
    kk: 'Бейнебақылауды біріктіру мен басқаруға арналған VMS бағдарламалық платформасы',
    en: 'Open video management software (VMS) platform for comprehensive surveillance',
  },
  barco: {
    ru: 'Профессиональные видеостены, контроллеры, системы визуализации и управления контентом',
    kk: 'Кәсіби бейнеқабырғалар, контроллерлер, визуализация және мазмұнды басқару жүйелері',
    en: 'Professional video walls, controllers, visualization, and content management',
  },
  samsung: {
    ru: 'Профессиональные дисплеи и видеостены с безупречным качеством изображения',
    kk: 'Мінсіз кескін сапасына ие кәсіби дисплейлер мен бейнеқабырғалар',
    en: 'Professional displays and video walls with flawless visual clarity',
  },
  crestron: {
    ru: 'Системы управления и автоматизации для ситуационных центров',
    kk: 'Жағдаяттық орталықтарды автоматтандыру және басқару жүйелері',
    en: 'Control and automation systems for modern situation centers',
  },
  eizo: {
    ru: 'Профессиональные мониторы для операторских рабочих мест',
    kk: 'Операторлардың жұмыс орындарына арналған кәсіби мониторлар',
    en: 'High-precision professional monitors for operator consoles',
  },
  legrand: {
    ru: 'Инфраструктурные решения для ситуационных центров и систем управления',
    kk: 'Жағдаяттық орталықтар мен басқару жүйелеріне арналған инфрақұрылымдық шешімдер',
    en: 'Structured cabling and infrastructure solutions for control facilities',
  },
  avaya: {
    ru: 'Коммуникационные платформы и решения для совместной работы и оповещения',
    kk: 'Бірлескен жұмыс пен жедел хабардар етуге арналған коммуникациялық платформалар',
    en: 'Communication platforms, unified collaboration, and emergency notifications',
  },
  terjin: {
    ru: 'Радары, RF-сенсоры и оптико-электронные системы обнаружения БПЛА; подавление каналов управления',
    kk: 'Радарлар, RF-сенсорлар, БПЛА анықтаудың оптикалық-электрондық жүйелері және арналарды басу',
    en: 'Radars, RF sensors, EO/IR drone detection systems, and RF jamming mitigation',
  },
  'd-fend': {
    ru: 'RF Cyber Takeover: безопасный перехват управления БПЛА',
    kk: 'RF Cyber Takeover: ұшқышсыз аппараттарды қауіпсіз ұстап алу және басқару',
    en: 'RF Cyber Takeover: safe and non-jamming rogue drone mitigation',
  },
};
