-- Self Join
SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2
FROM Customers as A, Customers as B
WHERE A.CustomerID <> B.CustomerID
AND A.country <> B.country
ORDER BY A.country;