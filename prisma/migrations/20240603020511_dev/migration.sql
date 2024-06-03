/*
  Warnings:

  - You are about to drop the `attendee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `counter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `countercategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `feedback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `queue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `queuehistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userqueues` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `counter` DROP FOREIGN KEY `Counter_attendee_id_fkey`;

-- DropForeignKey
ALTER TABLE `countercategory` DROP FOREIGN KEY `CounterCategory_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `countercategory` DROP FOREIGN KEY `CounterCategory_counterId_fkey`;

-- DropForeignKey
ALTER TABLE `feedback` DROP FOREIGN KEY `Feedback_queueHistoryId_fkey`;

-- DropForeignKey
ALTER TABLE `feedback` DROP FOREIGN KEY `Feedback_userId_fkey`;

-- DropForeignKey
ALTER TABLE `queue` DROP FOREIGN KEY `Queue_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `queuehistory` DROP FOREIGN KEY `QueueHistory_attendeeId_fkey`;

-- DropForeignKey
ALTER TABLE `queuehistory` DROP FOREIGN KEY `QueueHistory_counterId_fkey`;

-- DropForeignKey
ALTER TABLE `queuehistory` DROP FOREIGN KEY `QueueHistory_queueId_fkey`;

-- DropForeignKey
ALTER TABLE `userqueues` DROP FOREIGN KEY `UserQueues_queueId_fkey`;

-- DropForeignKey
ALTER TABLE `userqueues` DROP FOREIGN KEY `UserQueues_userId_fkey`;

-- DropTable
DROP TABLE `attendee`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `counter`;

-- DropTable
DROP TABLE `countercategory`;

-- DropTable
DROP TABLE `feedback`;

-- DropTable
DROP TABLE `queue`;

-- DropTable
DROP TABLE `queuehistory`;

-- DropTable
DROP TABLE `user`;

-- DropTable
DROP TABLE `userqueues`;

-- CreateTable
CREATE TABLE `counters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `counter_number` INTEGER NOT NULL,
    `access_code` INTEGER NOT NULL,
    `attendee_id` INTEGER NOT NULL,
    `business_token` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attendees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pin` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `business_token` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `acronym` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `business_token` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `counter_has_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryId` INTEGER NOT NULL,
    `counterId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `queues` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` INTEGER NOT NULL,
    `start_time` DATETIME(3) NOT NULL,
    `end_time` DATETIME(3) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_queues` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `queueId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `img_url` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `queue_histories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,
    `counterId` INTEGER NULL,
    `attendeeId` INTEGER NULL,
    `queueId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `feedbacks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `queueHistoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `counters` ADD CONSTRAINT `counters_attendee_id_fkey` FOREIGN KEY (`attendee_id`) REFERENCES `attendees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `counter_has_category` ADD CONSTRAINT `counter_has_category_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `counter_has_category` ADD CONSTRAINT `counter_has_category_counterId_fkey` FOREIGN KEY (`counterId`) REFERENCES `counters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `queues` ADD CONSTRAINT `queues_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_queues` ADD CONSTRAINT `user_queues_queueId_fkey` FOREIGN KEY (`queueId`) REFERENCES `queues`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_queues` ADD CONSTRAINT `user_queues_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `queue_histories` ADD CONSTRAINT `queue_histories_counterId_fkey` FOREIGN KEY (`counterId`) REFERENCES `counters`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `queue_histories` ADD CONSTRAINT `queue_histories_attendeeId_fkey` FOREIGN KEY (`attendeeId`) REFERENCES `attendees`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `queue_histories` ADD CONSTRAINT `queue_histories_queueId_fkey` FOREIGN KEY (`queueId`) REFERENCES `queues`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `feedbacks` ADD CONSTRAINT `feedbacks_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `feedbacks` ADD CONSTRAINT `feedbacks_queueHistoryId_fkey` FOREIGN KEY (`queueHistoryId`) REFERENCES `queue_histories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
