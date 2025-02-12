import { Project } from "@/types/projects";
import portfolioBanner from "@/assets/portfolio.png";
import { portfolioRepositoryLink } from "@/constants/links";

const projectTags = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "React Native",
] as const;

const projects: Project[] = [
  {
    name: "Portfolio Editor Based",
    tags: ["TypeScript", "React", "Node.js"],
    banner: portfolioBanner,
    url: portfolioRepositoryLink,
  },
];

export { projectTags, projects };
