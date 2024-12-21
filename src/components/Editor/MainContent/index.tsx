import { ReactNode } from "react";

function MainContent({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-1 bg-editor-background-content overflow-auto">
      {children}
    </main>
  );
}

export { MainContent };
