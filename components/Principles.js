import Container from "./Container";
import SectionHeader from "./SectionHeader";

const principles = [
  {
    title: "Clarity before complexity",
    text: "We publish plain-language principles first, then map them to legal and technical detail."
  },
  {
    title: "Human rights by design",
    text: "AI policy should protect privacy, agency, and fairness from early model design to deployment."
  },
  {
    title: "Independent accountability",
    text: "We support third-party audits, measurable benchmarks, and transparent incident reporting."
  }
];

export default function Principles() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          title="What we stand for"
          description="Aumi's brand rule is simple: blue for AI, green for Human. Our work keeps both in balance with credible, enforceable governance."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-aumi-line bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-aumi-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-aumi-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
