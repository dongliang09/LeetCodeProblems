# Write your MySQL query statement below

# group by Parent id
# if id is in parent id, then inner, else leaf

#select distinct p_id from Tree where p_id is not null



select id, 
( case when p_id is null then "Root"
       when id in (select distinct p_id from Tree where p_id is not null) then "Inner"
       when id not in (select distinct p_id from Tree where p_id is not null) then "Leaf"
  end
) as type
from Tree 
