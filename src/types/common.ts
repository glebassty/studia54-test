export type UICard = {
  id: number;
  title: string;
  description?: string;
  image?: string | null;
  href: string;
  category: { name: string; slug: string } | null; // берем первый тег или null
};
