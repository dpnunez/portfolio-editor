import { Project } from "@/types/projects";

const projectsData: Project[] = [
  {
    name: "Project 1",
    tags: ["TypeScript", "JavaScript"],
    banner: "banner1.jpg",
  },
  {
    name: "Project 2",
    tags: ["TypeScript", "React"],
    banner: "banner2.jpg",
  },
  {
    name: "Project 3",
    tags: ["JavaScript", "React"],
    banner: "banner3.jpg",
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
