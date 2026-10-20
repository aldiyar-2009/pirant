import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { clone, uid, slugify, norm, digits, fmtDate, fmtSize, plural } from '../store/utils.js';

describe('Фронтенд утилиты (src/store/utils.ts)', () => {
  it('clone - глубокое клонирование объекта', () => {
    const original = { a: 1, b: { c: 'hello' }, d: [1, 2, 3] };
    const copied = clone(original);

    assert.deepEqual(copied, original);
    assert.notEqual(copied, original);
    assert.notEqual(copied.b, original.b);
  });

  it('uid - генерация строкового ID с заданным префиксом', () => {
    const id1 = uid('news');
    const id2 = uid('news');

    assert.ok(id1.startsWith('news-'));
    assert.ok(id2.startsWith('news-'));
    assert.notEqual(id1, id2);
  });

  it('slugify - транслитерация кириллицы в url-friendly slug', () => {
    assert.equal(slugify('Радиосвязь'), 'radiosvyaz');
    assert.equal(slugify('О компании и партнерах'), 'o-kompanii-i-partnerah');
    assert.equal(slugify('Қазақстан өңірлері'), 'kazakstan-onirleri');
  });

  it('norm - нормализация строки для поиска', () => {
    assert.equal(norm('«ПИРАНТ» (Системы, связи!)'), 'пирант системы связи');
    assert.equal(norm('Елка и ёжик'), 'елка и ежик');
  });

  it('digits - извлечение только цифр из телефонных номеров', () => {
    assert.equal(digits('+7 (727) 355-60-70'), '77273556070');
    assert.equal(digits('abc123def456'), '123456');
    assert.equal(digits(''), '');
  });

  it('fmtDate - форматирование ISO даты', () => {
    const formatted = fmtDate('2026-10-14T09:00:00.000Z');
    assert.match(formatted, /^\d{2}\.\d{2}\.\d{4}$/);
    assert.equal(fmtDate(undefined), '—');
    assert.equal(fmtDate('invalid-date'), '—');
  });

  it('fmtSize - форматирование размеров файлов', () => {
    assert.equal(fmtSize(500), '500 Б');
    assert.equal(fmtSize(2048), '2 КБ');
    assert.equal(fmtSize(5 * 1024 * 1024), '5,0 МБ');
    assert.equal(fmtSize(undefined), '');
  });

  it('plural - правильные склонения числительных в русском языке', () => {
    const forms: [string, string, string] = ['заявка', 'заявки', 'заявок'];
    assert.equal(plural(1, forms), 'заявка');
    assert.equal(plural(2, forms), 'заявки');
    assert.equal(plural(4, forms), 'заявки');
    assert.equal(plural(5, forms), 'заявок');
    assert.equal(plural(11, forms), 'заявок');
    assert.equal(plural(21, forms), 'заявка');
    assert.equal(plural(24, forms), 'заявки');
    assert.equal(plural(25, forms), 'заявок');
  });
});
