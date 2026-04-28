"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  index,
}: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col justify-between p-6 rounded-xl border border-border bg-surface hover:border-[#2f2f2f] transition-all duration-300"
    >
      {/* corner accent on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(400px at 0% 0%, rgba(167,139,250,0.05) 0%, transparent 70%)",
        }}
      />

      <div>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-primary font-semibold text-lg tracking-tight">
            {title}
          </h3>
          <ArrowUpRight
            size={16}
            className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-0.5"
          />
        </div>
        <p className="text-subtle text-sm leading-6">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border text-muted tracking-wide uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
