import { captchaStatus } from "@/types/captcha";
import { cn } from "@/utils/styles";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

interface CaptchaStatusProps {
  status: captchaStatus;
}
function CaptchaStatus({ status }: CaptchaStatusProps) {
  return (
    <div className="flex h-5 items-center">
      <div className="relative">
        <motion.div
          className={cn("size-2 rounded-full", {
            "bg-green-600": status === "success",
            "bg-red-600": status === "error",
            "bg-yellow-600": status === "loading",
          })}
        />
        <motion.div
          className={cn("animate-ping size-2 rounded-full absolute top-0", {
            "bg-green-600": status === "success",
            "bg-red-600": status === "error",
            "bg-yellow-600": status === "loading",
          })}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.span
          key={status}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: 20,
            opacity: 0,
          }}
          className="text-sm"
          style={{ marginLeft: "0.5rem" }}
        >
          {status === "loading" && "Captcha challenge is being verified"}
          {status === "success" && "Captcha challenge was successful verified"}
          {status === "error" && "Captcha challenge failed"}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export { CaptchaStatus };
