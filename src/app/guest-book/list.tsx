"use client";

import {
  SqlHighlight,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";
import { InsertRow } from "./insert-row";
import { useState } from "react";
import { message } from "@/types/guest-book";
import { AnimatePresence } from "motion/react";
import { BookEntry } from "./list-row";

interface GuestBookListProps {
  hasSent: boolean;
  initialBookData: message[];
}

export type requestStatusType =
  | "idle"
  | "loading"
  | "success"
  | "error"
  | "sent";

function GuestBookList({ hasSent, initialBookData }: GuestBookListProps) {
  const [bookData, setBookData] = useState<message[]>(initialBookData);
  const [requestStatus, setRequestStatus] = useState<requestStatusType>(
    hasSent ? "sent" : "idle"
  );

  const addMessageOnList = (message: message) => {
    setBookData([message, ...bookData]);
  };

  const deleteMessage = (id: string) => {
    setBookData(bookData.filter((message) => message.id !== id));
    setRequestStatus("idle");
  };

  return (
    <div>
      <div className="mt-8 flex-col">
        <InsertRow
          handleChangeRequestStatus={setRequestStatus}
          requestStatus={requestStatus}
          pushOnList={addMessageOnList}
        />
        <div className="my-8">
          <SqlHighlight>SELECT</SqlHighlight>{" "}
          <em>username, message, created_at</em>{" "}
          <SqlHighlight>FROM</SqlHighlight> <em>guestbook</em>;
        </div>
      </div>

      <Table className="overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead>username</TableHead>
            <TableHead>message</TableHead>
            <TableHead className="text-right">created_at</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence>
            {bookData.map((message, index) => (
              <BookEntry
                key={message.id}
                handleDelete={deleteMessage}
                {...message}
                index={index}
              />
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
}

export { GuestBookList };
