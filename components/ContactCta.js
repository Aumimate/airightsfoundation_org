import Container from "./Container";

export default function ContactCta() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <div className="rounded-2xl border border-aumi-line bg-white p-8 md:p-12">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-aumi-ink md:text-3xl">
            Partner with us to build trustworthy AI governance.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-aumi-muted">
            We collaborate with civil society, researchers, and public institutions.
            Reach us at{" "}
            <a className="font-medium text-aumi-ai underline" href="mailto:contact@airightsfoundation.org">
              contact@airightsfoundation.org
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
