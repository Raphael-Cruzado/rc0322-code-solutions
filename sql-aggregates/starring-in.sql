select count(*) as "totalMovies",
      "genres"."name" as "genre"
from "films"
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
group by "genreId";



-- List the genres of movies (and how many) that 'Lisa Monroe' appeared in. She appeared in a lot of films!
