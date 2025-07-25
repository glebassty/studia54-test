import axios from 'axios';
import type { Article } from './typesStrapi';



// Ответ Strapi
interface StrapiResponse<T> {
  data: T[];
  meta: Record<string, unknown>;
}

export async function getArticles(): Promise<Article[]> {
  try {
    const res = await axios.get<StrapiResponse<Article>>(
      'http://localhost:1337/api/articles',
      {
        params: { populate: '*' }, // чтобы подтянуть компоненты и медиа
      }
    );
    return res.data.data;
  } catch (err) {
    console.error('Ошибка при загрузке данных из Strapi:', err);
    return [];
  }
}
