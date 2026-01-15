import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sun } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { label: 'Beranda', id: 'beranda' },
  { label: 'Tentang', id: 'tentang' },
  { label: 'Proyek', id: 'proyek' },
  { label: 'Kontak', id: 'kontak' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('beranda')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="w-full backdrop-blur-3xl bg-white/60 shadow-[0_1px_10px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      {/* container */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="font-bold text-lg cursor-pointer" onClick={() => scrollToSection('beranda')}>
          Portofolio
        </div>

        {/* tabs */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-normal hover:cursor-pointer transition-colors relative ${
                activeSection === item.id 
                  ? 'text-fuchsia-500 font-medium' 
                  : 'hover:text-fuchsia-400'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-fuchsia-500 rounded-full" />
              )}
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