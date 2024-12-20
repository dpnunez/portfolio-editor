import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Checkbox,
  Sidebar,
  TreeRowContainer,
  TreeRowIcon,
} from "@/components";
import { projectTags } from "@/constants/filters";

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
              {projectTags.map((e) => {
                return (
                  <label key={e} className="cursor-pointer">
                    <TreeRowContainer key={e} className="items-center">
                      <div className="w-6 flex items-center">
                        <Checkbox />
                      </div>
                      <span>{e}</span>
                    </TreeRowContainer>
                  </label>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sidebar>
      <main>{children}</main>
    </>
  );
}
