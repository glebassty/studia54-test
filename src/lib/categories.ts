import type { Article } from '../types/strapi';

export type TabCategory = { value: string; label: string };

export function buildTabCategories(articles: Article[]): TabCategory[] {
  const map = new Map<string, string>();
  for (const a of articles) {
    for (const tag of a.attributes.tags?.data ?? []) {
      map.set(tag.attributes.slug, tag.attributes.name);
    }
  }

  // Если хочешь «All» первым:
  return [
    { value: 'all', label: 'All' },
    ...Array.from(map, ([slug, name]) => ({ value: slug, label: name })),
  ];
}
