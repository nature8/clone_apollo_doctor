-- MySQL dump 10.13  Distrib 9.2.0, for Win64 (x86_64)
--
-- Host: localhost    Database: doctor
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `degrees` varchar(255) DEFAULT NULL,
  `experience` int NOT NULL,
  `fees` int NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `specialty` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'MBBS, DCH',7,500,'Female','/img1.png','Dr. Ayesha Khan','Pediatrician'),(2,'MBBS, DM Cardiology',18,1200,'Male','/img2.png','Dr. Rajeev Sharma','Cardiologist'),(3,'MBBS, MD Psychiatry',5,450,'Female','http://localhost:8080/img1.png','Dr. Meera Kapoor','Psychiatrist'),(4,'MBBS, DM Neurology',12,950,'Male','http://localhost:8080/img3.png','Dr. Sanjay Mishra','Neurologist'),(5,'MBBS, MD Pulmonology',17,1100,'Male','http://localhost:8080/img5.png','Dr. Alok Singh','Pulmonologist'),(6,'MBBS, MS OB/GYN',8,650,'Female','http://localhost:8080/img1.png','Dr. Priya Desai','Gynecologist'),(7,'MBBS, DM Endocrinology',7,720,'Female','http://localhost:8080/img3.png','Dr. Shruti Nair','Endocrinologist'),(8,'MBBS, MD Oncology',20,1300,'Male','http://localhost:8080/img2.png','Dr. Vikram Patel','Oncologist');
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_languages`
--

DROP TABLE IF EXISTS `doctor_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_languages` (
  `doctor_id` bigint NOT NULL,
  `languages` varchar(255) DEFAULT NULL,
  KEY `FKmn0d95796dr1i0w4uva2jqa3r` (`doctor_id`),
  CONSTRAINT `FKmn0d95796dr1i0w4uva2jqa3r` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_languages`
--

LOCK TABLES `doctor_languages` WRITE;
/*!40000 ALTER TABLE `doctor_languages` DISABLE KEYS */;
INSERT INTO `doctor_languages` VALUES (1,'Hindi'),(1,'English'),(2,'English'),(2,'Telugu'),(3,'English'),(3,'Hindi'),(4,'Hindi'),(4,'Marathi'),(5,'English'),(6,'English'),(6,'Gujarati'),(7,'English'),(7,'Malayalam'),(8,'English'),(8,'Gujarati');
/*!40000 ALTER TABLE `doctor_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_mode`
--

DROP TABLE IF EXISTS `doctor_mode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_mode` (
  `doctor_id` bigint NOT NULL,
  `mode` varchar(255) DEFAULT NULL,
  KEY `FK9b5c07it593t5ulgxm6r60hfp` (`doctor_id`),
  CONSTRAINT `FK9b5c07it593t5ulgxm6r60hfp` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_mode`
--

LOCK TABLES `doctor_mode` WRITE;
/*!40000 ALTER TABLE `doctor_mode` DISABLE KEYS */;
INSERT INTO `doctor_mode` VALUES (1,'Hospital Visit'),(2,'Online Consult'),(3,'Online Consult'),(4,'Hospital Visit'),(5,'Hospital Visit'),(5,'Online Consult'),(6,'Online Consult'),(7,'Hospital Visit'),(8,'Hospital Visit'),(8,'Online Consult');
/*!40000 ALTER TABLE `doctor_mode` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-03 14:59:17
