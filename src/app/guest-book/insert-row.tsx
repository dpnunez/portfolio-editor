"use client";
import { signIn, useSession } from "next-auth/react";

function InsertRow() {
  const { status } = useSession();

  return <form></form>;
}

export { InsertRow };
