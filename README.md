# Dra. Maday Merary Pallares — Sitio web

Sitio web de la consulta odontológica de la **Dra. Maday Merary Pallares**
(Santa Clara, Florencia, San Carlos, Costa Rica).

Construido con Next.js 16 (App Router), TypeScript y Tailwind CSS 4.
Todo el contenido está en español con **tuteo** y una narrativa cálida y
personal centrada en la Dra. Maday.

## Contenido del sitio

Una sola página con secciones ancladas:

- **Hero** — presentación con fotografía y microcards flotantes (+25 años,
  atención personal, para toda la familia).
- **Conoce a la Dra. Maday** — historia personal en primera persona.
- **Frase personal** — bloque editorial en verde petróleo.
- **+25 años de experiencia**.
- **Tratamientos** — prevención, restauraciones, reemplazo de piezas,
  extracciones, estética dental y **ortodoncia** (atendida por un especialista
  que colabora con la consulta).
- **Una dentista para toda la familia** — niños, adultos y adultos mayores.
- **Tu primera visita** — 4 pasos.
- **Para quien lleva tiempo sin ir al dentista** y **pacientes con nervios**.
- **Emergencias** — contacto por WhatsApp.
- **Ubicación** — Google Maps integrado.
- **Contacto** y **footer**, con botón flotante de WhatsApp.

## Datos del sitio

Toda la información (teléfono, WhatsApp, ubicación, enlaces de navegación) está
centralizada en **`src/lib/site.ts`**. El número y el mensaje automático de
WhatsApp se editan ahí.

## Fotografías

La marca del sitio es la Dra. Maday: **usa fotografías reales**, nunca fotos de
stock de otra odontóloga.

Mientras no existan las fotos reales, el sitio muestra marcadores elegantes y
claramente reemplazables. Para activar las fotografías:

1. Copia los archivos a `public/images/dra-maday/` con estos nombres:
   - `retrato.jpg` — retrato profesional y cercano (hero)
   - `consultorio.jpg` — dentro del consultorio
   - `con-paciente.jpg` — conversando con un paciente
   - `trabajando.jpg` — trabajando
2. En `src/lib/photos.ts`, cambia `PLACEHOLDERS` a `false`.

## Desarrollo

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
```
