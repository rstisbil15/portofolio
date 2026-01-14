import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import PageContainer from "../layout/PageContainer"
import { Separator } from "@/components/ui/separator"

export default function Introduction() {
  return (
    <PageContainer>
      <section className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {/* left section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            {/* role */}
            <span className="flex items-center gap-2 text-sm font-medium tracking-widest text-muted-foreground mb-3">
              <Separator orientation="horizontal" className="!w-6 !h-0.5 !bg-[#AEACAC]" />
              WEB DEVELOPER
            </span>

            {/* title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Hello, I'm
              <span className="text-fuchsia-400 [text-shadow:2px_1px_2px_rgba(255,102,230,0.7)]"><br />Risti Sabila.</span>
            </h1>

            {/* description */}
            <p className="text-muted-foreground max-w-xl mb-8">
              Menggabungkan logika teknis dan kreativitas desain untuk
              menciptakan produk digital yang berdampak.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => {
                  document
                    .getElementById("next-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Lihat Karya
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="/cv.pdf" download>
                  Unduh CV
                </a>
              </Button>
            </div>
          </motion.div>

          {/* right section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex justify-end items-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-muted w-[260px] h-[360px]">

              {/* image */}
              <img
                src="../../../risti_sabila.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />

              {/* status badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur rounded-xl px-4 py-2 flex items-center gap-2 shadow">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-sm font-medium">
                  Ready to Collaborate
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageContainer>
  )
}