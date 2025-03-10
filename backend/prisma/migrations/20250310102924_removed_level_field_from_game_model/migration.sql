/*
  Warnings:

  - You are about to drop the column `level` on the `Game` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Game_level_key";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "level";
