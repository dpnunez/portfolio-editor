"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Checkbox,
  FadeIn,
  Sidebar,
  TreeRowContainer,
} from "@/components";
import { projectTags } from "@/constants/projects";
import { ProjectsContext } from "@/context/ProjectsContext";
import { use } from "react";

function ProjectsFilter() {
  const { handleChangeFilter, filter } = use(ProjectsContext);

  return (
    <Sidebar>
      <Accordion type="single" collapsible defaultValue="open">
        <AccordionItem value="open">
          <AccordionTrigger className="text-md p-4 [&[data-state=open]]:bg-editor-background-highlight">
            <FadeIn>aass</FadeIn>
          </AccordionTrigger>
          <AccordionContent className="py-4">
            {projectTags.map((e, i) => {
              const isChecked = filter.includes(e);
              return (
                <label className="cursor-pointer" key={e}>
                  <TreeRowContainer
                    key={e}
                    className="items-center"
                    transition={{
                      delay: 0.15 * i,
                    }}
                  >
                    <div className="w-6 flex items-center">
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={(value) =>
                          handleChangeFilter(!!value, e)
                        }
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
  );
}

export { ProjectsFilter };
