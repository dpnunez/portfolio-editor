"use client";
import { FadeIn, Input } from "@/components";
import { AnimatePresence, motion } from "motion/react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useCallback, useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import axios from "axios";

function InsertRow() {
  const [requestStatus, setRequestStatus] = useState<
    "idle" | "loading" | "success" | "error" | "sent"
  >("idle");
  const { register, handleSubmit, reset } = useForm<{
    message: string;
  }>();
  const { status } = useSession();

  const buttonStatus = useMemo(() => {
    if (requestStatus === "loading") return "loading";
    if (requestStatus === "success") return "success";
    if (requestStatus === "sent") return "sent";
    if (requestStatus === "error") return "error";

    return status;
  }, [status, requestStatus]);

  const handleSignIn = useCallback(async () => {
    await signIn("github");
  }, []);

  const buttonProps = useMemo(() => {
    if (buttonStatus === "unauthenticated") {
      return {
        type: "button",
        onClick: handleSignIn,
      } as const;
    }

    if (buttonStatus === "authenticated") {
      return {
        type: "submit",
      } as const;
    }

    if (buttonStatus === "success") {
      return {
        animate: {
          backgroundColor: "var(--color-green)",
        },
        type: "button",
      } as const;
    }

    if (buttonStatus === "sent") {
      return {
        type: "submit",
        disabled: true,
      } as const;
    }

    if (buttonStatus === "loading") {
      return {
        type: "submit",
        disabled: true,
      } as const;
    }

    if (buttonStatus === "error") {
      return {
        type: "submit",
        animate: {
          backgroundColor: "var(--color-red)",
        },
        disabled: true,
      } as const;
    }
  }, [buttonStatus, handleSignIn]);

  const onSubmit = handleSubmit(async (e) => {
    try {
      setRequestStatus("loading");
      await axios.post("/api/guest-book", e);

      setRequestStatus("success");
      reset();
      setTimeout(() => {
        setRequestStatus("sent");
      }, 2000);
    } catch (err) {
      setRequestStatus("error");
      setTimeout(() => {
        setRequestStatus("idle");
      }, 2000);
      console.log(err);
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex gap-4">
      <Input
        className="flex-1"
        placeholder="message"
        {...register("message", {
          required: true,
        })}
      />
      <motion.button
        className="w-[200px] bg-foreground/10 rounded-md flex items-center justify-center"
        {...buttonProps}
      >
        <AnimatePresence mode="wait">
          {buttonStatus === "loading" && (
            <FadeIn className="flex items-center">loading</FadeIn>
          )}
          {buttonStatus === "unauthenticated" && (
            <FadeIn className="flex items-center gap-2">
              <FaGithub />
              GitHub SignIn
            </FadeIn>
          )}
          {buttonStatus === "authenticated" && (
            <FadeIn className="flex items-center gap-2">
              <IoMdMailUnread />
              Send Message
            </FadeIn>
          )}
          {buttonStatus === "success" && (
            <FadeIn className="flex items-center">Message Sent</FadeIn>
          )}
          {buttonStatus === "sent" && (
            <FadeIn className="flex items-center">Tks!</FadeIn>
          )}
          {buttonStatus === "error" && (
            <FadeIn className="flex items-center">Error</FadeIn>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}

export { InsertRow };
