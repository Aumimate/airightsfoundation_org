import ContactCta from "../components/ContactCta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Principles from "../components/Principles";
import Roadmap from "../components/Roadmap";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <Principles />
        <Roadmap />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
