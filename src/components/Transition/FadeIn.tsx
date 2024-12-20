import * as motion from "motion/react-client";

interface FadeInProps {
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
