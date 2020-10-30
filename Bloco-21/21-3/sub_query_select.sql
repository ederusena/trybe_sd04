SELECT
  customer_id,
  first_name,
  (SELECT address FROM sakila.address AS a WHERE a.address_id = ct.address_id) AS 'Endereço'
FROM sakila.customer ct;

-- Join
SELECT
ct.customer_id,
ct.first_name,
ad.address
FROM sakila.customer AS ct
JOIN sakila.address as ad
ON ad.addresss_id = ct.address_id;