import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center gap-4 bg-background text-foreground">
      <h1 className="text-3xl font-bold tracking-tight">CineVault 🎬</h1>
      <Button>Ver cartelera</Button>
    </div>
  )
}

export default App