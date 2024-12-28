"use client";
import { FormButton, Input } from "@/components";
import { motion } from "motion/react";
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
    switch (buttonStatus) {
      case "unauthenticated":
        return {
          type: "button",
          onClick: handleSignIn,
        } as const;
      case "authenticated":
      case "success":
      case "sent":
      case "loading":
      case "error":
      default:
        return {
          type: "submit",
        } as const;
    }
  }, [buttonStatus, handleSignIn]);

  const formButtonStatus = useMemo(() => {
    switch (buttonStatus) {
      case "unauthenticated":
      case "authenticated":
        return "idle";
      default:
        return buttonStatus;
    }
  }, [buttonStatus]);

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
    <motion.form
      layout
      onSubmit={onSubmit}
      className="flex-col md:flex-row flex gap-4"
    >
      <motion.div layout className="flex-1">
        <Input
          disabled={requestStatus === "sent"}
          placeholder={
            requestStatus === "sent"
              ? "You had already signed this book!"
              : "message"
          }
          {...register("message", {
            required: true,
          })}
        />
      </motion.div>
      <FormButton
        {...buttonProps}
        className="md:w-48 md:flex-none flex-1"
        type={buttonStatus === "unauthenticated" ? "button" : "submit"}
        ErrorSlot="Error"
        IdleSlot={
          buttonStatus === "authenticated" ? (
            <>
              <IoMdMailUnread />
              Send Message
            </>
          ) : (
            <>
              <FaGithub />
              GitHub SignIn
            </>
          )
        }
        LoadingSlot="loading"
        SentSlot="Tks!"
        SuccessSlot="Message Sent"
        status={formButtonStatus}
      />
    </motion.form>
  );
}

export { InsertRow };
