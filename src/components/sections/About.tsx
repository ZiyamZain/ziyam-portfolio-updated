"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Socket.io", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & Infra",
    items: ["Git", "Docker", "Vercel", "Postman", "Linux"],
  },
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
          03 / About
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
                I build full-stack web applications — from clean, responsive
                interfaces to robust back-end systems. My focus is on writing
                code that&apos;s readable, maintainable, and actually solves the
                problem at hand.
              </p>
              <p>
                I&apos;ve shipped products across e-commerce, real-time
                communication, AI/ML tooling, and community platforms. When
                I&apos;m not coding, I&apos;m probably exploring new tech or
                thinking about product.
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

          {/* Categorized Tech stack */}
          <div className="flex flex-col gap-8">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-mono text-muted tracking-widest uppercase mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="px-3 py-1.5 rounded-lg border border-border text-subtle text-sm font-mono hover:border-[#2f2f2f] hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
