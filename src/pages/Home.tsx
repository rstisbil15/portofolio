import Navbar from "@/components/Navbar"
import Introduction from "@/components/home/Introduction"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">
        <Introduction />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Home Page</h1>
      </div>
    </>
  )
}