import { fileStatus } from "@/types/fileTree";
import { cn } from "@/utils/styles";

interface FileStatusProps {
  status: fileStatus;
  className?: string;
  type?: "dot" | "label";
}

function FileStatus({ status, className, type = "dot" }: FileStatusProps) {
  const getStatusConfig = (status: fileStatus) => {
    switch (status) {
      case "new":
        return {
          label: "N",
          color: "bg-green-500 text-white",
          bgColor: "bg-green-500",
        };
      case "modified":
        return {
          label: "M",
          color: "bg-amber-500 text-white",
          bgColor: "bg-amber-500",
        };
      case "deleted":
        return {
          label: "D",
          color: "bg-red-500 text-white",
          bgColor: "bg-red-500",
        };
      case "untracked":
        return {
          label: "U",
          color: "bg-blue-500 text-white",
          bgColor: "bg-blue-500",
        };
      case "staged":
        return {
          label: "S",
          color: "bg-purple-500 text-white",
          bgColor: "bg-purple-500",
        };
      default:
        return {
          label: "?",
          color: "bg-gray-500 text-white",
          bgColor: "bg-gray-500",
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Status indicator dot */}
      {type === "dot" && <div className={cn("rounded-full size-2", config.bgColor)} />}
      
      {/* Status label */}
      {type === "label" && (
        <span className={cn("font-medium text-xs px-1.5 py-0.5 rounded", config.color)}>
          {config.label}  
        </span>
      )}
    </div>
  );
}

export { FileStatus, type FileStatusProps }; 