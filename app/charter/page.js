import Container from "../../components/Container";
import PageIntro from "../../components/PageIntro";

const principles = [
  "Right to clear notice when AI systems influence significant decisions.",
  "Right to meaningful human review and accessible appeal pathways.",
  "Right to documented safety testing before high-impact deployment.",
  "Right to non-discrimination monitoring and timely remediation.",
  "Right to data minimization and privacy-preserving system design."
];

export const metadata = {
  title: "Charter | AI Rights Foundation",
  description: "Core charter principles for accountable AI governance."
};

export default function CharterPage() {
  return (
    <>
      <PageIntro
        kicker="Charter"
        title="A concise charter for AI rights and responsibilities."
        description="This charter defines baseline protections that institutions should adopt before deploying high-impact AI systems."
      />
      <section className="py-12 md:py-16">
        <Container>
          <ol className="space-y-3">
            {principles.map((item, index) => (
              <li key={item} className="rounded-lg border border-aumi-line bg-white p-4 md:p-5">
                <p className="text-sm font-medium text-aumi-human">Principle {index + 1}</p>
                <p className="mt-1 text-base leading-relaxed text-aumi-ink">{item}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
