import * as motion from "motion/react-client";
import { ComponentProps } from "react";

interface FadeInProps extends ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  className?: string;
}

function FadeIn({ children, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { FadeIn };
