"use client";

import { useEffect, useState } from "react";
import { Container } from "~/components/Container";
import ContentWithTabs from "~/components/ContentWithTabs";

import PromoBlock from "~/components/PromoBlock";
import { PROMO_DESCRIPTION } from "~/lib/constants";
import { getArticles } from "~/lib/funcs";

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    void getArticles().then(setArticles);
  }, []);

  console.log("Articles:", articles);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <PromoBlock description={PROMO_DESCRIPTION} />
        <Container>
          <ContentWithTabs />
        </Container>
      </div>
    </div>
  );
}
