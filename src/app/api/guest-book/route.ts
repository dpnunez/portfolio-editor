/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "@/auth";
import prisma from "@/db/prisma";

const POST = auth(async function POST(req) {
  if (!req.auth) {
    return Response.json(
      {
        message: "unauthenticated",
      },
      {
        status: 401,
      }
    );
  }
  const id = req.auth?.user.username as string;
  const message = await new Response(req.body).json();

  try {
    const response = await prisma.guest_book.create({
      data: {
        message: message.message,
        id,
      },
    });

    return Response.json(response);
  } catch {
    // TODO: handle already exists error and other errors
    return Response.json(
      {
        message: "error",
      },
      {
        status: 500,
      }
    );
  }
}) as any;
// TODO: any type is used because of the auth function not give support to nextjs 15 api routes yet.
// Remove it when it is supported.

async function GET() {
  const messages = await prisma.guest_book.findMany({
    select: {
      id: true,
      message: true,
      created_at: true,
    },
  });

  return Response.json(messages);
}

export { POST, GET };
