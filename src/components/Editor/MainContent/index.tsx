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
        "flex flex-1 bg-editor-background-content overflow-auto",
        className
      )}
    >
      {children}
    </main>
  );
}

export { MainContent };
