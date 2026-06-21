// Forma de una película dentro de la app. Por ahora viven en data/movies.ts,
// pero esta interface es la misma que se usará cuando los datos vengan de una API real.
export interface Movie {
  id: string
  title: string
  posterUrl: string
  overview: string
  releaseDate: string
  rating: number
}
