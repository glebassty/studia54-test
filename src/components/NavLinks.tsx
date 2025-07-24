"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

interface NavLinksProps {
  projects: string;
  news: string;
  blog: string;
  contacts: string;
  className?: string;
  textColor?: string;
  hoverColor?: string;
  activeColor?: string;
}

export default function NavLinks({
  projects,
  news,
  blog,
  contacts,
  className = "",
  textColor = "text-[#787878]",
  hoverColor = "hover:text-[#2969CA]",
  activeColor = "text-black underline",
}: NavLinksProps) {
  const pathname = usePathname();

  const links = [
    { href: projects, label: "Projects" },
    { href: news, label: "News" },
    { href: blog, label: "Blog" },
    { href: contacts, label: "Contacts" },
  ];

  return (
    <nav className={cn("flex items-center justify-center gap-8", className)}>
      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              pathname === link.href ? activeColor : textColor,
              hoverColor,
              "hover:underline",
              "transition",
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <span className={cn(textColor)}>|</span>

      <div className={cn("flex items-center gap-4", textColor)}>
        <span className={cn("cursor-pointer", hoverColor, "transition")}>
          Call me
        </span>
        <span className="font-semibold">+534512512</span>
      </div>
    </nav>
  );
}
