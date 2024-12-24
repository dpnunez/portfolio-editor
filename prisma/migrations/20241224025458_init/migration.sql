-- CreateTable
CREATE TABLE "guest-book" (
    "id" TEXT NOT NULL,
    "message" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "guest-book_pkey" PRIMARY KEY ("id")
);
