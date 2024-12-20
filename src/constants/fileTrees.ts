import { fileTreeType } from "@/types/fileTree";

const aboutFileTree: fileTreeType = [
  {
    name: "me",
    type: "file",
    href: "/about/me",
  },
  {
    name: "work",
    type: "folder",
    children: [
      {
        name: "projects",
        type: "folder",
        children: [
          {
            name: "project1",
            type: "file",
            href: "/about/work/projects/project1",
          },
          {
            name: "project2",
            type: "file",
            href: "/about/work/projects/project2",
          },
        ],
      },
      {
        name: "experience",
        type: "file",
        href: "/about/work/experience",
      },
    ],
  },
  {
    name: "education",
    type: "file",
    href: "/about/education",
  },
  {
    name: "skills",
    type: "file",
    href: "/about/skills",
  },
  {
    name: "contact",
    type: "file",
    href: "/about/contact",
  },
];

export { aboutFileTree };
