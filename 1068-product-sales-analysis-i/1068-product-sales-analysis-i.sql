# Write your MySQL query statement below

SELECT Product.product_name, Sales.year, Sales.price
FROM Sales
JOIN Product
WHERE Sales.product_id = Product.product_id;