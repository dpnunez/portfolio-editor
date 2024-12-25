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

function GuestBookList({ hasSent, initialBookData }: GuestBookListProps) {
  const [bookData, setBookData] = useState<message[]>(initialBookData);

  const addMessageOnList = (message: message) => {
    setBookData([message, ...bookData]);
  };

  const deleteMessage = (id: string) => {
    setBookData(bookData.filter((message) => message.id !== id));
  };

  return (
    <div>
      <div className="mt-8 flex-col">
        <InsertRow pushOnList={addMessageOnList} hasSent={hasSent} />
        <div className="my-8">
          <SqlHighlight>SELECT</SqlHighlight>{" "}
          <em>username, message, created_at</em>{" "}
          <SqlHighlight>FROM</SqlHighlight> <em>guestbook</em>;
        </div>
      </div>

      <Table>
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
