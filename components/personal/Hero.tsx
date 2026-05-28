"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 900], [0, 90]);
  const imageScale = useTransform(scrollY, [0, 900], [1.08, 1.16]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#02020A] pt-28"
    >
      <motion.div
        className="bg-hero-image absolute inset-0 bg-cover bg-center opacity-85"
        style={{ y: imageY, scale: imageScale }}
        initial={{ scale: 1.02, opacity: 0 }}
        animate={{ scale: 1.08, opacity: 0.86 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(168,85,247,0.26),transparent_34rem),linear-gradient(90deg,rgba(2,2,10,0.96)_0%,rgba(2,2,10,0.72)_46%,rgba(2,2,10,0.24)_100%),linear-gradient(180deg,rgba(2,2,10,0.18)_0%,#02020A_96%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#02020A] to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] w-[min(1440px,calc(100%-40px))] grid-cols-1 items-center gap-12 pb-16 lg:grid-cols-[1fr_96px]">
        <motion.div
          className="max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13 } },
          }}
        >
          <motion.p
            className="mb-8 text-[0.74rem] font-extrabold uppercase tracking-[0.28em] text-[#C084FC]"
            variants={fadeUp}
          >
            Estrategia · Diseño · Sistemas
          </motion.p>
          <motion.h1
            className="font-serif max-w-5xl text-balance text-[clamp(4.2rem,9.4vw,10.8rem)] font-semibold leading-[0.83] tracking-[-0.055em] text-[#F8F5FF]"
            variants={fadeUp}
          >
            Diseño sistemas que{" "}
            <span className="italic text-[#C084FC]">transforman</span>{" "}
            negocios en{" "}
            <span className="italic text-[#C084FC]">crecimiento real</span>.
          </motion.h1>
          <motion.p
            className="mt-8 max-w-2xl text-base leading-8 text-[#C9C1D8] md:text-lg"
            variants={fadeUp}
          >
            Estrategia, diseño y tecnología alineadas para construir marcas,
            productos y experiencias que generan impacto medible y sostenible.
          </motion.p>
          <motion.a
            href="#enfoque"
            className="premium-link mt-10 inline-flex text-[0.74rem] font-extrabold uppercase tracking-[0.24em] text-[#F8F5FF]"
            variants={fadeUp}
          >
            Descubre mi enfoque →
          </motion.a>
        </motion.div>

        <motion.p
          className="hidden justify-self-end text-[0.68rem] font-extrabold uppercase tracking-[0.32em] text-[#A9A3B8] [writing-mode:vertical-rl] lg:block"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
        >
          Business Architecture · Growth Systems · Brand Strategy
        </motion.p>
      </div>
    </section>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};
