import { fileTreeType } from "@/types/fileTree";
import { DatabaseIcon } from "lucide-react";
import { FaMarkdown } from "react-icons/fa6";

const aboutFileTree: fileTreeType = [
  {
    name: "me.ts",
    type: "file",
    href: "/about/me",
    status: "modified",
  },
  {
    name: "work",
    type: "folder",
    status: "modified",
    children: [
      {
        name: "softplan.md",
        type: "file",
        icon: <FaMarkdown size={14} />,
        href: "/about/work/softplan",
        status: "new",
      },
      {
        name: "nav9.md",
        icon: <FaMarkdown size={14} />,
        type: "file",
        href: "/about/work/nav9",
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
    status: "new",
  },
];

const aboutFileTreeMobile: fileTreeType = [
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

export { aboutFileTree, aboutFileTreeMobile };
