export interface UICard {
  id: number;
  title: string;
  description?: string | null;
  image?: string | null;
  href: string;
  tags?: {
    system_title: string;
  }[]; 
}