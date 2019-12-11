--
-- Script was generated by Devart dbForge Studio 2019 for MySQL, Version 8.2.23.0
-- Product home page: http://www.devart.com/dbforge/mysql/studio
-- Script date 08.12.2019 15:40:10
-- Server version: 8.0.18
-- Client version: 4.1
--

-- 
-- Disable foreign keys
-- 
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

-- 
-- Set SQL mode
-- 
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 
-- Set character set the client will use to send SQL statements to the server
--
SET NAMES 'utf8';

--
-- Set default database
--
USE cnca;

--
-- Drop table `activity`
--
DROP TABLE IF EXISTS activity;

--
-- Drop table `activity_category`
--
DROP TABLE IF EXISTS activity_category;

--
-- Drop table `users`
--
DROP TABLE IF EXISTS users;

--
-- Drop table `roles`
--
DROP TABLE IF EXISTS roles;

--
-- Set default database
--
USE cnca;

--
-- Create table `roles`
--
CREATE TABLE roles (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create table `users`
--
CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  codice_fisicale VARCHAR(32) NOT NULL,
  nome VARCHAR(128) NOT NULL,
  cognome VARCHAR(128) DEFAULT NULL,
  data_di_nascita DATE DEFAULT NULL,
  sesso BIT(1) DEFAULT b'1',
  organizzazione VARCHAR(255) DEFAULT NULL,
  commune_di_nascita VARCHAR(255) DEFAULT NULL,
  password VARCHAR(128) DEFAULT NULL,
  role_id INT(11) DEFAULT NULL,
  email VARCHAR(50) DEFAULT NULL,
  image MEDIUMBLOB DEFAULT NULL,
  PRIMARY KEY (id, codice_fisicale),
  UNIQUE INDEX UK_users_id(id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create index `email` on table `users`
--
ALTER TABLE users 
  ADD UNIQUE INDEX email(email);

--
-- Create foreign key
--
ALTER TABLE users 
  ADD CONSTRAINT FK_users_roles_id FOREIGN KEY (role_id)
    REFERENCES roles(id);

--
-- Create table `activity_category`
--
CREATE TABLE activity_category (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(128) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create table `activity`
--
CREATE TABLE activity (
  id INT(11) NOT NULL,
  volonteer_id INT(11) DEFAULT NULL,
  activity_date DATE DEFAULT NULL,
  start_time TIME DEFAULT NULL,
  end_time TIME DEFAULT NULL,
  activity_category_id INT(11) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create foreign key
--
ALTER TABLE activity 
  ADD CONSTRAINT FK_activity_activity_category_id FOREIGN KEY (activity_category_id)
    REFERENCES activity_category(id);

--
-- Create foreign key
--
ALTER TABLE activity 
  ADD CONSTRAINT FK_activity_users_id FOREIGN KEY (volonteer_id)
    REFERENCES users(id);

-- 
-- Dumping data for table roles
--
INSERT INTO roles VALUES
(1, 'admin'),
(2, 'volonteer');

-- 
-- Dumping data for table users
--
-- Table cnca.users does not contain any data (it is empty)

-- 
-- Dumping data for table activity_category
--
-- Table cnca.activity_category does not contain any data (it is empty)

-- 
-- Dumping data for table activity
--
-- Table cnca.activity does not contain any data (it is empty)

-- 
-- Restore previous SQL mode
-- 
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

-- 
-- Enable foreign keys
-- 
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;