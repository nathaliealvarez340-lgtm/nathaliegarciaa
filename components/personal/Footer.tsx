export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#02020A]">
      <div className="mx-auto flex w-[min(1440px,calc(100%-40px))] flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <p className="m-0 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-[#F8F5FF]">
          Estrategia con propósito.
        </p>
        <div className="flex flex-wrap gap-6 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-[#A9A3B8]">
          <a className="transition hover:text-[#F8F5FF]" href="https://www.linkedin.com/in/nathaliegarciaa/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="transition hover:text-[#F8F5FF]" href="#hero">
            Instagram
          </a>
          <a className="transition hover:text-[#F8F5FF]" href="mailto:hola@nathaliegarcia.com">
            Email
          </a>
        </div>
        <p className="m-0 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#A9A3B8]">
          © 2026. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
