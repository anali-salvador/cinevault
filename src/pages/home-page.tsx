import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { movies } from "@/data/movies"

// Página de inicio: hero de bienvenida + una grilla con las primeras
// películas como "destacadas". El listado completo vive en /movies.
function HomePage() {
  const featuredMovies = movies.slice(0, 4)

  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col items-center gap-4 py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Bienvenido a CineVault</h1>
        <p className="max-w-md text-muted-foreground">
          Compra tus entradas para las mejores películas en cartelera, sin filas ni complicaciones.
        </p>
        <Button asChild size="lg">
          <Link to="/movies">Ver cartelera</Link>
        </Button>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Destacadas</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {featuredMovies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <Card className="h-full transition-opacity hover:opacity-80">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="aspect-2/3 w-full object-cover"
                />
                <CardContent className="flex flex-col gap-1">
                  <CardTitle>{movie.title}</CardTitle>
                  <span className="text-xs text-muted-foreground">⭐ {movie.rating}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
