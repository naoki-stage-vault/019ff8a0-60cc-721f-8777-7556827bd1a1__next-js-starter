import { whatsappUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/Icon";

export function Cta() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            No necesitas saber qué tratamiento necesitas para{" "}
            <em className="font-serif font-normal italic text-pine">
              pedir una cita
            </em>
            .
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-carbon">
            Puedes simplemente venir a contarme qué te preocupa. Revisaremos tu
            caso, te explicaré lo que encuentro y hablaremos sobre las opciones
            que tienes.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-pine px-8 py-4 text-sm font-semibold text-mist transition-all hover:bg-pine-deep hover:shadow-card"
          >
            Quiero agendar una cita
            <ArrowRightIcon
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
