import Navbar from "@/components/Navbar"
import Introduction from "@/components/home/Introduction"
import AboutMe from "@/components/home/AboutMe"
import Projects from "@/components/home/Projects"

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="beranda" className=""> {/* background div */}
        <Introduction />
      </div>
      <div id="tentang">
        <AboutMe />
      </div>
      <div id="proyek">
        <Projects />
      </div>
    </>
  )
}