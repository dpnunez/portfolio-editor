import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  FileTree,
  Sidebar,
} from "@/components";
import { aboutFileTree } from "@/constants/fileTrees";

function Page() {
  return (
    <div>
      <Sidebar>
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>About</AccordionTrigger>
            <AccordionContent>
              <FileTree files={aboutFileTree} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sidebar>
    </div>
  );
}

export default Page;
