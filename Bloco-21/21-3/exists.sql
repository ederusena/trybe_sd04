SELECT SupplierName
FROM Suppliers
WHERE EXISTS (SELECT * FROM Products WHERE Products.CategoryID = 7 AND Suppliers.SupplierId = Products.SupplierId);


-- Negando


SELECT SupplierName
FROM Suppliers
WHERE NOT EXISTS (SELECT * FROM Products WHERE Products.CategoryID = 7 AND Suppliers.supplierID = Products.SupplierId);


-- Com Subquery

SELECT
  EmployeeID,
  FirstName
FROM Employees e
WHERE EXISTS (
  SELECT EmployeeID
  FROM Orders o
  GROUP BY EmployeeID
  HAVING COUNT(*) > 30)
ORDER BY EmployeeID;