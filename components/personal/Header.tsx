"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["Sobre mí", "#hero"],
  ["Servicios", "#servicios"],
  ["Proyectos", "#metricas"],
  ["Enfoque", "#enfoque"],
  ["Contacto", "#contacto"],
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
          ? "border-b border-white/[0.08] bg-[#02020A]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-[min(1440px,calc(100%-40px))] items-center justify-between">
        <a
          href="#hero"
          className="text-[1.05rem] font-extrabold uppercase leading-none tracking-[0.34em] text-[#F8F5FF] transition duration-300 hover:text-[#C084FC]"
          aria-label="MAIA"
        >
          MAIA
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="premium-link text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#A9A3B8] transition-colors duration-300 hover:text-[#F8F5FF]"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full border border-white/[0.1] px-4 py-2 text-[0.66rem] font-extrabold uppercase tracking-[0.2em] text-[#F8F5FF] transition duration-300 hover:border-[#A855F7]/50 hover:bg-white/[0.04]"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
