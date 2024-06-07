-- DropIndex
DROP INDEX `counters_attendee_id_fkey` ON `counters`;

-- AlterTable
ALTER TABLE `counters` MODIFY `access_code` VARCHAR(191) NOT NULL;
