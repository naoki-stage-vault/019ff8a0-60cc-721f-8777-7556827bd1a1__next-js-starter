import { site, whatsappUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icon";

export function Emergencies() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-pine/10 bg-mist/60 px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
            <div
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/60 blur-3xl"
              aria-hidden
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-pine/70">
                  <span className="h-px w-8 bg-pine/40" aria-hidden />
                  Emergencias
                </p>
                <h2 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
                  ¿Te duele un diente o pasó algo{" "}
                  <em className="font-serif font-normal italic text-pine">
                    inesperado
                  </em>
                  ?
                </h2>
                <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-carbon">
                  El dolor, una inflamación, una pieza fracturada o una
                  restauración que se desprende pueden aparecer cuando menos lo
                  esperas. Si necesitas atención, escríbeme y coordinamos una
                  valoración.
                </p>
              </div>
              <div className="lg:col-span-4">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-pine px-7 py-4 text-sm font-semibold text-mist transition-all hover:bg-pine-deep hover:shadow-card"
                >
                  <WhatsAppIcon size={18} />
                  Escribir por WhatsApp
                </a>
                <p className="mt-4 text-center text-sm font-semibold text-pine">
                  {site.phoneDisplay}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
