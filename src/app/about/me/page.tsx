import { FileViewer } from "@/components";
import { aboutSnippet } from "@/constants/snippets";

function Page() {
  return (
    <div>
      <FileViewer code={aboutSnippet} />
    </div>
  );
}

export default Page;
