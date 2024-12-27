import { ReactNode } from "react";

type folderType = {
  name: string;
  type: "folder";
  children: Array<folderType | fileType>;
  icon?: string; // toDo: change to real icon type
};

type fileType = {
  name: string;
  type: "file";
  icon?: ReactNode; // toDo: change to real icon type
  href: string;
};

type fileTreeType = Array<folderType | fileType>;

export type { folderType, fileType, fileTreeType };
