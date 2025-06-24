"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/styles";
import { MotionHighlightItem } from "../";

type FileTreeItemProps = React.ComponentProps<"div"> & {
  icons?: {
    close: React.ReactNode;
    open: React.ReactNode;
  };
  icon?: React.ReactNode;
  open?: boolean;
  sideComponent?: React.ReactNode;
  sideComponentPosition?: "left" | "right";
};

function FileTreeItem({
  children,
  className,
  icons,
  icon,
  open,
  sideComponent,
  sideComponentPosition = "right",
  ...props
}: FileTreeItemProps) {
  return (
    <MotionHighlightItem className="size-full">
      <div
        data-slot="file-tree-item"
        className={cn(
          "flex items-center truncate gap-2 p-2 h-10 relative z-10 rounded-lg w-full cursor-default",
          className
        )}
        {...props}
      >
        {sideComponent && sideComponentPosition === "left" && (
          <span className="flex">{sideComponent}</span>
        )}
        <span className="flex [&_svg]:size-4 [&_svg]:shrink-0 items-center gap-2 shrink-1 truncate">
          {icon
            ? typeof icon !== "string"
              ? icon
              : null
            : icons && (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={open ? "open" : "close"}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                  >
                    {open
                      ? typeof icons.open !== "string"
                        ? icons.open
                        : null
                      : typeof icons.close !== "string"
                        ? icons.close
                        : null}
                  </motion.span>
                </AnimatePresence>
              )}
          <span className="shrink-1 text-sm block truncate break-words">
            {children}
          </span>
        </span>
        {sideComponent && sideComponentPosition === "right" && (
          <span className="flex ml-auto">{sideComponent}</span>
        )}
      </div>
    </MotionHighlightItem>
  );
}

export { FileTreeItem, type FileTreeItemProps };
