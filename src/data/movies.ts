import type { Movie } from "@/types/movie"

// Datos de ejemplo (mock) mientras no existe un backend real.
// El poster usa picsum.photos como placeholder de imagen, sembrado con el id
// de cada película para que la imagen sea siempre la misma.
export const movies: Movie[] = [
  {
    id: "1",
    title: "El Origen del Tiempo",
    posterUrl: "https://picsum.photos/seed/cinevault-1/400/600",
    overview:
      "Un grupo de científicos descubre una grieta temporal que amenaza con reescribir la historia de la humanidad.",
    releaseDate: "2024-03-15",
    rating: 8.4,
  },
  {
    id: "2",
    title: "Sombras de Medianoche",
    posterUrl: "https://picsum.photos/seed/cinevault-2/400/600",
    overview:
      "Una detective debe resolver una serie de crímenes en una ciudad donde nadie es quien dice ser.",
    releaseDate: "2023-10-02",
    rating: 7.6,
  },
  {
    id: "3",
    title: "Lazos de Fuego",
    posterUrl: "https://picsum.photos/seed/cinevault-3/400/600",
    overview:
      "Dos hermanos separados de niños se reencuentran como rivales en el mundo de las carreras clandestinas.",
    releaseDate: "2022-07-21",
    rating: 6.9,
  },
  {
    id: "4",
    title: "El Último Vuelo",
    posterUrl: "https://picsum.photos/seed/cinevault-4/400/600",
    overview:
      "Una piloto retirada acepta una última misión para rescatar a su tripulación atrapada en territorio hostil.",
    releaseDate: "2024-01-12",
    rating: 7.8,
  },
  {
    id: "5",
    title: "Jardines de Cristal",
    posterUrl: "https://picsum.photos/seed/cinevault-5/400/600",
    overview:
      "En una mansión abandonada, una joven heredera descubre secretos familiares que nunca debieron salir a la luz.",
    releaseDate: "2021-11-05",
    rating: 7.1,
  },
  {
    id: "6",
    title: "Código Rojo",
    posterUrl: "https://picsum.photos/seed/cinevault-6/400/600",
    overview:
      "Un hacker es reclutado por el gobierno para detener un ciberataque que podría dejar al país a oscuras.",
    releaseDate: "2023-05-19",
    rating: 7.3,
  },
  {
    id: "7",
    title: "Mares de Plata",
    posterUrl: "https://picsum.photos/seed/cinevault-7/400/600",
    overview:
      "La tripulación de un viejo pesquero se enfrenta a una tormenta legendaria que pone a prueba su lealtad.",
    releaseDate: "2022-09-30",
    rating: 6.5,
  },
  {
    id: "8",
    title: "La Última Función",
    posterUrl: "https://picsum.photos/seed/cinevault-8/400/600",
    overview:
      "Un viejo cine independiente lucha por sobrevivir mientras su dueño revive recuerdos de su propia historia.",
    releaseDate: "2024-06-08",
    rating: 8.1,
  },
]
