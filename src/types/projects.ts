import { projectTags } from "@/constants/projects";
import { StaticImageData } from "next/image";
export interface Project {
  name: string;
  tags: (typeof projectTags)[number][];
  banner: StaticImageData;
  url: string;
  type?: ProjectType;
}

export type ProjectType = "personal" | "professional";
