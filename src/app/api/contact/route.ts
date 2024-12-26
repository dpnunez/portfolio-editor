import prisma from "@/db/prisma";
import { contactSchema } from "@/validations";
import { NextResponse } from "next/server";

const POST = async (req: Request) => {
  const body = await new Response(req.body).json();

  const bodyParsed = contactSchema.safeParse(body);

  if (!bodyParsed.success) {
    return NextResponse.json(
      {
        message: "missing fields",
      },
      {
        status: 400,
      }
    );
  }

  try {
    await prisma.contact.create({
      data: bodyParsed.data,
    });

    return NextResponse.json({
      message: "success",
    });
  } catch {
    return NextResponse.json(
      {
        message: "error",
      },
      {
        status: 500,
      }
    );
  }
};

export { POST };
