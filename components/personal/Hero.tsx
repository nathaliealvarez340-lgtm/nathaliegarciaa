"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const strategicKeywords = [
  "Branding",
  "Business strategy",
  "Diseño de negocios",
  "Growth systems",
  "Arquitectura de marca",
  "Automatización",
  "Consultoría estratégica",
  "Diseño web",
  "Escalamiento de negocios",
  "Estrategia digital",
  "Posicionamiento",
  "Experiencia de marca",
];

export function Hero() {
  const { scrollY } = useScroll();
  const visualY = useTransform(scrollY, [0, 900], [0, 34]);
  const visualScale = useTransform(scrollY, [0, 900], [1.05, 1.085]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#02020A] pt-24"
    >
      <motion.div
        className="bg-hero-image absolute inset-0 z-0 bg-cover bg-[center_42%] opacity-40 blur-[0.75px] saturate-[0.74]"
        style={{ y: visualY, scale: visualScale }}
        initial={{ opacity: 0, scale: 1.025 }}
        animate={{ opacity: 0.4, scale: 1.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="hero-grain absolute inset-0 z-[1]" />
      <motion.div
        className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_74%_34%,rgba(168,85,247,0.16),transparent_27rem),radial-gradient(circle_at_18%_82%,rgba(91,33,182,0.12),transparent_30rem),linear-gradient(135deg,rgba(2,2,10,0.94)_0%,rgba(3,2,11,0.8)_48%,rgba(7,4,20,0.7)_100%)]"
        animate={{ opacity: [0.88, 1, 0.88] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(2,2,10,0.99)_0%,rgba(2,2,10,0.9)_45%,rgba(2,2,10,0.58)_100%),linear-gradient(180deg,rgba(2,2,10,0.24)_0%,rgba(2,2,10,0.5)_72%,#02020A_100%)]" />

      <div className="absolute right-[7vw] top-[12vh] z-[3] hidden h-[73vh] w-[34vw] max-w-[560px] lg:block">
        <motion.div
          className="absolute inset-0 rounded-[50%] border border-[#A855F7]/[0.11]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-[7%] right-[8%] h-[72%] w-[72%] rounded-[48%_52%_45%_55%] bg-[radial-gradient(circle_at_38%_22%,rgba(248,245,255,0.12),transparent_13%),radial-gradient(circle_at_42%_60%,rgba(168,85,247,0.22),transparent_33%),linear-gradient(150deg,rgba(255,255,255,0.055),rgba(255,255,255,0.01)_42%,rgba(0,0,0,0.82)_100%)] shadow-[inset_22px_0_54px_rgba(255,255,255,0.03),0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-sm"
          initial={{ opacity: 0, x: 48, filter: "blur(14px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
        />
        <div className="absolute bottom-[18%] left-[24%] h-[62%] w-px bg-gradient-to-b from-transparent via-[#A855F7]/36 to-transparent" />
        <div className="absolute bottom-[12%] right-[2%] h-px w-28 bg-gradient-to-r from-transparent via-[#A855F7]/52 to-transparent" />
        <div className="absolute bottom-[15%] right-[1%] grid grid-cols-4 gap-2 opacity-38">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="h-7 w-px rotate-45 bg-[#A855F7]/50"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] w-[min(1480px,calc(100%-40px))] grid-cols-1 items-center gap-12 pb-12 lg:grid-cols-[minmax(0,1fr)_120px]">
        <motion.div
          className="max-w-[1080px] pt-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            className="mb-5 text-[clamp(1.45rem,3vw,3.3rem)] font-light uppercase leading-none tracking-[0.42em] text-[#F8F5FF]"
            variants={fadeUp}
          >
            Make It
          </motion.p>

          <motion.h1
            className="unstoppable-title text-[clamp(2.8rem,11.4vw,12.8rem)]"
            variants={fadeUp}
          >
            Unstoppable
          </motion.h1>

          <motion.div
            className="mt-8 flex max-w-4xl flex-wrap items-center gap-x-7 gap-y-3 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-[#A855F7]"
            variants={fadeUp}
          >
            <span>Business Architecture</span>
            <span className="hidden h-px w-12 bg-[#A855F7]/40 md:block" />
            <span>Growth Systems</span>
            <span className="hidden h-px w-12 bg-[#A855F7]/40 md:block" />
            <span>Brand Strategy</span>
          </motion.div>

          <motion.div
            className="mt-8 max-w-3xl border-l border-[#A855F7]/60 pl-6"
            variants={fadeUp}
          >
            <p className="text-balance text-[clamp(1.12rem,1.75vw,1.55rem)] font-light leading-[1.72] tracking-[0.02em] text-[#F8F5FF]/78">
              Siempre me ha obsesionado el potencial detrás de las personas,
              las marcas y las ideas.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 max-w-5xl border-t border-white/[0.08] pt-5"
            variants={fadeUp}
            aria-label="Capacidades estratégicas"
          >
            <p className="text-[0.64rem] font-extrabold uppercase leading-6 tracking-[0.18em] text-[#A9A3B8]/80">
              {strategicKeywords.map((keyword, index) => (
                <span key={keyword}>
                  {keyword}
                  {index < strategicKeywords.length - 1 ? (
                    <span className="mx-2 text-[#A855F7]/70">·</span>
                  ) : null}
                </span>
              ))}
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
            variants={fadeUp}
          >
            <p className="text-[0.9rem] font-extrabold uppercase tracking-[0.48em] text-[#A855F7]">
              Nathalie Garcia
            </p>
            <a
              href="#enfoque"
              className="group inline-flex w-fit items-center gap-4 text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-[#F8F5FF]"
            >
              Descubre mi enfoque
              <span className="h-px w-16 bg-[#A855F7]/70 transition-all duration-300 group-hover:w-24" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden justify-self-end text-[0.65rem] font-extrabold uppercase tracking-[0.38em] text-[#F8F5FF]/42 [writing-mode:vertical-rl] lg:block"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease: "easeOut" }}
        >
          Branding&nbsp;&nbsp; Systems&nbsp;&nbsp; Architecture
        </motion.div>
      </div>
    </section>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.88, ease: "easeOut" },
  },
};
