import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Quote } from "@/components/Quote";
import { Experience } from "@/components/Experience";
import { Treatments } from "@/components/Treatments";
import { Family } from "@/components/Family";
import { FirstVisit } from "@/components/FirstVisit";
import { WelcomeBack } from "@/components/WelcomeBack";
import { Nervous } from "@/components/Nervous";
import { Emergencies } from "@/components/Emergencies";
import { Cta } from "@/components/Cta";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Quote />
        <Experience />
        <Treatments />
        <Family />
        <FirstVisit />
        <WelcomeBack />
        <Nervous />
        <Emergencies />
        <Cta />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
