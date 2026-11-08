CREATE TABLE `users` (
	`id` varchar(36) NOT NULL,
	`name` varchar(100) NOT NULL,
	`surname` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`password` varchar(200) NOT NULL,
	`roleId` varchar(36) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_roleId_user_roles_id_fk` FOREIGN KEY (`roleId`) REFERENCES `user_roles`(`id`) ON DELETE no action ON UPDATE no action;