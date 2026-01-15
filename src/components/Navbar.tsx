import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sun } from "lucide-react"
import { useState, useEffect } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navItems = [
  {
    label: 'Beranda',
    id: 'intro'
  },
  {
    label: 'Tentang',
    id: 'about'
  },
  {
    label: 'Proyek',
    id: 'project'
  },
  {
    label: 'Kontak',
    id: 'contact'
  },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('intro')

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
        <div className="font-bold text-lg cursor-pointer" onClick={() => scrollToSection('intro')}>
          Portofolio
        </div>

        {/* nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-normal hover:cursor-pointer transition-colors relative ${activeSection === item.id
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

        {/* nav mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[320px] backdrop-blur-xl bg-white/90"
            >
              <div className="flex flex-col gap-6 mt-8">
                {/* menu items */}
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection(item.id)}
                        className={`justify-start text-base ${activeSection === item.id
                            ? "text-fuchsia-500 font-medium"
                            : ""
                          }`}
                      >
                        {item.label}
                      </Button>
                    </SheetClose>
                  ))}
                </div>

                <Separator />

                {/* settings */}
                <div className="flex flex-col gap-4 px-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Bahasa</span>
                    <span className="text-sm">ID</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Tema</span>
                    <Sun className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}