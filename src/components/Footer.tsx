import NavLinks from "./NavLinks";

interface FooterProps {
  projects: string;
  news: string;
  blog: string;
  contacts: string;
}

export default function Footer({
  projects,
  news,
  blog,
  contacts,
}: FooterProps) {
  return (
    <footer className="border-t border-gray-300 bg-[#181818] font-sans font-normal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl leading-none text-[#FFFFFF]">
              architecture
            </div>
            <div className="text-xs leading-none text-[#5B5C5D]">
              © 2024, All rights reserved
            </div>
          </div>
          <NavLinks
            projects={projects}
            news={news}
            blog={blog}
            contacts={contacts}
            textColor="text-[#FFFFFF]"
          />
        </div>
      </div>
    </footer>
  );
}
