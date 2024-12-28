import { FileViewer } from "@/components";
import { skillsSnippet } from "@/constants/snippets";

function Page() {
  return <FileViewer code={skillsSnippet} />;
}

export default Page;
