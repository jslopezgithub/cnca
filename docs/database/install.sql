SET NAMES 'utf8';

drop database if exists cnca;
create database cnca;

USE cnca;

CREATE TABLE roles (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(64) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
AVG_ROW_LENGTH = 8192
DEFAULT CHARACTER SET = utf8;


CREATE TABLE users (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `codice_fisicale` VARCHAR(32) NULL DEFAULT NULL,
  `nome` VARCHAR(128) NOT NULL,
  `cognome` VARCHAR(128) NULL DEFAULT NULL,
  `data_di_nascita` DATE NULL DEFAULT NULL,
  `sesso` BIT(1) NULL DEFAULT b'1',
  `organizzazione` VARCHAR(255) NULL DEFAULT NULL,
  `commune_di_nascita` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(128) NULL DEFAULT NULL,
  `role_id` INT(11) NULL DEFAULT 3,
  `email` VARCHAR(50) NOT NULL,
  `image` MEDIUMBLOB NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `email`),
  UNIQUE INDEX `UK_users_id` (`id` ASC),
  INDEX `FK_users_roles_id` (`role_id` ASC),
  CONSTRAINT `user_role_id`
    FOREIGN KEY (role_id)
    REFERENCES roles (id))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8;

ALTER TABLE users 
  ADD UNIQUE INDEX email(email);

ALTER TABLE users 
  ADD CONSTRAINT FK_users_roles_id FOREIGN KEY (role_id)
    REFERENCES roles(id);

CREATE TABLE activity_category (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(128) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8,
COLLATE utf8_general_ci;

CREATE TABLE IF NOT EXISTS activity (
  `id` INT(11) NOT NULL,
  `volonteer_id`  INT(11) NOT NULL,
  `activity_date` DATE NULL DEFAULT NULL,
  `start_time`    TIME NULL DEFAULT NULL,
  `end_time`      TIME NULL DEFAULT NULL,
  `activity_category_id` INT(11) NOT NULL,

  PRIMARY KEY (`id`),
  
  INDEX `activity_category_type` (`activity_category_id` ASC),
  INDEX `FK_activity_users_id` (`volonteer_id` ASC),
  
  CONSTRAINT `activity_type_id`
  FOREIGN KEY (`activity_category_id`)
  REFERENCES activity_category (`id`),
  
  CONSTRAINT `activity_owner_id`
  FOREIGN KEY (`volonteer_id`)
  REFERENCES users (id))
  
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE activity 
  ADD CONSTRAINT FK_activity_activity_category_id FOREIGN KEY (activity_category_id)
    REFERENCES activity_category(id);

ALTER TABLE activity 
  ADD CONSTRAINT FK_activity_users_id FOREIGN KEY (volonteer_id)
    REFERENCES users(id);


-- DEFAULT ROLES 
INSERT INTO roles VALUES
(1, 'owner'),
(2, 'admin'),
(3, 'volonteer');


-- ADDING TEST USERS
-- INSERT INTO users(codice_fisicale,nome,cognome,data_di_nascita,sesso,organizzazione,commune_di_nascita,password,role_id,email) VALUES
-- ('aeh8933j3f939', 'Ramazan', 'Aliskhanov', '1986-06-07', True, 'ETA BETA', 'NETTUNO', '123456', 1, 'ravillion@mail.ru'),
-- ('aeh8933j3f931', 'Abdulla', 'Ahlamonov', '1986-06-07',  True, 'ETA BETA', 'NETTUNO', '123456', 2, 'ravillion1@mail.ru'),
-- ('aeh8933j3f933', 'Rizvan', 'Adilkhanov', '1986-06-07',  True, 'ETA BETA', 'NETTUNO', '123456', 3, 'ravillion2@mail.ru');
