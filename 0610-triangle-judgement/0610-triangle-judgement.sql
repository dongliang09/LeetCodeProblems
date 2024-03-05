# Write your MySQL query statement below
SELECT 
    x, y, z, 
    CASE 
        WHEN x + y > z and y + z > x and x + z > y THEN "Yes"
        ELSE "No"
    END as triangle
FROM Triangle;

# Date: 3/4/2024
# Runtime: 444 ms, faster than 81.24% 
# Memory Usage: 0B, less than 100.00%