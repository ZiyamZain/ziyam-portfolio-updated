"use client";

import { motion } from "framer-motion";

const techStack = [
  { label: "React", category: "Frontend" },
  { label: "Next.js", category: "Frontend" },
  { label: "TypeScript", category: "Frontend" },
  { label: "Tailwind", category: "Frontend" },
  { label: "Node.js", category: "Backend" },
  { label: "Express", category: "Backend" },
  { label: "MongoDB", category: "Backend" },
  { label: "PostgreSQL", category: "Backend" },
  { label: "Socket.io", category: "Backend" },
  { label: "Docker", category: "Tools" },
  { label: "Git", category: "Tools" },
  { label: "REST APIs", category: "Tools" },
];

export default function About() {
  return (
    <section id="about" className="section-pad px-6">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-muted tracking-widest uppercase mb-12"
        >
          01 / About
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-primary mb-6">
              A developer who cares about the craft.
            </h2>
            <div className="space-y-4 text-subtle text-[0.95rem] leading-7">
              <p>
                I build full-stack web applications — from clean, responsive interfaces
                to robust back-end systems. My focus is on writing code that&apos;s
                readable, maintainable, and actually solves the problem at hand.
              </p>
              <p>
                I&apos;ve shipped products across e-commerce, real-time communication,
                AI/ML tooling, and community platforms. When I&apos;m not coding,
                I&apos;m probably exploring new tech or thinking about product.
              </p>
            </div>

            <a
              href="https://github.com/ZiyamZain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-sm font-mono text-accent hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
            >
              github.com/ZiyamZain →
            </a>
          </motion.div>

          {/* Tech stack */}
          <div>
            <p className="text-xs font-mono text-muted tracking-widest uppercase mb-5">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="px-3 py-1.5 rounded-lg border border-border text-subtle text-sm font-mono hover:border-[#2f2f2f] hover:text-primary transition-all duration-200 cursor-default"
                >
                  {tech.label}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
