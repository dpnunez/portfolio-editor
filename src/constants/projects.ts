import { Project } from "@/types/projects";
import portfolioBanner from "@/assets/portfolio.png";
import siengeIdBanner from "@/assets/sienge-id.png";

import {
  portfolioRepositoryLink,
  siengeIdDocumentationLink,
} from "@/constants/links";

const projectTags = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "React Native",
  "Java",
] as const;

const projects: Project[] = [
  {
    name: "Portfolio Editor Based",
    tags: ["TypeScript", "React", "Node.js"],
    banner: portfolioBanner,
    url: portfolioRepositoryLink,
    type: "personal",
  },
  {
    name: "Sienge ID",
    tags: ["JavaScript", "TypeScript", "Java"],
    banner: siengeIdBanner,
    url: siengeIdDocumentationLink,
    type: "professional",
  },
];

export { projectTags, projects };
