CREATE DATABASE IF NOT EXISTS TrybeDB;
USE TrybeDB;

CREATE table BeTrybe(
    id int,
    cidade VARCHAR(50)
);

-- Vamos entender a estrutura atual da tabela rodando o seguinte comando:

SHOW COLUMNS FROM BeTrybe;
 
-- E se a gente quiser adicionar uma data de fundação? Podemos adicionar ela com o seguinte comando:

ALTER TABLE BeTrybe ADD column data_fundacao DATE;

-- Vamos conferir a estrutura novamente:

SHOW COLUMNS FROM BeTrybe;

-- Show! Agora já podemos identificar quando cada novo HUB da trybe é aberto. Digamos que você gostaria, por uma questão de organização, adicionar uma coluna em um local especifico da tabela.

ALTER TABLE BeTrybe Add estado VARCHAR(50) AFTER cidade;

-- Vamos confirmar que funcionou:

SHOW COLUMNS FROM BeTrybe;

-- Imagine que na verdade o que nós queremos é armazenar apenas as iniciais do estado e não uma VARCHAR:

ALTER TABLE BeTrybe MODIFY estado char(2) NOT NULL;

-- Ainda não temos uma primary key incrementado automaticamente.

-- Podemos fazer isso com nossa coluna id

ALTER TABLE BeTrybe MODIFY id INT PRIMARY KEY AUTO_INCREMENT;

-- Perfeito! Podemos finalizar agora, mas antes vamos alterar o nome da chave primária para algo mais descritivo:

ALTER TABLE BeTrybe CHANGE id betrybe_id INT;

-- Vamos imaginar que não precisamos mais da informação de estado, como podemos dropar ela?

ALTER TABLE BeTrybe DROP COLUMN estado;