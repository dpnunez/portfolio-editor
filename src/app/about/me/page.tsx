import { FileViewer } from "@/components";
import { aboutSnippet } from "@/constants/snippets";

function Page() {
  return <FileViewer code={aboutSnippet} />;
}

export default Page;
