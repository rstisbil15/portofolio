import Navbar from "@/components/Navbar"
import Introduction from "@/components/home/Introduction"
import AboutMe from "@/components/home/AboutMe"
import Projects from "@/components/home/Projects"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=""> {/* background div */}
        <Introduction />
      </div>
      <AboutMe />
      <Projects />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Home Page</h1>
      </div>
    </>
  )
}