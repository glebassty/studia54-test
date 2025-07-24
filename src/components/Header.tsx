import NavLinks from "./NavLinks";

interface HeaderProps {
  projects: string;
  news: string;
  blog: string;
  contacts: string;
}

export default function Header({
  projects,
  news,
  blog,
  contacts,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#f0f0f0] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="text-2xl text-gray-800">architecture</div>
          <NavLinks
            projects={projects}
            news={news}
            blog={blog}
            contacts={contacts}
          />
        </div>
      </div>
    </header>
  );
}
