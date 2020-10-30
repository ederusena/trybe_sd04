SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
HAVING COUNT(*) >= 2;

-- O uso de um ALIAS melhora muito a leitura e torna o código mais legível
SELECT district, COUNT(*) AS district_count
FROM sakila.address
GROUP BY district
HAVING district_count >= 2;

-- Alias com string não funcionam! Diga que os estudantes devem usar o underline para separar palavras
SELECT district, COUNT(*) AS 'district count'
FROM sakila.address
GROUP BY district
HAVING 'district count' >= 2;
