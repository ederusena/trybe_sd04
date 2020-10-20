use sakila;
select title, release_year, length,
case
	when length <= 60 then 'Duração curta'
    when length > 60 and length <= 150 then 'Duração Média'
    else 'Duração Longa'
end as type_duration
from film;

SELECT length('Quase sextou bb'); -- exibe tamanho da string passada como parametro
select UCASE('burgao'); -- transforma em caixa alta a string passada como parametro
select LCASE('BURGAOOO');  -- transforma em caixa baixa a string passada como parametro
select LEFT('COD-1234556-MG', 2); -- extrai 2 caracteres a partir da esquerda
select RIGHT('COD-1234556-MG', 2); -- extrai 2 caracteres a partir da right
select substring('tenhofomedemais', 5); -- extrai 2 caracteres a partir do 5 caractere

-- 1 parametro -> posicao inicial de extracao
-- 2 parametro -> tamanho de caracteres que quero extrair

select substring('tenhofomedemais', 6,4); 