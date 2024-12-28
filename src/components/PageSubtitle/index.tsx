import { cn } from "@/utils/styles";
import { HTMLAttributes, ReactNode } from "react";

interface PageSubtitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

function PageSubtitle({ children, className }: PageSubtitleProps) {
  return <h2 className={cn("text-lg text-gray-600", className)}>{children}</h2>;
}

export { PageSubtitle };
