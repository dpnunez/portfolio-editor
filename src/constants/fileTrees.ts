import { fileTreeType } from "@/types/fileTree";

const aboutFileTree: fileTreeType = [
  {
    name: "me",
    type: "file",
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
          },
          {
            name: "project2",
            type: "file",
          },
        ],
      },
      {
        name: "experience",
        type: "file",
      },
    ],
  },
  {
    name: "education",
    type: "file",
  },
  {
    name: "skills",
    type: "file",
  },
  {
    name: "contact",
    type: "file",
  },
];

export { aboutFileTree };
