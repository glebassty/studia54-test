// lib/funcs.ts
import axios from 'axios';
import type { Article, StrapiResponse } from '../types/strapi';

export async function getArticles(): Promise<Article[]> {
  try {
    const res = await axios.get<StrapiResponse<Article>>(
      'http://localhost:1337/api/articles',
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
