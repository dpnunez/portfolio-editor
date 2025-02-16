import { Tooltip, TooltipContent, TooltipTrigger } from "@/components";
import { ProjectType } from "@/types/projects";
import { useMemo } from "react";
import { FaPerson } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";

interface ProjectTypeIndicatorProps {
  projectType?: ProjectType;
}

function ProjectTypeIndicator({ projectType }: ProjectTypeIndicatorProps) {
  const icon = useMemo(() => {
    switch (projectType) {
      case "personal":
        return <FaPerson />;
      case "professional":
        return <MdOutlineWork />;
      default:
        return null;
    }
  }, [projectType]);

  const tooltipText = useMemo(() => {
    switch (projectType) {
      case "personal":
        return "Personal project";
      case "professional":
        return "Professional project";
      default:
        return null;
    }
  }, [projectType]);

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="bg-editor-background-highlight rounded-full items-center flex justify-center w-8 h-8 hover:scale-110 hover:bg-background/25 transition-all cursor-help">
          {icon}
        </div>
      </TooltipTrigger>
      <TooltipContent>{tooltipText}</TooltipContent>
    </Tooltip>
  );
}

export { ProjectTypeIndicator };
