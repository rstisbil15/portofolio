import Navbar from "@/components/Navbar"
import Introduction from "@/components/home/Introduction"
import AboutMe from "@/components/home/AboutMe"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=""> {/* background div */}
        <Introduction />
      </div>
      <AboutMe />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Home Page</h1>
      </div>
    </>
  )
}