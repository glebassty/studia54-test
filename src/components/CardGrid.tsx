import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  desc: string;
  category: string;
}

export default function CardsGrid({ cards }: { cards: CardProps[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="flex flex-col overflow-hidden rounded-lg bg-neutral-800 shadow-lg"
        >
          <Image
            width={400}
            height={150}
            src={card.img}
            alt={card.title}
            className="h-48 w-full object-cover"
          />
          <div className="flex flex-1 flex-col p-4">
            <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-neutral-300">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
