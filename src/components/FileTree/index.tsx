"use client";
import { fileTreeType } from "@/types/fileTree";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
import { ChevronDown } from "lucide-react";
import { SiTypescript } from "react-icons/si";
import { PiFolderSimpleDuotone } from "react-icons/pi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/styles";

interface FileTreeProps {
  files: fileTreeType;
  className?: string;
}

function FileTree({ files, className }: FileTreeProps) {
  const pathname = usePathname();

  return (
    <div className={className}>
      {files.map((item) => {
        const isFolder = item.type === "folder";
        const isActive = !isFolder && pathname === item.href;

        if (isFolder)
          return (
            <Accordion key={item.name} type="single" collapsible>
              <AccordionItem value="1" className="border-b-0">
                <AccordionTrigger className="[&>.indicator]:hidden [&[data-state=open]>*>.folder-indicator]:rotate-0">
                  <TreeRowContainer>
                    <ChevronDown
                      size={16}
                      className="folder-indicator transition-all -rotate-90 absolute left-2"
                    />
                    <TreeRowIcon>
                      <PiFolderSimpleDuotone size={14} />
                    </TreeRowIcon>
                    {item.name}
                  </TreeRowContainer>
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <FileTree className="ml-4" files={item.children} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        return (
          <Link key={item.name} href={item.href}>
            <TreeRowContainer
              key={item.name}
              className={cn("hover:bg-editor-hover", {
                "bg-editor-background-highlight": isActive,
              })}
            >
              <TreeRowIcon>
                <SiTypescript size={14} />
              </TreeRowIcon>
              {item.name}
            </TreeRowContainer>
          </Link>
        );
      })}
    </div>
  );
}

function TreeRowContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center px-8 relative text-lg flex-1 rounded-md mx-1 transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}

function TreeRowIcon({ children }: { children: React.ReactNode }) {
  return <div className="w-6">{children}</div>;
}

export { FileTree, TreeRowContainer, TreeRowIcon };
