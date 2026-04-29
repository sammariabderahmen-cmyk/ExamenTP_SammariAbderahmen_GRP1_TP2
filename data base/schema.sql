CREATE DATABASE IF NOT EXISTS pfe_system;
USE pfe_system;

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    student_name VARCHAR(100) NOT NULL,
    status ENUM('propose', 'valide', 'en-cours', 'soutenu') DEFAULT 'propose',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Données initiales
INSERT INTO projects (title, student_name, status) VALUES 
('Système de Gestion de Stock', 'Ahmed Ben Salah', 'propose'),
('Application Mobile Santé', 'Sonia Mansour', 'valide'),
('IA pour Détection de Fraude', 'Karim Dridi', 'en-cours'),
('Analyse des Réseaux Sociaux', 'Yasmine Tounsi', 'soutenu');