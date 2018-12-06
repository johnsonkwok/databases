CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  content TEXT NOT NULL,
  user_id INTEGER,
  room_id INTEGER,
  createdAt TEXT NOT NULL,
  -- FOREIGN KEY user_id REFERENCES users id,
  -- FOREIGN KEY room_id REFERENCES rooms id
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username TEXT NOT NULL
);

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  roomname TEXT NOT NULL
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

 -- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Messages'
-- 
-- ---




-- DROP TABLE IF EXISTS `messages`;
		
-- CREATE TABLE `messages` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `content` MEDIUMTEXT(300) NULL DEFAULT NULL,
--   `userId` INTEGER NULL DEFAULT NULL,
--   `roomId` INTEGER NULL DEFAULT NULL,
--   `createdAt` TIMESTAMP NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'Users'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `Users`;
		
-- CREATE TABLE `Users` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `username` MEDIUMTEXT(25) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'Rooms'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `Rooms`;
		
-- CREATE TABLE `Rooms` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `roomname` MEDIUMTEXT(25) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'Rooms/Messages'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `Rooms/Messages`;
		
-- CREATE TABLE `Rooms/Messages` (
--   `messageId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `roomId` INTEGER NULL DEFAULT NULL
-- );

-- -- ---
-- -- Table 'Users/Messages'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `Users/Messages`;
		
-- CREATE TABLE `Users/Messages` (
--   `messageId` INTEGER NULL DEFAULT NULL,
--   `userId` INTEGER NULL DEFAULT NULL
-- );

-- -- ---
-- -- Foreign Keys 
-- -- ---

-- ALTER TABLE `Rooms/Messages` ADD FOREIGN KEY (messageId) REFERENCES `Messages` (`id`);
-- ALTER TABLE `Rooms/Messages` ADD FOREIGN KEY (roomId) REFERENCES `Rooms` (`id`);
-- ALTER TABLE `Users/Messages` ADD FOREIGN KEY (messageId) REFERENCES `Messages` (`id`);
-- ALTER TABLE `Users/Messages` ADD FOREIGN KEY (userId) REFERENCES `Users` (`id`);

-- -- ---
-- -- Table Properties
-- -- ---

-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms/Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users/Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- -- ---
-- -- Test Data
-- -- ---

-- INSERT INTO `Messages` (`id`,`content`,`userId`,`roomId`,`createdAt`) VALUES
-- ('','','','','');
-- INSERT INTO `Users` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `Rooms` (`id`,`roomname`) VALUES
-- ('','');
-- INSERT INTO `Rooms/Messages` (`messageId`,`roomId`) VALUES
-- ('','');
-- INSERT INTO `Users/Messages` (`messageId`,`userId`) VALUES
-- ('','');




