-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `lession` LONGTEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`level`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`level` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` TINYTEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`lession`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`lession` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `image_link` TINYTEXT NOT NULL,
  `level_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_lession_level_idx` (`level_id` ASC) VISIBLE,
  CONSTRAINT `fk_lession_level`
    FOREIGN KEY (`level_id`)
    REFERENCES `mydb`.`level` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`exercise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`exercise` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question` MEDIUMTEXT NOT NULL,
  `type` INT NOT NULL,
  `right_answer` MEDIUMTEXT NOT NULL,
  `answer` LONGTEXT NULL,
  `lession_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_exercise_lession1_idx` (`lession_id` ASC) VISIBLE,
  CONSTRAINT `fk_exercise_lession1`
    FOREIGN KEY (`lession_id`)
    REFERENCES `mydb`.`lession` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
