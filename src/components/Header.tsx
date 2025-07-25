"use client";

import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import NavLinks from "./NavLinks";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f0f0f0] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex w-full items-center justify-between md:hidden">
            <div className="text-2xl text-gray-800">architecture</div>
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <button className="p-2">
                  <HamburgerMenuIcon className="h-6 w-6 text-gray-800" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="p-6">
                <NavLinks />
              </DrawerContent>
            </Drawer>
          </div>
          <div className="hidden w-full items-center justify-between md:flex">
            <div className="text-2xl text-gray-800">architecture</div>
            <NavLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
