// lib/categories.ts

import type { Article } from "~/types/strapi";

export type TabCategory = {
  value: string; // это system_title
  label: string;
};

export function buildTabCategories(articles: Article[]): TabCategory[] {
  const map = new Map<string, string>();

  for (const article of articles) {
    for (const tag of article.attributes.tags?.data ?? []) {
      const title = tag.attributes.system_title?.trim();
      if (title) {
        map.set(title.toLowerCase(), title); // value = system_title (в нижнем регистре)
      }
    }
  }

  return [
    { value: "all", label: "All" },
    ...Array.from(map, ([value, label]) => ({ value, label })),
  ];
}
