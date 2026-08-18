import { Reveal } from "@/components/Reveal";

export function WelcomeBack() {
  return (
    <section className="relative overflow-hidden bg-pine-deep py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-mist/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
            ¿Hace tiempo que no visitas al dentista?{" "}
            <em className="font-serif font-normal italic text-mist">
              Está bien
            </em>
            . Podemos empezar desde aquí.
          </h2>
          <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-mist/85">
            <p>
              A veces pasan meses o incluso años antes de volver a una consulta
              dental. Puede ser por tiempo, nervios, una mala experiencia
              anterior o simplemente porque otras cosas fueron quedando primero.
            </p>
            <p>
              No necesitas llegar sabiendo qué tratamiento necesitas ni
              preocuparte por explicar todo perfectamente. Ven, cuéntame qué te
              preocupa y empezamos por revisar cómo estás ahora.
            </p>
          </div>
          <p className="mt-7 font-serif text-xl italic text-mist">
            Aquí no necesitas saber el nombre del tratamiento que necesitas.
          </p>
        </Reveal>

        <Reveal delay={140} className="lg:col-span-4 lg:col-start-9">
          <div className="rounded-3xl border border-mist/20 bg-white/5 p-8 backdrop-blur-sm">
            <p className="font-serif text-2xl italic leading-snug text-white">
              “Ven, cuéntame qué te preocupa y empezamos por revisar cómo estás
              ahora.”
            </p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-mist/70">
              — Dra. Maday
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
