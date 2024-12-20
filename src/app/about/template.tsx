import { FadeIn } from "@/components";
import { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
}

function Template({ children }: TemplateProps) {
  return <FadeIn className="flex flex-1 h-full">{children}</FadeIn>;
}

export default Template;
