import * as motion from "motion/react-client";
import { ComponentProps } from "react";

interface FadeInProps extends ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  className?: string;
}

function FadeIn({ children, ...props }: FadeInProps) {
  return (
    <motion.div
      className="flex-1 flex items-start"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { FadeIn };
