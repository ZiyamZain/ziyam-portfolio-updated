"use client";

import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-primary text-bg px-8 py-24 text-center flex flex-col items-center shadow-2xl"
        >
          {/* Subtle gradient glow in background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent opacity-50 pointer-events-none" />
          
          <h2 className="relative z-10 text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl">
            Have an idea? <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-dim to-white">Let's build it together.</span>
          </h2>
          
          <p className="relative z-10 text-bg/80 text-lg mb-10 max-w-xl mx-auto">
            Whether you need a full-stack application, an e-commerce platform, or an intelligent AI integration—I'm ready to bring your vision to life.
          </p>
          
          <a
            href="#contact"
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-bg text-primary font-semibold hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-bg/20"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
