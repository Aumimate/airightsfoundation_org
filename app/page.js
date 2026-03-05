import Container from "../components/Container";
import NewsletterForm from "../components/NewsletterForm";
import PageIntro from "../components/PageIntro";

export default function HomePage() {
  return (
    <>
      <PageIntro
        kicker="Home"
        title="Protecting rights in an AI-enabled society."
        description="The AI Rights Foundation is a nonprofit initiative focused on practical protections: clear principles, independent oversight, and public-interest governance."
      />
      <section className="py-12 md:py-16">
        <Container className="grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-aumi-line bg-white p-6">
            <h2 className="text-lg font-semibold text-aumi-ink">Public Charter</h2>
            <p className="mt-2 text-sm leading-relaxed text-aumi-muted">
              A concise rights framework for how advanced AI should be designed, tested, and deployed.
            </p>
          </article>
          <article className="rounded-xl border border-aumi-line bg-white p-6">
            <h2 className="text-lg font-semibold text-aumi-ink">Model Registry</h2>
            <p className="mt-2 text-sm leading-relaxed text-aumi-muted">
              A transparent record of public-facing AI systems and the safeguards they claim to follow.
            </p>
          </article>
          <article className="rounded-xl border border-aumi-line bg-white p-6">
            <h2 className="text-lg font-semibold text-aumi-ink">Civic Guidance</h2>
            <p className="mt-2 text-sm leading-relaxed text-aumi-muted">
              Practical resources for schools, journalists, and policymakers engaging with AI rights.
            </p>
          </article>
        </Container>
      </section>
      <section className="border-y border-aumi-line/70 bg-aumi-surface py-12 md:py-16">
        <Container className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-aumi-ink md:text-3xl">
              Built for trust, not hype.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-aumi-muted">
              We work across the blue and green boundary: technical realities of AI and the human rights standards that must govern it.
            </p>
          </div>
          <NewsletterForm />
        </Container>
      </section>
    </>
  );
}
