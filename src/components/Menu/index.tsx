"use client";
import { usePathname } from "next/navigation";
import { MenuItem } from "./Item";
import { useCallback } from "react";

function Menu() {
  const pathname = usePathname();
  const isRouteActive = useCallback(
    (route: string) => pathname.includes(route),
    [pathname]
  );

  return (
    <nav className="h-full divide-x-1 flex max-h-16">
      <MenuItem active={isRouteActive("/about")} href="/about">
        /about.ts
      </MenuItem>
      <MenuItem active={isRouteActive("/projects")} href="/projects">
        /projects.db
      </MenuItem>
    </nav>
  );
}

export { Menu };
