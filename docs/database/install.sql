SET NAMES 'utf8';

drop database if exists cnca;
create database cnca;

USE cnca;

CREATE TABLE `holidays` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=8192;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codice_fisicale` varchar(32) DEFAULT NULL,
  `nome` varchar(128) NOT NULL,
  `cognome` varchar(128) DEFAULT NULL,
  `data_di_nascita` date DEFAULT NULL,
  `sesso` bit(1) DEFAULT b'1',
  `organizzazione` varchar(255) DEFAULT NULL,
  `commune_di_nascita` varchar(255) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `role_id` int(11) DEFAULT 3,
  `email` varchar(64) NOT NULL,
  `image` mediumblob DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`email`),
  UNIQUE KEY `UK_users_id` (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `FK_users_roles_id` (`role_id`),
  CONSTRAINT `FK_users_roles_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `user_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `activity_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `activities` (
  `id` int(11) NOT NULL,
  `volunteer_id` int(11) NOT NULL,
  `activity_date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `activity_type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `activity_type_id` (`activity_type_id`),
  KEY `FK_activity_users_id` (`volunteer_id`),
  CONSTRAINT `activity_owner_id` FOREIGN KEY (`volunteer_id`) REFERENCES `users` (`id`),
  CONSTRAINT `activity_type_id` FOREIGN KEY (`activity_type_id`) REFERENCES `activity_types` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users_tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login_date` timestamp NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL,
  `token_string` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_token_owner` (`user_id`),
  CONSTRAINT `user_token_owner` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO activity_types(nome)  
VALUES
("totale ore indicate"),
("ingresso"),
("uscita"),
("ore attività"),
("malattia"),
("ferie"),
("permessi str"),
("formazione"),
("selezionare tipo attività da menù a tendina"),
("settimana");