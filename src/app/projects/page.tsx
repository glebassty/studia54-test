"use client";

import { useEffect, useMemo, useState } from "react";
import CardsGrid from "~/components/CardGrid";
import CardImage from "~/components/CardImage";
import CardInfo from "~/components/Cardinfo";
import { Container } from "~/components/Container";
import FeaturesSection from "~/components/FeaturesSection";
import HeroSection from "~/components/HeroSection";
import { getArticles } from "~/lib/funcs";
import { mapArticlesToCards } from "~/lib/mappers";
import type { Article } from "~/types/strapi";

export default function ProjectsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void getArticles().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  const cards = useMemo(() => mapArticlesToCards(articles), [articles]);

  if (loading) return <div>Loading…</div>;

  return (
    <div className="text-muted-foreground inset-0 flex min-h-screen flex-col items-center justify-center bg-[#181818] px-4 py-10">
      <HeroSection
        title="Пример заголовка"
        description="Это описание приходит как пропс и заменяет значение по умолчанию."
      />
      <div className="mt-10 flex w-full max-w-5xl flex-col gap-10">
        <div className="flex gap-6">
          <CardImage
            imageSrc="/images/card-image/image.png"
            description="Это описание появится под изображением"
            isShowDescription={false}
          />
          <CardInfo
            title="Это описание появится под изображением"
            description="Это описание появится под изображением"
            description2="Это описание2 появится под изображением"
          />
        </div>
        <div className="flex gap-6">
          <CardInfo
            imageSrc="/images/card-info/image.png"
            description="Это описание появится под изображением"
          />
          <CardImage
            imageSrc="/images/card-image/image_2.png"
            description="Это описание появится под изображением"
            isShowDescription={true}
          />
        </div>
      </div>
      <div className="mt-10 flex w-full max-w-5xl flex-col gap-10">
        <FeaturesSection
          imageSrc="/images/feat-section/desktop.png"
          title="Layout features"
          description="Studia 54 architects designed a comprehensive architectural ensemble that includes a main house, a garage, four townhouses, and a separate staff house. All buildings are executed in a unified stylistic design, appearing as a cohesive complex."
        />
      </div>
      <Container>
        <div className="w-full px-8 py-10">
          <div className="mb-10 flex w-full items-start justify-between">
            <h2 className="text-2xl font-semibold text-white">
              We also recommend
            </h2>
          </div>

          <CardsGrid cards={cards} />
        </div>
      </Container>
    </div>
  );
}
