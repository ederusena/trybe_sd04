-- Temos alguns tipos de índices no MySQL:
-- PRIMARY KEY
-- UNIQUE INDEX
-- FULLTEXT INDEX
-- INDEX

-- INDEX
CREATE INDEX index_country
ON sakila.country (country);

SELECT * FROM sakila.country
WHERE country = 'Sudan';

-- FULLTEXT INDEX 
CREATE FULLTEXT INDEX description_index
ON sakila.film (description);


SELECT * FROM sakila.film
WHERE MATCH (description) AGAINST('of a Pastry Chef And a Woman who must Chase');



-- Dropando um INDEX

DROP INDEX index_name on database_name.table_name;
