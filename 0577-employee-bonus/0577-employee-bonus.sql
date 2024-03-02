# Write your MySQL query statement below

SELECT Employee.name, Bonus.bonus
FROM Employee
LEFT JOIN Bonus
ON Employee.empId = Bonus.empId
WHERE Bonus.bonus < 1000 or Bonus.bonus IS NULL;

# Date: 3/2/2024
# Runtime: 2908 ms, faster than 6.39% 
# Memory Usage: 0B, less than 100.00%