import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f0f0f0] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="text-2xl text-gray-800">architecture</div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
