/*
  Warnings:

  - Added the required column `business_token` to the `queues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `queues` ADD COLUMN `business_token` VARCHAR(191) NOT NULL;
