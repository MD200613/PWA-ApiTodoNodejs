ALTER TABLE `users` RENAME COLUMN `name` TO `firstName`;--> statement-breakpoint
ALTER TABLE `users` RENAME COLUMN `surname` TO `lastName`;--> statement-breakpoint
ALTER TABLE `bedrooms` MODIFY COLUMN `sizeInMeterSquare` decimal(10,2) NOT NULL;--> statement-breakpoint
ALTER TABLE `bedrooms` MODIFY COLUMN `price` decimal(10,2) NOT NULL;