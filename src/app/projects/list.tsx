"use client";
import { FadeIn, MainContent } from "@/components";
import { ProjectsContext } from "@/context/ProjectsContext";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { use, useState } from "react";
import Image from "next/image";
import { ProjectsSqlFilterViewer } from "./sql-filter-viewer";

function ProjectsList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { filteredProjects: projects } = use(ProjectsContext);

  return (
    <FadeIn>
      <MainContent className="flex flex-col gap-6">
        <ProjectsSqlFilterViewer />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <AnimatePresence>
            {projects.map((project, idx) => (
              <motion.a
                exit={{ opacity: 0 }}
                layout="position"
                key={project.name}
                className="relative group block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                href={project.url}
                target="_blank"
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-editor-background-highlight block  rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <div className="rounded-2xl h-full w-full p-4 overflow-hidden border border-editor-divider group-hover:border-editor-text-primary relative z-50">
                  <div className="relative z-50">
                    <Image
                      className="w-full aspect-video object-cover"
                      width={1280}
                      height={720}
                      placeholder="blur"
                      src={project.banner}
                      alt={project.name}
                    />
                    <div className="py-4">
                      <h4 className="font-bold tracking-wide mt-4">
                        {project.name}
                      </h4>
                    </div>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-editor-background-highlight text-xs font-bold px-2 py-1 rounded-full mr-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </MainContent>
    </FadeIn>
  );
}

export { ProjectsList };
