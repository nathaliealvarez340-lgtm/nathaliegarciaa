"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["SOBRE MÍ", "#hero"],
  ["SERVICIOS", "#servicios"],
  ["PROYECTOS", "#metricas"],
  ["ENFOQUE", "#enfoque"],
  ["CONTACTO", "#contacto"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#020202]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 w-full items-center justify-between px-5 md:px-10 xl:px-[140px]">
        <a
          href="#hero"
          className="maia-logo-mark w-[120px] text-[1.05rem] font-extrabold uppercase leading-none tracking-[0.36em] text-[#F8F5FF]"
          aria-label="MAIA"
        >
          MAIA
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="premium-link text-[11px] font-bold uppercase tracking-[4px] text-white/70 transition-colors duration-300 hover:text-[#A855F7]"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full border border-[#A855F7]/55 bg-transparent px-5 py-3 text-[11px] font-extrabold uppercase tracking-[3px] text-[#F8F5FF] transition duration-300 hover:border-[#C084FC]/70 hover:bg-[#A855F7]/[0.06] hover:shadow-[0_0_32px_rgba(168,85,247,0.16)] md:px-7"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
