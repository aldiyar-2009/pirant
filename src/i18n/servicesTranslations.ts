import type { Lang } from '../types';

export interface ServiceTranslation {
  tagline: Record<Lang, string>;
  lead: Record<Lang, string>;
  specs?: { label: Record<Lang, string>; value: Record<Lang, string> }[];
  blocks: {
    title: Record<Lang, string>;
    intro?: Record<Lang, string>;
    items: {
      title: Record<Lang, string>;
      text?: Record<Lang, string>;
      list?: Record<Lang, string[]>;
    }[];
  }[];
  scheme?: {
    title: Record<Lang, string>;
    steps: { title: Record<Lang, string>; text: Record<Lang, string> }[];
  };
  galleryCaptions?: Record<string, Record<Lang, string>>;
  advantages: Record<Lang, string[]>;
}

export const servicesTranslations: Record<string, ServiceTranslation> = {
  'mobile-complexes': {
    tagline: {
      ru: 'Оперативность. Надежность. Автономность.',
      kk: 'Жеделдік. Сенімділік. Автономиялық.',
      en: 'Agility. Reliability. Autonomy.',
    },
    lead: {
      ru: 'Мобильные решения для организации управления и связи в любых условиях.',
      kk: 'Кез келген қиын жағдайда байланыс пен басқаруды жедел ұйымдастыруға арналған мобильді шешімдер.',
      en: 'Mobile command and communication units built for rapid deployment in any operational environment.',
    },
    specs: [
      {
        label: { ru: 'Вездеходное шасси', kk: 'Жол талғамайтын шасси', en: 'All-terrain chassis' },
        value: { ru: '6х6', kk: '6х6', en: '6x6' },
      },
      {
        label: { ru: 'Рабочих мест', kk: 'Жұмыс орындары', en: 'Workstations' },
        value: { ru: 'до 10', kk: '10-ға дейін', en: 'up to 10' },
      },
      {
        label: { ru: 'Запас хода', kk: 'Жүріс қоры', en: 'Cruising range' },
        value: { ru: '≥ 500 км', kk: '≥ 500 км', en: '≥ 500 km' },
      },
      {
        label: { ru: 'Автономное питание', kk: 'Автономды қорек', en: 'Autonomous power' },
        value: { ru: '220 В / ДГУ / ИБП', kk: '220 В / ДГУ / Үздіксіз қорек', en: '220V / Diesel Genset / UPS' },
      },
      {
        label: { ru: 'Климат-контроль', kk: 'Климат-бақылау', en: 'Climate control' },
        value: {
          ru: 'отопление +25 °C, кондиционирование +22 °C',
          kk: 'жылыту +25 °C, салқындату +22 °C',
          en: 'heating +25 °C, cooling +22 °C',
        },
      },
      {
        label: { ru: 'Защита', kk: 'Қорғаныс', en: 'Protection' },
        value: {
          ru: 'система ФВК, защита от ЭМ/ПОВ',
          kk: 'ФВК жүйесі, ЭМ қорғаныс',
          en: 'filtration ventilation, EMP shielding',
        },
      },
    ],
    blocks: [
      {
        title: { ru: 'Ключевые возможности', kk: 'Негізгі мүмкіндіктер', en: 'Key Capabilities' },
        items: [
          {
            title: { ru: 'Оперативное развертывание', kk: 'Жедел өрістету', en: 'Rapid Deployment' },
            text: {
              ru: 'До 10 минут в движении, до 30 минут на стоянке.',
              kk: 'Қозғалыс кезінде 10 минутқа дейін, тұрақта 30 минутқа дейін.',
              en: 'Up to 10 minutes on the move, under 30 minutes when parked.',
            },
          },
          {
            title: { ru: 'Мобильный штаб', kk: 'Мобильді штаб', en: 'Mobile Command Post' },
            text: {
              ru: 'До 10 рабочих мест, постоянная АРМ для обработки данных и видеоинформации.',
              kk: '10 жұмыс орнына дейін, деректер мен бейнеақпаратты өңдеуге арналған автоматтандырылған орындар.',
              en: 'Up to 10 operator seats with dedicated workstations for telemetry and video processing.',
            },
          },
          {
            title: { ru: 'Автономность и защита', kk: 'Автономия және қорғаныс', en: 'Autonomy & Resilience' },
            text: {
              ru: 'Автономное питание ДГУ, ИБП, система ФВК, климат-контроль.',
              kk: 'ДГУ автономды қорегі, ҮҚК, сүзгі-желдеткіш жүйесі және климат-бақылау.',
              en: 'Self-sufficient power via diesel generator, UPS backup, air filtration, and climate control.',
            },
          },
          {
            title: { ru: 'Высокая проходимость', kk: 'Жоғары өтімділік', en: 'Off-Road Mobility' },
            text: {
              ru: 'Вездеходное шасси 6х6, движение по дорогам общего пользования и бездорожью.',
              kk: '6х6 жол талғамайтын шассиі, тас жолдармен де, жолсыз далада да еркін қозғалыс.',
              en: 'Heavy-duty 6x6 chassis built for public highways and harsh off-road terrains.',
            },
          },
        ],
      },
      {
        title: { ru: 'Коммуникационная платформа', kk: 'Байланыс платформасы', en: 'Communications Platform' },
        items: [
          {
            title: { ru: 'Радиосвязь', kk: 'Радиобайланыс', en: 'Radio Communications' },
            text: { ru: 'TETRA, DMR, APCO-25, КВ/УКВ.', kk: 'TETRA, DMR, APCO-25, КВ/УКВ.', en: 'TETRA, DMR, APCO-25, HF/VHF.' },
          },
          {
            title: { ru: 'Видеоконференцсвязь', kk: 'Бейнеконференция байланысы', en: 'Video Conferencing' },
            text: {
              ru: 'IP-системы, многоточечные ВКС.',
              kk: 'IP-жүйелері, көпнүктелі БКБ.',
              en: 'IP conferencing and multi-point video communications.',
            },
          },
          {
            title: { ru: 'Передача данных', kk: 'Деректерді беру', en: 'Data Transmission' },
            text: {
              ru: 'Ethernet, IP, интернет, 3G/4G, VPN.',
              kk: 'Ethernet, IP, интернет, 3G/4G, VPN арналары.',
              en: 'Gigabit Ethernet, IP networks, 3G/4G LTE, and encrypted VPN tunnels.',
            },
          },
          {
            title: { ru: 'Оповещение', kk: 'Құлақтандыру', en: 'Public Notification' },
            text: {
              ru: 'Громкоговорящая связь, оповещение населения.',
              kk: 'Дауыс зорайтқыш байланыс, тұрғындарды жедел құлақтандыру.',
              en: 'High-power PA loudspeaker and civilian alert broadcast system.',
            },
          },
        ],
      },
      {
        title: { ru: 'Ключевое оборудование', kk: 'Негізгі жабдықтар', en: 'Key Equipment' },
        items: [
          {
            title: { ru: 'Радиостанции', kk: 'Радиостанциялар', en: 'Radio Stations' },
            text: { ru: 'КВ, УКВ, TETRA, DMR.', kk: 'КВ, УКВ, TETRA, DMR.', en: 'HF, VHF/UHF, TETRA, DMR.' },
          },
          {
            title: { ru: 'Сетевое оборудование и серверы', kk: 'Желілік жабдықтар мен серверлер', en: 'Network Hardware & Servers' },
          },
          {
            title: { ru: 'Видеонаблюдение и мониторинг', kk: 'Бейнебақылау және мониторинг', en: 'Video Surveillance & Monitoring' },
          },
          {
            title: { ru: 'Системы питания и климат-контроля', kk: 'Қорек және климат-бақылау жүйелері', en: 'Power Supplies & Climate Control' },
          },
          {
            title: { ru: 'ПО и системы управления', kk: 'БҚ және басқару жүйелері', en: 'Software & Management Systems' },
          },
        ],
      },
      {
        title: { ru: 'Внутреннее оснащение и эргономика', kk: 'Ішкі жабдықталу және эргономика', en: 'Interior & Ergonomics' },
        items: [
          { title: { ru: 'Зона переговоров', kk: 'Келіссөз аймағы', en: 'Briefing Area' } },
          { title: { ru: 'Стойка 19″', kk: '19″ телекоммуникациялық сөресі', en: '19″ Telecom Rack' } },
          { title: { ru: 'АРМ операторов', kk: 'Операторлардың жұмыс орындары', en: 'Operator Workstations' } },
          { title: { ru: 'Коммутация', kk: 'Коммутация торабы', en: 'Patching & Switching' } },
          { title: { ru: 'Спальные места', kk: 'Демалу орындары', en: 'Resting Quarters' } },
          { title: { ru: 'Внутренний коридор', kk: 'Ішкі дәліз', en: 'Internal Corridor' } },
        ],
      },
      {
        title: { ru: 'Конструкция кузова-фургона', kk: 'Фургон-шанақтың құрылымы', en: 'Body Construction' },
        intro: {
          ru: 'Прочная, теплая и долговечная конструкция обеспечивает надежную защиту оборудования и персонала в любых условиях эксплуатации.',
          kk: 'Берік, жылы және ұзаққа шыдайтын конструкция кез келген пайдалану жағдайында жабдықтар мен мамандарды сенімді қорғайды.',
          en: 'Rugged, thermally insulated, and durable van construction reliably shields personnel and electronics in extreme weather.',
        },
        items: [
          {
            title: { ru: '5-слойные сэндвич-панели (монолит)', kk: '5 қабатты сэндвич-панельдер (монолит)', en: '5-Layer Monolithic Sandwich Panels' },
            text: {
              ru: 'Внешняя обшивка из оцинкованной стали, утеплитель полистирольной группы.',
              kk: 'Мырышталған болаттан жасалған сыртқы қаптама, полистирол тобындағы жылытқыш.',
              en: 'Galvanized steel exterior cladding with high-density polystyrene insulation.',
            },
          },
          {
            title: { ru: 'Каркас и надрамник', kk: 'Қаңқа және қосымша рама', en: 'Integrated Frame & Subframe' },
            text: {
              ru: 'Интегрированный стальной надрамник (12 точек крепления), двойной стеклопакет с защитными решётками.',
              kk: 'Интеграцияланған болат қосымша рама (12 бекіту нүктесі), қорғаныс торлары бар екі қабатты шыны пакет.',
              en: 'Reinforced steel subframe (12 anchoring points), double-glazed windows with impact security grilles.',
            },
          },
        ],
      },
    ],
    advantages: {
      ru: [
        'Прочность: высокая несущая способность и устойчивость к нагрузкам',
        'Теплоизоляция: эффективное сохранение температуры внутри кузова',
        'Шумоизоляция: снижение уровня шума и вибраций',
        'Защита: устойчивость к коррозии, влаге, перепадам температур',
        'Долговечность: длительный срок службы при минимальных затратах на обслуживание',
      ],
      kk: [
        'Беріктік: жоғары жүк көтергіштік және динамикалық салмаққа төзімділік',
        'Жылу оқшаулау: фургон ішіндегі оңтайлы температураны ұзақ сақтау',
        'Шу оқшаулау: сыртқы шу мен діріл деңгейін айтарлықтай төмендету',
        'Қорғаныс: коррозияға, ылғалға және температураның күрт ауысуына жоғары төзімділік',
        'Ұзақ қызмет мерзімі: ең аз техникалық қызмет көрсету шығындарымен сенімді жұмыс',
      ],
      en: [
        'Structural strength: high load-bearing capacity and vibration resistance',
        'Thermal insulation: efficient cabin temperature preservation in all seasons',
        'Acoustic insulation: effective suppression of external noise and harsh vibrations',
        'Environmental shielding: resistance to corrosion, moisture, and temperature shocks',
        'Longevity: extended operational lifespan with low total maintenance costs',
      ],
    },
  },

  'radio-communication': {
    tagline: {
      ru: 'Высокая надежность, безопасность и совместимость с системами управления.',
      kk: 'Жоғары сенімділік, қауіпсіздік және басқару жүйелерімен толық үйлесімділік.',
      en: 'High reliability, security, and seamless interoperability.',
    },
    lead: {
      ru: 'Современные решения профессиональной радиосвязи для надежного обмена голосом и данными в любых условиях.',
      kk: 'Кез келген жағдайда дауыс пен деректерді сенімді алмасуға арналған заманауи кәсіби радиобайланыс шешімдері.',
      en: 'Mission-critical professional radio communication solutions ensuring uninterrupted voice and data exchange.',
    },
    blocks: [
      {
        title: { ru: 'Технологии радиосвязи', kk: 'Радиобайланыс технологиялары', en: 'Radio Communication Standards' },
        items: [
          {
            title: { ru: 'DMR Tier II/III', kk: 'DMR Tier II/III', en: 'DMR Tier II/III' },
            text: {
              ru: 'Цифровая радиосвязь с высокой помехоустойчивостью, голосовой связью и передачей данных. Поддержка TDMA и расширенных сервисов.',
              kk: 'Кедергіге жоғары төзімділігі, дауыстық байланысы және деректер беруі бар цифрлық радиобайланыс. TDMA және кеңейтілген қызметтерді қолдау.',
              en: 'Noise-resistant digital radio with voice clarity and data capability. Supports TDMA and trunking features.',
            },
          },
          {
            title: { ru: 'TETRA', kk: 'TETRA', en: 'TETRA Standard' },
            text: {
              ru: 'Профессиональная мобильная радиосвязь с высокой степенью безопасности, групповой связью и приоритетными вызовами.',
              kk: 'Қауіпсіздігі жоғары, топтық байланысы және басым шақырулары бар кәсіби мобильді радиобайланыс стандарты.',
              en: 'Public safety mobile radio standard featuring encrypted group calls and emergency call prioritization.',
            },
          },
          {
            title: { ru: 'APCO-25', kk: 'APCO-25', en: 'APCO-25 (P25)' },
            text: {
              ru: 'Цифровой стандарт общественной безопасности для критически важных коммуникаций с шифрованием и высокой надежностью.',
              kk: 'Шифрлауы және жоғары сенімділігі бар аса маңызды коммуникацияларға арналған қоғамдық қауіпсіздік цифрлық стандарты.',
              en: 'Interoperable digital standard for public safety communications with hardware-grade encryption.',
            },
          },
          {
            title: { ru: 'NXDN', kk: 'NXDN', en: 'NXDN Standard' },
            text: {
              ru: 'Цифровой стандарт радиосвязи с эффективным использованием частотного ресурса и высокой четкостью передачи голоса.',
              kk: 'Жиілік ресурсын тиімді пайдаланатын және дауысты жоғары сапада жеткізетін цифрлық радиобайланыс стандарты.',
              en: 'Narrowband digital radio protocol optimizing spectrum utilization with crystal-clear voice fidelity.',
            },
          },
          {
            title: { ru: 'КВ и УКВ радиосвязь', kk: 'ҚВ және УКВ радиобайланысы', en: 'HF & VHF/UHF Communications' },
            text: {
              ru: 'Надежная связь на коротких и дальних расстояниях. Поддержка мобильных, стационарных и базовых радиостанций, ретрансляторов и антенно-фидерных систем.',
              kk: 'Жақын және алыс қашықтықтағы сенімді байланыс. Мобильді, стационарлық станцияларды, ретрансляторларды және антенна-фидерлік жүйелерді қолдау.',
              en: 'Long-haul and tactical line-of-sight connectivity. Base stations, mobile rigs, repeaters, and antenna systems.',
            },
          },
          {
            title: { ru: 'Диспетчерские системы управления', kk: 'Диспетчерлік басқару жүйелері', en: 'Dispatch Management Systems' },
            text: {
              ru: 'Централизованное управление радиосетью, мониторинг, запись переговоров и интеграция с внешними системами.',
              kk: 'Радиожеліні орталықтандырылған басқару, мониторинг, келіссөздерді жазу және сыртқы жүйелермен интеграциялау.',
              en: 'Centralized radio fleet management, geo-tracking, voice logging, and enterprise integration.',
            },
          },
        ],
      },
      {
        title: { ru: 'Области применения', kk: 'Қолдану салалары', en: 'Industry Applications' },
        items: [
          { title: { ru: 'Промышленность', kk: 'Өнеркәсіп', en: 'Heavy Industry' } },
          { title: { ru: 'Нефтегазовый сектор', kk: 'Мұнай-газ секторы', en: 'Oil & Gas Sector' } },
          { title: { ru: 'Энергетика', kk: 'Энергетика', en: 'Energy & Utilities' } },
          { title: { ru: 'Транспорт и логистика', kk: 'Көлік және логистика', en: 'Transport & Logistics' } },
          { title: { ru: 'Аэропорты и авиация', kk: 'Әуежайлар мен авиация', en: 'Airports & Aviation' } },
          { title: { ru: 'Экстренные службы', kk: 'Шұғыл қызметтер', en: 'Emergency Services' } },
        ],
      },
      {
        title: { ru: 'Оборудование радиосвязи', kk: 'Радиобайланыс жабдықтары', en: 'Radio Fleet Hardware' },
        items: [
          { title: { ru: 'Портативные радиостанции', kk: 'Тасымалданатын радиостанциялар', en: 'Handheld Two-Way Radios' } },
          { title: { ru: 'Мобильные радиостанции', kk: 'Көліктік радиостанциялар', en: 'Mobile / In-Vehicle Radios' } },
          { title: { ru: 'Базовые станции', kk: 'Базалық станциялар', en: 'Fixed Base Stations' } },
          { title: { ru: 'Ретрансляторы', kk: 'Ретрансляторлар', en: 'Radio Repeaters' } },
          { title: { ru: 'Диспетчерские консоли', kk: 'Диспетчерлік консольдер', en: 'Dispatch Consoles' } },
        ],
      },
    ],
    advantages: {
      ru: [
        'Цифровая передача голоса и данных высокого качества',
        'Надежное шифрование и защита информации',
        'Покрытие на больших расстояниях (КВ/УКВ)',
        'IP-интеграция и мультисетевое взаимодействие',
        'Централизованное управление и диспетчеризация',
        'Высокая помехоустойчивость и надежность',
        'Масштабируемость и гибкость систем',
        'Отказоустойчивость и резервирование',
        'Круглосуточная эксплуатация 24/7',
      ],
      kk: [
        'Жоғары сапалы дауыс пен цифрлық деректерді беру',
        'Сенімді шифрлау және ақпаратты кешенді қорғау',
        'Ұзақ қашықтықтарда тұрақты байланыс аймағы (ҚВ/УКВ)',
        'IP-интеграция және желіаралық байланыс мүмкіндігі',
        'Орталықтандырылған басқару және жедел диспетчерлеу',
        'Кедергілерге жоғары төзімділік пен үздіксіз сенімділік',
        'Жүйелердің ауқымдылығы мен бейімделгіштігі',
        'Іркіліссіз жұмыс және жүйелік резервтеу',
        '24/7 тәулік бойы үздіксіз пайдалану',
      ],
      en: [
        'High-definition digital voice and data communications',
        'Robust military-grade encryption and protocol security',
        'Extensive geographic coverage via HF/VHF repeaters',
        'IP interoperability and multi-network cross-patching',
        'Centralized fleet control and intuitive dispatching',
        'Exceptional interference resilience in noisy RF environments',
        'Flexible and modular system scalability',
        'Full hardware redundancy and zero-downtime failover',
        '24/7 non-stop industrial-grade reliability',
      ],
    },
  },

  'situation-centers': {
    tagline: {
      ru: 'Единое информационное пространство для принятия решений.',
      kk: 'Шешімдер қабылдауға арналған бірыңғай ақпараттық кеңістік.',
      en: 'Unified information space for mission-critical decision making.',
    },
    lead: {
      ru: 'Современные ситуационные центры для сбора, анализа и визуализации информации в режиме реального времени, обеспечивающие поддержку принятия решений и эффективное управление в любой сфере.',
      kk: 'Кез келген салада тиімді басқару мен шешім қабылдауды қолдайтын, нақты уақыт режимінде ақпаратты жинау, талдау және визуалдауға арналған заманауи жағдаяттық орталықтар.',
      en: 'State-of-the-art situational centers for real-time information aggregation, analytics, and visualization enabling rapid executive decisions.',
    },
    blocks: [
      {
        title: { ru: 'Основные функции', kk: 'Негізгі функциялар', en: 'Core Capabilities' },
        items: [
          {
            title: { ru: 'Сбор данных', kk: 'Деректерді жинау', en: 'Data Ingestion' },
            text: {
              ru: 'Интеграция данных из различных источников в режиме реального времени.',
              kk: 'Әртүрлі ақпарат көздерінен нақты уақыт режимінде мәліметтерді біріктіру.',
              en: 'Real-time multi-source data feeds integration.',
            },
          },
          {
            title: { ru: 'Мониторинг и визуализация', kk: 'Мониторинг және визуализация', en: 'Monitoring & Visualization' },
            text: {
              ru: 'Отображение информации на видеостенах, интерактивных панелях и рабочих местах.',
              kk: 'Ақпаратты бейнеқабырғаларда, интерактивті панельдерде және жұмыс орындарында көрсету.',
              en: 'High-resolution display onto video walls, touch panels, and operator consoles.',
            },
          },
          {
            title: { ru: 'Аналитика и прогнозирование', kk: 'Талдау және болжау', en: 'Analytics & Forecasting' },
            text: {
              ru: 'Анализ больших данных, построение сценариев и прогнозирование событий.',
              kk: 'Үлкен деректерді талдау, сценарийлерді құру және оқиғаларды болжау.',
              en: 'Big data analytics, AI scenario modeling, and predictive simulations.',
            },
          },
          {
            title: { ru: 'Поддержка принятия решений', kk: 'Шешім қабылдауды қолдау', en: 'Decision Support' },
            text: {
              ru: 'Оперативное оповещение, сценарии реагирования и контроль исполнения задач.',
              kk: 'Жедел хабарлау, ден қою сценарийлері және тапсырмалардың орындалуын бақылау.',
              en: 'Automated SOP response workflows and executive action tracking.',
            },
          },
          {
            title: { ru: 'Совместная работа', kk: 'Бірлескен жұмыс', en: 'Collaboration' },
            text: {
              ru: 'Организация взаимодействия между службами и подразделениями.',
              kk: 'Қызметтер мен бөлімшелер арасындағы келісілген өзара іс-қимылды ұйымдастыру.',
              en: 'Inter-agency communication and cross-departmental coordination.',
            },
          },
          {
            title: { ru: 'Безопасность и надежность', kk: 'Қауіпсіздік пен сенімділік', en: 'Security & Redundancy' },
            text: {
              ru: 'Защита данных, резервирование и отказоустойчивость всех компонентов системы.',
              kk: 'Деректерді қорғау, барлық жүйелік компоненттерді резервтеу және іркіліссіздік.',
              en: 'Encrypted telemetry, automated failover, and high resilience.',
            },
          },
        ],
      },
      {
        title: { ru: 'Ключевые компоненты', kk: 'Негізгі компоненттер', en: 'Key Architecture Components' },
        items: [
          { title: { ru: 'Видеостены и дисплеи', kk: 'Бейнеқабырғалар мен дисплейлер', en: 'Video Walls & Ultra-HD Displays' } },
          { title: { ru: 'Рабочие места операторов', kk: 'Операторлардың жұмыс орындары', en: 'Ergonomic Operator Consoles' } },
          { title: { ru: 'Серверная инфраструктура', kk: 'Серверлік инфрақұрылым', en: 'High-Density Server Infrastructure' } },
          { title: { ru: 'Сетевое оборудование', kk: 'Желілік жабдықтар', en: 'Backbone Network Hardware' } },
          { title: { ru: 'Коммуникационное оборудование', kk: 'Коммуникациялық жабдықтар', en: 'Unified Communication Hardware' } },
          { title: { ru: 'Системы безопасности видеонаблюдения', kk: 'Бейнебақылау және қауіпсіздік жүйелері', en: 'Surveillance & Security Systems' } },
        ],
      },
    ],
    advantages: {
      ru: [
        'Оперативность реагирования',
        'Повышение эффективности управления',
        'Масштабируемость и гибкость решений',
        'Высокая надежность и отказоустойчивость',
        'Единое информационное пространство',
        'Интеграция с любыми системами',
        'Поддержка 24/7 и техническое сопровождение',
        'Защита данных и информационная безопасность',
      ],
      kk: [
        'Оқыс оқиғаларға жедел ден қою',
        'Басқару шешімдерінің тиімділігін арттыру',
        'Шешімдердің ауқымдылығы мен икемділігі',
        'Жоғары сенімділік және ақауларға төзімділік',
        'Бірыңғай ақпараттық кеңістік құру',
        'Кез келген сыртқы жүйелермен интеграция',
        '24/7 тәулік бойғы қолдау және сервистік сүйемелдеу',
        'Деректерді қорғау және ақпараттық қауіпсіздік',
      ],
      en: [
        'Immediate operational response time',
        'Enhanced management and oversight efficiency',
        'Flexible and modular architecture scalability',
        'Continuous fault tolerance and hardware redundancy',
        'Single pane of glass unified information space',
        'Seamless integration with third-party software and sensors',
        '24/7 technical assistance and lifecycle support',
        'Rigorous data privacy and cyber defense',
      ],
    },
  },

  'data-centers': {
    tagline: {
      ru: 'Надежная, отказоустойчивая и высокопроизводительная инфраструктура.',
      kk: 'Сенімді, іркіліссіз және жоғары өнімді инфрақұрылым.',
      en: 'Resilient, fault-tolerant, and high-performance infrastructure.',
    },
    lead: {
      ru: 'Современные решения для построения инфраструктуры обработки, хранения и защиты данных любого масштаба.',
      kk: 'Кез келген ауқымдағы деректерді өңдеу, сақтау және қорғау инфрақұрылымын құруға арналған озық шешімдер.',
      en: 'Complete turnkey solutions for building data processing, high-density storage, and infrastructure protection at any scale.',
    },
    blocks: [
      {
        title: { ru: 'Типы решений', kk: 'Шешім түрлері', en: 'Data Center Models' },
        items: [
          {
            title: { ru: 'Модуль ЦОД', kk: 'Модульдік ДӨО', en: 'Modular Data Center' },
            text: {
              ru: 'Готовые модульные решения с высокой степенью заводской готовности и быстрой интеграцией. Масштабируется по мере роста потребностей бизнеса.',
              kk: 'Зауыттық дайындығы жоғары және жедел кіріктірілетін дайын модульдік шешімдер. Бизнестің қажеттіліктеріне қарай оңай кеңейтіледі.',
              en: 'Prefabricated modular facilities with fast on-site integration. Easily scalable as business compute needs grow.',
            },
          },
          {
            title: { ru: 'Контейнерный ЦОД (Huawei)', kk: 'Контейнерлік ДӨО (Huawei)', en: 'Containerized Data Center (Huawei)' },
            text: {
              ru: 'Мобильные контейнерные решения для размещения ИТ-инфраструктуры в любых условиях и локациях. Быстрое развертывание и простота транспортировки.',
              kk: 'Кез келген жағдайда және орындарда АТ-инфрақұрылымын орналастыруға арналған мобильді контейнерлік шешімдер. Жылдам өрістету және тасымалдау жеңілдігі.',
              en: 'Rugged ISO container data centers deployable anywhere. Rapid setup, autonomous climate, and simple logistics.',
            },
          },
          {
            title: { ru: 'Стационарный ЦОД (капитальный)', kk: 'Стационарлық ДӨО (күрделі)', en: 'Stationary Enterprise Data Center' },
            text: {
              ru: 'Капитальные здания и сооружения для размещения критически важной ИТ-инфраструктуры любого масштаба. Максимальная надежность, безопасность и эффективность.',
              kk: 'Кез келген ауқымдағы аса маңызды АТ-инфрақұрылымын орналастыруға арналған күрделі ғимараттар мен құрылыстар. Барынша жоғары сенімділік пен қауіпсіздік.',
              en: 'Capital brick-and-mortar facilities for hosting mission-critical enterprise compute. Tier III/IV compliance and peak efficiency.',
            },
          },
          {
            title: { ru: 'Микро ЦОД', kk: 'Микро ДӨО', en: 'Edge / Micro Data Center' },
            text: {
              ru: 'Компактные решения для размещения ИТ-оборудования в офисах, на производствах и в удаленных филиалах. Оптимально для локальной обработки и хранения данных.',
              kk: 'Кеңселерде, өндірістерде және шалғай филиалдарда АТ-жабдығын орналастыруға арналған ықшам шешімдер. Жергілікті деректерді өңдеуге өте қолайлы.',
              en: 'Compact self-contained edge enclosures for branch offices, factories, and remote sites.',
            },
          },
        ],
      },
    ],
    advantages: {
      ru: [
        'Высокая надежность',
        'Высокая производительность',
        'Масштабируемость и гибкость',
        'Энергоэффективность и оптимизация затрат',
        'Безопасность и соответствие стандартам',
        'Круглосуточная доступность сервисов',
        'Профессиональная поддержка 24/7',
      ],
      kk: [
        'Жоғары сенімділік',
        'Жоғары есептеу өнімділігі',
        'Ауқымдылық пен икемді архитектура',
        'Энергия тиімділігі және пайдалану шығындарын азайту',
        'Қауіпсіздік және халықаралық стандарттарға сәйкестік',
        'Сервистердің тәулік бойғы үздіксіз қолжетімділігі',
        '24/7 кәсіби сервистік қолдау',
      ],
      en: [
        'High reliability and continuous uptime',
        'Exceptional computing and network performance',
        'Modular scalability and architectural flexibility',
        'Energy efficiency (low PUE) and OPEX optimization',
        'Physical and cyber security meeting international standards',
        '24/7 non-stop digital service availability',
        'Professional 24/7 engineering support',
      ],
    },
  },

  'cyber-security': {
    tagline: {
      ru: 'Комплексная защита бизнеса в цифровую эпоху.',
      kk: 'Цифрлық дәуірде бизнесті кешенді қорғау.',
      en: 'Holistic business defense in the digital era.',
    },
    lead: {
      ru: 'Создаем надежную систему кибербезопасности, обеспечивая защиту ваших данных, инфраструктуры и непрерывность бизнес-процессов.',
      kk: 'Деректеріңізді, инфрақұрылымыңызды сенімді қорғайтын және бизнес-процестердің үздіксіздігін қамтамасыз ететін киберқауіпсіздік жүйесін құрамыз.',
      en: 'We engineer end-to-end cybersecurity systems, safeguarding your assets, infrastructure, and enterprise operational continuity.',
    },
    blocks: [
      {
        title: { ru: 'Направления защиты', kk: 'Қорғаныс бағыттары', en: 'Defense Pillars' },
        items: [
          {
            title: { ru: 'Network Security', kk: 'Network Security (Желілік қауіпсіздік)', en: 'Network Security' },
            list: {
              ru: [
                'Межсетевые экраны нового поколения',
                'Системы обнаружения и предотвращения вторжений (IDS/IPS)',
                'Защита от DDoS-атак',
                'Zero Trust и сегментация сети',
              ],
              kk: [
                'Жаңа буын желіаралық қалқандары (NGFW)',
                'Шабуылдарды анықтау және болдырмау жүйелері (IDS/IPS)',
                'DDoS шабуылдарынан сенімді қорғаныс',
                'Zero Trust тұжырымдамасы және желіні сегменттеу',
              ],
              en: [
                'Next-Generation Firewalls (NGFW)',
                'Intrusion Detection and Prevention Systems (IDS/IPS)',
                'Advanced DDoS Mitigation',
                'Zero Trust Architecture & Network Microsegmentation',
              ],
            },
          },
          {
            title: { ru: 'SOC & SIEM', kk: 'SOC және SIEM', en: 'SOC & SIEM' },
            list: {
              ru: [
                'Мониторинг и анализ событий 24/7',
                'Корреляция и выявление инцидентов',
                'Реагирование на угрозы',
                'Отчетность и аналитика',
              ],
              kk: [
                '24/7 оқиғаларды тәулік бойы бақылау және талдау',
                'Оқыс оқиғаларды салыстыру және анықтау',
                'Қауіптерге жедел ден қою',
                'Есеп беру және аналитика',
              ],
              en: [
                '24/7 Security Operations Center monitoring',
                'Automated threat correlation and incident detection',
                'Incident response & threat hunting',
                'Executive compliance reporting and analytics',
              ],
            },
          },
          {
            title: { ru: 'Endpoint Security', kk: 'Endpoint Security (Соңғы нүктелерді қорғау)', en: 'Endpoint Security' },
            list: {
              ru: [
                'Защита рабочих станций и серверов',
                'EDR / XDR и поведенческий анализ',
                'Контроль приложений и устройств',
                'Управление уязвимостями',
              ],
              kk: [
                'Жұмыс станциялары мен серверлерді қорғау',
                'EDR / XDR және мінез-құлықты талдау',
                'Қосымшалар мен құрылғыларды бақылау',
                'Әлсіз тұстарды басқару (Vulnerability Management)',
              ],
              en: [
                'Workstation and server protection',
                'EDR / XDR behavioral threat prevention',
                'Application and peripheral device control',
                'Vulnerability assessment and remediation',
              ],
            },
          },
          {
            title: { ru: 'Identity & Data Protection', kk: 'Тұлға мен деректерді қорғау', en: 'Identity & Data Protection' },
            list: {
              ru: [
                'Управление доступом (IAM, PAM)',
                'Многофакторная аутентификация (MFA)',
                'DLP и защита данных',
                'Резервное копирование и восстановление',
              ],
              kk: [
                'Қолжетімділікті басқару (IAM, PAM)',
                'Көпфакторлы аутентификация (MFA)',
                'DLP және құпия деректердің ағып кетуін болдырмау',
                'Резервтік көшірме жасау және қалпына келтіру',
              ],
              en: [
                'Identity and Privileged Access Management (IAM/PAM)',
                'Multi-Factor Authentication (MFA)',
                'Data Loss Prevention (DLP)',
                'Encrypted backup and rapid disaster recovery',
              ],
            },
          },
        ],
      },
    ],
    advantages: {
      ru: [
        'Комплексная защита бизнеса и данных',
        'Круглосуточный мониторинг и реагирование 24/7',
        'Снижение рисков и финансовых потерь',
        'Соответствие требованиям международных стандартов',
        'Экспертиза и опыт команды сертифицированных специалистов',
      ],
      kk: [
        'Бизнес пен құпия деректерді кешенді қорғау',
        '24/7 тәулік бойы мониторинг және қауіптерге жедел ден қою',
        'Қаржылық шығындар мен операциялық тәуекелдерді барынша азайту',
        'Халықаралық ақпараттық қауіпсіздік стандарттарының талаптарына сәйкестік',
        'Сертификатталған мамандар командасының сараптамасы мен мол тәжірибесі',
      ],
      en: [
        'Comprehensive enterprise data and infrastructure defense',
        'Continuous 24/7 SOC monitoring and incident mitigation',
        'Substantial reduction of business disruption and financial risks',
        'Full compliance with ISO 27001, NIST, and local regulatory standards',
        'Deep expertise of certified cybersecurity architects and engineers',
      ],
    },
  },

  'c-uav-systems': {
    tagline: {
      ru: 'Обнаружение. Идентификация. Перехват. Нейтрализация.',
      kk: 'Анықтау. Сәйкестендіру. Ұстап алу. Бейтараптандыру.',
      en: 'Detect. Identify. Takeover. Neutralize.',
    },
    lead: {
      ru: 'Совместное решение TERJIN и D-Fend Solutions обеспечивает непрерывный мониторинг воздушного пространства, точное распознавание угроз и безопасную нейтрализацию БПЛА.',
      kk: 'TERJIN және D-Fend Solutions бірлескен шешімі әуе кеңістігін үздіксіз бақылауды, қауіптерді дәл тануды және БПЛА-ларды қауіпсіз бейтараптандыруды қамтамасыз етеді.',
      en: 'Integrated solution by TERJIN and D-Fend Solutions delivers 24/7 continuous airspace scanning, precise threat classification, and safe drone neutralization.',
    },
    specs: [
      {
        label: { ru: 'Дальность обнаружения радара', kk: 'Радардың анықтау қашықтығы', en: 'Radar detection range' },
        value: { ru: 'до 10 км', kk: '10 км-ге дейін', en: 'up to 10 km' },
      },
      {
        label: { ru: 'Режим работы', kk: 'Жұмыс режимі', en: 'Operating mode' },
        value: { ru: '24/7', kk: '24/7', en: '24/7' },
      },
      {
        label: { ru: 'Приоритетный метод', kk: 'Басым әдіс', en: 'Primary method' },
        value: {
          ru: 'безопасный перехват (D-Fend)',
          kk: 'қауіпсіз ұстап алу (D-Fend)',
          en: 'safe cyber takeover (D-Fend)',
        },
      },
      {
        label: { ru: 'Резервный сценарий', kk: 'Резервтік сценарий', en: 'Backup scenario' },
        value: {
          ru: 'подавление каналов (TERJIN)',
          kk: 'арналарды басу (TERJIN)',
          en: 'jamming channels (TERJIN)',
        },
      },
    ],
    blocks: [
      {
        title: { ru: 'Система обнаружения TERJIN', kk: 'TERJIN анықтау жүйесі', en: 'TERJIN Detection System' },
        items: [
          {
            title: { ru: 'Радар TERJIN', kk: 'TERJIN радары', en: 'TERJIN Radar' },
            text: {
              ru: 'Круглосуточный мониторинг периметра и дальних подступов (до 10 км).',
              kk: 'Периметрді және алыс шептерді тәулік бойы бақылау (10 км-ге дейін).',
              en: '24/7 surveillance of perimeter and long-range airspace approaches up to 10 km.',
            },
          },
          {
            title: { ru: 'RF-сенсоры TERJIN', kk: 'TERJIN RF-сенсорлары', en: 'TERJIN RF Sensors' },
            text: {
              ru: 'Пассивное обнаружение и анализ радиочастотных сигналов дронов.',
              kk: 'Дрондардың радиожиілік сигналдарын пассивті анықтау және талдау.',
              en: 'Passive detection, RF spectrum fingerprinting, and drone signal decoding.',
            },
          },
          {
            title: { ru: 'Оптико-электронные системы', kk: 'Оптикалық-электрондық жүйелер', en: 'Electro-Optical / IR Cameras' },
            text: {
              ru: 'Идентификация целей, сопровождение и видеоподтверждение угроз.',
              kk: 'Нысаналарды сәйкестендіру, қадағалау және қауіптерді бейне-рарастау.',
              en: 'Visual target verification, automated tracking, and payload inspection.',
            },
          },
          {
            title: { ru: 'Центр управления', kk: 'Басқару орталығы', en: 'Command & Control' },
            text: {
              ru: 'Обработка данных со всех сенсоров, анализ угроз, принятие решений и управление системой в реальном времени.',
              kk: 'Барлық сенсорлардан деректерді өңдеу, қауіптерді талдау және нақты уақыт режимінде жүйені басқару.',
              en: 'Multi-sensor data fusion, threat scoring, and real-time countermeasure control.',
            },
          },
        ],
      },
      {
        title: { ru: 'Два способа нейтрализации', kk: 'Бейтараптандырудың екі тәсілі', en: 'Dual Neutralization Capabilities' },
        intro: {
          ru: 'Единая платформа управления интегрирует данные от всех подсистем, оценивает обстановку и выбирает оптимальный сценарий реагирования.',
          kk: 'Бірыңғай басқару платформасы барлық кіші жүйелердің деректерін біріктіреді, жағдайды бағалайды және оңтайлы ден қою сценарийін таңдайды.',
          en: 'A unified C2 software platform fuses telemetry from all sensors, evaluates threat vectors, and coordinates proportional response.',
        },
        items: [
          {
            title: {
              ru: 'D-Fend Solutions: приоритетный метод',
              kk: 'D-Fend Solutions: негізгі басым әдіс',
              en: 'D-Fend Solutions: Primary Method',
            },
            text: {
              ru: 'RF Cyber Takeover — безопасный перехват управления БПЛА.',
              kk: 'RF Cyber Takeover — БПЛА басқаруын қауіпсіз тартып алу.',
              en: 'RF Cyber Takeover — safe, non-destructive drone control takeover.',
            },
            list: {
              ru: [
                'Перехват управления по радиоканалу без глушения',
                'Контролируемая посадка или возврат к точке взлета',
                'Без помех для окружающей инфраструктуры',
                'Работает в сложных условиях и без прямой видимости',
                'Эффективен против большинства коммерческих дронов',
              ],
              kk: [
                'Кедергі жасамай радиоарна арқылы басқаруды қолға алу',
                'Бақыланатын қауіпсіз қондыру немесе ұшып шыққан нүктесіне қайтару',
                'Айналадағы байланыс пен инфрақұрылымға кедергі келтірмейді',
                'Тікелей көрінбейтін күрделі жағдайларда да мінсіз жұмыс істейді',
                'Көптеген коммерциялық және қолдан жасалған дрондарға қарсы тиімді',
              ],
              en: [
                'Non-jamming protocol-based radio control takeover',
                'Safe designated zone landing or return to home point',
                'Zero interference with civilian GPS, comms, or airport radars',
                'Operates beyond visual line of sight and in dense urban clutter',
                'Proven against the widest array of commercial drone models',
              ],
            },
          },
          {
            title: {
              ru: 'TERJIN: резервный сценарий',
              kk: 'TERJIN: резервтік сценарий',
              en: 'TERJIN: Secondary Mitigation',
            },
            text: {
              ru: 'Подавление каналов управления и связи. Применяется, если безопасный перехват невозможен или угроза массовая / критическая.',
              kk: 'Басқару және байланыс арналарын басу. Қауіпсіз тартып алу мүмкін болмағанда немесе жаппай қауіп кезінде қолданылады.',
              en: 'RF jamming of control and navigation channels for hostile swarms or non-compliant targets.',
            },
            list: {
              ru: [
                'Широкополосное подавление управляющих и навигационных каналов',
                'Эффективно при рое дронов или устойчивых к перехвату целях',
                'Мгновенное воздействие на большой сектор',
                'Не требует участия оператора (в автоматическом режиме)',
              ],
              kk: [
                'Басқару және навигациялық арналарды кең жолақты басу',
                'Дрондар үйіріне немесе ұстап алуға төзімді нысаналарға қарсы тиімді',
                'Үлкен қорғаныс секторына лезде толық әсер ету',
                'Оператордың қатысуынсыз автоматты режимде жұмыс істей алады',
              ],
              en: [
                'Broadband neutralization of ISM control and GNSS navigation bands',
                'Highly effective against drone swarms and autonomous targets',
                'Instantaneous directional or omnidirectional zone denial',
                'Autonomous triggering mode without operator delay',
              ],
            },
          },
        ],
      },
      {
        title: {
          ru: 'Защита объектов любой сложности',
          kk: 'Кез келген күрделіліктегі нысандарды қорғау',
          en: 'Critical Infrastructure Protection',
        },
        items: [
          { title: { ru: 'Аэропорты', kk: 'Әуежайлар', en: 'International Airports' } },
          { title: { ru: 'Нефтегазовые объекты', kk: 'Мұнай-газ нысандары', en: 'Oil & Gas Facilities' } },
          { title: { ru: 'Энергетическая инфраструктура', kk: 'Энергетикалық инфрақұрылым', en: 'Power Grids & Generation' } },
          { title: { ru: 'Промышленные предприятия', kk: 'Өнеркәсіптік кәсіпорындар', en: 'Manufacturing Plants' } },
          { title: { ru: 'Стадионы и массовые мероприятия', kk: 'Стадиондар мен бұқаралық шаралар', en: 'Stadiums & Public Events' } },
          { title: { ru: 'Государственные учреждения', kk: 'Мемлекеттік мекемелер', en: 'Government Facilities' } },
        ],
      },
    ],
    scheme: {
      title: { ru: 'Как работает система', kk: 'Жүйе қалай жұмыс істейді', en: 'System Operational Workflow' },
      steps: [
        {
          title: { ru: 'Мониторинг периметра', kk: 'Периметрді бақылау', en: 'Perimeter Scanning' },
          text: {
            ru: 'Радар и RF-сенсоры непрерывно сканируют воздушное пространство и обнаруживают БПЛА.',
            kk: 'Радар мен RF-сенсорлар әуе кеңістігін үздіксіз сканерлеп, БПЛА-ларды дер кезінде анықтайды.',
            en: 'Radar and RF sensors continuously scan 360° airspace to detect incoming drones.',
          },
        },
        {
          title: { ru: 'Обнаружение и идентификация', kk: 'Анықтау және сәйкестендіру', en: 'Detection & Classification' },
          text: {
            ru: 'Система определяет тип БПЛА, координаты, траекторию, направление полета, скорость и уровень угрозы.',
            kk: 'Жүйе дронның түрін, координаталарын, траекториясын, ұшу бағытын, жылдамдығын және қауіп деңгейін анықтайды.',
            en: 'The system identifies drone make/model, telemetry, flight trajectory, velocity, and threat tier.',
          },
        },
        {
          title: { ru: 'Оповещение оператора', kk: 'Операторды хабардар ету', en: 'Operator Alert' },
          text: {
            ru: 'Информация мгновенно поступает на АРМ оператора. Отображаются карта, маршрут, координаты и статус угрозы.',
            kk: 'Ақпарат бірден оператордың жұмыс орнына түседі. Карта, бағыт, координаталар және қауіп мәртебесі көрсетіледі.',
            en: 'Threat data immediately surfaces on C2 consoles displaying live map, flight path, and telemetry.',
          },
        },
        {
          title: { ru: 'Выбор сценария реагирования', kk: 'Ден қою сценарийін таңдау', en: 'Countermeasure Selection' },
          text: {
            ru: 'Оператор выбирает сценарий или система действует автоматически в зависимости от уровня угрозы.',
            kk: 'Оператор сценарийді таңдайды немесе жүйе қауіп деңгейіне қарай автоматты түрде әрекет етеді.',
            en: 'The operator selects the action rule or the automated defense system triggers programmed protocols.',
          },
        },
        {
          title: { ru: 'Нейтрализация угрозы', kk: 'Қауіпті бейтараптандыру', en: 'Threat Neutralization' },
          text: {
            ru: 'Система выполняет нейтрализацию одним из доступных способов в зависимости от ситуации.',
            kk: 'Жүйе жағдайға байланысты қолжетімді әдістердің бірімен дронды сәтті бейтараптандырады.',
            en: 'The system neutralizes the rogue drone via cyber takeover or targeted electronic mitigation.',
          },
        },
      ],
    },
    advantages: {
      ru: [
        'Круглосуточный мониторинг воздушного пространства',
        'Высокая точность обнаружения и классификации',
        'Оптико-электронная идентификация и сопровождение',
        'Безопасный перехват управления без помех',
        'Интеграция всех подсистем в единую C2 платформу',
        'Надежная защита объектов любой сложности',
      ],
      kk: [
        'Әуе кеңістігін тәулік бойы үздіксіз бақылау',
        'Анықтау мен сәйкестендірудің аса жоғары дәлдігі',
        'Оптикалық-электрондық тану және нысананы автоматты ілестіру',
        'Байланысқа кедергісіз қауіпсіз кибер-ұстап алу',
        'Барлық кіші жүйелердің бірыңғай C2 платформасына кірігуі',
        'Кез келген күрделіліктегі нысандарды сенімді қорғау',
      ],
      en: [
        '24/7 autonomous airspace surveillance',
        'High-precision multi-sensor target detection',
        'Electro-optical classification and auto-tracking',
        'Safe cyber takeover without collateral RF jamming',
        'Unified Command & Control (C2) software integration',
        'Proven defense for high-risk critical infrastructure',
      ],
    },
  },
};
