import { site } from "@/lib/site";
import { photos } from "@/lib/photos";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="dra-maday" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        {/* Composición fotográfica */}
        <div className="relative order-2 lg:order-1 lg:col-span-5">
          <Reveal>
            <div className="relative">
              <Photo
                photo={photos.consultorio}
                placeholderClassName="aspect-[4/5]"
                className="aspect-[4/5] w-[82%]"
              />
              <Photo
                photo={photos.conPaciente}
                placeholderClassName="aspect-[4/3]"
                className="absolute -bottom-10 right-0 aspect-[4/3] w-[62%] shadow-soft"
              />
              <div className="absolute -top-5 right-6 rounded-2xl border border-pine/10 bg-white px-5 py-3 shadow-card">
                <p className="font-serif text-lg italic leading-none text-pine">
                  {site.fullName}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-carbon">
                  {site.role}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Texto */}
        <div className="order-1 lg:order-2 lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-pine/70">
              <span className="h-px w-8 bg-pine/40" aria-hidden />
              Un poco sobre mí
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
              Soy la Dra. Maday. Para mí, una buena consulta empieza por{" "}
              <em className="font-serif font-normal italic text-pine">
                escucharte
              </em>
              .
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-carbon">
              <p>
                Llevo más de 25 años dedicándome a la odontología y durante este
                tiempo he tenido la oportunidad de acompañar a niños, adultos y
                adultos mayores en el cuidado de su salud dental.
              </p>
              <p>
                Muchas veces he visto crecer a mis pacientes y, con los años, he
                terminado atendiendo también a otros miembros de sus familias.
                Esa confianza es una de las cosas que más valoro de mi
                profesión.
              </p>
              <p>
                Cuando vienes a consulta, quiero que tengas la tranquilidad de
                preguntar, contarme lo que te preocupa y entender qué está
                pasando antes de tomar una decisión sobre tu tratamiento.
              </p>
              <p>
                No todos llegan con la misma necesidad ni se sienten de la misma
                manera al visitar al dentista. Por eso intento que cada consulta
                tenga el tiempo y la atención que necesita.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 font-serif text-xl italic text-pine">
              — Dra. Maday
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
