select fg."genreId",
      a."firstName",
      a."lastName",
      count (*) as "totalMovies"
from "actors" as "a"
join "castMembers" as "cm" using ("actorId")
join "films" as "f" using ("filmId")
join "filmGenre" as "fg" using ("filmId")
group by fg."genreid",



-- List the genres of movies (and how many) that 'Lisa Monroe' appeared in. She appeared in a lot of films!
