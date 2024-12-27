import * as motion from "motion/react-client";

function ActiveIndicator() {
  return (
    <motion.div
      className="hidden md:flex absolute bottom-0 left-0 w-full bg-editor-text-primary h-[2px]"
      layoutId="active-underline"
    />
  );
}

export { ActiveIndicator };
