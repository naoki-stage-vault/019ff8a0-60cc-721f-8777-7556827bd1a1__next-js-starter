import { Reveal } from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Me cuentas qué te preocupa",
    text: "Puede ser dolor, una molestia, algo que quieres mejorar o simplemente una revisión. Quiero saber qué te trae a consulta.",
  },
  {
    number: "02",
    title: "Revisamos con calma",
    text: "Realizo una valoración para entender qué está sucediendo y conocer el estado de tu salud dental.",
  },
  {
    number: "03",
    title: "Te explico lo que encuentro",
    text: "Quiero que entiendas lo que vemos y que puedas hacer todas las preguntas que necesites.",
  },
  {
    number: "04",
    title: "Hablamos de tus opciones",
    text: "Si necesitas tratamiento, conversamos sobre las alternativas y decidimos cómo continuar.",
  },
];

export function FirstVisit() {
  return (
    <section id="tu-visita" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-pine/70">
              <span className="h-px w-8 bg-pine/40" aria-hidden />
              Tu primera visita
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
              ¿Qué pasa cuando{" "}
              <em className="font-serif font-normal italic text-pine">
                vienes a consulta
              </em>
              ?
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-carbon">
              Nada complicado. Primero conversamos.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="group border-t-2 border-pine/15 pt-6 transition-colors duration-300 hover:border-pine">
                <p className="font-serif text-4xl italic text-pine/50 transition-colors duration-300 group-hover:text-pine">
                  {step.number}
                </p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-carbon">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-14 font-serif text-lg italic text-pine">
            Tu primera visita comienza con una conversación.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
