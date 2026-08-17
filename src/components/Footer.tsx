import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icon";

export function Footer() {
  return (
    <footer className="bg-pine-deep pb-10 pt-20 text-mist">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl italic text-white">
              {site.fullName}
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-mist/60">
              {site.role}
            </p>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-mist/75">
              Más de 25 años acompañando a mis pacientes en el cuidado de su
              salud dental.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist/50">
              Enlaces
            </p>
            <ul className="mt-5 space-y-3">
              {site.footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] font-medium text-mist/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist/50">
              Contacto
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-mist/80">
              {site.locationShort}
            </p>
            <a
              href={site.phoneHref}
              className="mt-3 block text-[15px] font-semibold text-white transition-colors hover:text-mist"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-mist/25 px-5 py-2.5 text-sm font-semibold text-mist transition-all hover:border-mist/60 hover:bg-white/5"
            >
              <WhatsAppIcon size={16} />
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-mist/15 pt-7 text-[12px] text-mist/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.fullName}
          </p>
          <p>{site.locationShort}</p>
        </div>
      </div>
    </footer>
  );
}
