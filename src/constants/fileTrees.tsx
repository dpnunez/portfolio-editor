import { fileTreeType } from "@/types/fileTree";
import { DatabaseIcon } from "lucide-react";
import { FaMarkdown } from "react-icons/fa6";

const aboutFileTree: fileTreeType = [
  {
    name: "me.ts",
    type: "file",
    href: "/about/me",
  },
  {
    name: "work",
    type: "folder",
    children: [
      {
        name: "softplan.ts",
        type: "file",
        href: "/about/work/softplan",
      },
      {
        name: "nav9.ts",
        type: "file",
        href: "/about/work/tjmt",
      },
    ],
  },
  {
    name: "education.ts",
    type: "file",
    href: "/about/education",
  },
  {
    name: "skills.ts",
    type: "file",
    href: "/about/skills",
  },
];

const mobileNavigation: fileTreeType = [
  {
    name: "readme.md",
    type: "file",
    href: "/",
    icon: <FaMarkdown />,
  },
  {
    type: "folder",
    name: "about",
    children: aboutFileTree,
  },
  {
    name: "projects.db",
    type: "file",
    href: "/projects",
    icon: <DatabaseIcon size={14} />,
  },
  {
    name: "guest-book",
    type: "file",
    href: "/guest-book",
    icon: <DatabaseIcon size={14} />,
  },
  {
    name: "contact",
    type: "file",
    href: "/contact",
  },
];

export { aboutFileTree, mobileNavigation };
