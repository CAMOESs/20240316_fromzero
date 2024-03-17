/*
  Warnings:

  - A unique constraint covering the columns `[year,month]` on the table `sessions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `sessions_year_month_key` ON `sessions`(`year`, `month`);
