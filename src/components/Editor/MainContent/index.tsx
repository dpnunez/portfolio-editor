import { cn } from "@/utils/styles";
import { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
  className?: string;
}

function MainContent({ children, className }: MainContentProps) {
  return (
    <main
      className={cn(
        "flex-col flex flex-1 bg-editor-background-content overflow-auto py-4 px-2",
        className
      )}
    >
      {children}
    </main>
  );
}

export { MainContent };
