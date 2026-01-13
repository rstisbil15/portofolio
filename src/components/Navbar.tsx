import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sun } from "lucide-react"

const navItems = [
  'Beranda',
  'Tentang',
  'Proyek',
  'Kontak',
]

export default function Navbar() {
  return (
    <header className="w-full backdrop-blur-3xl bg-white/60 shadow-[0_1px_10px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      {/* container */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="font-bold text-lg">
          Portofolio
        </div>

        {/* tabs */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="text-sm font-normal hover:cursor-pointer"
            >
              {item}
            </Button>
          ))}

          {/* separator */}
          <Separator orientation="vertical" className="!bg-[#AEACAC] !h-8 !w-0.5 rounded-full" />

          {/* settings */}
          <div className="flex items-center gap-3">
            <span className="font-sm font-medium">ID</span>
            <Button
              variant="ghost"
              size="icon"
            >
              <Sun className="h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}