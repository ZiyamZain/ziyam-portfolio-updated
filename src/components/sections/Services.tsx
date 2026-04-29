"use client";

import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, Database, Rocket } from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Apps",
    description: "End-to-end web applications built with modern frameworks. From scalable database architecture to pixel-perfect frontends.",
    icon: <Code2 size={40} strokeWidth={1} />,
  },
  {
    title: "E-Commerce",
    description: "Custom digital storefronts, secure payment integrations, and scalable inventory management systems designed to drive sales.",
    icon: <MonitorSmartphone size={40} strokeWidth={1} />,
  },
  {
    title: "API Architecture",
    description: "Robust, secure, and blazing-fast RESTful APIs and serverless backends powered by Node.js and optimized databases.",
    icon: <Database size={40} strokeWidth={1} />,
  },
  {
    title: "AI Integration",
    description: "Supercharging applications with cutting-edge AI capabilities. Automating workflows and integrating smart APIs.",
    icon: <Rocket size={40} strokeWidth={1} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad px-6 border-t border-border bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-muted tracking-widest uppercase mb-16 md:mb-24"
        >
          02 / Expertise
        </motion.p>

        <div className="flex flex-col w-full border-t border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-b border-border py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden cursor-crosshair"
            >
              {/* Premium Hover Fill Background */}
              <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-16 md:w-[60%]">
                <span className="text-sm font-mono text-muted group-hover:text-bg/40 transition-colors duration-500">
                  0{i + 1}
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold tracking-[-0.02em] text-primary group-hover:text-bg transition-colors duration-500">
                  {service.title}
                </h3>
              </div>
              
              <div className="relative z-10 mt-8 md:mt-0 md:w-[35%] flex items-center justify-between gap-8">
                <p className="text-subtle text-base md:text-lg leading-relaxed group-hover:text-bg/80 transition-colors duration-500">
                  {service.description}
                </p>
                <div className="text-muted group-hover:text-accent transition-colors duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                  {service.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
