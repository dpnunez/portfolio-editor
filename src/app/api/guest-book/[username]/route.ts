/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "@/auth";
import prisma from "@/db/prisma";

const DELETE = auth(async function DELETE(req, res) {
  const { username } = res.params as { username: string };
  const loggedUser = req.auth?.user.username;
  const canDelete = username === loggedUser;

  if (!canDelete) {
    return Response.json(
      {
        message: "unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  await prisma.guest_book.delete({
    where: {
      id: username,
    },
  });

  return Response.json({
    message: "deleted",
  });
}) as any;
// TODO: any type is used because of the auth function not give support to nextjs 15 api routes yet.
// Remove it when it is supported.

export { DELETE };
