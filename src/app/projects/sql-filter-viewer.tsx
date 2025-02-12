import { use } from "react";
import { SqlHighlight } from "@/components";
import { ProjectsContext } from "@/context/ProjectsContext";
import { cn } from "@/utils/styles";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

const tagToColor = {
  React: "bg-tech-react-background text-tech-react-foreground",
  JavaScript: "bg-tech-javascript-background text-tech-javascript-foreground",
  TypeScript: "bg-tech-typescript-background text-tech-typescript-foreground",
  "Node.js": "bg-tech-node-background text-tech-node-foreground",
  "React Native": "bg-tech-react-background text-tech-react-foreground",
  Java: "bg-tech-java-background text-tech-java-foreground",
};

function ProjectsSqlFilterViewer() {
  const { filter } = use(ProjectsContext);

  return (
    <span>
      <SqlHighlight>SELECT</SqlHighlight> <em>banner, title, tags</em>{" "}
      <SqlHighlight>FROM</SqlHighlight> <em>projects</em>
      <AnimatePresence>
        {filter.length > 0 && (
          <motion.div
            data-testid="sql-filter-preview"
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
                      data-testid={`sql-filter-preview-${tag}`}
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
  );
}

export { ProjectsSqlFilterViewer };
