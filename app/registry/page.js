import Container from "../../components/Container";
import PageIntro from "../../components/PageIntro";

const entries = [
  {
    name: "Public Service Assistant v2",
    operator: "Civic Lab Consortium",
    status: "Listed with conditions",
    notes: "Quarterly bias testing and public incident log required."
  },
  {
    name: "Medical Intake Triage Model",
    operator: "Regional Care Alliance",
    status: "Under review",
    notes: "Awaiting independent safety audit publication."
  },
  {
    name: "Student Support Advisor",
    operator: "Open Learning Network",
    status: "Listed",
    notes: "Human override and appeal route validated."
  }
];

export const metadata = {
  title: "Registry | AI Rights Foundation",
  description: "Public-interest registry for high-impact AI systems."
};

export default function RegistryPage() {
  return (
    <>
      <PageIntro
        kicker="Registry"
        title="Transparent listing of high-impact AI systems."
        description="The registry tracks public-facing systems, stated safeguards, and review status so stakeholders can evaluate accountability claims."
      />
      <section className="py-12 md:py-16">
        <Container>
          <div className="overflow-x-auto rounded-xl border border-aumi-line bg-white">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="border-b border-aumi-line bg-aumi-surface">
                <tr>
                  <th className="px-4 py-3 font-semibold text-aumi-ink">System</th>
                  <th className="px-4 py-3 font-semibold text-aumi-ink">Operator</th>
                  <th className="px-4 py-3 font-semibold text-aumi-ink">Status</th>
                  <th className="px-4 py-3 font-semibold text-aumi-ink">Notes</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.name} className="border-b border-aumi-line last:border-b-0">
                    <td className="px-4 py-3 text-aumi-ink">{entry.name}</td>
                    <td className="px-4 py-3 text-aumi-muted">{entry.operator}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-[#e8f3fb] px-2 py-1 text-xs font-medium text-aumi-ai">
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-aumi-muted">{entry.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </>
  );
}
