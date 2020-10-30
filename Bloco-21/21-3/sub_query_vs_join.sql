SELECT
  customer_id,
  first_name,
  (SELECT address FROM sakila.address AS a WHERE a.address_id = ct.address_id) AS 'Endereço'
FROM sakila.customer ct;

--Alternativamente com o JOIN:

SELECT
  ct.customer_id,
  ct.first_name,
  a.address
FROM sakila.customer AS ct
LEFT JOIN sakila.address AS a
ON ct.address_id = a.address_id;