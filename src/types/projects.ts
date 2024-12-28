import { projectTags } from "@/constants/projects";
export interface Project {
  name: string;
  tags: (typeof projectTags)[number][];
  banner: string;
  url: string;
}
