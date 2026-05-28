"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  [
    "01",
    "Estrategia de marca",
    "Defino la esencia de tu marca y la convierto en una ventaja competitiva.",
  ],
  [
    "02",
    "Arquitectura de negocios",
    "Estructuro tu negocio para que sea escalable, eficiente y sostenible.",
  ],
  [
    "03",
    "Sistemas de crecimiento",
    "Diseño estrategias que impulsan crecimiento medible y sostenible.",
  ],
  [
    "04",
    "Automatización inteligente",
    "Implemento sistemas que optimizan procesos y multiplican resultados.",
  ],
];

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-[#02020A] py-24 md:py-36">
      <div className="absolute right-[-12rem] top-28 h-[34rem] w-[34rem] rounded-full bg-[#A855F7]/[0.08] blur-3xl" />
      <div className="mx-auto w-[min(1440px,calc(100%-40px))]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-[#C084FC]">
              Lo que hago
            </p>
            <h2 className="font-serif text-balance text-[clamp(3rem,6.2vw,7rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
              Soluciones con visión, estructura y propósito.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#A9A3B8]">
              Combino estrategia, creatividad y tecnología para diseñar sistemas
              que optimizan negocios y construyen ventajas competitivas.
            </p>
            <a
              href="#contacto"
              className="premium-link mt-10 inline-flex text-[0.74rem] font-extrabold uppercase tracking-[0.24em]"
            >
              Ver todos los servicios →
            </a>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {services.map(([number, title, copy]) => (
              <motion.article
                key={title}
                className="group min-h-[18rem] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#A855F7]/40 hover:bg-white/[0.04] hover:shadow-[0_0_45px_rgba(168,85,247,0.08)]"
                variants={serviceVariant}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[0.72rem] font-extrabold tracking-[0.22em] text-[#C084FC]">
                    {number}
                  </span>
                  <span className="relative h-10 w-10 rounded-full border border-white/[0.12] before:absolute before:left-2 before:right-2 before:top-1/2 before:h-px before:bg-[#C084FC]/60 after:absolute after:bottom-2 after:top-2 after:left-1/2 after:w-px after:bg-white/[0.14]" />
                </div>
                <h3 className="mt-16 max-w-[15rem] text-xl font-extrabold uppercase leading-6 tracking-[0.08em]">
                  {title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#A9A3B8]">{copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const serviceVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
