"use client";
import { signIn } from "@/auth";
import { useSession } from "next-auth/react";

function InsertRow() {
  const { data, status } = useSession();

  return (
    <div>
      {status === "unauthenticated" && (
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      )}
      {status === "authenticated" && <p>welcome, {data.user?.name}</p>}
      {status === "loading" && <p>loading...</p>}
    </div>
  );
}

export { InsertRow };
