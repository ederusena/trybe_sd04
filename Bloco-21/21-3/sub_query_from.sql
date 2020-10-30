-- Usando subquery com From
-- A subquery é executada primeiro.
-- (no caso retornaremos todos os filmes que possuem no titulo a string air)
-- o select externo fora da subquery eh executado usando o alias 'f' com todos os resultados que foram
-- gerados pela subquery
SELECT f.*
FROM (SELECT * FROM sakila.film WHERE title LIKE '%air%') as f;