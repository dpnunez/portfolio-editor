"use client";
import { useScript } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

const useCaptcha = (containerId: string) => {
  const [challengeStatus, setChallengeStatus] = useState<
    "loading" | "success" | "error" | "expired"
  >("loading");

  useScript(
    "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
  );

  useEffect(() => {
    window.onloadTurnstileCallback = function () {
      turnstile.render(containerId, {
        sitekey: process.env.NEXT_PUBLIC_CLIENT_TURNSTILE_KEY!,
        callback: function (token: string) {
          setChallengeStatus("success");
          console.log(`Challenge Success ${token}`);
        },
        "error-callback": () => {
          setChallengeStatus("error");
          console.log("Challenge Error");
        },
        "expired-callback": () => {
          setChallengeStatus("expired");
          console.log("Challenge Expired");
        },
      });
    };
  }, [containerId]);

  return challengeStatus;
};
export { useCaptcha };
