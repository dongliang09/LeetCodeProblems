# Write your MySQL query statement below

select customer_number
from Orders
group by customer_number 
having count(order_number ) = 

(
    select max(c) as maxN from
    (
        select count(customer_number) as c from Orders
        group by customer_number
    ) as countT
)

# https://stackoverflow.com/questions/5159928/sql-displaying-entries-that-are-the-max-of-a-count
