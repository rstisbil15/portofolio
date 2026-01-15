import PageContainer from "@/components/layout/PageContainer"
import { Card } from "@/components/ui/card"
import {
  SiHtml5,
  SiVuedotjs,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiReact,
  SiNodedotjs,
  SiFigma,
  SiGit,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiCypress,
} from "react-icons/si"
import { VscGraphLine } from "react-icons/vsc"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { AnimatedText } from "@/components/animation/AnimatedText"

const techStack = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Vue", icon: SiVuedotjs, color: "text-green-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Figma", icon: SiFigma, color: "text-pink-500" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "K6", icon: VscGraphLine, color: "text-purple-500" },
  { name: "Cypress", icon: SiCypress, color: "text-emerald-600" },
]

export default function AboutMe() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-12">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center space-y-6"
        >
          {/* title */}
          <h2 className="text-3xl md:text-4xl font-bold">
            <AnimatedText text={t("aboutMe.title")} />
          </h2>
          {/* description */}
          <p className="text-muted-foreground leading-relaxed">
            <AnimatedText text={t("aboutMe.desc1")} />
            <br /><br />
            <AnimatedText text={t("aboutMe.desc2")} />
          </p>
          {/* experience */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <Card className="px-10 py-6 text-center">
              <p className="text-3xl font-bold text-primary">1+</p>
              <p className="text-sm text-muted-foreground mt-1">
                <AnimatedText text={t("aboutMe.experience")} />
              </p>
            </Card>
          </motion.div>
        </motion.div>
        {/* techstack */}
        <div className="mt-12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center text-sm font-semibold tracking-widest text-muted-foreground mb-10"
          >
            <AnimatedText text={t("aboutMe.techstack")} />
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
            className="flex flex-wrap justify-center gap-4"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card
                  key={tech.name}
                  className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm hover:shadow-sm transition"
                >
                  <tech.icon className={`h-4 w-4 ${tech.color}`} />
                  <span className="font-medium">
                    {tech.name}
                  </span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}