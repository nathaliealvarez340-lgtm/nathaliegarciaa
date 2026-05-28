"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 900], [0, 42]);
  const orbScale = useTransform(scrollY, [0, 900], [1, 1.045]);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const glowX = useSpring(cursorX, { stiffness: 55, damping: 22 });
  const glowY = useSpring(cursorY, { stiffness: 55, damping: 22 });

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#020202] px-5 pt-28 md:px-10 xl:px-[140px]"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        cursorX.set(event.clientX - rect.left);
        cursorY.set(event.clientY - rect.top);
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute h-80 w-80 rounded-full bg-[#A855F7]/[0.055] blur-3xl"
        style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
      />
      <div className="hero-luxury-grain absolute inset-0 z-[1]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(110,0,255,0.18),transparent_45%),linear-gradient(135deg,#020202_0%,#030208_54%,#020202_100%)]" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_72%_34%,rgba(168,85,247,0.12),transparent_28rem),linear-gradient(90deg,rgba(2,2,2,0.98)_0%,rgba(2,2,2,0.86)_48%,rgba(2,2,2,0.62)_100%),radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.68)_100%)]" />
      <div className="hero-geometry absolute inset-0 z-[3]" />

      <div className="relative z-10 grid min-h-[calc(100vh-7rem)] grid-cols-1 items-center gap-14 pb-16 lg:grid-cols-[55fr_45fr]">
        <motion.div
          className="max-w-[920px]"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
        >
          <motion.p
            className="mb-5 text-[clamp(2.6rem,5vw,72px)] font-light uppercase leading-none tracking-[0.22em] text-white/90"
            variants={fadeUp}
          >
            Make It
          </motion.p>

          <motion.h1
            className="unstoppable-title text-[clamp(4rem,10.6vw,180px)]"
            variants={fadeUp}
          >
            Unstoppable
          </motion.h1>

          <motion.p
            className="mt-10 max-w-4xl text-[14px] font-extrabold uppercase leading-7 tracking-[5px] text-[#A855F7]"
            variants={fadeUp}
          >
            Business Architecture — Growth Systems — Brand Strategy
          </motion.p>

          <motion.blockquote
            className="relative mt-16 max-w-[720px] border-l border-[#A855F7]/60 pl-8 text-[clamp(1.7rem,3vw,42px)] font-light leading-[1.4] text-white/90"
            variants={fadeUp}
          >
            <span className="font-serif absolute -left-1 top-0 -translate-x-full text-7xl leading-none text-[#A855F7]/35">
              “
            </span>
            Siempre me ha obsesionado el potencial detrás de las personas, las
            marcas y las ideas.
          </motion.blockquote>

          <motion.p
            className="mt-16 text-[18px] font-extrabold uppercase tracking-[8px] text-[#A855F7]"
            variants={fadeUp}
          >
            Nathalie Garcia
          </motion.p>
        </motion.div>

        <motion.div
          className="relative hidden min-h-[620px] items-center justify-center lg:flex"
          style={{ y: orbY, scale: orbScale }}
          initial={{ opacity: 0, x: 56, filter: "blur(16px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.45, delay: 0.35, ease: "easeOut" }}
        >
          <motion.div
            className="hero-orbital-ring h-[min(42vw,620px)] w-[min(42vw,620px)] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          />
          <div className="hero-orbital-ring-secondary absolute h-[min(32vw,470px)] w-[min(32vw,470px)] rounded-full" />
          <motion.div
            className="hero-premium-orb relative h-[min(26vw,390px)] w-[min(26vw,390px)] rounded-full"
            animate={{ y: [0, -10, 0], rotate: [0, 2.5, 0] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute left-[6%] top-[18%] h-px w-44 bg-gradient-to-r from-transparent via-[#A855F7]/45 to-transparent" />
          <div className="absolute right-[12%] top-[10%] h-48 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <div className="absolute bottom-[17%] right-[6%] grid grid-cols-5 gap-2 opacity-45">
            {Array.from({ length: 15 }).map((_, index) => (
              <span
                key={index}
                className="h-8 w-px rotate-45 bg-[#A855F7]/55"
              />
            ))}
          </div>
          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-[0.65rem] font-extrabold uppercase tracking-[0.38em] text-white/34 [writing-mode:vertical-rl] xl:block">
            Branding&nbsp;&nbsp; Systems&nbsp;&nbsp; Architecture
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "easeOut" },
  },
};
