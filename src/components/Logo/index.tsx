"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActiveIndicator } from "@/components";

function Logo() {
  const pathname = usePathname();
  const active = pathname === "/";

  return (
    <Link
      href="/"
      className="w-sidebar relative flex justify-center border-r border-editor-divider h-full items-center group"
    >
      <h1 className="text-lg">
        <span className="text-editor-text-primary font-bold">whoami</span>
        <span className="inline-block text-center opacity-60 italic group-hover:opacity-100 group-hover:text-editor-text-secondary group-hover:font-bold transition-all">
          &nbsp;{"> "}dpnunez
        </span>
      </h1>
      {active && <ActiveIndicator />}
    </Link>
  );
}

export { Logo };
