/*
  Warnings:

  - You are about to drop the column `side` on the `Order` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to drop the column `userId` on the `Stock` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Stock` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to drop the `Fills` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[symbol]` on the table `Stock` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `market` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `orderType` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "MarketType" AS ENUM ('LIMIT', 'MARKET');

-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('BUY', 'SELL');

-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_userId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "side",
DROP COLUMN "market",
ADD COLUMN     "market" "MarketType" NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30),
DROP COLUMN "orderType",
ADD COLUMN     "orderType" "OrderType" NOT NULL;

-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "userId",
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "balance" DECIMAL(65,30) NOT NULL DEFAULT 25000,
ADD COLUMN     "lockedBalance" DECIMAL(65,30) NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Fills";

-- CreateTable
CREATE TABLE "Fill" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stock_symbol_key" ON "Stock"("symbol");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fill" ADD CONSTRAINT "Fill_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
