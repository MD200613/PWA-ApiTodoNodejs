CREATE TABLE `bedroomTypes` (
	`id` varchar(36) NOT NULL,
	`description` varchar(100) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bedroomTypes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `bedrooms` MODIFY COLUMN `bedroomType` varchar(36) NOT NULL;--> statement-breakpoint
ALTER TABLE `bedrooms` ADD CONSTRAINT `bedrooms_bedroomType_bedroomTypes_id_fk` FOREIGN KEY (`bedroomType`) REFERENCES `bedroomTypes`(`id`) ON DELETE no action ON UPDATE no action;