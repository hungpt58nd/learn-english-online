CREATE DATABASE  IF NOT EXISTS `learnenglishonline` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `learnenglishonline`;
-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: learnenglishonline
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `exercise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` mediumtext NOT NULL,
  `type` int(11) NOT NULL,
  `right_answer` mediumtext NOT NULL,
  `answers` longtext,
  `lession_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_exercise_lession1_idx` (`lession_id`),
  CONSTRAINT `fk_exercise_lession1` FOREIGN KEY (`lession_id`) REFERENCES `lession` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES (1,'Chọn từ cho “cô gái”',3,'1','\"../../assets/image/boy.png\", \"../../assets/image/girl.png\", \"../../assets/image/man.png\"',1),(2,'Chọn từ cho “đàn ông”',3,'2','\"../../assets/image/boy.png\", \"../../assets/image/woman.png\", \"../../assets/image/man.png\"',1),(3,'Nghe và nghi lại',1,'boy','\"../../assets/sound/boy.mp3\"',1),(4,'Ghi “sách” bằng Tiếng Anh',0,'book','../../assets/image/book.png',2),(5,'Viết mục này bằng Tiếng Việt: \"I eat bread\"',0,'tôi ăn bánh mì',NULL,2),(6,'Chọn từ còn thiếu: She ___  water',2,'2','\"drink\",\"drinking\",\"drinks\"',2),(7,'Viết mục này bằng Tiếng Anh: \"Anh ấy ăn một quả táo\"',0,'he eats an apple',NULL,3),(8,'Chọn từ còn thiếu: They ___ my childrent',2,'2','\"is\",\"am\",\"are\"',3),(9,'Nghe và nghi lại',1,'the children','\"../../assets/sound/the_children.mp3\"',3),(10,'Viết mục này bằng Tiếng Anh: \"Người đàn ông và người phụ nữ\"',0,'the man and the woman',NULL,4),(11,'Chọn từ còn thiếu: They ___  football',2,'0','\"play\",\"plays\",\"playing\"',4),(12,'Chọn từ còn thiếu: She ___  bread.',2,'0','\"eats\",\"eat\",\"eating\"',4),(13,'Nghe và nghi lại',1,'it is an apple','\"../../assets/sound/It_is_an_apple.mp3\"',5),(14,'Chọn từ cho “giáo viên”',3,'0','\"../../assets/image/teacher.png\",\"../../assets/image/boy.png\", \"../../assets/image/girl.png\"',5),(15,'Chọn từ còn thiếu: I am ___ my homework.',1,'0','\"do\",\"doing\",\"did\"',5),(16,'Viết mục này bằng Tiếng Anh: \"Những chiếc áo của tôi\"',0,'my shirts',NULL,6),(17,'Ghi “áo khoác” bằng Tiếng Anh',0,'coat','../../assets/image/coat.png',6),(18,'Viết mục này bằng Tiếng Việt: \"I have a green turtle\"',0,'tôi có một con rùa màu xanh lá',NULL,6),(19,'Viết mục này bằng Tiếng Anh: \"Một quả cam và một quả táo\"',0,'an apple and an orange',NULL,7),(20,'Nghe và nghi lại',1,'what color is your cat','\"../../assets/sound/what_color_is_your_cat.mp3\"',7),(21,'Viết mục này bằng Tiếng Việt: \"Where are you\"',0,'bạn ở đâu',NULL,7),(22,'Nghe và nghi lại',1,'how are the boys','\"../../assets/sound/how_are_the_boys.mp3\"',8),(23,'Viết mục này bằng Tiếng Việt: \"Whose book is it\"',0,'quyển sách của ai',NULL,8),(24,'Nghe và nghi lại',1,'I listen to you','\"../../assets/sound/i_listen_to_you.mp3\"',8),(25,'Nghe và nghi lại',1,'she eats while I drink','\"../../assets/sound/she_eats_while_i_drink.mp3\"',9),(26,'Nghe và nghi lại',1,'the boys play whenever it rains','\"../../assets/sound/she_eats_while_i_drink.mp3\"',9),(27,'Viết mục này bằng Tiếng Anh: \"Nếu anh ấy uống, tôi ăn\"',0,'if he drinks, I eat',NULL,9);
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lession`
--

DROP TABLE IF EXISTS `lession`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `lession` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `image_link` tinytext NOT NULL,
  `level_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_lession_level_idx` (`level_id`),
  CONSTRAINT `fk_lession_level` FOREIGN KEY (`level_id`) REFERENCES `level` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lession`
--

LOCK TABLES `lession` WRITE;
/*!40000 ALTER TABLE `lession` DISABLE KEYS */;
INSERT INTO `lession` VALUES (1,'Cơ bản 1','../../assets/image/lession1.png',1),(2,'Cơ bản 2','../../assets/image/lession2.png',1),(3,'Cơ bản 3','../../assets/image/lession3.png',1),(4,'Cơ bản 4','../../assets/image/lession1.png',2),(5,'Cơ bản 5','../../assets/image/lession2.png',2),(6,'Cơ bản 6','../../assets/image/lession3.png',2),(7,'Cơ bản 7','../../assets/image/lession1.png',3),(8,'Cơ bản 8','../../assets/image/lession2.png',3),(9,'Cơ bản 9','../../assets/image/lession3.png',3);
/*!40000 ALTER TABLE `lession` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `level`
--

DROP TABLE IF EXISTS `level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` tinytext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `level`
--

LOCK TABLES `level` WRITE;
/*!40000 ALTER TABLE `level` DISABLE KEYS */;
INSERT INTO `level` VALUES (1,'Level 1','Mức cơ bản nhất'),(2,'Level 2','Bắt đầu khó lên'),(3,'Level 3','Kết hợp kỹ năng');
/*!40000 ALTER TABLE `level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `lessions` longtext,
  PRIMARY KEY (`id`,`email`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'AnNam','123456','annam@gmail.com','1,2,3'),(2,'AnNguy','123456','annguy@gmail.com',NULL),(3,'AnVui','123456','anvui@gmail.com',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-09 23:56:12
