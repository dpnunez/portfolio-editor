"use client";
import { cn } from "@/utils/styles";
import Link from "next/link";
import * as motion from "motion/react-client";
import { ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
  href: string;
  active?: boolean;
}

function MenuItem({ children, href = "#", active }: MenuItemProps) {
  return (
    <Link href={href} className="group relative overflow-hidden group">
      <div className="border-r border-editor-divider h-full flex items-center justify-center opacity-80 hover:opacity-100 transition-all">
        <span className="m-4">{children}</span>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-0 bg-editor-text-primary h-[2px]"
        transition={{
          duration: 0.3,
        }}
        animate={{
          width: active ? "100%" : 0,
        }}
      />
    </Link>
  );
}

export { MenuItem };
