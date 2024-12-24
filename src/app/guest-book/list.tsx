"use client";

import {
  SqlHighlight,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";
import { InsertRow } from "./insert-row";
import { useState } from "react";
import { message } from "@/types/guest-book";

interface GuestBookListProps {
  hasSent: boolean;
  initialBookData: message[];
}

function GuestBookList({ hasSent, initialBookData }: GuestBookListProps) {
  const [bookData, setBookData] = useState<message[]>(initialBookData);

  const addMessageOnList = (message: message) => {
    setBookData([message, ...bookData]);
  };

  return (
    <div>
      <div className="mt-8 flex-col">
        <InsertRow pushOnList={addMessageOnList} hasSent={hasSent} />
        <span>
          <SqlHighlight>SELECT</SqlHighlight>{" "}
          <em>username, message, created_at</em>{" "}
          <SqlHighlight>FROM</SqlHighlight> <em>guestbook</em>;
        </span>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookData.map((message) => (
            <TableRow key={message.id}>
              <TableCell>@{message.id}</TableCell>
              <TableCell>{message.message}</TableCell>
              <TableCell>{message.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export { GuestBookList };
