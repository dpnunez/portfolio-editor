-- CreateTable
CREATE TABLE "contact" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "email" TEXT,
    "message" TEXT,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);
