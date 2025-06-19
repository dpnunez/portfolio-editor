"use client";

import * as React from "react";
import { fileStatus, fileTreeType } from "@/types/fileTree";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  useAccordionItem,
} from "@/components/Accordion";
import { FolderIcon, FolderOpenIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/styles";
import { MotionHighlight, MotionHighlightItem } from "@/components/MotionHighlight";
import { ComponentProps } from "react";
import { FileIcon } from "./FileIcon";
import { FileStatus } from "./FileStatus";
import { FileTreeItem } from "./FileTreeItem";

interface FileTreeProps {
  files: fileTreeType;
  className?: string;
  defaultOpen?: string[];
  open?: string[];
  onOpenChange?: (open: string[]) => void;
}

interface FolderTriggerProps extends ComponentProps<typeof AccordionTrigger> {
  sideComponent?: React.ReactNode;
  status?: string;
}

function FolderTrigger({
  children,
  className,
  sideComponent,
  status,
  ...props
}: FolderTriggerProps) {
  const { isOpen } = useAccordionItem();

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "new":
        return "text-green-500";
      case "modified":
        return "text-amber-500";
      case "deleted":
        return "text-red-500";
      case "untracked":
        return "text-blue-500";
      case "staged":
        return "text-purple-500";
      default:
        return "";
    }
  };

  return (
    <AccordionTrigger
      data-slot="folder-trigger"
      className="h-auto py-0 hover:no-underline font-normal relative z-10 max-w-full"
      {...props}
      chevron={false}
    >
      <FileTreeItem
        open={isOpen}
        icons={{ open: <FolderOpenIcon />, close: <FolderIcon /> }}
        className={cn(className, getStatusColor(status))}
        sideComponent={sideComponent}
      >
        {children}
      </FileTreeItem>
    </AccordionTrigger>
  );
}

interface FolderProps extends Omit<
  ComponentProps<typeof AccordionItem>,
  "value" | "onValueChange" | "defaultValue" | "children"
> {
  children?: React.ReactNode;
  name: string;
  open?: string[];
  onOpenChange?: (open: string[]) => void;
  defaultOpen?: string[];
  sideComponent?: React.ReactNode;
  status?: string;
}

function Folder({
  children,
  className,
  name,
  open,
  defaultOpen,
  onOpenChange,
  sideComponent,
  status,
  ...props
}: FolderProps) {
  const statusComponent = status ? <FileStatus status={status as fileStatus} type="dot" /> : sideComponent;

  return (
    <AccordionItem
        data-slot="folder"
        value={name}
        className="relative border-b-0"
        {...props}
      >

    <MotionHighlightItem value={name} className="relative z-10">
        <FolderTrigger className={className} sideComponent={statusComponent} status={status}>
          {name}
        </FolderTrigger>
        </MotionHighlightItem>
        {children && (
          <AccordionContent className="relative pb-0 !ml-7 before:absolute before:-left-3 before:inset-y-0 before:w-px before:h-full before:bg-border">
            <Accordion
              type="multiple"
              defaultValue={defaultOpen}
              value={open}
              onValueChange={onOpenChange}
            >
              {children}
            </Accordion>
          </AccordionContent>
        )}
      </AccordionItem>
  );
}

interface FileProps extends Omit<React.ComponentProps<"div">, "children"> {
  name: string;
  href?: string;
  sideComponent?: React.ReactNode;
  status?: string;
}

function File({ name, className, href, sideComponent, status, ...props }: FileProps) {
  const pathname = usePathname();
  const isActive = href && pathname === href;

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "new":
        return "text-green-500";
      case "modified":
        return "text-amber-500";
      case "deleted":
        return "text-red-500";
      case "untracked":
        return "text-blue-500";
      case "staged":
        return "text-purple-500";
      default:
        return "";
    }
  };

  const statusComponent = status ? <FileStatus status={status as fileStatus} type="label" /> : sideComponent;

  const content = (
      <FileTreeItem
        data-slot="file"
        icon={<FileIcon name={name} />}
        className={cn(className, getStatusColor(status), {
          "bg-editor-background-highlight": isActive,
        })}
        sideComponent={statusComponent}
        {...props}
        >
        {name}
      </FileTreeItem>
  );

  if (href) {
    return (
      <MotionHighlightItem value={name}>
        <Link href={href}>{content}</Link>
      </MotionHighlightItem>
    );
  }

  return (
    <MotionHighlightItem value={name}>
      {content}
    </MotionHighlightItem>
  );
}

function FileTree({
  files,
  defaultOpen,
  open,
  onOpenChange,
}: FileTreeProps) {
  return (
        <Accordion
          type="multiple"
          defaultValue={defaultOpen}
          value={open}
          onValueChange={onOpenChange}
        >
          {files.map((item) => {
            if (item.type === "folder") {
              return (
                <Folder 
                  key={item.name} 
                  name={item.name}
                  status={item.status}
                  sideComponent={item.sideComponent}
                >
                  <FileTree files={item.children} />
                </Folder>
              );
            }

            return (
              <File
                key={item.name}
                name={item.name}
                href={item.href}
                status={item.status}
                sideComponent={item.sideComponent}
              />
            );
          })}
        </Accordion>
  );
}


const FileTreeTopLevel = (props: FileTreeProps) => {
  return (
    <div
    data-slot="files"
    className={cn(
      "relative size-full rounded-xl bg-background overflow-auto px-2",
      props.className
    )}
  >
    <MotionHighlight
      mode="parent"
      controlledItems={true}
      hover
      className="bg-editor-background-highlight rounded-lg pointer-events-none"
    >
      <FileTree {...props} />
    </MotionHighlight>
  </div>
  );
};

export { 
  FileTreeTopLevel as FileTree, 
  Folder, 
  File, 
  FileTreeItem,
  FileIcon,
  FileStatus,
  type FileTreeProps, 
  type FolderProps, 
  type FileProps 
};
