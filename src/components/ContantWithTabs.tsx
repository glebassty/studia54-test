import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import CardsGrid from "./CardGrid";
import { CARDS_DATA } from "~/lib/conts";

const categories = [
  { value: "architecture", label: "Architectural Design" },
  { value: "residential", label: "Residential Interiors" },
  { value: "commercial", label: "Commercial Interior" },
];

export default function ContantWithTabs() {
  return (
    <Tabs defaultValue="architecture" className="w-full p-8">
      <TabsList className="mb-8 flex justify-center gap-2 border-none bg-neutral-800">
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
      {categories.map((cat) => (
        <TabsContent key={cat.value} value={cat.value}>
          <CardsGrid
            cards={CARDS_DATA.filter((card) => card.category === cat.value)}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
