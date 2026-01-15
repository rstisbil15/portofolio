import Navbar from "@/components/Navbar"
import Introduction from "@/components/home/Introduction"
import AboutMe from "@/components/home/AboutMe"
import Projects from "@/components/home/Projects"

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Projects />
    </>
  )
}