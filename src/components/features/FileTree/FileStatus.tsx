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
          color: "text-green-500",
          bgColor: "bg-green-500",
        };
      case "modified":
        return {
          label: "M",
          color: "text-amber-500",
          bgColor: "bg-amber-500",
        };
      case "deleted":
        return {
          label: "D",
          color: "text-red-500",
          bgColor: "bg-red-500",
        };
      case "untracked":
        return {
          label: "U",
          color: "text-blue-500",
          bgColor: "bg-blue-500",
        };
      case "staged":
        return {
          label: "S",
          color: "text-purple-500",
          bgColor: "bg-purple-500",
        };
      default:
        return {
          label: "?",
          color: "text-gray-500",
          bgColor: "bg-gray-500",
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div
      className={cn("flex justify-center items-center gap-2 w-4", className)}
    >
      {/* Status indicator dot */}
      {type === "dot" && (
        <div className={cn("rounded-full size-2", config.bgColor)} />
      )}

      {/* Status label */}
      {type === "label" && (
        <span
          className={cn(
            "font-bold text-xs px-1.5 py-0.5 rounded",
            config.color
          )}
        >
          {config.label}
        </span>
      )}
    </div>
  );
}

export { FileStatus, type FileStatusProps };
