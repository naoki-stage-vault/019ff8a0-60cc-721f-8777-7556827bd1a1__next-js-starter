import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Dra. Maday Merary Pallares · Odontóloga en Santa Clara, San Carlos, Costa Rica",
  description:
    "Más de 25 años cuidando sonrisas con experiencia y cercanía. Odontología general para niños, adultos y adultos mayores en Santa Clara, Florencia, San Carlos. Ortodoncia con especialista. Agenda tu cita por WhatsApp.",
  keywords: [
    "Dra. Maday Pallares",
    "Dra. Maday Merary Pallares",
    "dentista Santa Clara San Carlos",
    "dentista Florencia San Carlos",
    "odontóloga San Carlos",
    "clínica dental Santa Clara",
    "odontología general San Carlos",
    "limpieza dental San Carlos",
    "dentista para niños San Carlos",
    "emergencias dentales San Carlos",
    "ortodoncia San Carlos",
  ],
  openGraph: {
    title: "Dra. Maday Merary Pallares · Odontología General en Santa Clara",
    description:
      "Más de 25 años cuidando sonrisas con experiencia y cercanía. Escríbeme por WhatsApp y coordinamos tu cita.",
    locale: "es_CR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const dentistJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dra. Maday Merary Pallares",
  description:
    "Odontología general con más de 25 años de experiencia en Santa Clara, Florencia, San Carlos, Costa Rica. Atención para niños, adultos y adultos mayores. Ortodoncia con especialista que colabora con la consulta.",
  telephone: "+50670162252",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Clara, Florencia",
    addressRegion: "San Carlos, Alajuela",
    addressCountry: "CR",
  },
  medicalSpecialty: "Dentistry",
  knowsAbout: [
    "Odontología general",
    "Limpieza dental",
    "Restauraciones",
    "Prótesis dentales",
    "Implantes",
    "Extracciones",
    "Odontología estética",
    "Ortodoncia",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
