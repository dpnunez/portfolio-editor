import { FileViewer } from "@/components";
import { educationSnippet } from "@/constants/snippets";

function Page() {
  return (
    <FileViewer data-testid="education-code-snippet" code={educationSnippet} />
  );
}

export default Page;
