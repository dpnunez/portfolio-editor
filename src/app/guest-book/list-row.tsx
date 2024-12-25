"use client";

import { TableCell, TableRow } from "@/components";
import * as motion from "motion/react-client";
import { message } from "@/types/guest-book";
import { useSession } from "next-auth/react";
import { FaTrash } from "react-icons/fa6";
import { PanInfo } from "motion/react";

interface BookEntryProps extends message {
  index: number;
  handleDelete: (id: string) => void;
}

function BookEntry({
  message,
  id,
  created_at,
  index,
  handleDelete,
}: BookEntryProps) {
  const { data } = useSession();
  const currentUserUsername = data?.user?.username;
  const canDelete = currentUserUsername === id;
  const DELETE_BUTTON_WIDTH = 150;
  const rowProps = canDelete
    ? ({
        drag: "x",
        dragConstraints: { left: -DELETE_BUTTON_WIDTH, right: 0 },
        onDragEnd: (
          _event: MouseEvent | TouchEvent | PointerEvent,
          info: PanInfo
        ) => handleDragEnd(info),
      } as const)
    : {};

  const handleDragEnd = (info: PanInfo) => {
    const dragDistance = info.offset.x;

    if (dragDistance < -DELETE_BUTTON_WIDTH) {
      onDelete();
    }
  };

  const onDelete = () => {
    handleDelete(id);
  };

  return (
    <TableRow
      key={id}
      {...rowProps}
      className="relative cursor-pointer overflow-hidden"
      initial={{
        opacity: 0,
        y: 10,
      }}
      dragMomentum={false}
      style={{
        borderCollapse: "collapse",
      }}
      onDragEnd={(_, info) => handleDragEnd(info)}
      animate={{
        opacity: 1,
        y: 0,
        backgroundColor: canDelete
          ? "var(--editor-background-highlight)"
          : "transparent",
      }}
      exit={{
        lineHeight: 0,
      }}
      transition={{
        delay: index * 0.1,
      }}
    >
      <TableCell
        exit={{
          opacity: 0,
          height: 0,
          padding: 0,
        }}
      >
        @{id}
      </TableCell>
      <TableCell
        exit={{
          opacity: 0,
          height: 0,
          padding: 0,
        }}
      >
        {message}
      </TableCell>
      <TableCell
        exit={{
          opacity: 0,
          height: 0,
          padding: 0,
        }}
      >
        {created_at}
      </TableCell>
      {currentUserUsername === id && (
        <motion.td
          style={{
            width: DELETE_BUTTON_WIDTH,
            right: -DELETE_BUTTON_WIDTH,
          }}
          onClick={onDelete}
          className="absolute h-full z-0 bg-red-600 flex items-center justify-center gap-3 overflow-hidden text-white"
        >
          <FaTrash />
          delete
        </motion.td>
      )}
    </TableRow>
  );
}

export { BookEntry };
