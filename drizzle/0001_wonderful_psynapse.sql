CREATE TABLE `userRoles` (
	`id` varchar(36) NOT NULL,
	`description` varchar(100) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `userRoles_id` PRIMARY KEY(`id`)
);
