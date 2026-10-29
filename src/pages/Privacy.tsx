import PageHead from '../components/PageHead';
import { useLang } from '../i18n/LanguageContext';
import { useContacts } from '../store/hooks';
import type { Localized } from '../types';

/** БИН оператора персональных данных (совпадает со страницей «Контакты») */
const BIN = '050140010306';
const UPDATED = { ru: 'Редакция от 30 октября 2026 г.', kk: '2026 жылғы 30 қазандағы редакция', en: 'Version of 30 October 2026' };

/** p — абзацы перед списком, li — список, after — абзац после списка */
type Section = { h: Localized; p?: Localized[]; li?: Localized[]; after?: Localized };

const SECTIONS: Section[] = [
  {
    h: { ru: '1. Общие положения', kk: '1. Жалпы ережелер', en: '1. General provisions' },
    p: [
      {
        ru: 'Настоящая Политика конфиденциальности определяет порядок сбора, обработки и защиты персональных данных посетителей сайта. Политика разработана в соответствии с Законом Республики Казахстан от 21 мая 2013 года № 94-V «О персональных данных и их защите».',
        kk: 'Осы Құпиялылық саясаты сайтқа кірушілердің дербес деректерін жинау, өңдеу және қорғау тәртібін айқындайды. Саясат Қазақстан Республикасының 2013 жылғы 21 мамырдағы № 94-V «Дербес деректер және оларды қорғау туралы» Заңына сәйкес әзірленді.',
        en: 'This Privacy Policy sets out how personal data of website visitors is collected, processed and protected. It has been prepared in accordance with Law of the Republic of Kazakhstan No. 94-V of 21 May 2013 "On Personal Data and Their Protection".',
      },
      {
        ru: 'Отправляя заявку на сайте и отмечая согласие, вы подтверждаете, что ознакомились с Политикой и согласны на обработку ваших персональных данных на её условиях.',
        kk: 'Сайтта өтінім жіберіп, келісім белгісін қою арқылы сіз Саясатпен танысқаныңызды және дербес деректеріңізді оның шарттарында өңдеуге келісетініңізді растайсыз.',
        en: 'By submitting a request on the website and ticking the consent box, you confirm that you have read this Policy and agree to the processing of your personal data on its terms.',
      },
    ],
  },
  {
    h: { ru: '2. Какие данные мы собираем', kk: '2. Біз қандай деректер жинаймыз', en: '2. What data we collect' },
    p: [{ ru: 'Только те данные, которые вы сами указываете в форме заявки:', kk: 'Тек өтінім нысанында өзіңіз көрсеткен деректер:', en: 'Only the data you provide yourself in the request form:' }],
    li: [
      { ru: 'имя;', kk: 'аты-жөні;', en: 'name;' },
      { ru: 'номер телефона;', kk: 'телефон нөмірі;', en: 'phone number;' },
      { ru: 'название компании (по желанию);', kk: 'компания атауы (қалауыңыз бойынша);', en: 'company name (optional);' },
      { ru: 'текст сообщения и выбранное направление (по желанию);', kk: 'хабарлама мәтіні және таңдалған бағыт (қалауыңыз бойынша);', en: 'message text and selected service area (optional);' },
      { ru: 'адрес страницы, с которой отправлена заявка.', kk: 'өтінім жіберілген беттің мекенжайы.', en: 'the page from which the request was sent.' },
    ],
  },
  {
    h: { ru: '3. Цели обработки', kk: '3. Өңдеу мақсаттары', en: '3. Purposes of processing' },
    li: [
      { ru: 'связаться с вами по вашей заявке и ответить на вопросы;', kk: 'өтініміңіз бойынша сізбен байланысу және сұрақтарға жауап беру;', en: 'to contact you about your request and answer your questions;' },
      { ru: 'подготовить коммерческое предложение.', kk: 'коммерциялық ұсыныс дайындау.', en: 'to prepare a commercial proposal.' },
    ],
    after: { ru: 'Мы не используем ваши данные для рекламных рассылок и не продаём их.', kk: 'Біз деректеріңізді жарнамалық таратылымдар үшін пайдаланбаймыз және оларды сатпаймыз.', en: 'We do not use your data for marketing mailings and do not sell it.' },
  },
  {
    h: { ru: '4. Как передаётся заявка', kk: '4. Өтінім қалай жіберіледі', en: '4. How your request is sent' },
    p: [
      {
        ru: 'Сайт не хранит введённые данные: после нажатия «Отправить» открывается WhatsApp (или почтовая программа) с подготовленным сообщением, и заявка уходит нам только после того, как вы сами отправите это сообщение.',
        kk: 'Сайт енгізілген деректерді сақтамайды: «Жіберу» батырмасын басқаннан кейін дайындалған хабарламасы бар WhatsApp (немесе пошта бағдарламасы) ашылады, және өтінім бізге сіз осы хабарламаны өзіңіз жібергеннен кейін ғана түседі.',
        en: 'The website does not store the data you enter: after you click "Send", WhatsApp (or your email app) opens with a prepared message, and the request reaches us only once you send that message yourself.',
      },
      {
        ru: 'Сообщение передаётся через сервис WhatsApp (Meta Platforms) или вашего почтового провайдера и обрабатывается ими в соответствии с их политиками конфиденциальности. Полученные заявки хранятся у нас до достижения целей обработки, но не дольше 3 лет. Вы можете потребовать удалить их раньше (см. раздел 6).',
        kk: 'Хабарлама WhatsApp (Meta Platforms) сервисі немесе сіздің пошта провайдеріңіз арқылы беріледі және олардың құпиялылық саясаттарына сәйкес өңделеді. Алынған өтінімдер бізде өңдеу мақсаттарына жеткенге дейін, бірақ 3 жылдан аспайтын мерзімде сақталады. Оларды ертерек жоюды талап ете аласыз (6-бөлімді қараңыз).',
        en: 'The message is transmitted via WhatsApp (Meta Platforms) or your email provider and is processed by them under their own privacy policies. Requests we receive are kept until the purposes of processing are achieved, but no longer than 3 years. You may request earlier deletion (see section 6).',
      },
      {
        ru: 'Мы не передаём ваши персональные данные третьим лицам, за исключением случаев, прямо предусмотренных законодательством Республики Казахстан (например, по законному запросу государственных органов).',
        kk: 'Біз сіздің дербес деректеріңізді үшінші тұлғаларға бермейміз, Қазақстан Республикасының заңнамасында тікелей көзделген жағдайларды қоспағанда (мысалы, мемлекеттік органдардың заңды сұрауы бойынша).',
        en: 'We do not disclose your personal data to third parties, except where expressly required by the laws of the Republic of Kazakhstan (for example, upon a lawful request from public authorities).',
      },
    ],
  },
  {
    h: { ru: '5. Cookie и сторонние сервисы', kk: '5. Cookie және бөгде сервистер', en: '5. Cookies and third-party services' },
    p: [
      {
        ru: 'Сайт не использует cookie и не подключает счётчики посещаемости. В браузере сохраняется только выбранный язык сайта.',
        kk: 'Сайт cookie файлдарын пайдаланбайды және келушілер есептегіштерін қоспайды. Браузерде тек сайттың таңдалған тілі сақталады.',
        en: 'The website does not use cookies and does not include visitor counters. Only your chosen site language is saved in the browser.',
      },
      {
        ru: 'Шрифты и все файлы сайта загружаются с того же адреса, что и сам сайт. Карта Google на странице «Контакты» загружается только после того, как вы нажмёте «Показать карту»: в этот момент Google получает ваш IP-адрес и может установить свои cookie в соответствии со своей политикой конфиденциальности.',
        kk: 'Қаріптер мен сайттың барлық файлдары сайттың өзімен бірдей мекенжайдан жүктеледі. «Байланыс» бетіндегі Google картасы тек «Картаны көрсету» батырмасын басқаннан кейін жүктеледі: осы сәтте Google сіздің IP мекенжайыңызды алады және өз құпиялылық саясатына сәйкес cookie файлдарын орната алады.',
        en: 'Fonts and all website files are served from the same address as the website itself. The Google map on the Contacts page loads only after you click "Show map"; at that moment Google receives your IP address and may set its own cookies under its privacy policy.',
      },
    ],
  },
  {
    h: { ru: '6. Ваши права', kk: '6. Сіздің құқықтарыңыз', en: '6. Your rights' },
    p: [{ ru: 'В соответствии со статьёй 24 Закона «О персональных данных и их защите» вы вправе:', kk: '«Дербес деректер және оларды қорғау туралы» Заңның 24-бабына сәйкес сіз:', en: 'Under Article 24 of the Law "On Personal Data and Their Protection" you have the right to:' }],
    li: [
      { ru: 'знать, хранятся ли у нас ваши персональные данные, и получить сведения о них;', kk: 'біздің дербес деректеріңізді сақтайтынымызды білуге және олар туралы мәліметтер алуға;', en: 'know whether we hold your personal data and obtain information about it;' },
      { ru: 'требовать изменения и дополнения ваших данных;', kk: 'деректеріңізді өзгертуді және толықтыруды талап етуге;', en: 'request correction and completion of your data;' },
      { ru: 'требовать блокирования или уничтожения ваших данных;', kk: 'деректеріңізді бұғаттауды немесе жоюды талап етуге;', en: 'request blocking or destruction of your data;' },
      { ru: 'отозвать согласие на обработку персональных данных;', kk: 'дербес деректерді өңдеуге келісімді кері қайтарып алуға;', en: 'withdraw your consent to the processing of personal data;' },
      { ru: 'обжаловать наши действия в уполномоченном органе в сфере защиты персональных данных или в суде.', kk: 'біздің әрекеттерімізге дербес деректерді қорғау саласындағы уәкілетті органға немесе сотқа шағымдануға құқылысыз.', en: 'appeal against our actions to the authorised personal data protection body or to a court.' },
    ],
  },
  {
    h: { ru: '7. Как связаться с нами', kk: '7. Бізбен қалай байланысуға болады', en: '7. How to contact us' },
    p: [{
      ru: 'Чтобы воспользоваться своими правами или задать вопрос об обработке данных, напишите нам на электронную почту, указанную ниже, или по почтовому адресу офиса. Мы ответим в сроки, установленные законодательством Республики Казахстан.',
      kk: 'Құқықтарыңызды пайдалану немесе деректерді өңдеу туралы сұрақ қою үшін төменде көрсетілген электрондық поштаға немесе кеңсенің пошта мекенжайына жазыңыз. Біз Қазақстан Республикасының заңнамасында белгіленген мерзімде жауап береміз.',
      en: 'To exercise your rights or ask a question about data processing, write to us at the email address below or to our office address. We will respond within the time limits set by the laws of the Republic of Kazakhstan.',
    }],
  },
  {
    h: { ru: '8. Изменение Политики', kk: '8. Саясатты өзгерту', en: '8. Changes to this Policy' },
    p: [{
      ru: 'Мы можем обновлять Политику. Актуальная редакция всегда опубликована на этой странице; дата редакции указана вверху.',
      kk: 'Біз Саясатты жаңарта аламыз. Өзекті редакция әрқашан осы бетте жарияланады; редакция күні жоғарыда көрсетілген.',
      en: 'We may update this Policy. The current version is always published on this page; the version date is shown at the top.',
    }],
  },
];

export default function Privacy() {
  const { l, t, tr } = useLang();
  const c = useContacts();
  return (
    <>
      <PageHead title={t('privacyPolicy')} sub={l(UPDATED)} />
      <div className="container-site max-w-3xl space-y-8 py-12 text-ink/85">
        {SECTIONS.map((s) => (
          <section key={s.h.ru}>
            <h2 className="text-xl font-bold text-navy">{l(s.h)}</h2>
            {s.p?.map((p) => <p key={p.ru} className="mt-3 leading-relaxed">{l(p)}</p>)}
            {s.li && <ul className="mt-3 list-disc space-y-1.5 pl-6 leading-relaxed">{s.li.map((li) => <li key={li.ru}>{l(li)}</li>)}</ul>}
            {s.after && <p className="mt-3 leading-relaxed">{l(s.after)}</p>}
          </section>
        ))}
        <section className="rounded-xl border border-navy/10 p-5 text-sm">
          <h2 className="font-bold text-navy">{t('companyDetails')}</h2>
          <dl className="mt-3 space-y-2">
            <div className="flex flex-wrap justify-between gap-x-4"><dt className="text-ink/65">{t('legalName')}</dt><dd className="font-semibold text-navy">{t('legalEntity')}</dd></div>
            <div className="flex flex-wrap justify-between gap-x-4"><dt className="text-ink/65">{t('bin')}</dt><dd className="font-semibold text-navy">{BIN}</dd></div>
            {c.email && <div className="flex flex-wrap justify-between gap-x-4"><dt className="text-ink/65">E-mail</dt><dd><a href={`mailto:${c.email}`} className="font-semibold text-brand hover:underline">{c.email}</a></dd></div>}
            {c.offices.map((o) => <div key={o.id} className="flex flex-wrap justify-between gap-x-4"><dt className="text-ink/65">{l(o.city)}</dt><dd className="font-semibold text-navy">{tr(o.address)}</dd></div>)}
          </dl>
        </section>
      </div>
    </>
  );
}
