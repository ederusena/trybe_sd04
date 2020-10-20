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

/*
Adição, Subtração, Multiplicação e Divisão
Para as operações matemáticas mais comuns, podemos empregar os operadores matemáticos usuais. Vamos testar cada um deles?
Execute os seguintes comandos dentro do Workbench:
*/

SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

# Podemos, também, usar as colunas diretamente como base para os cálculos, caso necessário.

SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;
