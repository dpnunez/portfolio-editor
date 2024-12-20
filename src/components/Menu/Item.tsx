import { cn } from "@/utils/styles";
import Link from "next/link";
import { ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
  href: string;
  active?: boolean;
}

function MenuItem({ children, href = "#", active }: MenuItemProps) {
  return (
    <Link href={href} className="group relative overflow-hidden">
      <div className="group border-r border-editor-divider h-full flex items-center justify-center group">
        <span className="m-4">{children}</span>
      </div>
      <div
        className={cn(
          "absolute h-[2px] w-full bg-editor-text-primary opacity-0 group-hover:opacity-50 group-hover:bottom-0 transition-all -bottom-2",
          {
            "!opacity-100 bottom-0": active,
          }
        )}
      />
    </Link>
  );
}

export { MenuItem };
