/*
  Warnings:

  - Made the column `clinicStatus` on table `Clinic` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Clinic" ALTER COLUMN "clinicStatus" SET NOT NULL;
