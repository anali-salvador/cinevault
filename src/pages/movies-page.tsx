import { Link } from "react-router-dom"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { movies } from "@/data/movies"

// Cartelera completa: todas las películas mock, cada una navega a su detalle al hacer click.
function MoviesPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">Cartelera</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <Card className="h-full transition-opacity hover:opacity-80">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="aspect-2/3 w-full object-cover"
              />
              <CardContent className="flex flex-col gap-1">
                <CardTitle>{movie.title}</CardTitle>
                <CardDescription>
                  ⭐ {movie.rating} · {movie.releaseDate}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MoviesPage
