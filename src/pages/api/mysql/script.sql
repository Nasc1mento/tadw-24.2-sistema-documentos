-- CREATE DATABASE tadw;

-- USE tadw;

CREATE TABLE documentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    tipo ENUM('ACADEMICO', 'FINANCEIRO'),
    conteudo VARCHAR(255) NOT NULL
);

CREATE TABLE documentos_academicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    autor VARCHAR(255),
    area_estudo VARCHAR(255),
    doi VARCHAR(255),
    documento_id INT,
    FOREIGN KEY (documento_id) REFERENCES documentos(id)
)

CREATE TABLE documentos_financeiros(
    id INT AUTO_INCREMENT PRIMARY KEY,
    data DATE,
    departamento VARCHAR(255),
    valor DECIMAL(10,2),
    documento_id INT,
    FOREIGN KEY (documento_id) REFERENCES documentos(id)
)