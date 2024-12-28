import { Project } from "@/types/projects";
import { portfolioRepositoryLink } from "./links";

const projectsData: Project[] = [
  {
    name: "Portfolio Editor Based",
    tags: ["TypeScript", "React", "Node.js"],
    banner: "/images/projects/portfolio.png",
    url: portfolioRepositoryLink,
  },
];

export { projectsData };

const projectTags = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "React Native",
] as const;

export { projectTags };
