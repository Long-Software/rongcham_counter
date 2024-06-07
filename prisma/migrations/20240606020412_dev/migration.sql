/*
  Warnings:

  - You are about to drop the column `queueHistoryId` on the `feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `attendeeId` on the `queue_histories` table. All the data in the column will be lost.
  - You are about to drop the column `counterId` on the `queue_histories` table. All the data in the column will be lost.
  - You are about to drop the column `queueId` on the `queue_histories` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `queues` table. All the data in the column will be lost.
  - You are about to drop the column `queueId` on the `user_queues` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `user_queues` table. All the data in the column will be lost.
  - You are about to drop the `counter_has_category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `subscription_id` to the `businesses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `main_category_id` to the `counters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondary_category_id` to the `counters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `queue_history_id` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attendee_id` to the `queue_histories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `counter_id` to the `queue_histories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `queue_id` to the `queue_histories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `queues` table without a default value. This is not possible if the table is not empty.
  - Added the required column `queue_id` to the `user_queues` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `user_queues` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `counter_has_category` DROP FOREIGN KEY `counter_has_category_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `counter_has_category` DROP FOREIGN KEY `counter_has_category_counterId_fkey`;

-- DropForeignKey
ALTER TABLE `counters` DROP FOREIGN KEY `counters_attendee_id_fkey`;

-- DropForeignKey
ALTER TABLE `feedbacks` DROP FOREIGN KEY `feedbacks_queueHistoryId_fkey`;

-- DropForeignKey
ALTER TABLE `feedbacks` DROP FOREIGN KEY `feedbacks_userId_fkey`;

-- DropForeignKey
ALTER TABLE `queue_histories` DROP FOREIGN KEY `queue_histories_attendeeId_fkey`;

-- DropForeignKey
ALTER TABLE `queue_histories` DROP FOREIGN KEY `queue_histories_counterId_fkey`;

-- DropForeignKey
ALTER TABLE `queue_histories` DROP FOREIGN KEY `queue_histories_queueId_fkey`;

-- DropForeignKey
ALTER TABLE `queues` DROP FOREIGN KEY `queues_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `user_queues` DROP FOREIGN KEY `user_queues_queueId_fkey`;

-- DropForeignKey
ALTER TABLE `user_queues` DROP FOREIGN KEY `user_queues_userId_fkey`;

-- AlterTable
ALTER TABLE `businesses` ADD COLUMN `subscription_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `categories` MODIFY `status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `counters` ADD COLUMN `main_category_id` INTEGER NOT NULL,
    ADD COLUMN `secondary_category_id` INTEGER NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `feedbacks` DROP COLUMN `queueHistoryId`,
    DROP COLUMN `userId`,
    ADD COLUMN `queue_history_id` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `queue_histories` DROP COLUMN `attendeeId`,
    DROP COLUMN `counterId`,
    DROP COLUMN `queueId`,
    ADD COLUMN `attendee_id` INTEGER NOT NULL,
    ADD COLUMN `counter_id` INTEGER NOT NULL,
    ADD COLUMN `queue_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `queues` DROP COLUMN `categoryId`,
    ADD COLUMN `category_id` INTEGER NOT NULL,
    MODIFY `start_time` DATETIME(3) NULL,
    MODIFY `end_time` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user_queues` DROP COLUMN `queueId`,
    DROP COLUMN `userId`,
    ADD COLUMN `queue_id` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `gender` VARCHAR(191) NOT NULL DEFAULT 'Male',
    MODIFY `dob` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `img_url` VARCHAR(191) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE `counter_has_category`;

-- CreateTable
CREATE TABLE `notifications` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `counter_limit` INTEGER NOT NULL DEFAULT 1,
    `category_limit` INTEGER NOT NULL DEFAULT 1,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
