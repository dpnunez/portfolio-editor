"use client";

import { SqlHighlight } from "@/components";

function GuestBookList() {
  return (
    <div>
      <div className="mt-8">
        <SqlHighlight>SELECT</SqlHighlight>{" "}
        <em>username, message, created_at</em> <SqlHighlight>FROM</SqlHighlight>{" "}
        <em>guestbook</em>;
      </div>
    </div>
  );
}

export { GuestBookList };
