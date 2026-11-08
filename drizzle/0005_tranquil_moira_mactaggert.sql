CREATE TABLE `bed_types` (
	`id` varchar(36) NOT NULL,
	`description` varchar(100) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bed_types_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `bedrooms` (
	`id` varchar(36) NOT NULL,
	`bedroomNumber` int NOT NULL,
	`bedroomType` varchar(50) NOT NULL,
	`description` varchar(200) NOT NULL,
	`nbMaxClients` int NOT NULL,
	`sizeInMeterSquare` decimal NOT NULL,
	`bed1` varchar(36) NOT NULL,
	`bed2` varchar(36),
	`price` decimal NOT NULL,
	`hotelName` varchar(100) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bedrooms_id` PRIMARY KEY(`id`),
	CONSTRAINT `bedrooms_bedroomNumber_unique` UNIQUE(`bedroomNumber`)
);
--> statement-breakpoint
ALTER TABLE `bedrooms` ADD CONSTRAINT `bedrooms_bed1_bed_types_id_fk` FOREIGN KEY (`bed1`) REFERENCES `bed_types`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `bedrooms` ADD CONSTRAINT `bedrooms_bed2_bed_types_id_fk` FOREIGN KEY (`bed2`) REFERENCES `bed_types`(`id`) ON DELETE no action ON UPDATE no action;