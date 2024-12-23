"use client";

"use client";

import { SqlHighlight } from "@/components";
import { InsertRow } from "./insert-row";

function GuestBookList() {
  return (
    <div>
      <div className="mt-8 flex-col">
        <InsertRow />
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
