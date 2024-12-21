"use client";
import { useCallback } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Checkbox,
  Sidebar,
  TreeRowContainer,
} from "@/components";
import { projectTags } from "@/constants/filters";
import { useStateViaQueryParams } from "@/hooks";

function Projects() {
  const [search, setSearch] = useStateViaQueryParams<string[]>("search", []);

  const handleSearch = useCallback(
    (checked: boolean, id: string) => {
      setSearch((prev) => {
        if (checked) {
          return [...prev, id];
        }
        return prev.filter((e) => e !== id);
      });
    },
    [setSearch]
  );

  return (
    <>
      <Sidebar>
        <Accordion type="single" collapsible defaultValue="open">
          <AccordionItem value="open">
            <AccordionTrigger className="text-md p-4 [&[data-state=open]]:bg-editor-background-highlight">
              File Explorer
            </AccordionTrigger>
            <AccordionContent className="py-4">
              {projectTags.map((e) => {
                const isChecked = search.includes(e);
                return (
                  <label key={e} className="cursor-pointer">
                    <TreeRowContainer key={e} className="items-center">
                      <div className="w-6 flex items-center">
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={(value) => handleSearch(!!value, e)}
                        />
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
      <main>AA</main>
    </>
  );
}

export default Projects;
