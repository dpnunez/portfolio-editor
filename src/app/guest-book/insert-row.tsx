"use client";
import { signIn, useSession } from "next-auth/react";

function InsertRow() {
  const { data, status, update } = useSession();

  const handleSendMessage = async () => {
    try {
      const response = await fetch("/api/guest-book", {
        method: "POST",
        body: JSON.stringify({
          message: "hello",
        }),
      });
    } catch {}
  };

  return (
    <div>
      {status === "unauthenticated" && (
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      )}
      {status === "authenticated" && (
        <div>
          <p>welcome, {data.user?.name}</p>
          <button onClick={handleSendMessage} type="button">
            handleSendMessage
          </button>
          <button onClick={() => update()}>update</button>
        </div>
      )}
      {status === "loading" && <p>loading...</p>}
    </div>
  );
}

export { InsertRow };
