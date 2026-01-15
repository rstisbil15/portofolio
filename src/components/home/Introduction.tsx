import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import PageContainer from "../layout/PageContainer"
import { Separator } from "@/components/ui/separator"
import { Download, ArrowDown } from "lucide-react"
import { useTranslation } from "react-i18next"
import { AnimatedText } from "@/components/animation/AnimatedText"
import { ScrambleTypewriter } from "@/components/animation/ScrambleTypewritter"

export default function Introduction() {
  const { t } = useTranslation()

  return (
    <PageContainer>
      <section id="intro" className="min-h-[calc(100vh-4rem)] flex items-center py-8 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              <AnimatedText text={t("intro.greeting")} />
              <span className="text-fuchsia-400 [text-shadow:2px_1px_2px_rgba(255,102,230,0.7)]">
                <br />
                <ScrambleTypewriter
                  words={['Risti', 'Sabila.']}
                  idleTime={5000}
                />
              </span>
            </h1>

            {/* description */}
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mb-6 md:mb-8">
              <AnimatedText text={t("intro.desc")} />
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => {
                  document
                    .getElementById("project")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <ArrowDown className="h-4 w-4" />
                <AnimatedText text={t("intro.projectButton")} />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="./../../../CV_RistiSabila.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  <AnimatedText text={t("intro.cvButton")} />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* right section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex justify-center md:justify-end items-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-muted w-full max-w-[280px] sm:max-w-[300px] md:w-[260px] aspect-[13/18]">

              {/* image */}
              <img
                src="../../../risti_sabila.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />

              {/* status badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-background/90 backdrop-blur rounded-xl px-3 py-2 sm:px-4 flex items-center gap-2 shadow">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-xs sm:text-sm font-medium">
                  <AnimatedText text={t("intro.badge")} />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageContainer>
  )
}