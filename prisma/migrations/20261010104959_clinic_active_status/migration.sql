-- CreateEnum
CREATE TYPE "ClinicStatus" AS ENUM ('OPERATING', 'NON_OPERATING');

-- AlterTable
ALTER TABLE "Clinic" ADD COLUMN     "clinicStatus" "ClinicStatus" DEFAULT 'OPERATING';
