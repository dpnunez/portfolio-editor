"use client";
import { usePathname } from "next/navigation";
import { MenuItem } from "./Item";
import { useCallback } from "react";
import { menuData } from "@/constants/menu";

function Menu() {
  const pathname = usePathname();
  const isRouteActive = useCallback(
    (route: string) => pathname.includes(route),
    [pathname]
  );

  return (
    <nav className="h-full divide-x-1 flex max-h-16">
      {menuData.map((item) => (
        <MenuItem
          key={item.href}
          active={isRouteActive(item.href)}
          href={item.href}
        >
          {item.label}
        </MenuItem>
      ))}
    </nav>
  );
}

export { Menu };
