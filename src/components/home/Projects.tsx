import PageContainer from "../layout/PageContainer";
import { Card } from "@/components/ui/card";
import { easeOut, motion } from "framer-motion";

const project1 = {
  title: "BaleTani",
  description: "Fresh market management system untuk pengelolaan distribusi dan stok hasil pertanian.",
  image: "../../../baletani.jpg",
  techStack: ["ReactJS", "NodeJS", "MySQL"],
}

const project2 = {
  title: "BaleTani",
  description: "Fresh market management system untuk pengelolaan distribusi dan stok hasil pertanian.",
  image: "../../../baletani.jpg",
  techStack: ["ReactJS", "NodeJS", "MySQL"],
}

const project3 = {
  title: "BaleTani",
  description: "Fresh market management system untuk pengelolaan distribusi dan stok hasil pertanian.",
  image: "../../../baletani.jpg",
  techStack: ["ReactJS", "NodeJS", "MySQL"],
}

const project4 = {
  title: "BaleTani",
  description: "Fresh market management system untuk pengelolaan distribusi dan stok hasil pertanian.",
  image: "../../../baletani.jpg",
  techStack: ["ReactJS", "NodeJS", "MySQL"],
}

const project5 = {
  title: "BaleTani",
  description: "Fresh market management system untuk pengelolaan distribusi dan stok hasil pertanian.",
  image: "../../../baletani.jpg",
  techStack: ["ReactJS", "NodeJS", "MySQL"],
}

const projects = [
  project1,
  project2,
  project3,
  project4,
  project5,
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export default function Projects() {
  return (
    <section className="py-8 md:py-12">
      <PageContainer>
        {/* project title and desc */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl space-y-2 md:space-y-3 mb-6 md:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Karya Pilihan
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Eksplorasi karya terbaik yang pernah saya bangun sebagai solusi digital
            dengan pendekatan modern, terstruktur, dan berorientasi pada pengguna.
          </p>
        </motion.div>

        {/* projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
            >
              <Card
                key={index}
                className="overflow-hidden transition-shadow duration-300 hover:shadow-md !pt-0 h-full"
              >
                {/* project image */}
                <div className="h-36 sm:h-40 md:h-44 bg-muted overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* project content */}
                <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  {/* techstack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm bg-muted px-3 py-2 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </PageContainer>
    </section>
  )
}