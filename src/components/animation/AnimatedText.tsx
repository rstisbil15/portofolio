import { motion, AnimatePresence } from "framer-motion"

export function AnimatedText({
  text,
  className = "",
}: {
  text: string
  className?: string
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={text}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{
          duration: 0.18,
          ease: "easeOut",
        }}
        className={className}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  )
}
