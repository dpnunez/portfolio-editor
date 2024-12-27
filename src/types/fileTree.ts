import { ReactNode } from "react";

type folderType = {
  name: string;
  type: "folder";
  children: Array<folderType | fileType>;
  icon?: string;
};

type fileType = {
  name: string;
  type: "file";
  icon?: ReactNode;
  href: string;
};

type fileTreeType = Array<folderType | fileType>;

export type { folderType, fileType, fileTreeType };
