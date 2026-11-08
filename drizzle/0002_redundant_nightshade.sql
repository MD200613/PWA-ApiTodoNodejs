RENAME TABLE `userRoles` TO `user_roles`;--> statement-breakpoint
ALTER TABLE `user_roles` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `user_roles` ADD PRIMARY KEY(`id`);