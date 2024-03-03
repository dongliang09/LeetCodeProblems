# Write your MySQL query statement below

SELECT Product.product_name, Sales.year, Sales.price
FROM Sales
JOIN Product
WHERE Sales.product_id = Product.product_id;

# Date: 3/2/2024
# Runtime: 2455 ms, faster than 31.31%
# Memory Usage: 0B, less than 100.00%