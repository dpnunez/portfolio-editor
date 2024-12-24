import { auth } from "@/auth";
import { NextResponse } from "next/server";
import prisma from "@/db/prisma";

const POST = auth(async function POST(req) {
  if (!req.auth) {
    return NextResponse.json(
      {
        message: "unauthenticated",
      },
      {
        status: 401,
      }
    );
  }
  const id = req.auth?.user.id as string;
  const message = await new Response(req.body).json();

  try {
    await prisma.guest_book.create({
      data: {
        message: message.message,
        id,
      },
    });

    return NextResponse.json({
      message: "created",
    });
  } catch {
    // TODO: handle already exists error and other errors
    return NextResponse.json(
      {
        message: "error",
      },
      {
        status: 500,
      }
    );
  }
});

async function GET() {
  const messages = await prisma.guest_book.findMany({
    select: {
      id: true,
      message: true,
      created_at: true,
    },
  });

  return NextResponse.json(messages);
}

export { POST, GET };
