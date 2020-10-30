-- LEFT JOIN
-- Queremos fazer um LEFT JOIN da tabelas PETS com a tabela FRIENDS

SELECT * FROM db.pets;
SELECT * FROM db.friends;
-- FRIENDS -> Tabela da esquerda
-- PETS -> Tabela da direta

--            Esquerda         X         Direita 
SELECT * FROM db.friends AS F RIGHT JOIN db.pets AS P
ON F.friend_id = P.owner_id;

-- Da pra fazer consulta de relacionamentos sem usar o JOIN
SELECT * FROM db.friends AS F, db.pets AS P
WHERE F.friend_id = P.owner;