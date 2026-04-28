"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function InstagramIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function LinkedinIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-pad px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-muted tracking-widest uppercase mb-5"
        >
          04 / Contact
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-4xl font-semibold tracking-tight text-primary mb-5 leading-tight">
              Let&apos;s build
              <br />
              something great.
            </h2>
            <p className="text-subtle text-[0.95rem] leading-7">
              I&apos;m open to full-time roles, freelance projects, and interesting
              collaborations. Shoot me a message — I respond to every email.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-4"
          >
            <a
              href="mailto:ziyamzainudheen@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-surface hover:border-subtle transition-all duration-300"
            >
              <span className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border group-hover:border-subtle transition-colors duration-200">
                <Mail size={16} className="text-subtle group-hover:text-accent transition-colors duration-200" />
              </span>
              <div>
                <p className="text-xs font-mono text-muted tracking-wide uppercase">Email</p>
                <p className="text-primary text-sm mt-0.5">ziyamzainudheen@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/918590313964"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-surface hover:border-subtle transition-all duration-300"
            >
              <span className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border group-hover:border-subtle transition-colors duration-200">
                <MessageCircle size={16} className="text-subtle group-hover:text-accent transition-colors duration-200" />
              </span>
              <div>
                <p className="text-xs font-mono text-muted tracking-wide uppercase">WhatsApp</p>
                <p className="text-primary text-sm mt-0.5">+91 85903 13964</p>
              </div>
            </a>

            <a
              href="https://github.com/ZiyamZain"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-surface hover:border-subtle transition-all duration-300"
            >
              <span className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border group-hover:border-subtle transition-colors duration-200">
                <GithubIcon size={16} />
              </span>
              <div>
                <p className="text-xs font-mono text-muted tracking-wide uppercase">GitHub</p>
                <p className="text-primary text-sm mt-0.5">github.com/ZiyamZain</p>
              </div>
            </a>

            <a
              href="https://instagram.com/ziyam_zain"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-surface hover:border-subtle transition-all duration-300"
            >
              <span className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border group-hover:border-subtle transition-colors duration-200">
                <InstagramIcon size={16} className="text-subtle group-hover:text-accent transition-colors duration-200" />
              </span>
              <div>
                <p className="text-xs font-mono text-muted tracking-wide uppercase">Instagram</p>
                <p className="text-primary text-sm mt-0.5">@ziyam_zain</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ziyam-muhamed-60507a21a"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-surface hover:border-subtle transition-all duration-300"
            >
              <span className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border group-hover:border-subtle transition-colors duration-200">
                <LinkedinIcon size={16} className="text-subtle group-hover:text-accent transition-colors duration-200" />
              </span>
              <div>
                <p className="text-xs font-mono text-muted tracking-wide uppercase">LinkedIn</p>
                <p className="text-primary text-sm mt-0.5">Ziyam Muhamed</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
