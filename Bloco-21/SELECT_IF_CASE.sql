/*
Condicionais
*/

use sakila;
select title, release_year, length,
case
	when length <= 60 then 'Duração curta'
    when length > 60 and length <= 150 then 'Duração Média'
    else 'Duração Longa'
end as type_duration
from film;
-- Sintaxe:
SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso);

SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade')
FROM pessoas;

SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida')
FROM estabelecimentos;

-- Exemplo utilizando o banco sakila:
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;
-- Sintaxe:
SELECT CASE
  WHEN condicao THEN valor
  ELSE valor padrao
END;

SELECT
    nome,
    nivel_acesso,
    CASE
        WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
        WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
        WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
        ELSE 'Usuário sem acesso'
    END AS nivel_acesso
FROM permissoes_usuario;

-- Exemplo utilizando a tabela sakila.film:
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;

/*
Funções matemáticas do MySQL
*/

SELECT length('Quase sextou bb'); -- exibe tamanho da string passada como parametro
select UCASE('burgao'); -- transforma em caixa alta a string passada como parametro
select LCASE('BURGAOOO');  -- transforma em caixa baixa a string passada como parametro
select LEFT('COD-1234556-MG', 2); -- extrai 2 caracteres a partir da esquerda
select RIGHT('COD-1234556-MG', 2); -- extrai 2 caracteres a partir da right
select substring('tenhofomedemais', 5); -- extrai 2 caracteres a partir do 5 caractere

-- 1 parametro -> posicao inicial de extracao
-- 2 parametro -> tamanho de caracteres que quero extrair

select substring('tenhofomedemais', 6,4); 