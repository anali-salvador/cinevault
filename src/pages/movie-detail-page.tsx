import { useParams } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { movies } from "@/data/movies"

// Detalle de una película: toma el id desde la URL (/movies/:id) y busca
// la película correspondiente en el array local.
function MovieDetailPage() {
  const { id } = useParams<{ id: string }>()
  const movie = movies.find((item) => item.id === id)

  if (!movie) {
    return <p className="text-center text-muted-foreground">Película no encontrada.</p>
  }

  return (
    <Card className="mx-auto max-w-md">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="aspect-2/3 w-full object-cover"
      />
      <CardContent className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold tracking-tight">{movie.title}</h1>
        <span className="text-sm text-muted-foreground">
          ⭐ {movie.rating} · Estreno: {movie.releaseDate}
        </span>
        <p className="text-sm leading-relaxed">{movie.overview}</p>
      </CardContent>
    </Card>
  )
}

export default MovieDetailPage
