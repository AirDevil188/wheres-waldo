/*
  Warnings:

  - A unique constraint covering the columns `[level]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `level` to the `Target` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Target" ADD COLUMN     "level" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Game_level_key" ON "Game"("level");
