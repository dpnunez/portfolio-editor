type folderType = {
  name: string;
  type: "folder";
  children: Array<folderType | fileType>;
  icon?: string; // toDo: change to real icon type
};

type fileType = {
  name: string;
  type: "file";
  icon?: string; // toDo: change to real icon type
};

type fileTreeType = Array<folderType | fileType>;

export type { folderType, fileType, fileTreeType };
