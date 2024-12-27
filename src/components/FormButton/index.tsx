import { formStatus } from "@/types/form";
import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "../Button";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  SuccessSlot: ReactNode;
  ErrorSlot: ReactNode;
  LoadingSlot: ReactNode;
  IdleSlot: ReactNode;
  SentSlot: ReactNode;
  status: formStatus;
}

function FormButton({
  ErrorSlot,
  IdleSlot,
  LoadingSlot,
  SuccessSlot,
  SentSlot,
  status,
  ...props
}: FormButtonProps) {
  const content = useMemo(() => {
    switch (status) {
      case "idle":
        return IdleSlot;
      case "loading":
        return LoadingSlot;
      case "success":
        return SuccessSlot;
      case "error":
        return ErrorSlot;
      case "sent":
        return SentSlot;
    }
  }, [status, ErrorSlot, IdleSlot, LoadingSlot, SuccessSlot, SentSlot]);

  const buttonVariant = useMemo(() => {
    if (status === "success") return "success";
    if (status === "error") return "destructive";
    return "default";
  }, [status]);

  const isDisabled = status === "loading" || status === "sent";

  return (
    <Button asChild variant={buttonVariant} disabled={isDisabled} {...props}>
      <motion.button layout className="overflow-hidden">
        <ContentAnimationContainer motionKey={status}>
          {content}
        </ContentAnimationContainer>
      </motion.button>
    </Button>
  );
}

interface ContentAnimationContainerProps {
  children: ReactNode;
  motionKey: string;
}
function ContentAnimationContainer({
  children,
  motionKey,
}: ContentAnimationContainerProps) {
  return (
    <motion.div
      className="flex gap-2 items-center"
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      key={motionKey}
      layout
    >
      {children}
    </motion.div>
  );
}

export { FormButton };
