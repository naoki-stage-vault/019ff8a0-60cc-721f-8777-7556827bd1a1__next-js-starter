/**
 * FOTOGRAFÍAS DE LA DRA. MADAY
 * ----------------------------
 * La marca del sitio es la Dra. Maday, por eso las fotos son protagonistas.
 *
 * Para usar las fotografías reales:
 *  1. Copia los archivos a /public/images/dra-maday/ usando exactamente los
 *     nombres de archivo indicados abajo (retrato.jpg, consultorio.jpg, ...).
 *  2. Cambia PLACEHOLDERS a false.
 *  3. Listo: el sitio las mostrará automáticamente en lugar de los marcadores.
 *
 * No uses fotos de stock de otra odontóloga como si fueran la Dra. Maday.
 */
export const PLACEHOLDERS = true;

export type PhotoSpec = {
  src: string;
  alt: string;
  caption: string;
};

export const photos = {
  /** 1. Retrato profesional y cercano. */
  retrato: {
    src: "/images/dra-maday/retrato.jpg",
    alt: "Retrato de la Dra. Maday Merary Pallares, odontóloga en Santa Clara, San Carlos",
    caption: "Retrato de la Dra. Maday",
  },
  /** 2. Dentro de su consultorio. */
  consultorio: {
    src: "/images/dra-maday/consultorio.jpg",
    alt: "Consultorio dental de la Dra. Maday Pallares en Santa Clara",
    caption: "La consulta",
  },
  /** 3. Conversando con un paciente. */
  conPaciente: {
    src: "/images/dra-maday/con-paciente.jpg",
    alt: "La Dra. Maday conversando con un paciente en su consulta",
    caption: "Escuchar primero",
  },
  /** 4. Trabajando. */
  trabajando: {
    src: "/images/dra-maday/trabajando.jpg",
    alt: "La Dra. Maday atendiendo a un paciente",
    caption: "Atención con calma",
  },
} satisfies Record<string, PhotoSpec>;
