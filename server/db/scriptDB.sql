-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema learnEnglishOnline
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema learnEnglishOnline
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `learnEnglishOnline` DEFAULT CHARACTER SET utf8 ;
USE `learnEnglishOnline` ;

-- -----------------------------------------------------
-- Table `learnEnglishOnline`.`level`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `learnEnglishOnline`.`level` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` TINYTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `learnEnglishOnline`.`lession`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `learnEnglishOnline`.`lession` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `image_link` TINYTEXT NOT NULL,
  `level_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_lession_level_idx` (`level_id` ASC) VISIBLE,
  CONSTRAINT `fk_lession_level`
    FOREIGN KEY (`level_id`)
    REFERENCES `learnEnglishOnline`.`level` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `learnEnglishOnline`.`exercise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `learnEnglishOnline`.`exercise` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `question` MEDIUMTEXT NOT NULL,
  `type` INT(11) NOT NULL,
  `right_answer` MEDIUMTEXT NOT NULL,
  `answers` LONGTEXT NULL DEFAULT NULL,
  `lession_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_exercise_lession1_idx` (`lession_id` ASC) VISIBLE,
  CONSTRAINT `fk_exercise_lession1`
    FOREIGN KEY (`lession_id`)
    REFERENCES `learnEnglishOnline`.`lession` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `learnEnglishOnline`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `learnEnglishOnline`.`user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `lessions` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `email`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
