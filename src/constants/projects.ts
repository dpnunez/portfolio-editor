import { Project } from "@/types/projects";

const projectsData: Project[] = [
  {
    name: "Project 1",
    tags: ["TypeScript", "JavaScript"],
    banner: "https://picsum.photos/200/300",
  },
  {
    name: "Project 2",
    tags: ["TypeScript", "React"],
    banner: "https://picsum.photos/200/300",
  },
  {
    name: "Project 3",
    tags: ["JavaScript", "React"],
    banner: "https://picsum.photos/200/300",
  },
  {
    name: "Project 4",
    tags: ["TypeScript", "Node.js"],
    banner: "https://picsum.photos/200/300",
  },
  {
    name: "Project 5",
    tags: ["JavaScript", "React Native"],
    banner: "https://picsum.photos/200/300",
  },
  {
    name: "Project 6",
    tags: ["TypeScript", "Node.js"],
    banner: "https://picsum.photos/200/300",
  },
  {
    name: "Project 7",
    tags: ["JavaScript", "React"],
    banner: "https://picsum.photos/200/300",
  },
  {
    name: "Project 8",
    tags: ["TypeScript", "React Native"],
    banner: "https://picsum.photos/200/300",
  },
  {
    name: "Project 9",
    tags: ["JavaScript", "React"],
    banner: "https://picsum.photos/200/300",
  },
  {
    name: "Project 10",
    tags: ["TypeScript", "Node.js"],
    banner: "https://picsum.photos/200/300",
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
