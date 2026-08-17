import { photos } from "@/lib/photos";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

const stages = [
  {
    label: "Niños",
    text: "Las primeras experiencias con el dentista pueden marcar la manera en que un niño vive sus futuras consultas. Por eso intento explicar las cosas de una forma sencilla, tener paciencia y ayudarles a sentirse tranquilos.",
  },
  {
    label: "Adultos",
    text: "Una limpieza, una molestia que has dejado pasar, una restauración o simplemente volver a cuidar tu salud dental. Podemos empezar desde donde estás hoy.",
  },
  {
    label: "Adultos mayores",
    text: "Con los años pueden aparecer necesidades diferentes. Mi objetivo es ayudarte a conservar comodidad, función y una buena salud oral teniendo siempre en cuenta tu situación particular.",
  },
];

export function Family() {
  return (
    <section className="bg-sage py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-pine/70">
              <span className="h-px w-8 bg-pine/40" aria-hidden />
              Una dentista para toda la familia
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
              Cuidar una sonrisa también es{" "}
              <em className="font-serif font-normal italic text-pine">
                acompañarla con los años
              </em>
              .
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-carbon">
              Cada etapa de la vida trae necesidades diferentes. Por eso mi
              forma de atender también se adapta a la persona que tengo delante.
            </p>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-4 lg:col-start-9">
            <Photo
              photo={photos.trabajando}
              placeholderClassName="aspect-[4/3]"
              className="aspect-[4/3] w-full shadow-card"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stages.map((stage, i) => (
            <Reveal key={stage.label} delay={i * 110}>
              <article className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <p className="font-serif text-3xl italic text-pine">
                  {stage.label}
                </p>
                <div className="mt-5 h-px w-full bg-pine/10" aria-hidden />
                <p className="mt-5 text-[15px] leading-relaxed text-carbon">
                  {stage.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
