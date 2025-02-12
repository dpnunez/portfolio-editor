"use client";
import { captchaStatus } from "@/types/captcha";
import { useScript } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

const useCaptcha = (containerId: string) => {
  const [challengeStatus, setChallengeStatus] =
    useState<captchaStatus>("loading");
  const [challengeToken, setChallengeToken] = useState<string | null>(null);

  useScript(
    "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback",
    {
      removeOnUnmount: true,
    }
  );

  useEffect(() => {
    window.onloadTurnstileCallback = function () {
      turnstile.render(containerId, {
        sitekey: process.env.NEXT_PUBLIC_CLIENT_TURNSTILE_KEY!,
        callback: function (token: string) {
          setChallengeStatus("success");
          setChallengeToken(token);
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

  return { challengeStatus, challengeToken };
};
export { useCaptcha };
