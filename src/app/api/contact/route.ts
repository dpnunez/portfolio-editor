import prisma from "@/db/prisma";
import { contactSchema } from "@/validations";
import axios from "axios";
import { NextResponse } from "next/server";

const POST = async (req: Request) => {
  const body = await new Response(req.body).json();
  const challengeToken = body.challengeToken;

  const formData = new FormData();
  formData.append("secret", process.env.TURNSTILE_PRIVATE_KEY!);
  formData.append("response", challengeToken);

  const turnstileUrl = `https://challenges.cloudflare.com/turnstile/v0/siteverify`;

  const result = await axios.post(turnstileUrl, formData);

  if (!result.data.success) {
    return NextResponse.json(
      {
        message: "challenge failed",
      },
      {
        status: 400,
      }
    );
  }

  const bodyParsed = contactSchema.safeParse(body.contactData);

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
