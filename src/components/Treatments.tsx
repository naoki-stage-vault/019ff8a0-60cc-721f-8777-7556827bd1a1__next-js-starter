import { Reveal } from "@/components/Reveal";

type Card = { title: string; text: string };
type Group = {
  eyebrow: string;
  note?: string;
  intro?: string;
  cards: Card[];
  wide?: boolean;
};

const groups: Group[] = [
  {
    eyebrow: "Prevención y cuidado",
    note: "Atendidos directamente por la Dra. Maday.",
    cards: [
      {
        title: "Limpieza dental / Profilaxis",
        text: "Una limpieza profesional ayuda a cuidar tus dientes y encías y a prevenir problemas antes de que avancen.",
      },
      {
        title: "Tratamiento de encías",
        text: "Si tus encías sangran, están inflamadas o necesitas darles un poco más de atención, podemos revisarlas y valorar qué cuidado necesitan.",
      },
      {
        title: "Radiografías",
        text: "En algunos casos necesitamos ver un poco más de lo que podemos observar a simple vista. Las radiografías nos ayudan a entender mejor qué está sucediendo.",
      },
    ],
  },
  {
    eyebrow: "Restauraciones",
    note: "Estos tratamientos son realizados por la Dra. Maday.",
    cards: [
      {
        title: "Calzas / Restauraciones",
        text: "Si tienes una caries, una restauración antigua o un diente que necesita repararse, podemos valorar la mejor manera de recuperar su función y apariencia.",
      },
      {
        title: "Tratamiento de nervio",
        text: "Cuando el interior de un diente está afectado, existen tratamientos que pueden ayudar a conservarlo. Primero revisaremos tu caso para saber qué necesita.",
      },
      {
        title: "Coronas",
        text: "Cuando un diente necesita mayor protección o soporte, una corona puede ser una alternativa para devolverle resistencia y función.",
      },
    ],
  },
  {
    eyebrow: "Reemplazar piezas dentales",
    note: "La Dra. Maday atiende y acompaña estos tratamientos.",
    intro:
      "Perder uno o varios dientes puede afectar mucho más que la sonrisa. También puede cambiar la forma en que comes, hablas o te sientes al sonreír. Podemos conversar sobre las alternativas disponibles para tu caso.",
    cards: [
      {
        title: "Prótesis fija",
        text: "Una alternativa para recuperar piezas dentales y ayudarte a sentirte cómodo al comer y sonreír.",
      },
      {
        title: "Prótesis removible",
        text: "Una opción adaptada a las necesidades de cada paciente cuando es necesario reemplazar varias piezas dentales.",
      },
      {
        title: "Implantes",
        text: "Los implantes pueden ser una alternativa para reemplazar piezas perdidas. Primero es importante valorar tu salud oral y determinar si son adecuados para ti.",
      },
    ],
  },
  {
    eyebrow: "Extracciones",
    note: "Estos procedimientos son atendidos por la Dra. Maday.",
    cards: [
      {
        title: "Extracciones dentales",
        text: "Siempre que sea posible buscamos cuidar tus dientes. Pero cuando una pieza ya no puede conservarse o existe otra indicación, podemos valorar su extracción.",
      },
      {
        title: "Extracción de cordales",
        text: "Si tus muelas del juicio están causando dolor, inflamación o algún otro problema, podemos revisarlas y determinar qué conviene hacer.",
      },
    ],
    wide: true,
  },
  {
    eyebrow: "Estética dental",
    note: "Estos tratamientos son realizados por la Dra. Maday.",
    intro:
      "Sentirte bien con tu sonrisa también importa.",
    cards: [
      {
        title: "Blanqueamiento",
        text: "Si quieres mejorar el tono de tus dientes, podemos conversar sobre las opciones de blanqueamiento y valorar cuál puede ser adecuada para ti.",
      },
      {
        title: "Odontología estética y restaurativa",
        text: "A veces buscamos reparar un diente y, al mismo tiempo, recuperar una apariencia natural. La salud, la función y la estética pueden trabajarse juntas.",
      },
    ],
  },
];

function TreatmentCard({ card }: { card: Card }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-pine/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-8">
      <span
        className="mb-4 h-1 w-10 rounded-full bg-mist transition-colors duration-300 group-hover:bg-sage"
        aria-hidden
      />
      <h3 className="text-lg font-bold tracking-tight text-ink">
        {card.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-carbon">
        {card.text}
      </p>
    </article>
  );
}

function GroupBlock({ group }: { group: Group }) {
  return (
    <div className="mt-16 first:mt-0 sm:mt-20">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight text-pine sm:text-2xl">
            {group.eyebrow}
          </h3>
          {group.note && (
            <p className="rounded-full border border-pine/15 bg-white px-4 py-1.5 text-[12px] font-medium text-carbon">
              {group.note}
            </p>
          )}
        </div>
        {group.intro && (
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-carbon">
            {group.intro}
          </p>
        )}
      </Reveal>

      <Reveal delay={120}>
        <div
          className={`mt-8 grid gap-5 sm:gap-6 ${
            group.wide ? "sm:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {group.cards.map((card) => (
            <TreatmentCard key={card.title} card={card} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export function Treatments() {
  return (
    <section id="tratamientos" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-pine/70">
            <span className="h-px w-8 bg-pine/40" aria-hidden />
            Tratamientos
          </p>
          <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            ¿En qué puedo{" "}
            <em className="font-serif font-normal italic text-pine">
              ayudarte
            </em>
            ?
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-carbon">
            Tal vez ya sabes qué necesitas o quizá solo sabes que algo te
            molesta. No pasa nada. Podemos empezar por una valoración y ver
            juntos qué está sucediendo.
          </p>
          <p className="mt-4 font-serif text-lg italic text-pine">
            ¿No sabes por dónde empezar? Empieza por una valoración.
          </p>
        </Reveal>

        <div className="mt-4">
          {groups.map((group) => (
            <GroupBlock key={group.eyebrow} group={group} />
          ))}
        </div>

        {/* Ortodoncia — con especialista que colabora con la consulta */}
        <div id="ortodoncia" className="mt-20 sm:mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-pine px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-mist/10 blur-3xl"
                aria-hidden
              />
              <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-2 rounded-full border border-mist/30 bg-mist/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-mist/90">
                    Ortodoncia
                  </span>
                  <h3 className="mt-6 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                    ¿Quieres mejorar la posición de tus{" "}
                    <em className="font-serif font-normal italic text-mist">
                      dientes
                    </em>
                    ?
                  </h3>
                  <p className="mt-6 text-[17px] leading-relaxed text-mist/85">
                    Si quieres mejorar la posición o alineación de tus dientes,
                    también puedes recibir atención de ortodoncia en la
                    consulta. Este tratamiento es realizado por un{" "}
                    <strong className="font-semibold text-white">
                      especialista en ortodoncia que colabora con la Dra. Maday
                    </strong>
                    .
                  </p>
                  <p className="mt-4 text-[17px] leading-relaxed text-mist/85">
                    De esta manera puedes recibir la valoración y seguimiento
                    especializado que requiere este tipo de tratamiento,
                    manteniendo la cercanía de una consulta que ya conoces.
                  </p>

                  <div className="mt-8 rounded-2xl border border-mist/20 bg-mist/10 p-5">
                    <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                      Retenedores
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-mist/85">
                      Después de un tratamiento de ortodoncia, los retenedores
                      ayudan a mantener los resultados obtenidos. Podemos
                      orientarte si necesitas revisarlos o reemplazarlos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start lg:col-span-5">
                  <div className="w-full rounded-3xl border border-mist/20 bg-white/5 p-7 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mist/70">
                      Así funciona
                    </p>
                    <ul className="mt-5 space-y-5">
                      {[
                        ["Valoración inicial", "Revisamos tu caso para entender qué necesitas."],
                        ["Tratamiento especializado", "El especialista en ortodoncia realiza y da seguimiento a tu tratamiento."],
                        ["Misma consulta, misma cercanía", "Sigues en una consulta que ya conoces y en la que te sientes cómodo."],
                      ].map(([title, text]) => (
                        <li key={title} className="flex gap-4">
                          <span
                            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mist/60"
                            aria-hidden
                          />
                          <div>
                            <p className="text-[15px] font-semibold text-white">
                              {title}
                            </p>
                            <p className="mt-1 text-[13.5px] leading-relaxed text-mist/75">
                              {text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
