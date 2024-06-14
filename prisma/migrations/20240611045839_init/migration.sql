/*
  Warnings:

  - You are about to drop the column `user_id` on the `feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `notifications` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `user_queues` table. All the data in the column will be lost.
  - You are about to drop the `subscription` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `business_token` to the `businesses` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `businesses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `industry` on table `businesses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `branch` on table `businesses` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `business_token` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_token` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `business_token` to the `notifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_token` to the `notifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_token` to the `user_queues` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_token` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `businesses` ADD COLUMN `business_token` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `industry` VARCHAR(191) NOT NULL,
    MODIFY `branch` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `feedbacks` DROP COLUMN `user_id`,
    ADD COLUMN `business_token` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_token` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NULL,
    MODIFY `rating` INTEGER NULL;

-- AlterTable
ALTER TABLE `notifications` DROP COLUMN `user_id`,
    ADD COLUMN `business_token` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_token` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user_queues` DROP COLUMN `user_id`,
    ADD COLUMN `user_token` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `user_token` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `subscription`;

-- CreateTable
CREATE TABLE `subscriptions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `counter_limit` INTEGER NOT NULL DEFAULT 1,
    `category_limit` INTEGER NOT NULL DEFAULT 1,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
