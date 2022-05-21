select a."firstName",
      a."lastName",
      f."title" as "movieTitle"
from "actors" as "a"
join "castMembers" as "cm" using ("actorId")
join "films" as "f" using ("filmId")
where f."title" = 'Jersey Sassy';
