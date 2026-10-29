import type { SiteData } from '../types';
import { buildSeed } from './seed';

/** Содержимое сайта статично и собрано из src/data при сборке — сервер не нужен. */
const data: SiteData = buildSeed();

export function useSite(): SiteData { return data; }
