"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-32 md:py-48 px-6 bg-bg border-t border-border/50 overflow-hidden relative">
      {/* Subtle decorative gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-muted uppercase tracking-[0.2em] mb-8"
        >
          Available for projects
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-primary mb-12"
        >
          Ready to build <br /> the extraordinary?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#contact"
            className="group relative flex items-center gap-4 text-2xl md:text-3xl font-medium text-primary hover:text-accent transition-colors duration-300"
          >
            <span>Let&apos;s get in touch</span>
            <span className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-border group-hover:bg-primary group-hover:text-bg group-hover:border-primary transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-45 transition-transform duration-300" />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
