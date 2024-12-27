"use client";
import { ReactNode, use, useMemo } from "react";
import * as motion from "motion/react-client";
import { PreviousPathContext } from "@/context/PreviusPathContext";
import { pageIdentifiersWidthSidebar } from "@/constants/animation";

interface SidebarProps {
  children: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  const previousPath = use(PreviousPathContext);
  const previousPageHasSidebar = useMemo(() => {
    return !!pageIdentifiersWidthSidebar.find((i) => {
      return previousPath?.includes(i);
    });
  }, [previousPath]);

  return (
    <motion.nav
      key="sidebar"
      layout
      initial={previousPageHasSidebar ? { x: 0 } : { x: "-100%" }}
      exit={{
        x: -100,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        ease: [0.87, 0, 0.13, 1],
        duration: 0.5,
      }}
      className="hidden md:block w-sidebar border-r border-editor-divider h-full bg-editor-background-controls"
    >
      {children}
    </motion.nav>
  );
}

export { Sidebar };
