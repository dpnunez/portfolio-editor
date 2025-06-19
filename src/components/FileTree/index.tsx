"use client";

import * as React from "react";
import { fileTreeType } from "@/types/fileTree";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  useAccordionItem,
} from "@/components/Accordion";
import { FileIcon } from "lucide-react";
import { FolderIcon, FolderOpenIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/styles";
import { MotionHighlight, MotionHighlightItem } from "@/components/MotionHighlight";
import { FileButton } from "@/components/FileButton";
import { ComponentProps } from "react";

interface FileTreeProps {
  files: fileTreeType;
  className?: string;
  defaultOpen?: string[];
  open?: string[];
  onOpenChange?: (open: string[]) => void;
}

interface FolderTriggerProps extends ComponentProps<typeof AccordionTrigger> {
  sideComponent?: React.ReactNode;
}

function FolderTrigger({
  children,
  className,
  sideComponent,
  ...props
}: FolderTriggerProps) {
  const { isOpen } = useAccordionItem();

  return (
    <AccordionTrigger
      data-slot="folder-trigger"
      className="h-auto py-0 hover:no-underline font-normal relative z-10 max-w-full"
      {...props}
      chevron={false}
    >
      <FileButton
        open={isOpen}
        icons={{ open: <FolderOpenIcon />, close: <FolderIcon /> }}
        className={className}
        sideComponent={sideComponent}
      >
        {children}
      </FileButton>
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
}

function Folder({
  children,
  className,
  name,
  open,
  defaultOpen,
  onOpenChange,
  sideComponent,
  ...props
}: FolderProps) {
  return (
    <AccordionItem
        data-slot="folder"
        value={name}
        className="relative border-b-0"
        {...props}
      >

    <MotionHighlightItem value={name} className="relative z-10">
        <FolderTrigger className={className} sideComponent={sideComponent}>
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
}

function File({ name, className, href, sideComponent, ...props }: FileProps) {
  const pathname = usePathname();
  const isActive = href && pathname === href;

  const content = (

      <FileButton
        data-slot="file"
        icon={<FileIcon />}
        className={cn(className, {
          "bg-editor-background-highlight": isActive,
        })}
        sideComponent={sideComponent}
        {...props}
        >
        {name}
      </FileButton>
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
          className="px-2"
          defaultValue={defaultOpen}
          value={open}
          onValueChange={onOpenChange}
        >
          {files.map((item) => {
            if (item.type === "folder") {
              return (
                <Folder key={item.name} name={item.name}>
                  <FileTree files={item.children} />
                </Folder>
              );
            }

            return (
              <File
                key={item.name}
                name={item.name}
                href={item.href}
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
      "relative size-full rounded-xl bg-background overflow-auto",
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

export { FileTreeTopLevel as FileTree, Folder, File, type FileTreeProps, type FolderProps, type FileProps };
