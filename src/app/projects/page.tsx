"use client";
import { ProjectsProvider } from "@/context/ProjectsContext";
import { ProjectsFilter } from "./filter";
import { ProjectsList } from "./list";

export default function Page() {
  return (
    <ProjectsProvider>
      <ProjectsFilter />
      <ProjectsList />
    </ProjectsProvider>
  );
}
