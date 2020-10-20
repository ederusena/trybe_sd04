use sakila;
select title, release_year, length,
case
	when length <= 60 then 'Duração curta'
    when length > 60 and length <= 150 then 'Duração Média'
    else 'Duração Longa'
end as type_duration
from film;