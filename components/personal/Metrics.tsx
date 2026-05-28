"use client";

import { motion, type Variants } from "framer-motion";

const metrics = [
  ["50+", "Marcas transformadas"],
  ["20M+", "En valor generado para clientes"],
  ["5+", "Años diseñando sistemas"],
  ["1", "Misión: impacto real"],
];

export function Metrics() {
  return (
    <section
      id="metricas"
      className="border-y border-white/[0.08] bg-[#02020A]/70"
    >
      <motion.div
        className="mx-auto grid w-[min(1440px,calc(100%-40px))] grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {metrics.map(([number, label], index) => (
          <motion.div
            key={label}
            className={`relative py-10 md:py-14 ${
              index > 0 ? "lg:border-l lg:border-white/[0.08]" : ""
            } ${index % 2 ? "border-l border-white/[0.08] lg:border-l" : ""}`}
            variants={metricVariant}
          >
            <div className="mb-5 h-px w-10 bg-[#A855F7]" />
            <div className="font-serif text-5xl font-semibold tracking-[-0.04em] text-[#F8F5FF] md:text-7xl">
              {number}
            </div>
            <p className="mt-4 max-w-[13rem] text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-[#A9A3B8]">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const metricVariant: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
