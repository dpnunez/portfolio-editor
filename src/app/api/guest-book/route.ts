import { auth } from "@/auth";
import { NextResponse } from "next/server";

const POST = auth(function POST(req) {
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

  return NextResponse.json({
    message: "authenticated",
  });
});

export { POST };
