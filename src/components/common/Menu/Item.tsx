"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { ActiveRouteIndicator } from "@/components";

interface MenuItemProps {
  children: ReactNode;
  href: string;
  active?: boolean;
}

function MenuItem({ children, href = "#", active }: MenuItemProps) {
  return (
    <Link href={href} className="group relative group">
      <div className="border-r border-editor-divider h-full flex items-center justify-center opacity-80 hover:opacity-100 transition-all">
        <span className="m-4">{children}</span>
      </div>
      {active && <ActiveRouteIndicator />}
    </Link>
  );
}

export { MenuItem };
