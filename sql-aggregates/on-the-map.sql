select country."name" as "country",
      count (*) as "totalCities"
from "cities" as "c"
join "countries" as "country" using ("countryId")
group by country."name" as "city";
