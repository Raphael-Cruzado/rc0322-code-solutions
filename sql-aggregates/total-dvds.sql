select "filmId",
      count(*) as "totalDvds"
from "inventory"
group by "filmId"
order by "filmId" asc
