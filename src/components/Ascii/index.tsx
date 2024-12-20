import { cn } from "@/utils/styles";

interface ComputerBackgroundProps {
  className?: string;
  children: string;
}
function Ascii({ className, children }: ComputerBackgroundProps) {
  return (
    <pre
      data-testid="ascii"
      className={cn("text-2xl pointer-events-none", className)}
    >
      {children}
    </pre>
  );
}

export { Ascii };
