/**
 * Datos centrales del sitio.
 * Si cambian el número, la ubicación o los enlaces, se actualizan aquí.
 */
export const site = {
  name: "Dra. Maday Pallares",
  fullName: "Dra. Maday Merary Pallares",
  role: "Odontología General",
  experienceLabel: "+25",
  phoneDisplay: "+506 7016 2252",
  phoneHref: "tel:+50670162252",
  whatsappNumber: "50670162252",
  whatsappMessage:
    "Hola Dra. Maday, vi su página web y quisiera hacer una consulta para agendar una cita.",
  locationShort: "Santa Clara · Florencia · San Carlos",
  locationAddress: "Santa Clara, Florencia, San Carlos, Alajuela, Costa Rica",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Santa+Clara,+Florencia,+San+Carlos,+Alajuela,+Costa+Rica&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Santa+Clara,+Florencia,+San+Carlos,+Alajuela,+Costa+Rica",
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Dra. Maday", href: "#dra-maday" },
    { label: "Tratamientos", href: "#tratamientos" },
    { label: "Tu visita", href: "#tu-visita" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Contacto", href: "#contacto" },
  ],
  footerLinks: [
    { label: "Conóceme", href: "#dra-maday" },
    { label: "Tratamientos", href: "#tratamientos" },
    { label: "Ortodoncia", href: "#ortodoncia" },
    { label: "Tu primera visita", href: "#tu-visita" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Agendar cita", href: "#contacto" },
  ],
} as const;

export function whatsappUrl(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
