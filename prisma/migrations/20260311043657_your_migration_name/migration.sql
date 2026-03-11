/*
  Warnings:

  - The primary key for the `company_location` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `location_id` on the `company_location` table. All the data in the column will be lost.
  - The required column `id` was added to the `company_location` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "company_location" DROP CONSTRAINT "company_location_pkey",
DROP COLUMN "location_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "company_location_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "boycotts" (
    "id" TEXT NOT NULL,
    "company_id" VARCHAR(255) NOT NULL,
    "location_id" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "reason" VARCHAR(4096) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "boycotts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buycotts" (
    "id" TEXT NOT NULL,
    "company_id" VARCHAR(255) NOT NULL,
    "location_id" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "reason" VARCHAR(4096) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "buycotts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "validated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pledges" (
    "id" TEXT NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,
    "company_id" VARCHAR(255) NOT NULL,
    "location_id" VARCHAR(255) NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "reason" VARCHAR(4096) NOT NULL,

    CONSTRAINT "pledges_pkey" PRIMARY KEY ("id")
);
