import { FadeIn } from "@/components";
import { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
}

function Template({ children }: TemplateProps) {
  return <FadeIn>{children}</FadeIn>;
}

export default Template;
