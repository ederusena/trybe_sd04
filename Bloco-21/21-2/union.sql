-- UNION
-- Remove Duplicados
-- Une dados de uma tabela a outra na ordem
SELECT City FROM Customers -- Primeiro as cidades daqui
UNION
SELECT City FROM Suppliers; -- Depois das cidades daqui


-- UNION ALL
SELECT City FROM Customers -- Primeiro as cidades daqui
UNION ALL
SELECT City FROM Suppliers; -- Depois das cidades daqui

-- Union X Join

SELECT 23 as bah -- Primeiro 
UNION
SELECT 45 as bah; -- Segundo

SELECT * FROM 
(SELECT 23 as bah) as foo
JOIN
(SELECT 45 as bah) as bar
ON(1=1)