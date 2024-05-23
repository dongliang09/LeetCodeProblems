# Write your MySQL query statement below

# SalesPerson Company Orders 
select name from SalesPerson 
where name not in

( #those who have orders from RED
    select SalesPerson.name
    from SalesPerson
    inner join Orders
    on Orders.com_id = (select com_id from Company where name = "RED")    
    and Orders.sales_id = SalesPerson.sales_id
)