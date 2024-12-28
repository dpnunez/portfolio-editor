"use client";
import { FadeIn, MainContent, SqlHighlight } from "@/components";
import { ProjectsContext } from "@/context/ProjectsContext";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { use, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/styles";

const tagToColor = {
  React: "bg-tech-react-background text-tech-react-foreground",
  JavaScript: "bg-tech-javascript-background text-tech-javascript-foreground",
  TypeScript: "bg-tech-typescript-background text-tech-typescript-foreground",
  "Node.js": "bg-tech-node-background text-tech-node-foreground",
};

function ProjectsList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { filteredProjects: projects, filter } = use(ProjectsContext);

  return (
    <FadeIn>
      <MainContent className="flex flex-col gap-6">
        <span>
          <SqlHighlight>SELECT</SqlHighlight> <em>banner, title, tags</em>{" "}
          <SqlHighlight>FROM</SqlHighlight> <em>projects</em>
          <AnimatePresence>
            {filter.length > 0 && (
              <motion.div
                key="filters"
                className="ml-8"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
              >
                <SqlHighlight>WHERE</SqlHighlight> <em>tags</em> IN{" "}
                <div className="inline-flex">
                  <AnimatePresence>
                    {filter.map((tag, i, arr) => {
                      const color = tagToColor[tag as keyof typeof tagToColor];
                      const isLast = i === arr.length - 1;

                      return (
                        <motion.span
                          className={cn(
                            color,
                            "rounded-sm font-bold text-nowrap overflow-hidden"
                          )}
                          initial={{
                            marginRight: 0,
                            opacity: 0,
                            width: 0,
                          }}
                          animate={{
                            marginRight: isLast ? 0 : 12,
                            opacity: 1,
                            width: "auto",
                          }}
                          exit={{
                            marginRight: 0,
                            width: 0,
                            opacity: 0,
                          }}
                          key={`filter-${tag}`}
                        >
                          <span className="px-2">{tag}</span>
                        </motion.span>
                      );
                    })}
                  </AnimatePresence>
                  <motion.span>;</motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </span>
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
                      className="w-full aspect-video"
                      width={300}
                      height={300}
                      src={project.banner}
                      alt={project.name}
                    />
                    <div className="py-4">
                      <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                        {project.name}
                      </h4>
                    </div>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-editor-background-highlight text-zinc-100 text-xs font-bold px-2 py-1 rounded-full mr-2"
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
