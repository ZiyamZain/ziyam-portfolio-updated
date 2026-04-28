"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Zekoya",
    description:
      "End-to-end e-commerce platform for jerseys — product listings, cart, checkout, and order management built from scratch in JavaScript.",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB"],
    href: "https://github.com/ZiyamZain/Zekoya",
  },
  {
    title: "jobAssistAi",
    description:
      "AI-powered platform that analyses your uploaded resume against a target job role and rewrites it to maximise your match score — automatically.",
    tags: ["TypeScript", "React", "Node.js", "OpenAI", "PDF"],
    href: "https://github.com/ZiyamZain/jobAssistAi",
  },
  {
    title: "Ops Copilot",
    description:
      "An intelligent operations assistant that streamlines DevOps workflows, automates routine tasks, and provides real-time insights for system administration.",
    tags: ["TypeScript", "React", "Node.js", "DevOps"],
    href: "https://github.com/ZiyamZain/ops-copilot",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Full-featured real-time messaging application powered by the Stream Chat SDK, with channels, threads, and live presence indicators.",
    tags: ["React", "Node.js", "Stream Chat", "WebSocket"],
    href: "https://github.com/ZiyamZain/real-time-chat-app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad px-6">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-muted tracking-widest uppercase mb-5"
        >
          02 / Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl font-semibold tracking-tight text-primary mb-14"
        >
          Selected Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/ZiyamZain?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-subtle hover:text-primary font-mono transition-colors duration-200"
          >
            View all repositories →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
