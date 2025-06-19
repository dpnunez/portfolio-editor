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
    status: "modified",
  },
];

const mobileNavigation: fileTreeType = [
  {
    name: "readme.md",
    type: "file",
    href: "/",
    icon: <FaMarkdown />,
    status: "modified",
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
    status: "new",
  },
  {
    name: "contact",
    type: "file",
    href: "/contact",
  },
];

// Demo file tree based on the provided use case
const demoFileTree: fileTreeType = [
  {
    name: "app",
    type: "folder",
    status: "modified",
    children: [
      {
        name: "(home)",
        type: "folder",
        status: "new",
        children: [
          {
            name: "page.tsx",
            type: "file",
            href: "/demo/page",
            status: "untracked",
          },
          {
            name: "layout.tsx",
            type: "file",
            href: "/demo/layout",
            status: "untracked",
          },
        ],
      },
      {
        name: "layout.tsx",
        type: "file",
        href: "/demo/app-layout",
      },
      {
        name: "page.tsx",
        type: "file",
        href: "/demo/app-page",
        status: "modified",
      },
      {
        name: "global.css",
        type: "file",
        href: "/demo/global-css",
      },
    ],
  },
  {
    name: "components",
    type: "folder",
    children: [
      {
        name: "button.tsx",
        type: "file",
        href: "/demo/button",
      },
      {
        name: "tabs.tsx",
        type: "file",
        href: "/demo/tabs",
        status: "staged",
      },
      {
        name: "dialog.tsx",
        type: "file",
        href: "/demo/dialog",
        status: "deleted",
      },
      {
        name: "empty",
        type: "folder",
        children: [],
      },
    ],
  },
  {
    name: "package.json",
    type: "file",
    href: "/demo/package",
    status: "modified",
  },
];

export { aboutFileTree, mobileNavigation, demoFileTree };
