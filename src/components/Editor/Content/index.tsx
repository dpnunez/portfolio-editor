import { ReactNode } from "react";

interface EditorContentProps {
  children: ReactNode;
}

function EditorContent({ children }: EditorContentProps) {
  return <div className="flex flex-1">{children}</div>;
}

export { EditorContent };
