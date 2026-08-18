import { Reveal } from "@/components/Reveal";

export function Quote() {
  return (
    <section className="relative overflow-hidden bg-pine py-28 sm:py-36">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-mist/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-mist/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span
            className="font-serif text-7xl leading-none text-mist/40"
            aria-hidden
          >
            “
          </span>
          <blockquote className="-mt-6 text-2xl font-medium leading-snug tracking-tight text-mist sm:text-3xl lg:text-[2.4rem]">
            Después de tantos años atendiendo pacientes, sigo creyendo que una
            buena odontología comienza por{" "}
            <em className="font-serif italic text-white">escuchar</em>.
          </blockquote>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-mist/70">
            Dra. Maday Pallares
          </p>
        </Reveal>
      </div>
    </section>
  );
}
