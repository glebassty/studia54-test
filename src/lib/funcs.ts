import axios from 'axios';

export async function getArticles() {
  try {
    const res = await axios.get('http://localhost:1337/api/articles');
    return res.data.data; // Ошибка типизации`
  } catch (err) {
    console.error('Ошибка при загрузке данных из Strapi:', err);
    return [];
  }
}