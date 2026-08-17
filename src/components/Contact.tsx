import { site, whatsappUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icon";

export function Contact() {
  return (
    <section id="contacto" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-pine/70">
            <span className="h-px w-8 bg-pine/40" aria-hidden />
            Contacto
            <span className="h-px w-8 bg-pine/40" aria-hidden />
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            ¿Agendamos{" "}
            <em className="font-serif font-normal italic text-pine">
              tu cita
            </em>
            ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-carbon">
            Si tienes una pregunta o quieres coordinar una cita, puedes
            escribirme por WhatsApp.
          </p>
          <p className="mt-5 font-serif text-lg italic text-pine">
            Cada caso es diferente. Por eso primero quiero conocer el tuyo.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-pine px-8 py-4 text-sm font-semibold text-mist transition-all hover:bg-pine-deep hover:shadow-card sm:w-auto"
            >
              <WhatsAppIcon size={18} />
              Escribir a la Dra. Maday
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-pine/25 bg-white px-8 py-4 text-sm font-semibold text-pine transition-all hover:border-pine/50 hover:bg-mist sm:w-auto"
            >
              <PhoneIcon size={17} />
              Llamar
            </a>
          </div>
          <p className="mt-6 text-sm font-semibold text-pine">
            {site.phoneDisplay}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
