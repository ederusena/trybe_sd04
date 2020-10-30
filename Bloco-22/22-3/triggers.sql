-- Database de exemplo

CREATE DATABASE IF NOT EXISTS forum;

USE forum;

CREATE TABLE postagem(
    postagem_id INT PRIMARY KEY auto_increment,
    titulo_postagem VARCHAR(150),
    data_abertura DATETIME,
    data_modificacao DATETIME,
    status_postagem VARCHAR(30)
);


-- Criando uma trigger

USE forum;

DELIMITER $$
CREATE TRIGGER trigger_postagem_insert
    BEFORE INSERT ON postagem
    FOR EACH ROW
BEGIN
    SET NEW.status_postagem = 'Aguardando Aprovação',
    NEW.data_abertura = NOW();
END;
$$ DELIMITER ;