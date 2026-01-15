import PageContainer from "@/components/layout/PageContainer";
import { Rocket, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="my-12">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* glow background */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div
              className="
                h-[180px]
                w-[80%]
                rounded-full
                bg-gradient-to-r
                from-pink-500
                via-fuchsia-500
                to-pink-600
                blur-3xl
                opacity-40
              "
            />
          </div>

          {/* card */}
          <div
            className="
              relative
              w-full
              rounded-3xl
              bg-gradient-to-r
              from-pink-500
              via-fuchsia-500
              to-pink-600
              px-6
              py-6
              sm:px-10
              sm:pt-8
              sm:pb-12
              text-center
              shadow-xl
            "
          >
            {/* icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur"
            >
              <Rocket className="h-6 w-6 text-white" />
            </motion.div>

            {/* title */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white sm:text-3xl"
            >
              Ingin Berkolaborasi?
            </motion.h2>

            {/* description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto mt-3 max-w-xl text-sm text-white/90 sm:text-base"
            >
              Mari wujudkan proyek digital Anda bersama saya. Hubungi sekarang
              untuk diskusi lebih lanjut.
            </motion.p>

            {/* button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ristisabila@upi.edu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-pink-600
                  shadow-md
                  sm:text-base
                "
              >
                <Mail className="h-4 w-4" />
                Hubungi Saya
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  )
}