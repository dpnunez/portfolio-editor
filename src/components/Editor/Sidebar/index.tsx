import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <nav className="w-sidebar border-r border-editor-divider h-full bg-editor-background-controls">
      {children}
    </nav>
  );
}

export { Sidebar };
