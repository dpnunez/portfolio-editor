"use client";
import { FadeIn, Input } from "@/components";
import { AnimatePresence, motion } from "motion/react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Dispatch, useCallback, useMemo } from "react";
import { FaGithub } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import axios from "axios";
import { message } from "@/types/guest-book";
import { requestStatusType } from "./list";

interface InsertRowProps {
  pushOnList: (message: message) => void;
  requestStatus: requestStatusType;
  handleChangeRequestStatus: Dispatch<React.SetStateAction<requestStatusType>>;
}

function InsertRow({
  pushOnList,
  requestStatus,
  handleChangeRequestStatus,
}: InsertRowProps) {
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
      handleChangeRequestStatus("loading");
      const response = await axios.post("/api/guest-book", e);

      pushOnList(response.data);

      handleChangeRequestStatus("success");
      reset();
      setTimeout(() => {
        handleChangeRequestStatus((current) => {
          if (current === "success") return "sent";
          return current;
        });
      }, 2000);
    } catch (err) {
      handleChangeRequestStatus("error");
      setTimeout(() => {
        handleChangeRequestStatus("idle");
      }, 2000);
      console.log(err);
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex gap-4">
      <Input
        disabled={requestStatus === "sent"}
        className="flex-1"
        placeholder={
          requestStatus === "sent"
            ? "You had already signed this book!"
            : "message"
        }
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
