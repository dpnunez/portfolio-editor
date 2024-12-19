import { ReactNode } from "react";

interface EditorContainerProps {
  children: ReactNode;
}

function EditorContainer({ children }: EditorContainerProps) {
  return (
    <div className="w-screen h-screen flex flex-col p-0 lg:p-10">
      <div className="w-full h-full flex-1 ring-1 ring-editor-divider rounded-lg">
        {children}
      </div>
    </div>
  );
}

export { EditorContainer };
