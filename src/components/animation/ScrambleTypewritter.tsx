import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}—=+*^?#"

// ===============================
// TIMING CONTROL
// ===============================
const SCRAMBLE_INTERVAL = 30       // kecepatan glyph berubah
const DEL_SCRAMBLE_INTERVAL = 10   // kecepatan glyph berubah
const SCRAMBLE_FRAMES = 6          // berapa kali scramble sebelum settle
const CHAR_DELAY = 20              // jeda antar karakter
const DELETE_DELAY = 20            // jeda antar hapus karakter
// ===============================

interface Props {
  words: string[]
  idleTime?: number
}

export function ScrambleTypewriter({
  words,
  idleTime = 3000,
}: Props) {
  const fullText = useMemo(() => words.join(" "), [words])
  const letters = useMemo(() => fullText.split(""), [fullText])

  const [output, setOutput] = useState<string[]>(Array(letters.length).fill(""))
  const [index, setIndex] = useState(0)
  const [mode, setMode] = useState<"typing" | "deleting">("typing")

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const reset = () => {
    setOutput(Array(letters.length).fill(""))
    setIndex(0)
    setMode("typing")
  }

  // ===============================
  // TYPING MODE
  // ===============================
  useEffect(() => {
    if (mode !== "typing") return
    if (index >= letters.length) {
      timeoutRef.current = setTimeout(() => {
        setMode("deleting")
        setIndex(letters.length - 1)
      }, idleTime)
      return
    }

    let frame = 0

    intervalRef.current = setInterval(() => {
      setOutput((prev) => {
        const next = [...prev]

        if (letters[index] === " ") {
          next[index] = " "
          return next
        }

        if (frame < SCRAMBLE_FRAMES) {
          next[index] =
            GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        } else {
          next[index] = letters[index]
        }

        return next
      })

      frame++

      if (frame > SCRAMBLE_FRAMES + 2) {
        clearInterval(intervalRef.current!)
        setTimeout(() => {
          setIndex((i) => i + 1)
        }, CHAR_DELAY)
      }
    }, SCRAMBLE_INTERVAL)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [index, letters, idleTime, mode])

  // ===============================
  // DELETING MODE
  // ===============================
  useEffect(() => {
    if (mode !== "deleting") return
    if (index < 0) {
      setTimeout(reset, 300)
      return
    }

    let frame = 0

    intervalRef.current = setInterval(() => {
      setOutput((prev) => {
        const next = [...prev]

        if (letters[index] === " ") {
          next[index] = ""
          return next
        }

        if (frame < SCRAMBLE_FRAMES) {
          next[index] =
            GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        } else {
          next[index] = ""
        }

        return next
      })

      frame++

      if (frame > SCRAMBLE_FRAMES + 2) {
        clearInterval(intervalRef.current!)
        setTimeout(() => {
          setIndex((i) => i - 1)
        }, DELETE_DELAY)
      }
    }, DEL_SCRAMBLE_INTERVAL)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [index, letters, mode])

  const handleHover = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    reset()
  }

  return (
    <motion.span
      onMouseEnter={handleHover}
      className="inline-flex cursor-default"
    >
      {output.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: char ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
