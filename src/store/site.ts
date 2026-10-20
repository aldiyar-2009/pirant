import { useSyncExternalStore } from 'react';
import type { Direction, PublicUser, SiteData } from '../types';
import { buildSeed } from './seed';
import { uid } from './utils';

/* ------------------------------------------------------------------ состояние */
const data: SiteData = buildSeed();
const subs = new Set<() => void>();
const emit = () => subs.forEach((f) => f());
const subscribe = (f: () => void) => {
  subs.add(f);
  return () => {
    subs.delete(f);
  };
};

export function initStore() {
  emit();
}

/* ------------------------------------------------------------------ хуки */
export function useSite(): SiteData {
  return useSyncExternalStore(subscribe, () => data);
}
export function useStoreReady(): boolean {
  return true;
}
export function useSession(): PublicUser | null {
  return null;
}
export function useUsers(): PublicUser[] {
  return [];
}

const byOrder = (a: { order: number }, b: { order: number }) => a.order - b.order;

/* ------------------------------------------------------------------ действия */
export const store = {
  /* направления */
  directionsSorted(includeDrafts = false): Direction[] {
    return [...data.directions].filter((d) => includeDrafts || d.published).sort(byOrder);
  },

  /* обращения (сохраняются локально в браузере) */
  async submitInquiry(i: {
    name: string;
    phone: string;
    company: string;
    message: string;
    directionId: string | null;
    page: string;
    website?: string;
  }) {
    if (i.website) return; // honeypot
    try {
      const key = 'pirant_inquiries';
      const list = JSON.parse(localStorage.getItem(key) || '[]');
      list.push({
        ...i,
        id: uid('inq'),
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem(key, JSON.stringify(list));
    } catch {
      // Игнорируем ошибки квоты localStorage
    }
  },
};
