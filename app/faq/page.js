import Container from "../../components/Container";
import PageIntro from "../../components/PageIntro";

const faqs = [
  {
    q: "What is AI rights?",
    a: "AI rights refers to governance standards that protect people when AI systems affect their choices, opportunities, or safety."
  },
  {
    q: "Are you a company or advocacy group?",
    a: "We are a foundation-style nonprofit initiative. Our role is public-interest standards, not product sales."
  },
  {
    q: "How is the registry used?",
    a: "It helps institutions and the public compare stated safeguards across high-impact systems and track review outcomes."
  },
  {
    q: "Do you certify models?",
    a: "Not yet. We currently publish transparent criteria and independent review notes rather than formal certification."
  }
];

export const metadata = {
  title: "FAQ | AI Rights Foundation",
  description: "Frequently asked questions about AI rights and foundation activities."
};

export default function FaqPage() {
  return (
    <>
      <PageIntro
        kicker="FAQ"
        title="Common questions, direct answers."
        description="Short explanations of what we do, what we do not do, and how our public-interest approach works."
      />
      <section className="py-12 md:py-16">
        <Container className="space-y-4">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-xl border border-aumi-line bg-white p-5 md:p-6">
              <h2 className="text-lg font-semibold text-aumi-ink">{item.q}</h2>
              <p className="mt-2 text-sm leading-relaxed text-aumi-muted">{item.a}</p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
