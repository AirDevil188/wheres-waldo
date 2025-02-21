/*
  Warnings:

  - You are about to drop the column `xCord` on the `Target` table. All the data in the column will be lost.
  - You are about to drop the column `yCord` on the `Target` table. All the data in the column will be lost.
  - Added the required column `xCordMax` to the `Target` table without a default value. This is not possible if the table is not empty.
  - Added the required column `xCordMin` to the `Target` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yCordMax` to the `Target` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yCordMin` to the `Target` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Target" DROP COLUMN "xCord",
DROP COLUMN "yCord",
ADD COLUMN     "xCordMax" INTEGER NOT NULL,
ADD COLUMN     "xCordMin" INTEGER NOT NULL,
ADD COLUMN     "yCordMax" INTEGER NOT NULL,
ADD COLUMN     "yCordMin" INTEGER NOT NULL;
