-- O DIV realiza uma divisão inteira.
SELECT 20 DIV 3; -- testar com DIV 2, 4, 5, 6

-- O MOD retorna o resto de uma divisão inteira.
SELECT 18 MOD 3;

-- O ROUND te permite arredondar um valor, especificando ou não as casas decimais.
SELECT ROUND(20.49); -- testar com 20.51, -20.51, (20.34, 1), (20.34, 2) e (20.34,3)

-- O CEIL te permite arredondar o valor sempre para o valor inteiro mais próximo para cima.
SELECT CEIL(20.51); -- testar com -20.51, 20.01 e 20.2

-- O FLOOR te permite arredondar o valor sempre para o valor inteiro mais próximo por baixo.
SELECT FLOOR(10.51); -- testar com 20.3, 20.51 e 20.99

-- O POW te permite fazer potenciação onde temos numero X elevado ao numero Y.
SELECT POW(2, 5); -- testar com (2, 0), (2, 3) e (2, 4)

-- Como encontrar a raíz quadrada usando SQRT. Caso não exista uma raiz NULL é retornado.
SELECT SQRT(16); -- testar com -1, 3 e 4

-- É possível gerar valores aleatórios entre 0 (incluso) e 1.0 (excluso) usando o RAND.
SELECT RAND(); -- Gera um valor aleatório entre 0 (incluso) e 1.0 (excluso)

-- Podemos também gerar valores aleatórios dentro de uma faixa. Explique cada parte da seguinte query (vale a pena explicar lentamente por ter peças separadas)
 -- Gera um valor entre 5 e 14 da seguinte forma
SELECT FLOOR(5 + (RAND() * 10));