"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="bg-[#02020A] px-5 py-24 md:py-36">
      <motion.div
        className="relative mx-auto overflow-hidden border border-white/[0.08] bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(168,85,247,0.08),rgba(255,255,255,0.02))] p-8 md:w-[min(1440px,calc(100%-40px))] md:p-16 lg:p-20"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-[#A855F7]/20 blur-3xl" />
        <div className="relative grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-8 text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-[#C084FC]">
              Mi filosofía
            </p>
            <h2 className="font-serif text-[clamp(3.6rem,8vw,9rem)] font-semibold leading-[0.82] tracking-[-0.055em]">
              No creo contenido.
              <br />
              Creo sistemas.
              <br />
              No busco likes.
              <br />
              Busco impacto.
            </h2>
          </div>
          <div className="lg:pb-4">
            <a
              href="#hero"
              className="group inline-flex h-36 w-36 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] text-4xl transition duration-300 hover:border-[#C084FC]/60 hover:bg-[#A855F7]/10 hover:shadow-[0_0_44px_rgba(168,85,247,0.14)]"
              aria-label="Conoce más sobre mí"
            >
              <span className="transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="mt-8 max-w-sm text-[0.75rem] font-extrabold uppercase leading-6 tracking-[0.22em] text-[#A9A3B8]">
              Conoce más sobre mí →
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        id="contacto"
        className="mx-auto mt-24 grid w-[min(1440px,calc(100%-40px))] gap-8 border-t border-white/[0.08] pt-16 lg:grid-cols-[1fr_auto] lg:items-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h2 className="font-serif max-w-4xl text-[clamp(2.8rem,6vw,7rem)] font-semibold uppercase leading-[0.9] tracking-[-0.05em]">
            ¿Listo para construir algo extraordinario?
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#A9A3B8]">
            Hablemos de tu visión y diseñemos el sistema que la hará realidad.
          </p>
        </div>
        <a
          href="mailto:hola@nathaliegarcia.com"
          className="group grid h-24 w-24 place-items-center rounded-full border border-white/[0.12] bg-white/[0.03] text-4xl transition duration-300 hover:border-[#C084FC]/60 hover:bg-[#A855F7]/10"
          aria-label="Enviar email"
        >
          <span className="transition duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>
    </section>
  );
}
