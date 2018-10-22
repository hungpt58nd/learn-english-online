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
  `title` mediumtext,
  `description` mediumtext NOT NULL,
  `type` int(11) NOT NULL,
  `rightAnswer` mediumtext NOT NULL,
  `answers` longtext,
  `lession_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_exercise_lession1_idx` (`lession_id`),
  CONSTRAINT `fk_exercise_lession1` FOREIGN KEY (`lession_id`) REFERENCES `lession` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES (1,'cô gái.','Chọn từ cho:',3,'girl','[{\"imageLink\":\"url(../../assets/image/boy.png)\",\"description\":\"boy\"},{\"imageLink\":\"url(../../assets/image/girl.png)\",\"description\":\"girl\"},{\"imageLink\":\"url(../../assets/image/man.png)\",\"description\":\"man\"}]',1),(2,'đàn ông.','Chọn từ cho:',3,'man','[{\"imageLink\":\"url(../../assets/image/boy.png)\",\"description\":\"boy\"},{\"imageLink\":\"url(../../assets/image/woman.png)\",\"description\":\"woman\"},{\"imageLink\":\"url(../../assets/image/man.png)\",\"description\":\"man\"}]',1),(3,NULL,'Nghe và nghi lại',4,'boy','{\"fileLink\": \"../../assets/sound/boy.mp3\"}',1),(4,'sách.','Ghi lại bằng Tiếng Anh:',1,'book','{\"imageLink\":\"url(../../assets/image/book.png)\",\"description\":\"quyển sách\"}',2),(5,'I eat bread.','Viết mục này bằng Tiếng Việt:',1,'tôi ăn bánh mì',NULL,2),(6,'She ___  water.','Chọn từ còn thiếu:',2,'drinks','drink,drinking,drinks',2),(7,'Anh ấy ăn một quả táo.','Viết mục này bằng Tiếng Anh:',1,'he eats an apple',NULL,3),(8,'They ___ my childrent.','Chọn từ còn thiếu:',2,'are','is,am,are',3),(9,NULL,'Nghe và nghi lại',4,'the children','{\"fileLink\": \"../../assets/sound/the_children.mp3\"}',3),(10,'Người đàn ông và người phụ nữ.','Viết mục này bằng Tiếng Anh:',1,'the man and the woman',NULL,4),(11,'They ___  football.','Chọn từ còn thiếu:',2,'play','play,playing,plays',4),(12,'She ___  bread.','Chọn từ còn thiếu:',2,'eats','eats,eat,eating',4),(13,NULL,'Nghe và nghi lại',4,'it is an apple','{\"fileLink\": \"../../assets/sound/It_is_an_apple.mp3\"}',5),(14,'giáo viên.','Chọn từ cho:',3,'teacher','[{\"imageLink\":\"url(../../assets/image/teacher.png)\",\"description\":\"teacher\"},{\"imageLink\":\"url(../../assets/image/boy.png)\",\"description\":\"boy\"},{\"imageLink\":\"url(../../assets/image/girl.png)\",\"description\":\"girl\"}]',5),(15,'I am ___ my homework.','Chọn từ còn thiếu:',4,'do','do,doing,did',5),(16,'Những chiếc áo của tôi.','Viết mục này bằng Tiếng Anh:',1,'my shirts',NULL,6),(17,'áo khoác.','Ghi lại bằng Tiếng Anh:',1,'coat','{\"imageLink\":\"url(../../assets/image/coat.png)\",\"description\":\"coat\"}',6),(18,'I have a green turtle.','Viết mục này bằng Tiếng Việt:',1,'tôi có một con rùa màu xanh lá',NULL,6),(19,'Một quả cam và một quả táo.','Viết mục này bằng Tiếng Anh:',1,'an apple and an orange',NULL,7),(20,NULL,'Nghe và nghi lại',4,'what color is your cat','{\"fileLink\": \"../../assets/sound/what_color_is_your_cat.mp3\"}',7),(21,'Where are you.','Viết mục này bằng Tiếng Việt:',1,'bạn ở đâu',NULL,7),(22,NULL,'Nghe và nghi lại',4,'how are the boys','{\"fileLink\": \"../../assets/sound/how_are_the_boys.mp3\"}',8),(23,'Whose book is it','Viết mục này bằng Tiếng Việt: ',1,'quyển sách của ai',NULL,8),(24,NULL,'Nghe và nghi lại',4,'I listen to you','{\"fileLink\": \"../../assets/sound/i_listen_to_you.mp3\"}',8),(25,NULL,'Nghe và nghi lại',4,'she eats while I drink','{\"fileLink\": \"../../assets/sound/she_eats_while_i_drink.mp3\"}',9),(26,NULL,'Nghe và nghi lại',4,'the boys play whenever it rains','{\"fileLink\": \"../../assets/sound/she_eats_while_i_drink.mp3\"}',9),(27,'Nếu anh ấy uống, tôi ăn.','Viết mục này bằng Tiếng Anh: ',1,'if he drinks, I eat',NULL,9),(28,'Nếu anh ấy uống, tôi ăn.','Viết mục này bằng Tiếng Anh: ',1,'if he drinks, I eat',NULL,1),(29,'Where are you.','Viết mục này bằng Tiếng Việt:',1,'bạn ở đâu',NULL,1);
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
  `imageLink` tinytext NOT NULL,
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
INSERT INTO `lession` VALUES (1,'Cơ bản 1','url(../../assets/image/lession1.png)',1),(2,'Cơ bản 2','url(../../assets/image/lession2.png)',1),(3,'Cơ bản 3','url(../../assets/image/lession3.png)',1),(4,'Cơ bản 4','url(../../assets/image/lession1.png)',2),(5,'Cơ bản 5','url(../../assets/image/lession2.png)',2),(6,'Cơ bản 6','url(../../assets/image/lession3.png)',2),(7,'Cơ bản 7','url(../../assets/image/lession1.png)',3),(8,'Cơ bản 8','url(../../assets/image/lession2.png)',3),(9,'Cơ bản 9','url(../../assets/image/lession3.png)',3);
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
  `rights` int(11) DEFAULT '0',
  `wrong` int(11) DEFAULT '0',
  `money` int(11) DEFAULT '100000',
  PRIMARY KEY (`id`,`email`,`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'hungpham','123456','uet.stormspirit@gmail.com','1,2',22,7,10000),(2,'anboo33','123456','uet.storm@gmail.com',NULL,0,0,10000),(4,'anboo33','123456','uet.stormspirit2@gmail.com',NULL,0,0,100000);
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

-- Dump completed on 2018-10-22 23:14:37
