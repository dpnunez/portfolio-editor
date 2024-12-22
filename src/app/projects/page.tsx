import { ProjectsProvider } from "@/context/ProjectsContext";
import { ProjectsFilter } from "./filter";
import { ProjectsList } from "./list";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <ProjectsProvider>
        <ProjectsFilter />
        <ProjectsList />
      </ProjectsProvider>
    </Suspense>
  );
}
