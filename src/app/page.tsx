"use client";

import { useEffect, useMemo, useState } from "react";
import { Container } from "~/components/Container";
import ContentWithTabs from "~/components/ContentWithTabs";
import PromoBlock from "~/components/PromoBlock";
import { PROMO_DESCRIPTION } from "~/lib/constants";
import { getArticles } from "~/lib/funcs";
import type { Article } from "~/types/strapi";
import { mapArticlesToCards } from "~/lib/mappers";
import { buildTabCategories } from "~/lib/categories";

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void getArticles().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  const cards = useMemo(() => mapArticlesToCards(articles), [articles]);
  const categories = useMemo(() => buildTabCategories(articles), [articles]);

  if (loading) return <div>Loading…</div>;

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <PromoBlock description={PROMO_DESCRIPTION} />
        <Container>
          <ContentWithTabs cards={cards} categories={categories} />
        </Container>
      </div>
    </div>
  );
}
