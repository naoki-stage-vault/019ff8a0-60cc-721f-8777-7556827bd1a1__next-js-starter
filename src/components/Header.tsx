"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/Icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-pine/10 bg-paper/90 shadow-[0_10px_30px_-24px_rgb(23,56,58,0.35)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#inicio"
          className="group leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="block text-[17px] font-bold tracking-tight text-pine transition-colors group-hover:text-ink">
            Dra. Maday Pallares
          </span>
          <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-carbon">
            Odontología General
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-carbon transition-colors hover:text-pine"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-full bg-pine px-5 py-2.5 text-sm font-semibold text-mist transition-all hover:bg-pine-deep hover:shadow-card sm:inline-flex"
          >
            Agendar cita
            <ArrowRightIcon size={15} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-pine/15 bg-white/60 text-pine transition-colors hover:bg-mist lg:hidden"
          >
            {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } absolute inset-x-0 top-20 origin-top border-b border-pine/10 bg-paper/98 shadow-soft backdrop-blur-md transition-all duration-300`}
      >
        <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Menú móvil">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-mist/70"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-pine px-5 py-3.5 text-sm font-semibold text-mist"
          >
            Agendar cita
            <ArrowRightIcon size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}
