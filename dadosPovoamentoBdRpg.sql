-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: db_rpg
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

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
-- Table structure for table `tbl_arma`
--

DROP TABLE IF EXISTS `tbl_arma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_arma` (
  `arma_id` int NOT NULL AUTO_INCREMENT,
  `arma_nome` varchar(255) NOT NULL,
  `arma_descricao` text NOT NULL,
  `arma_dano` varchar(50) NOT NULL,
  `arma_bonus_atk` int NOT NULL DEFAULT '0',
  `arma_bonus_dano` int NOT NULL DEFAULT '0',
  `arma_preco` int NOT NULL,
  `arma_peso` int NOT NULL DEFAULT '1',
  `arma_magico` tinyint NOT NULL DEFAULT '0',
  `arma_empunhando` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`arma_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_arma`
--

LOCK TABLES `tbl_arma` WRITE;
/*!40000 ALTER TABLE `tbl_arma` DISABLE KEYS */;
INSERT INTO `tbl_arma` VALUES (1,'Espada Curta','Uma espada curta','1d6',0,0,10,1,0,0),(2,'Espada Longa','Uma espada longa','1d8',0,0,20,2,0,0),(3,'Chicote','Coisa de branco','1d3',0,0,7,1,0,0);
/*!40000 ALTER TABLE `tbl_arma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_armadura`
--

DROP TABLE IF EXISTS `tbl_armadura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_armadura` (
  `armor_id` int NOT NULL AUTO_INCREMENT,
  `armor_nome` varchar(255) NOT NULL,
  `armor_descricao` text NOT NULL,
  `armor_classe_armadura` int NOT NULL DEFAULT '1',
  `armor_penalidade` int NOT NULL DEFAULT '0',
  `armor_preco` int NOT NULL,
  `armor_peso` int NOT NULL DEFAULT '1',
  `armor_magico` tinyint NOT NULL DEFAULT '0',
  `armor_trajando` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`armor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_armadura`
--

LOCK TABLES `tbl_armadura` WRITE;
/*!40000 ALTER TABLE `tbl_armadura` DISABLE KEYS */;
INSERT INTO `tbl_armadura` VALUES (1,'Cota de Malha','Uma armadura pesada feita com cota de malha',5,2,650,3,0,0),(3,'Armadura Generica 2','Uma armadura genérica',1,1,12,2,0,0);
/*!40000 ALTER TABLE `tbl_armadura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_atributo`
--

DROP TABLE IF EXISTS `tbl_atributo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_atributo` (
  `atr_id` int NOT NULL AUTO_INCREMENT,
  `atr_forca` int NOT NULL,
  `atr_destreza` int NOT NULL,
  `atr_constituicao` int NOT NULL,
  `atr_inteligencia` int NOT NULL,
  `atr_sabedoria` int NOT NULL,
  `atr_carisma` int NOT NULL,
  PRIMARY KEY (`atr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_atributo`
--

LOCK TABLES `tbl_atributo` WRITE;
/*!40000 ALTER TABLE `tbl_atributo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_atributo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_equipamento`
--

DROP TABLE IF EXISTS `tbl_equipamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_equipamento` (
  `equ_id` int NOT NULL AUTO_INCREMENT,
  `equ_nome` varchar(255) NOT NULL,
  `equ_descricao` text NOT NULL,
  `equ_preco` int NOT NULL,
  `equ_peso` int NOT NULL DEFAULT '1',
  `equ_quantidade` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`equ_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_equipamento`
--

LOCK TABLES `tbl_equipamento` WRITE;
/*!40000 ALTER TABLE `tbl_equipamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_equipamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_jogador`
--

DROP TABLE IF EXISTS `tbl_jogador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_jogador` (
  `jog_id` int NOT NULL AUTO_INCREMENT,
  `jog_nome` varchar(255) NOT NULL,
  `jog_senha` varchar(255) NOT NULL,
  `jog_mestre` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`jog_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_jogador`
--

LOCK TABLES `tbl_jogador` WRITE;
/*!40000 ALTER TABLE `tbl_jogador` DISABLE KEYS */;
INSERT INTO `tbl_jogador` VALUES (1,'igor01','$2b$10$Q9Gh2.bkfUTKzXvW9o.29uisD5.jlv6gl8hh1DNhsqP2M8lvF9X1O',1),(2,'igor02','$2b$10$5CtJVmZT.aQhgwj9YyrC5OV3Kz9PQZUb08.YCDeCJtmgdUs3/czwG',0),(3,'igor03','$2b$10$Xg2jfLbuCfSPvPWY56KK7Oztp9fMwioc1ECTArMwFYk4M5dj8k1TO',0),(4,'igor04','$2b$10$Llqj8zJuqBkgoHe.CYbKwuoqj6r7zh1fRwkTtUeb0T4xUzJFJ0Di.',0),(6,'igor06','$2b$10$ySLa4hTyYM802Dz/pWz52Ox4NuNeoUnG7ISs.YaEV/0fWB3DmzM0S',0),(7,'igor07','$2b$10$m5FkN2kC5spSqpJiOJJxGuMlAOrtJcAIwc.z.zKSriZgZjWPCGEkm',0),(8,'joaozinho360','$2b$10$0CfGS1D8l37pJjn2rCK4ze7sQQzm.VCZQDkcPybB891lPDhMwEAuS',0);
/*!40000 ALTER TABLE `tbl_jogador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_magia`
--

DROP TABLE IF EXISTS `tbl_magia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_magia` (
  `mag_id` int NOT NULL AUTO_INCREMENT,
  `mag_nome` varchar(255) NOT NULL,
  `mag_custo` int NOT NULL,
  `mag_efeito` text NOT NULL,
  `mag_dano` varchar(50) NOT NULL,
  `mag_area` varchar(50) NOT NULL,
  `mag_alvo` varchar(50) NOT NULL,
  `mag_duracao` varchar(50) NOT NULL DEFAULT 'Instantaneo',
  PRIMARY KEY (`mag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_magia`
--

LOCK TABLES `tbl_magia` WRITE;
/*!40000 ALTER TABLE `tbl_magia` DISABLE KEYS */;
INSERT INTO `tbl_magia` VALUES (1,'magiaGenerica1',2,'Nenhum','Nenhum','Nenhum','Criatura','Instantâneo'),(2,'magiaGenerica2',9,'Nenhum','Nenhum','Nenhum','Criatura','Instantâneo'),(3,'magiaGenerica3',12,'Nenhum','Nenhum','Nenhum','Criatura','Instantâneo');
/*!40000 ALTER TABLE `tbl_magia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_personagem`
--

DROP TABLE IF EXISTS `tbl_personagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_personagem` (
  `per_id` int NOT NULL AUTO_INCREMENT,
  `per_nome` varchar(255) NOT NULL,
  `per_raca` varchar(50) NOT NULL,
  `per_classe` varchar(50) NOT NULL,
  `per_origem` varchar(50) NOT NULL,
  `per_deus` varchar(50) DEFAULT NULL,
  `per_pv` int NOT NULL,
  `per_pm` int NOT NULL,
  `per_jog_id` int NOT NULL,
  PRIMARY KEY (`per_id`),
  KEY `FK_411f0bc9d348a2813490295916c` (`per_jog_id`),
  CONSTRAINT `FK_411f0bc9d348a2813490295916c` FOREIGN KEY (`per_jog_id`) REFERENCES `tbl_jogador` (`jog_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_personagem`
--

LOCK TABLES `tbl_personagem` WRITE;
/*!40000 ALTER TABLE `tbl_personagem` DISABLE KEYS */;
INSERT INTO `tbl_personagem` VALUES (1,'Osvaldo','Humano','Bárbaro','Guarda','Sszzass',24,3,2),(2,'Evandro','Humano','Guerreiro','Guarda','Nimb',20,3,3),(3,'Ivna','Humano','Clérigo','Acólito','Arsenal',16,5,8);
/*!40000 ALTER TABLE `tbl_personagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_personagem_arma`
--

DROP TABLE IF EXISTS `tbl_personagem_arma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_personagem_arma` (
  `per_arma_id` int NOT NULL AUTO_INCREMENT,
  `per_arma_arma_id` int NOT NULL,
  `per_arma_per_id` int NOT NULL,
  `arma_id` int DEFAULT NULL,
  `per_id` int DEFAULT NULL,
  PRIMARY KEY (`per_arma_id`),
  KEY `FK_950ff170ff8e552d846a09cf10c` (`arma_id`),
  KEY `FK_551a5179522121ebc733571f291` (`per_id`),
  CONSTRAINT `FK_551a5179522121ebc733571f291` FOREIGN KEY (`per_id`) REFERENCES `tbl_personagem` (`per_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_950ff170ff8e552d846a09cf10c` FOREIGN KEY (`arma_id`) REFERENCES `tbl_arma` (`arma_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_personagem_arma`
--

LOCK TABLES `tbl_personagem_arma` WRITE;
/*!40000 ALTER TABLE `tbl_personagem_arma` DISABLE KEYS */;
INSERT INTO `tbl_personagem_arma` VALUES (1,1,2,NULL,NULL),(2,2,1,NULL,NULL);
/*!40000 ALTER TABLE `tbl_personagem_arma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_personagem_armadura`
--

DROP TABLE IF EXISTS `tbl_personagem_armadura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_personagem_armadura` (
  `per_armor_id` int NOT NULL AUTO_INCREMENT,
  `per_armor_mag_id` int NOT NULL,
  `per_armor_per_id` int NOT NULL,
  `armor_id` int DEFAULT NULL,
  `per_id` int DEFAULT NULL,
  PRIMARY KEY (`per_armor_id`),
  KEY `FK_f0ac28fe4a7bab34cfdead706b0` (`armor_id`),
  KEY `FK_59efbc82c1846850c537e056b3d` (`per_id`),
  CONSTRAINT `FK_59efbc82c1846850c537e056b3d` FOREIGN KEY (`per_id`) REFERENCES `tbl_personagem` (`per_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_f0ac28fe4a7bab34cfdead706b0` FOREIGN KEY (`armor_id`) REFERENCES `tbl_armadura` (`armor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_personagem_armadura`
--

LOCK TABLES `tbl_personagem_armadura` WRITE;
/*!40000 ALTER TABLE `tbl_personagem_armadura` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_personagem_armadura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_personagem_atributo`
--

DROP TABLE IF EXISTS `tbl_personagem_atributo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_personagem_atributo` (
  `per_atr_id` int NOT NULL AUTO_INCREMENT,
  `per_atr_atr_id` int NOT NULL,
  `per_atr_per_id` int NOT NULL,
  `atr_id` int DEFAULT NULL,
  `per_id` int DEFAULT NULL,
  PRIMARY KEY (`per_atr_id`),
  KEY `FK_3d2365b8c98d0a232c7ed4a1be2` (`atr_id`),
  KEY `FK_7c181492beeac59a980918b4299` (`per_id`),
  CONSTRAINT `FK_3d2365b8c98d0a232c7ed4a1be2` FOREIGN KEY (`atr_id`) REFERENCES `tbl_atributo` (`atr_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_7c181492beeac59a980918b4299` FOREIGN KEY (`per_id`) REFERENCES `tbl_personagem` (`per_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_personagem_atributo`
--

LOCK TABLES `tbl_personagem_atributo` WRITE;
/*!40000 ALTER TABLE `tbl_personagem_atributo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_personagem_atributo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_personagem_equipamento`
--

DROP TABLE IF EXISTS `tbl_personagem_equipamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_personagem_equipamento` (
  `per_equ_id` int NOT NULL AUTO_INCREMENT,
  `per_equ_equ_id` int NOT NULL,
  `per_equ_per_id` int NOT NULL,
  `equ_id` int DEFAULT NULL,
  `per_id` int DEFAULT NULL,
  PRIMARY KEY (`per_equ_id`),
  KEY `FK_d9534ec8b895e31b966fda511e4` (`equ_id`),
  KEY `FK_b3183a334094df695cacf90956e` (`per_id`),
  CONSTRAINT `FK_b3183a334094df695cacf90956e` FOREIGN KEY (`per_id`) REFERENCES `tbl_personagem` (`per_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_d9534ec8b895e31b966fda511e4` FOREIGN KEY (`equ_id`) REFERENCES `tbl_equipamento` (`equ_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_personagem_equipamento`
--

LOCK TABLES `tbl_personagem_equipamento` WRITE;
/*!40000 ALTER TABLE `tbl_personagem_equipamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_personagem_equipamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_personagem_magia`
--

DROP TABLE IF EXISTS `tbl_personagem_magia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_personagem_magia` (
  `per_mag_id` int NOT NULL AUTO_INCREMENT,
  `per_mag_mag_id` int NOT NULL,
  `per_mag_per_id` int NOT NULL,
  `mag_id` int DEFAULT NULL,
  `per_id` int DEFAULT NULL,
  PRIMARY KEY (`per_mag_id`),
  KEY `FK_814c020d6e4c8858ac32ac04059` (`mag_id`),
  KEY `FK_3cf0ebe2464ae33ffa058b8f0f2` (`per_id`),
  CONSTRAINT `FK_3cf0ebe2464ae33ffa058b8f0f2` FOREIGN KEY (`per_id`) REFERENCES `tbl_personagem` (`per_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_814c020d6e4c8858ac32ac04059` FOREIGN KEY (`mag_id`) REFERENCES `tbl_magia` (`mag_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_personagem_magia`
--

LOCK TABLES `tbl_personagem_magia` WRITE;
/*!40000 ALTER TABLE `tbl_personagem_magia` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_personagem_magia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_personagem_poder`
--

DROP TABLE IF EXISTS `tbl_personagem_poder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_personagem_poder` (
  `per_pod_id` int NOT NULL AUTO_INCREMENT,
  `per_pod_pod_id` int NOT NULL,
  `per_pod_per_id` int NOT NULL,
  `mag_id` int DEFAULT NULL,
  `per_id` int DEFAULT NULL,
  PRIMARY KEY (`per_pod_id`),
  KEY `FK_06e1b0bb2813795014b6188059e` (`mag_id`),
  KEY `FK_7768119160c93bda8db195e1282` (`per_id`),
  CONSTRAINT `FK_06e1b0bb2813795014b6188059e` FOREIGN KEY (`mag_id`) REFERENCES `tbl_poder` (`pod_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_7768119160c93bda8db195e1282` FOREIGN KEY (`per_id`) REFERENCES `tbl_personagem` (`per_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_personagem_poder`
--

LOCK TABLES `tbl_personagem_poder` WRITE;
/*!40000 ALTER TABLE `tbl_personagem_poder` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_personagem_poder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_poder`
--

DROP TABLE IF EXISTS `tbl_poder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_poder` (
  `pod_id` int NOT NULL AUTO_INCREMENT,
  `pod_nome` varchar(255) NOT NULL,
  `pod_custo` int NOT NULL,
  `pod_efeito` text NOT NULL,
  `pod_dano` varchar(50) NOT NULL,
  `pod_area` varchar(50) NOT NULL,
  `pod_alvo` varchar(50) NOT NULL,
  `pod_duracao` varchar(50) NOT NULL DEFAULT 'Instantâneo',
  PRIMARY KEY (`pod_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_poder`
--

LOCK TABLES `tbl_poder` WRITE;
/*!40000 ALTER TABLE `tbl_poder` DISABLE KEYS */;
INSERT INTO `tbl_poder` VALUES (1,'poderGenerico1',0,'Nenhum','Nenhum','Nenhum','Pessoal','Instantâneo'),(2,'poderGenerico2',2,'Nenhum','Nenhum','Nenhum','Pessoal','Instantâneo'),(3,'poderGenerico3',4,'Nenhum','Nenhum','Nenhum','Pessoal','Instantâneo'),(4,'poderGenerico4',1,'Nenhum','Nenhum','Nenhum','Pessoal','Instantâneo');
/*!40000 ALTER TABLE `tbl_poder` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-20 17:23:19
