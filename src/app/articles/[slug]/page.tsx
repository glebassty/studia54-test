import axios from "axios";
import type { Article, StrapiResponse } from "~/types/strapi";
import Image from "next/image";
import { getStrapiMedia } from "~/lib/utils"; // убедись, что путь правильный

async function getArticleBySlug(slug: string): Promise<Article | null> {
  const res = await axios.get<StrapiResponse<Article>>(
    "http://localhost:1337/api/articles",
    {
      params: {
        populate: "*",
        "filters[seo][slug][$eq]": slug,
      },
    },
  );
  return res.data.data[0] ?? null;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return <div>Not found</div>;
  }

  const { seo, Hero, preview } = article.attributes;
  const image = getStrapiMedia(
    preview?.data?.attributes?.formats?.small?.url ??
      preview?.data?.attributes?.url,
  );

  return (
    <article className="prose prose-invert mx-auto max-w-3xl py-10">
      <h1>{Hero?.title ?? seo?.title}</h1>
      {image && (
        <div className="relative my-6 aspect-[16/9] w-full">
          <Image
            src={image}
            alt={seo?.title ?? ""}
            fill
            className="object-cover"
          />
        </div>
      )}
      {Hero?.description && <p>{Hero.description}</p>}
    </article>
  );
}
