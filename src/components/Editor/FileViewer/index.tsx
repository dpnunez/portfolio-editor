import { cn } from "@/utils/styles";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

interface FileViewerProps {
  code: string;
  language?: string;
  className?: string;
}

function FileViewer({
  code,
  language = "javascript",
  className,
}: FileViewerProps) {
  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers
      className={cn("!bg-transparent", className)}
    >
      {code}
    </SyntaxHighlighter>
  );
}

export { FileViewer };
