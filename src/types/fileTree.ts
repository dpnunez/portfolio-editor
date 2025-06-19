import { ReactNode } from "react";

type fileStatus = "new" | "modified" | "deleted" | "untracked" | "staged";

type folderType = {
  name: string;
  type: "folder";
  children: Array<folderType | fileType>;
  icon?: string;
  status?: fileStatus;
  sideComponent?: ReactNode;
};

type fileType = {
  name: string;
  type: "file";
  icon?: ReactNode;
  href: string;
  status?: fileStatus;
  sideComponent?: ReactNode;
};

type fileTreeType = Array<folderType | fileType>;

export type { folderType, fileType, fileTreeType, fileStatus };
