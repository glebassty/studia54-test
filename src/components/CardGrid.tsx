// components/CardGrid.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import type { UICard } from "~/types/common";

export default function CardsGrid({ cards }: { cards: UICard[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <Link key={c.id} href={c.href} className="">
          {c.image && (
            <div className="relative mb-3 aspect-[16/9] w-full overflow-hidden">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
          <h3 className="text-lg font-semibold text-white">{c.title}</h3>
          {c.description && (
            <p className="mt-2 line-clamp-3 text-sm text-white">
              {c.description}
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}
