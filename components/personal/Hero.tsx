"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();
  const visualY = useTransform(scrollY, [0, 900], [0, 42]);
  const visualScale = useTransform(scrollY, [0, 900], [1.04, 1.09]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#02020A] pt-24"
    >
      <motion.div
        className="bg-hero-image absolute inset-0 z-0 bg-cover bg-[center_38%] opacity-50 blur-[0.5px] saturate-[0.82]"
        style={{ y: visualY, scale: visualScale }}
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 0.5, scale: 1.04 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="hero-grain absolute inset-0 z-[1]" />
      <motion.div
        className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_74%_34%,rgba(168,85,247,0.19),transparent_28rem),radial-gradient(circle_at_18%_82%,rgba(91,33,182,0.13),transparent_30rem),linear-gradient(135deg,rgba(2,2,10,0.92)_0%,rgba(3,2,11,0.74)_48%,rgba(7,4,20,0.62)_100%)]"
        animate={{ opacity: [0.84, 1, 0.84] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(2,2,10,0.98)_0%,rgba(2,2,10,0.88)_43%,rgba(2,2,10,0.48)_100%),linear-gradient(180deg,rgba(2,2,10,0.16)_0%,rgba(2,2,10,0.44)_72%,#02020A_100%)]" />

      <div className="absolute right-[7vw] top-[12vh] z-[3] hidden h-[73vh] w-[34vw] max-w-[560px] lg:block">
        <motion.div
          className="absolute inset-0 rounded-[50%] border border-[#A855F7]/[0.13]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-[7%] right-[8%] h-[72%] w-[72%] rounded-[48%_52%_45%_55%] bg-[radial-gradient(circle_at_38%_22%,rgba(248,245,255,0.16),transparent_13%),radial-gradient(circle_at_42%_60%,rgba(168,85,247,0.26),transparent_33%),linear-gradient(150deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01)_42%,rgba(0,0,0,0.8)_100%)] shadow-[inset_22px_0_54px_rgba(255,255,255,0.035),0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-sm"
          initial={{ opacity: 0, x: 48, filter: "blur(14px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
        />
        <div className="absolute bottom-[18%] left-[24%] h-[62%] w-px bg-gradient-to-b from-transparent via-[#A855F7]/40 to-transparent" />
        <div className="absolute bottom-[12%] right-[2%] h-px w-28 bg-gradient-to-r from-transparent via-[#A855F7]/60 to-transparent" />
        <div className="absolute bottom-[15%] right-[1%] grid grid-cols-4 gap-2 opacity-45">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="h-7 w-px rotate-45 bg-[#A855F7]/55"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] w-[min(1480px,calc(100%-40px))] grid-cols-1 items-center gap-12 pb-12 lg:grid-cols-[minmax(0,1fr)_120px]">
        <motion.div
          className="max-w-[1120px]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-16 md:mb-20">
            <p className="font-sans text-[clamp(3.3rem,6.2vw,6.6rem)] font-extrabold uppercase leading-none tracking-[0.12em] text-[#F8F5FF]">
              MAIA
            </p>
            <p className="mt-3 text-[0.72rem] font-extrabold uppercase tracking-[0.45em] text-[#F8F5FF]/80">
              Business Architects
            </p>
          </motion.div>

          <motion.p
            className="mb-4 text-[clamp(1.55rem,3.3vw,3.7rem)] font-light uppercase leading-none tracking-[0.42em] text-[#F8F5FF]"
            variants={fadeUp}
          >
            Make It
          </motion.p>

          <motion.h1
            className="unstoppable-title text-[clamp(3rem,12.6vw,14.2rem)]"
            variants={fadeUp}
          >
            Unstoppable
          </motion.h1>

          <motion.div
            className="mt-9 flex max-w-4xl flex-wrap items-center gap-x-7 gap-y-3 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-[#A855F7]"
            variants={fadeUp}
          >
            <span>Business Architecture</span>
            <span className="hidden h-px w-12 bg-[#A855F7]/40 md:block" />
            <span>Growth Systems</span>
            <span className="hidden h-px w-12 bg-[#A855F7]/40 md:block" />
            <span>Brand Strategy</span>
          </motion.div>

          <motion.div
            className="mt-9 max-w-3xl border-l border-[#A855F7]/60 pl-6"
            variants={fadeUp}
          >
            <p className="text-balance text-[clamp(1.15rem,1.9vw,1.75rem)] font-light leading-[1.7] tracking-[0.02em] text-[#F8F5FF]/78">
              Siempre me ha obsesionado el potencial detrás de las personas,
              las marcas y las ideas.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
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
