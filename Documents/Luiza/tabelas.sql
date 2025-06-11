CREATE DATABASE Biblioteca;
USE Biblioteca;

CREATE TABLE usuarios(
	usuario_id int PRIMARY KEY AUTO_INCREMENT,
	nome varchar(30) NOT NULL,
	email varchar(50),
    telefone varchar(50)
);
