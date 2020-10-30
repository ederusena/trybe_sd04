SELECT LENGTH('Quase sextou bb'); -- exibe tamanho da string passada como parâmetro

SELECT UCASE('burgao');  -- transforma em caixa alta a string passada como parâmetro

SELECT LCASE('BURGAO'); -- transforma em caixa baixa a string passada como parâmetro

SELECT LEFT('MG-COD-12345678', 2); -- extrai 2 caracteres a partir a esquerda

SELECT RIGHT('COD-12345678-MG', 2); -- extrai 2 caracteres a partir a direta

SELECT SUBSTRING('tenhofomedemais', 5); -- extrai uma string a partir do 5 caractere

-- 1 parametro -> posicao inicial de extracao
-- 2 parametro -> tamanho de caracteres que quero extrair
SELECT SUBSTRING('tenhofomedemais', 6 , 4);