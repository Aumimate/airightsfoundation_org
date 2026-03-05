import Container from "../../components/Container";
import NewsletterForm from "../../components/NewsletterForm";
import PageIntro from "../../components/PageIntro";

export const metadata = {
  title: "Contact | AI Rights Foundation",
  description: "Contact and collaboration details for the AI Rights Foundation."
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        kicker="Contact"
        title="Work with us on credible AI rights governance."
        description="We collaborate with civil society organizations, researchers, and public institutions."
      />
      <section className="py-12 md:py-16">
        <Container className="grid gap-6 md:grid-cols-[1.1fr_1fr]">
          <article className="rounded-xl border border-aumi-line bg-white p-6">
            <h2 className="text-xl font-semibold text-aumi-ink">General contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-aumi-muted">
              Email:{" "}
              <a href="mailto:contact@airightsfoundation.org" className="text-aumi-ai underline">
                contact@airightsfoundation.org
              </a>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-aumi-muted">
              We aim to respond within five business days.
            </p>
            <h3 className="mt-6 text-base font-semibold text-aumi-ink">Inquiry areas</h3>
            <ul className="mt-2 space-y-1 text-sm text-aumi-muted">
              <li>Policy and charter consultations</li>
              <li>Registry submissions and corrections</li>
              <li>Public education partnerships</li>
            </ul>
          </article>
          <NewsletterForm />
        </Container>
      </section>
    </>
  );
}
