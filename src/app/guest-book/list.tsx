"use server";

import { SqlHighlight } from "@/components";
import { InsertRow } from "./insert-row";
import { auth } from "@/auth";
import axios from "axios";
import { message } from "@/types/guest-book";

async function GuestBookList() {
  const session = await auth();
  const bookData = await axios.get<message[]>(
    "http://localhost:3000/api/guest-book"
  );

  const hasSent = Boolean(
    session && bookData.data.some((message) => message.id === session.user.id)
  );

  return (
    <div>
      <div className="mt-8 flex-col">
        <InsertRow hasSent={hasSent} />
        <span>
          <SqlHighlight>SELECT</SqlHighlight>{" "}
          <em>username, message, created_at</em>{" "}
          <SqlHighlight>FROM</SqlHighlight> <em>guestbook</em>;
        </span>
      </div>
    </div>
  );
}

export { GuestBookList };
