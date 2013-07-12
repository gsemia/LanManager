SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `LanManager` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `LanManager` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `username` VARCHAR(45) NOT NULL ,
  `email` VARCHAR(45) NOT NULL ,
  `name` VARCHAR(45) NULL ,
  `password` VARCHAR(90) NULL ,
  `level` TINYINT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `event`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `event` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `start` DATETIME NOT NULL ,
  `end` DATETIME NULL ,
  `description` TEXT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `game`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `game` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NOT NULL ,
  `description` TEXT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rating`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `rating` (
  `userId` INT UNSIGNED NOT NULL ,
  `gameId` INT UNSIGNED NOT NULL ,
  `rating` TINYINT NULL ,
  PRIMARY KEY (`userId`, `gameId`) ,
  INDEX `fk_user_has_game_game1_idx` (`gameId` ASC) ,
  INDEX `fk_user_has_game_user_idx` (`userId` ASC) ,
  CONSTRAINT `fk_user_has_game_user`
    FOREIGN KEY (`userId` )
    REFERENCES `user` (`id` )
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_user_has_game_game1`
    FOREIGN KEY (`gameId` )
    REFERENCES `game` (`id` )
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `invitation`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `invitation` (
  `userId` INT UNSIGNED NOT NULL ,
  `eventId` INT UNSIGNED NOT NULL ,
  `status` TINYINT NULL ,
  PRIMARY KEY (`userId`, `eventId`) ,
  INDEX `fk_user_has_event_event1_idx` (`eventId` ASC) ,
  INDEX `fk_user_has_event_user1_idx` (`userId` ASC) ,
  CONSTRAINT `fk_user_has_event_user1`
    FOREIGN KEY (`userId` )
    REFERENCES `user` (`id` )
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_user_has_event_event1`
    FOREIGN KEY (`eventId` )
    REFERENCES `event` (`id` )
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `recommendation`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `recommendation` (
  `eventId` INT UNSIGNED NOT NULL ,
  `gameId` INT UNSIGNED NOT NULL ,
  PRIMARY KEY (`eventId`, `gameId`) ,
  INDEX `fk_event_has_game_game1_idx` (`gameId` ASC) ,
  INDEX `fk_event_has_game_event1_idx` (`eventId` ASC) ,
  CONSTRAINT `fk_event_has_game_event1`
    FOREIGN KEY (`eventId` )
    REFERENCES `event` (`id` )
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_event_has_game_game1`
    FOREIGN KEY (`gameId` )
    REFERENCES `game` (`id` )
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_recommendation`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `user_recommendation` (
  `userId` INT UNSIGNED NOT NULL ,
  `eventId` INT UNSIGNED NOT NULL ,
  `gameId` INT UNSIGNED NOT NULL ,
  PRIMARY KEY (`userId`, `eventId`, `gameId`) ,
  INDEX `fk_user_has_recommendation_recommendation1_idx` (`eventId` ASC, `gameId` ASC) ,
  INDEX `fk_user_has_recommendation_user1_idx` (`userId` ASC) ,
  CONSTRAINT `fk_user_has_recommendation_user1`
    FOREIGN KEY (`userId` )
    REFERENCES `user` (`id` )
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_user_has_recommendation_recommendation1`
    FOREIGN KEY (`eventId` , `gameId` )
    REFERENCES `recommendation` (`eventId` , `gameId` )
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `LanManager`;
INSERT INTO `user` (`id`, `username`, `email`, `name`, `password`, `level`) VALUES (1, 'Admin', 'test@test.ch', 'Admin', '$2a$12$0jLIX2.8S6gnXe9onoqBY.YlJ1s6z3XMRRR7jinJW1ZudVCx/d40y', 9);

COMMIT;
