"use client";
import { usePathname } from "next/navigation";
import { MenuItem } from "./Item";
import { menuData } from "@/constants/menu";

function isRouteActive(href: string, pathname: string) {
  return pathname.includes(href);
}

function Menu() {
  const pathname = usePathname();

  return (
    <nav className="h-full divide-x-1 flex max-h-16">
      {menuData.map((item) => (
        <MenuItem
          key={item.label}
          active={isRouteActive(item.href, pathname)}
          href={item.href}
        >
          {item.label}
        </MenuItem>
      ))}
    </nav>
  );
}

export { Menu };
