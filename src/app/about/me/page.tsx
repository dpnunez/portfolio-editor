import { FileViewer } from "@/components";
import { aboutSnippet } from "@/constants/snippets";

function Page() {
  return <FileViewer data-testid="me-code-snippet" code={aboutSnippet} />;
}

export default Page;
