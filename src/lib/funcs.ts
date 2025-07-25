import axios from 'axios';
import type { Article, StrapiResponse } from '../types/strapi';

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';

export function getStrapiMedia(path?: string | null): string | null {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return `${STRAPI_BASE_URL}${path}`;
}

export async function getArticles(): Promise<Article[]> {
  try {
    const res = await axios.get<StrapiResponse<Article>>(
      `${STRAPI_BASE_URL}/api/articles`,
      {
        params: {
          populate: '*',
          sort: 'publishedAt:desc',
        },
      }
    );
    return res.data.data;
  } catch (err) {
    console.error('Ошибка при загрузке данных из Strapi:', err);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const res = await axios.get<StrapiResponse<Article>>(
      `${STRAPI_BASE_URL}/api/articles`,
      {
        params: {
          populate: '*',
          'filters[seo][slug][$eq]': slug,
        },
      }
    );
    return res.data.data[0] ?? null;
  } catch (err) {
    console.error('Ошибка при загрузке статьи по slug:', err);
    return null;
  }
}
