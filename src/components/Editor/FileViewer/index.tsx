import { cn } from "@/utils/styles";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";

SyntaxHighlighter.registerLanguage("typescript", typescript);
interface FileViewerProps {
  code: string;
  language?: string;
  className?: string;
  "data-testid"?: string;
}

function FileViewer({
  code,
  language = "typescript",
  className,
  "data-testid": dataTestId,
}: FileViewerProps) {
  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers
      className={cn("!bg-transparent", className)}
      data-testid={dataTestId}
    >
      {code}
    </SyntaxHighlighter>
  );
}

export { FileViewer };
