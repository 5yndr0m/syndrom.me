"use client";

import Link from "next/link";
import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/" className="font-bold text-xl">
          Syndrom
        </Link>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
