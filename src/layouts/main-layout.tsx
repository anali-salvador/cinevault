import { NavLink, Outlet } from "react-router-dom"

// Layout compartido por todas las páginas: header con navegación fijo arriba
// y el contenido de la ruta activa renderizado por <Outlet /> debajo.
function MainLayout() {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"

  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <span className="text-lg font-bold tracking-tight">CineVault 🎬</span>
          <nav className="flex gap-4 text-sm font-medium">
            <NavLink to="/" end className={navLinkClassName}>
              Inicio
            </NavLink>
            <NavLink to="/movies" className={navLinkClassName}>
              Películas
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
