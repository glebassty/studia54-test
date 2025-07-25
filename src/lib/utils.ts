import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getStrapiMedia(path?: string | null): string | null {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  const base = process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';
  return `${base}${path}`;
}