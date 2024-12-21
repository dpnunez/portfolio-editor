const aboutSnippet = `
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
import { FaFolder } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/styles";
import * as motion from "motion/react-client";
import { ComponentProps } from "react";

interface FileTreeProps {
  files: fileTreeType;
  className?: string;
}

function FileTree({ files, className }: FileTreeProps) {
  const pathname = usePathname();

  return (
    <div className={className}>
      {files.map((item, i) => {
        const isFolder = item.type === "folder";
        const isActive = !isFolder && pathname === item.href;

        if (isFolder)
          return (
            <Accordion key={item.name} type="single" collapsible>
              <AccordionItem value="1" className="border-b-0">
                <AccordionTrigger className="[&>.indicator]:hidden [&[data-state=open]>*>.folder-indicator]:rotate-0">
                  <TreeRowContainer
                    className="px-8"
                    transition={{
                      delay: 0.1 * i,
                      ease: "backInOut",
                      duration: 0.3,
                    }}
                  >
                    <ChevronDown
                      size={16}
                      className="folder-indicator transition-all -rotate-90 absolute left-2"
                    />
                    <TreeRowIcon>
                      <FaFolder size={14} />
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
              transition={{
                delay: 0.1 * i,
                ease: "backInOut",
                duration: 0.3,
              }}
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

interface TreeRowContainerProps extends ComponentProps<typeof motion.div> {
  children: React.ReactNode;
}

function TreeRowContainer({
  children,
  className,
  ...props
}: TreeRowContainerProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{
          y: "150%",
        }}
        animate={{
          y: 0,
        }}
        className={cn(
          "flex items-center px-6 relative text-lg flex-1 rounded-md mx-2 transition-all",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}

function TreeRowIcon({ children }: { children: React.ReactNode }) {
  return <div className="w-6">{children}</div>;
}

export { FileTree, TreeRowContainer, TreeRowIcon };

`;

export { aboutSnippet };
