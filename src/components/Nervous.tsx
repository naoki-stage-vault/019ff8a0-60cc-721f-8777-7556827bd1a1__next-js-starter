import { Reveal } from "@/components/Reveal";

export function Nervous() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-pine/70">
            <span className="h-px w-8 bg-pine/40" aria-hidden />
            Tranquilidad
            <span className="h-px w-8 bg-pine/40" aria-hidden />
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
            Si visitar al dentista te pone nervioso,{" "}
            <em className="font-serif font-normal italic text-pine">
              puedes decírmelo
            </em>
            .
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-carbon">
            No eres la única persona a la que le sucede. Saber cómo te sientes
            me ayuda a explicarte cada paso y llevar la consulta de una manera
            más tranquila.
          </p>
          <p className="mt-7 font-serif text-lg italic text-pine">
            Si algo te preocupa, cuéntamelo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
