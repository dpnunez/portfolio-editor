import { FileViewer } from "@/components";
import { educationSnippet } from "@/constants/snippets";

function Page() {
  return <FileViewer code={educationSnippet} />;
}

export default Page;
