"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Checkbox,
  FadeIn,
  FileTreeItem,
  Sidebar,
  MotionHighlight,
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
          <AccordionTrigger
            className="text-md p-4 [&[data-state=open]]:bg-editor-background-highlight"
            data-testid="projects-accordion"
          >
            <FadeIn>Filters</FadeIn>
          </AccordionTrigger>
          <AccordionContent className="py-4 px-2">
            <MotionHighlight
              mode="parent"
              hover
              controlledItems
              className="bg-editor-background-highlight rounded-lg pointer-events-none"
            >
              {projectTags.map((e) => {
                const isChecked = filter.includes(e);
                return (
                  <label className="cursor-pointer" key={e}>
                    <FileTreeItem
                      data-testid={`projects-filter-${e}`}
                      className="items-center"
                      sideComponentPosition="left"
                      sideComponent={
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={(value) =>
                            handleChangeFilter(!!value, e)
                          }
                        />
                      }
                    >
                      {e}
                    </FileTreeItem>
                  </label>
                );
              })}
            </MotionHighlight>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Sidebar>
  );
}

export { ProjectsFilter };
