// lib/mappers.ts
import type { UICard } from '~/types/common';
import type { Article } from '../types/strapi';
import { getStrapiMedia } from './utils';

export function mapArticlesToCards(articles: Article[]): UICard[] {
  return articles.map((a) => {
    const { seo, Hero, preview, tags } = a.attributes;

    const firstTag = tags?.data?.[0] ?? null;
    const image = getStrapiMedia(
      preview?.data?.attributes?.formats?.small?.url ??
      preview?.data?.attributes?.url
    );

    return {
      id: a.id,
      title: Hero?.title ?? seo?.title ?? `Article #${a.id}`,
      description: Hero?.description ?? seo?.description,
      image,
      href: `/articles/${seo?.slug ?? a.id}`,
      category: firstTag
        ? {
            name: firstTag.attributes.name,
            slug: firstTag.attributes.slug,
          }
        : null,
    };
  });
}
