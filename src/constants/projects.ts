import { Project } from "@/types/projects";
import { portfolioRepositoryLink } from "./links";
import portfolioBanner from "@/assets/portfolio.png";

const projectsData: Project[] = [
  {
    name: "Portfolio Editor Based",
    tags: ["TypeScript", "React", "Node.js"],
    banner: portfolioBanner,
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
