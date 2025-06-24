import { cn } from "@/utils/styles";
import { ReactNode } from "react";

interface MainContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  "data-testid"?: string;
}

function MainContent({
  children,
  className,
  "data-testid": dataTestId,
}: MainContentProps) {
  return (
    <main
      className={cn(
        "flex-col flex flex-1 bg-editor-background-content overflow-auto py-4 px-6",
        className
      )}
      data-testid={dataTestId}
    >
      {children}
    </main>
  );
}

export { MainContent };
