import { photos } from "@/lib/photos";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/Icon";

function MicroCard({
  title,
  text,
  className = "",
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-pine/10 bg-white/95 p-4 shadow-float backdrop-blur-sm ${className}`}
    >
      <p className="font-serif text-xl italic leading-none text-pine">{title}</p>
      <p className="mt-1.5 text-[12px] font-medium leading-snug text-carbon">
        {text}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="bg-paper pb-16 pt-32 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Texto */}
        <div className="lg:col-span-6">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-pine/70">
              <span className="h-px w-8 bg-pine/40" aria-hidden />
              Odontología en Santa Clara, San Carlos
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Más de 25 años cuidando sonrisas con{" "}
              <em className="font-serif font-normal italic text-pine">
                experiencia y cercanía
              </em>
              .
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-carbon">
              Hola, soy la Dra. Maday. Mi forma de atender comienza por
              escucharte, conocer qué te preocupa y explicarte con claridad qué
              podemos hacer para cuidar tu salud dental.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2.5 rounded-full bg-pine px-7 py-3.5 text-sm font-semibold text-mist transition-all hover:bg-pine-deep hover:shadow-card"
              >
                Agendar una cita
                <ArrowRightIcon
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#dra-maday"
                className="inline-flex items-center gap-2 rounded-full border border-pine/25 bg-white/50 px-7 py-3.5 text-sm font-semibold text-pine transition-all hover:border-pine/50 hover:bg-mist"
              >
                Conóceme
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-10 flex items-center gap-3 text-sm font-medium text-carbon">
              <span className="h-1.5 w-1.5 rounded-full bg-pine/50" aria-hidden />
              Niños
              <span className="h-1.5 w-1.5 rounded-full bg-pine/50" aria-hidden />
              Adultos
              <span className="h-1.5 w-1.5 rounded-full bg-pine/50" aria-hidden />
              Adultos mayores
            </p>
          </Reveal>
        </div>

        {/* Fotografía + microcards */}
        <div className="relative lg:col-span-6">
          <Reveal delay={120}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-mist/80 to-transparent"
                aria-hidden
              />
              <Photo
                photo={photos.retrato}
                priority
                placeholderClassName="aspect-[4/5]"
                className="relative aspect-[4/5] w-full"
              />

              {/* Microcards flotantes */}
              <MicroCard
                title="+25 años"
                text="de experiencia profesional"
                className="absolute -left-4 top-8 max-w-[190px] sm:-left-10"
              />
              <MicroCard
                title="Atención personal"
                text="La mayoría de tus tratamientos directamente conmigo"
                className="absolute -right-3 top-1/2 max-w-[210px] sm:-right-8"
              />
              <MicroCard
                title="Para toda la familia"
                text="Niños, adultos y adultos mayores"
                className="absolute -bottom-6 left-8 max-w-[190px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
