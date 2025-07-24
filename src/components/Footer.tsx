import NavLinks from "./NavLinks";

export default function Footer() {
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
          <NavLinks textColor="text-[#FFFFFF]" />
        </div>
      </div>
    </footer>
  );
}
