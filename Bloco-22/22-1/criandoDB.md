# 3) Criando um banco de dados para conter suas tabelas

-- Cria um banco de dados com o nome especificado.
CREATE DATABASE nome_do_banco_de_dados;

-- Sinônimo de CREATE DATABASE, também cria um banco de dados.
CREATE SCHEMA nome_do_banco_de_dados;

-- Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
IF NOT EXISTS nome_do_banco_de_dados;

-- Lista todos os bancos de dados existentes.
SHOW DATABASES;

-- Define o banco de dados escolhido como ativo.
USE nome_do_banco_de_dados;

CREATE TABLE nomeTabela (
    coluna1 tipo restricaoDaColuna,
    coluna2 tipo,
    coluna3 tipo,
    ...
) engine='Nome_da_engine'

// As informacoes presentes em papel que iremos transportar para o nosso bancod e dados sao:
// titulo, preco, autor e categoria

// cada livro deve possuir apenas um autor principal.
// cada pessoas pode ter escrito varios livros
// uma categoria pode pertecer a varios livros.

// identificar as entidades, atributos e relacionamentos com base na descrição do problema.

// Entidades: Livros, Autor, Categoria
-- 1. Autor
    -- Propriedades
    -- id -> 1
    -- Nome -> Eder

-- 2. Livros
    -- Propriedades
    -- id
    -- Titulo
    -- preco
    -- categoria_id -> FK ID 1 categoria -> Fantasia
    -- autor_id -> FK ID 1 Autor -> Eder

-- 3. Categoria
    -- Propriedades
    -- id -> PK ID 1
    -- nome -> Fantasia


SELECT * FROM livro l, livro_has_categoria lhc, categoria c
WHERE l.id = lhc.livro_id and lhc.categoria_id = c.id and l.id = 1;