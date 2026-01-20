import PageContainer from "../layout/PageContainer";
import { Card } from "@/components/ui/card";
import { easeOut, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AnimatedText } from "@/components/animation/AnimatedText";

const project1 = {
  title: "projects.project1.title",
  description: "projects.project1.desc",
  image: "../../../baletani.jpg",
  techStack: ["ReactJS", "API", "MySQL","Tailwind CSS", "K6", "Cypress"],
}

const project2 = {
  title: "projects.project2.title",
  description: "projects.project2.desc",
  image: "../../../finova.png",
  techStack: ["Vue", "Laravel", "MySQL","Tailwind CSS"],
}

const project3 = {
  title: "projects.project3.title",
  description: "projects.project3.desc",
  image: "../../../finova_desktop.png",
  techStack: ["Netbeans", "SQL", "Java"],
};

const projects = [
  project1,
  project2,
  project3,
];

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
  const { t } = useTranslation()

  return (
    <section id="project" className="py-8 md:py-12">
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
            <AnimatedText text={t("projects.title")} />
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            <AnimatedText text={t("projects.desc")} />
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
                    <AnimatedText text={t(project.title)} />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <AnimatedText text={t(project.description)} />
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