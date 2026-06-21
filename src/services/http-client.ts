import axios from "axios"

// Instancia única de axios para toda la app. Centralizar el cliente HTTP aquí
// permite cambiar la baseURL o agregar interceptores (auth, logs, etc.) en un solo lugar.
// VITE_API_URL se puede definir en un archivo .env cuando exista un backend real.
export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "https://api.cinevault.local",
})
