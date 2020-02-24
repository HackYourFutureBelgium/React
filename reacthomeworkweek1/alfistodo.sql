DROP DATABASE IF EXISTS `alfitodolist`;
CREATE DATABASE alfitodolist;
use alfitodolist;
CREATE TABLE `todo` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `activity` VARCHAR(255) NOT NULL DEFAULT '',
  `deadline` DATE NOT NULL,
  `is_done` BIT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);
INSERT INTO `todo` VALUES (1, "Get out of bed", "2019-09-01", 1);
INSERT INTO `todo` VALUES (2, "Brush teeth", "2019-09-01", 0);
INSERT INTO `todo` VALUES (3, "Eat breakfast", "2019-09-01", 0);
INSERT INTO `todo` VALUES (4, "Go to work", "2019-09-01", 0);
