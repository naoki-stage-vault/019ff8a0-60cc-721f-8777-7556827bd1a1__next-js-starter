import { site, whatsappUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icon";

export function Location() {
  return (
    <section id="ubicacion" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-pine/70">
              <span className="h-px w-8 bg-pine/40" aria-hidden />
              Ubicación
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
              Te espero en{" "}
              <em className="font-serif font-normal italic text-pine">
                Santa Clara
              </em>
            </h2>

            <div className="mt-9 space-y-5">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mist text-pine">
                  <MapPinIcon size={20} />
                </span>
                <div>
                  <p className="font-bold text-ink">{site.fullName}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-carbon">
                    {site.locationAddress}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mist text-pine">
                  <PhoneIcon size={20} />
                </span>
                <div>
                  <p className="font-bold text-ink">{site.phoneDisplay}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-carbon">
                    Puedes escribirme o llamarme para coordinar tu cita.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={site.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-pine/25 bg-white px-6 py-3 text-sm font-semibold text-pine transition-all hover:border-pine/50 hover:bg-mist"
              >
                Cómo llegar
                <ArrowRightIcon
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 text-sm font-semibold text-mist transition-all hover:bg-pine-deep hover:shadow-card"
              >
                <WhatsAppIcon size={16} />
                Escribir por WhatsApp
              </a>
            </div>

            <p className="mt-9 font-serif text-lg italic text-pine">
              Cuidar tu salud dental puede empezar con una simple revisión.
            </p>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-7">
            <div className="overflow-hidden rounded-[2rem] border border-pine/10 shadow-soft">
              <iframe
                title="Mapa de ubicación de la consulta de la Dra. Maday Pallares en Santa Clara, San Carlos"
                src={site.mapsEmbedUrl}
                className="h-[420px] w-full grayscale-[20%] sm:h-[500px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
