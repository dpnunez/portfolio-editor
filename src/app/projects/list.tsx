import { MainContent } from "@/components";
import { ProjectsContext } from "@/context/ProjectsContext";
import * as motion from "motion/react-client";
import { use } from "react";

function ProjectsList() {
  const { filteredProjects } = use(ProjectsContext);

  return (
    <MainContent className="p-8">
      {filteredProjects.map((project) => {
        return <motion.div key={project.name}>{project.name}</motion.div>;
      })}
    </MainContent>
  );
}

export { ProjectsList };
