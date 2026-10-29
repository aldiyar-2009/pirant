# PIRANT Kazakhstan — сайт

Статический сайт: Vite + React 18 + TypeScript + Tailwind. Сервера и базы данных нет — всё содержимое лежит в исходниках и попадает в сборку.

## Где что лежит

- `src/data/mockData.ts` — контакты, офисы, направления (карточки), партнёры, новости, цифры.
- `src/data/servicesContent.ts` — содержимое страниц направлений `/services/:id`.
- `src/store/seed.ts` — каталог спецмашин: категории и модели.
- `src/assets/` — изображения, логотипы партнёров, схемы. В данных путь пишется от этой папки: `/images/kshm-main.webp`, `/partners/cisco.png`.
- `public/documents/` — файлы для скачивания (лицензия).
- `src/i18n/` — переводы интерфейса и содержимого (ru / kk / en).

Чтобы изменить текст или картинку — правьте эти файлы и пересоберите сайт.

## Заявки

Формы «Оставить заявку» не отправляют данные на сервер: открывается WhatsApp компании с готовым сообщением (номер — `contacts.whatsapp` в `mockData.ts`). Если номер WhatsApp пустой, открывается почтовая программа с письмом на `contacts.email`.

## Запуск

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # сборка в dist/
npm run preview   # просмотр сборки
```

## Публикация

`dist/` — обычные статические файлы, подойдёт любой хостинг (Vercel, Netlify, nginx). Сайт — SPA, поэтому все адреса нужно отдавать через `index.html`: для Vercel это уже настроено в `vercel.json`, для Netlify — в `public/_redirects`, для nginx — `try_files $uri /index.html;`.
