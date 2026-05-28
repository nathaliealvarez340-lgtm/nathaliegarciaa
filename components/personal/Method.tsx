"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  ["01", "Descubrir", "Entiendo tu negocio, tu visión y tu mercado."],
  ["02", "Definir", "Creo la estrategia, estructura y dirección."],
  ["03", "Diseñar", "Diseño la identidad, oferta y experiencia."],
  ["04", "Construir", "Desarrollo los sistemas que lo hacen funcionar."],
  ["05", "Escalar", "Optimizamos, medimos y llevamos tu negocio al siguiente nivel."],
];

export function Method() {
  return (
    <section id="enfoque" className="relative bg-[#050416] py-24 md:py-36">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#02020A_0%,rgba(5,4,22,0.7)_28%,#02020A_100%)]" />
      <div className="relative mx-auto w-[min(1440px,calc(100%-40px))]">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-[#C084FC]">
            Mi enfoque
          </p>
          <h2 className="font-serif text-balance text-[clamp(3.1rem,6.5vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
            Un método claro para resultados extraordinarios.
          </h2>
        </motion.div>

        <motion.div
          className="relative mt-20 grid gap-9 lg:grid-cols-5 lg:gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
        >
          <div className="absolute left-0 right-0 top-[1.45rem] hidden h-px bg-gradient-to-r from-transparent via-white/[0.16] to-transparent lg:block" />
          {steps.map(([number, title, copy]) => {
            const active = number === "03";
            return (
              <motion.article
                key={title}
                className="relative border-l border-white/[0.08] pl-8 lg:border-l-0 lg:pl-0 lg:pr-10"
                variants={stepVariant}
              >
                <div
                  className={`mb-8 grid h-12 w-12 place-items-center rounded-full border text-[0.7rem] font-extrabold tracking-[0.16em] ${
                    active
                      ? "border-[#C084FC] bg-[#A855F7] text-white shadow-[0_0_34px_rgba(168,85,247,0.35)]"
                      : "border-white/[0.16] bg-[#02020A] text-[#A9A3B8]"
                  }`}
                >
                  {number}
                </div>
                <h3 className="text-lg font-extrabold uppercase tracking-[0.12em]">
                  {title}
                </h3>
                <p className="mt-4 max-w-[16rem] text-sm leading-7 text-[#A9A3B8]">
                  {copy}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

const stepVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: "easeOut" },
  },
};
