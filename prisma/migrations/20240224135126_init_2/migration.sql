/*
  Warnings:

  - You are about to drop the column `numero_table` on the `candidats` table. All the data in the column will be lost.
  - You are about to alter the column `lastname` on the `candidats` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `firstname` on the `candidats` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `place_of_birth` on the `candidats` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `name` on the `months` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `slug` on the `months` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `lastname` on the `peoples` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `firstname` on the `peoples` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `phone_number` on the `peoples` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(30)`.
  - You are about to alter the column `permission_slug` on the `permission_role` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(190)`.
  - You are about to alter the column `role_slug` on the `permission_role` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `name` on the `permissions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(190)`.
  - You are about to alter the column `slug` on the `permissions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(190)`.
  - You are about to alter the column `slug` on the `role_user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `username` on the `role_user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `name` on the `roles` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `slug` on the `roles` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `month` on the `sessions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `username` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- DropForeignKey
ALTER TABLE `permission_role` DROP FOREIGN KEY `permission_role_permission_slug_fkey`;

-- DropForeignKey
ALTER TABLE `permission_role` DROP FOREIGN KEY `permission_role_role_slug_fkey`;

-- DropForeignKey
ALTER TABLE `role_user` DROP FOREIGN KEY `role_user_slug_fkey`;

-- DropForeignKey
ALTER TABLE `role_user` DROP FOREIGN KEY `role_user_username_fkey`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_month_fkey`;

-- DropIndex
DROP INDEX `candidats_numero_table_key` ON `candidats`;

-- AlterTable
ALTER TABLE `candidats` DROP COLUMN `numero_table`,
    MODIFY `lastname` VARCHAR(50) NOT NULL,
    MODIFY `firstname` VARCHAR(50) NOT NULL,
    MODIFY `place_of_birth` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `months` MODIFY `name` VARCHAR(10) NOT NULL,
    MODIFY `slug` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `peoples` MODIFY `lastname` VARCHAR(50) NOT NULL,
    MODIFY `firstname` VARCHAR(50) NOT NULL,
    MODIFY `phone_number` VARCHAR(30) NULL;

-- AlterTable
ALTER TABLE `permission_role` MODIFY `permission_slug` VARCHAR(190) NOT NULL,
    MODIFY `role_slug` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `permissions` MODIFY `name` VARCHAR(190) NULL,
    MODIFY `slug` VARCHAR(190) NULL;

-- AlterTable
ALTER TABLE `role_user` MODIFY `slug` VARCHAR(50) NOT NULL,
    MODIFY `username` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `roles` MODIFY `name` VARCHAR(50) NOT NULL,
    MODIFY `slug` VARCHAR(50) NOT NULL,
    MODIFY `description` VARCHAR(200) NULL;

-- AlterTable
ALTER TABLE `sessions` MODIFY `month` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `username` VARCHAR(50) NOT NULL,
    MODIFY `email` VARCHAR(50) NULL;

-- AddForeignKey
ALTER TABLE `role_user` ADD CONSTRAINT `role_user_username_fkey` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_user` ADD CONSTRAINT `role_user_slug_fkey` FOREIGN KEY (`slug`) REFERENCES `roles`(`slug`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permission_role` ADD CONSTRAINT `permission_role_permission_slug_fkey` FOREIGN KEY (`permission_slug`) REFERENCES `permissions`(`slug`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permission_role` ADD CONSTRAINT `permission_role_role_slug_fkey` FOREIGN KEY (`role_slug`) REFERENCES `roles`(`slug`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_month_fkey` FOREIGN KEY (`month`) REFERENCES `months`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
