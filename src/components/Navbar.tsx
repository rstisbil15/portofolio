import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sun } from "lucide-react"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { AnimatedText } from "@/components/animation/AnimatedText"

const navItems = [
  {
    label: 'nav.intro',
    id: 'intro'
  },
  {
    label: 'nav.about',
    id: 'about'
  },
  {
    label: 'nav.project',
    id: 'project'
  },
  {
    label: 'nav.contact',
    id: 'contact'
  },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('intro')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (windowHeight + window.scrollY >= documentHeight - 5) {
        setActiveSection("contact")
        return
      }

      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id)
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
              <AnimatedText text={t(item.label)} />
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-fuchsia-500 rounded-full" />
              )}
            </Button>
          ))}

          {/* separator */}
          <Separator orientation="vertical" className="!bg-[#AEACAC] !h-8 !w-0.5 rounded-full" />

          {/* settings */}
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <AnimatedText text={i18n.language.toUpperCase()} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-4" align="start">
                <DropdownMenuItem
                  onClick={() => i18n.changeLanguage(
                    i18n.language === "en" ? "id" : "id"
                  )}
                >
                  ID
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => i18n.changeLanguage(
                    i18n.language === "id" ? "en" : "en"
                  )}
                >
                  EN
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
            >
              <Sun className="h-4 w-4" />
            </Button>
          </div>
        </nav>

        {/* nav mobile */}
        <div className="md:hidden relative">
          {/* hamburger button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* dropdown */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="
                  absolute
                  right-0
                  mt-3
                  w-[260px]
                  rounded-2xl
                  bg-white/95
                  backdrop-blur-xl
                  shadow-xl
                  p-4
                  z-50
                "
              >
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => {
                        setMobileOpen(false)
                        scrollToSection(item.id)
                      }}
                      className={`justify-start text-base ${
                        activeSection === item.id
                          ? "text-fuchsia-500 font-medium"
                          : ""
                      }`}
                    >
                      <AnimatedText text={t(item.label)} />
                    </Button>
                  ))}
                </div>

                <Separator className="my-3" />

                {/* settings */}
                <div className="flex flex-col gap-1">
                  <Button
                    variant="ghost"
                    onClick={() => i18n.changeLanguage(
                      i18n.language === "id" ? "en" : "id"
                    )}
                    className="flex items-center justify-between text-sm"
                  >
                    <AnimatedText text={t("settings.language")} />
                    <AnimatedText text={i18n.language.toUpperCase()} />
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-between text-sm"
                  >
                    <AnimatedText text={t("settings.theme")} />
                    <Sun className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}