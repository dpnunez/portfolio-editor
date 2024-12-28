import { FileViewer } from "@/components";
import { skillsSnippet } from "@/constants/snippets";

function Page() {
  return <FileViewer data-testid="skills-code-snippet" code={skillsSnippet} />;
}

export default Page;
