
import type { UICard } from '~/types/common';
import type { Article } from '../types/strapi';
import { getStrapiMedia } from './funcs';


export function mapArticlesToCards(articles: Article[]): UICard[] {
  return articles.map((a) => {
    const { seo, Hero, preview, tags } = a.attributes;

    const image = getStrapiMedia(
      preview?.data?.attributes?.formats?.small?.url ??
      preview?.data?.attributes?.url
    );

    const tagObjects =
      tags?.data?.map((tag) => ({
        system_title: tag.attributes?.system_title ?? '',
      }))     ?? [];

    return {
      id: a.id,
      title: Hero?.title ?? seo?.title ?? `Article #${a.id}`,
      description: Hero?.description ?? seo?.description,
      image,
      href: `/articles/${seo?.slug ?? a.id}`,
      tags: tagObjects, 
    };
  });
}
