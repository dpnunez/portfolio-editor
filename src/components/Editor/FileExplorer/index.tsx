import { ReactNode } from "react";

interface FileExplorerProps {
  children: ReactNode;
}

function FileExplorer({ children }: FileExplorerProps) {
  return (
    <nav className="w-sidebar border-r border-editor-divider h-full">
      {children}
    </nav>
  );
}

export { FileExplorer };
