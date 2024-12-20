import { ReactNode } from "react";

interface EditorContentProps {
  children: ReactNode;
}

function EditorContent({ children }: EditorContentProps) {
  return <main className="flex flex-1">{children}</main>;
}

export { EditorContent };
