import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const principles = [
  "Escuchar primero",
  "Revisar con calma",
  "Explicar las opciones",
];

export function Experience() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="flex flex-col items-start">
            <p className="font-serif text-[7rem] leading-[0.85] italic text-pine sm:text-[9rem]">
              {site.experienceLabel}
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-carbon">
              años de experiencia profesional
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
            La experiencia ayuda a mirar{" "}
            <em className="font-serif font-normal italic text-pine">
              cada situación
            </em>{" "}
            con perspectiva.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-carbon">
            Los años de experiencia ayudan a mirar cada situación con
            perspectiva, pero cada paciente sigue siendo diferente. Por eso
            prefiero conocer tu caso, revisar con calma y explicarte las
            opciones antes de decidir cómo continuar.
          </p>

          <ul className="mt-9 space-y-4">
            {principles.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-b border-pine/10 pb-4 text-[15px] font-medium text-ink"
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-mist text-pine"
                  aria-hidden
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
