// Компонент SEO
interface SEO {
  title: string;
  description?: string;
  slug?: string;
}

// Медиа (Strapi Media)
interface Media {
  id: number;
  attributes: {
    url: string;
    alternativeText?: string;
    caption?: string;
    formats?: Record<string, unknown>;
  };
}

// Компонент Hero-article
interface HeroArticle {
  title: string;
  description?: string;
  background: { data: Media };
}

// Тег
interface Tag {
  id: number;
  attributes: {
    name: string;
    slug: string;
  };
}

// Dynamic zone: пока типизируем как unknown[]
type ContentBlock = unknown;

// Статья
export interface Article {
  id: number;
  attributes: {
    seo: SEO;
    Hero: HeroArticle;
    content: ContentBlock[];
    tags: { data: Tag[] };
    preview: { data: Media };
    recommendations: { data: Article[] };
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
  };
}

// Ответ Strapi
export interface StrapiResponse<T> {
  data: T[];
  meta: Record<string, unknown>;
}
