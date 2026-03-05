import Container from "./Container";
import SectionHeader from "./SectionHeader";

const roadmap = [
  {
    phase: "Q2 2026",
    goal: "Release baseline AI rights framework",
    detail: "A short, citation-backed framework that organizations can adopt without legal teams."
  },
  {
    phase: "Q3 2026",
    goal: "Launch civic education toolkit",
    detail: "Free materials for schools, media, and NGOs to explain AI rights in practical terms."
  },
  {
    phase: "Q4 2026",
    goal: "Pilot independent compliance scorecard",
    detail: "Simple scoring model for transparency, recourse, and user safety commitments."
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="border-y border-aumi-line/70 bg-aumi-surface py-16 md:py-24">
      <Container>
        <SectionHeader
          title="2026 roadmap"
          description="Focused deliverables designed to earn institutional trust and public understanding."
        />
        <ol className="space-y-4">
          {roadmap.map((item) => (
            <li key={item.phase} className="rounded-xl border border-aumi-line bg-white p-6">
              <p className="text-sm font-medium text-aumi-human">{item.phase}</p>
              <h3 className="mt-1 text-lg font-semibold text-aumi-ink">{item.goal}</h3>
              <p className="mt-2 text-sm leading-relaxed text-aumi-muted">{item.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
