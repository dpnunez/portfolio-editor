import { projectsData as projects } from "@/constants/projects";
import { useStateViaQueryParams } from "@/hooks";
import { Project } from "@/types/projects";
import React, { createContext, ReactNode, useCallback, useMemo } from "react";

interface ProjectsContextProps {
  projects: Project[];
  filteredProjects: Project[];
  handleChangeFilter: (checked: boolean, id: string) => void;
  filter: string[];
}

const ProjectsContext = createContext<ProjectsContextProps>(
  {} as ProjectsContextProps
);

function ProjectsProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useStateViaQueryParams<string[]>("search", []);

  const handleChangeFilter = useCallback(
    (checked: boolean, id: string) => {
      setFilter((prev) => {
        if (checked) {
          return [...prev, id];
        }
        return prev.filter((e) => e !== id);
      });
    },
    [setFilter]
  );

  const filteredProjects = useMemo(() => {
    if (!filter.length) return projects;
    return projects.filter((e) => e.tags.some((tag) => filter.includes(tag)));
  }, [filter]);

  return (
    <ProjectsContext.Provider
      value={{ projects, filteredProjects, handleChangeFilter, filter }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export { ProjectsProvider, ProjectsContext };
