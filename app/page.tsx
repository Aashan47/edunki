import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServicesGrid from "@/components/ServicesGrid";
import About from "@/components/About";
import TeamGrid from "@/components/TeamGrid";
import Community from "@/components/Community";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        id="services"
        eyebrow="Our services"
        title="Academic guidance, end to end"
        lead="From choosing a program to landing the visa, each service is run by a consultant who has been through that exact process."
      >
        <ServicesGrid />
      </Section>

      <About />

      <Section
        id="team"
        tone="soft"
        eyebrow="Our team"
        title="The people you'll be working with"
        lead="Our team at edunki is made up of experts from various educational fields, all united by the common goal of providing our clients with the best possible guidance and resources."
      >
        <TeamGrid />
      </Section>

      <Community />

      <Contact />
    </>
  );
}
