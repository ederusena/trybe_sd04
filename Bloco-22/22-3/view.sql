-- Criando uma VIEW
USE sakila;
CREATE VIEW FilmesDentroDasCategoriasPreferidas AS
SELECT title FROM sakila.film f
INNER JOIN sakila.film_category fc
ON f.film_id = fc.film_id
WHERE fc.category_id IN (1,2,5,10,14);

-- Testando a view.
SELECT * FROM FilmesDentroDasCategoriasPreferidas ;

-- Dropando uma VIEW
DROP VIEW FilmesDentroDasCategoriasPreferidas