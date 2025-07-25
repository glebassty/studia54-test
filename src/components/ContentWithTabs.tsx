"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import CardsGrid from "./CardGrid";
import type { TabCategory } from "~/lib/categories";
import type { UICard } from "~/types/common";

interface Props {
  cards: UICard[];
  categories: TabCategory[];
}

export default function ContentWithTabs({ cards, categories }: Props) {
  return (
    <Tabs defaultValue="all" className="w-full p-8">
      <TabsList className="mb-8 flex justify-start gap-2 border-none">
        {categories.map((cat) => (
          <TabsTrigger
            key={cat.value}
            value={cat.value}
            className="rounded-full border border-neutral-700 bg-neutral-900 px-6 py-2 text-white transition data-[state=active]:bg-white data-[state=active]:text-neutral-900"
          >
            {cat.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((cat) => {
        const filtered =
          cat.value === "all"
            ? cards
            : cards.filter(
                (c) =>
                  Array.isArray(c.tags) &&
                  c.tags.some(
                    (tag) =>
                      typeof tag.system_title === "string" &&
                      tag.system_title.toLowerCase() ===
                        cat.value.toLowerCase(),
                  ),
              );
        return (
          <TabsContent key={cat.value} value={cat.value}>
            <CardsGrid cards={filtered} />
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
