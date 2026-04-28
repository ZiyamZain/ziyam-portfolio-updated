"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const container: Variants = {
  hidden: {},
  show: (delay: number = 0) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: delay,
    },
  }),
};

const word: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once }}
      custom={delay}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block">
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}
