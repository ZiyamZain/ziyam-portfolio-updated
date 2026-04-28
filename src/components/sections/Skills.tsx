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

export default function Skills() {
  return (
    <section id="skills" className="section-pad px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-muted tracking-widest uppercase mb-5"
        >
          03 / Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl font-semibold tracking-tight text-primary mb-14"
        >
          What I work with
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: gi * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p className="text-xs font-mono text-accent tracking-widest uppercase mb-5">
                {group.category}
              </p>
              <ul className="space-y-3">
                {group.items.map((item, ii) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: gi * 0.1 + ii * 0.05 }}
                    className="flex items-center gap-3 text-subtle text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-border shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
