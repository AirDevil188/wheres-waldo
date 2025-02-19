/*
  Warnings:

  - A unique constraint covering the columns `[level]` on the table `Target` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Target_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Target_level_key" ON "Target"("level");
