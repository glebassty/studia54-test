// types/strapi.ts

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface MediaAttributes {
  url: string;
  alternativeText?: string;
  caption?: string;
  formats?: {
    small?: ImageFormat;
    thumbnail?: ImageFormat;
    [key: string]: ImageFormat | undefined;
  };
}

export interface Media {
  id: number;
  attributes: MediaAttributes;
}

export interface Tag {
  id: number;
  attributes: {
    name: string;
    slug: string;
  };
}

export interface SEO {
  title: string;
  description?: string;
  slug?: string;
}

export interface HeroArticle {
  title: string;
  description?: string;
}

export interface Article {
  id: number;
  attributes: {
    seo: SEO;
    Hero: HeroArticle;
    preview?: { data?: Media | null };
    tags?: { data: Tag[] };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Ответ Strapi
export interface StrapiResponse<T> {
  data: T[];
  meta: Record<string, unknown>;
}
