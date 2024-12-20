import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  FileTree,
  Sidebar,
} from "@/components";
import { aboutFileTree } from "@/constants/fileTrees";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar>
        <Accordion type="single" collapsible defaultValue="open">
          <AccordionItem value="open">
            <AccordionTrigger className="text-md p-4 [&[data-state=open]]:bg-editor-divider">
              File Explorer
            </AccordionTrigger>
            <AccordionContent className="py-4">
              <FileTree files={aboutFileTree} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sidebar>
      <main>{children}</main>
    </>
  );
}
