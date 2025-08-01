import Image from "next/image";
import { getArticleBySlug, getStrapiMedia } from "~/lib/funcs";

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
    <article className="prose prose-invert mx-auto max-w-3xl p-10">
      <h1 className="text-white">{Hero?.title ?? seo?.title}</h1>
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
      {Hero?.description && <p className="text-white">{Hero.description}</p>}
    </article>
  );
}
