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
            Tentang Saya
          </h2>
          {/* description */}
          <p className="text-muted-foreground leading-relaxed">
            Saya adalah seorang Web Developer yang berfokus pada pengembangan
            aplikasi web modern dengan pendekatan yang terstruktur, efisien,
            dan berorientasi pada pengguna. Memiliki ketertarikan kuat pada
            penggabungan logika pemrograman, desain UI/UX, serta pengolahan data
            untuk menciptakan solusi digital yang tidak hanya berfungsi dengan
            baik, tetapi juga nyaman digunakan.
            <br /><br />
            Dalam proses pengembangan, saya terbiasa membangun antarmuka yang
            responsif, scalable, dan mudah dipelihara, serta mengoptimalkan
            performa aplikasi agar tetap cepat dan stabil. Saya senang
            mengeksplorasi teknologi baru dan terus meningkatkan kualitas
            produk melalui praktik terbaik, kolaborasi, dan evaluasi berkelanjutan.
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
                Bulan Pengalaman
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
            KEAHLIAN TEKNIS
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