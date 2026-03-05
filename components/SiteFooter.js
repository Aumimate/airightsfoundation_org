import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-aumi-line/70 bg-white">
      <Container className="flex flex-col gap-3 py-8 text-sm text-aumi-muted md:flex-row md:items-center md:justify-between">
        <p>© 2026 AI Rights Foundation. Independent nonprofit initiative.</p>
        <p>
          <span className="text-aumi-ai">AI</span> and{" "}
          <span className="text-aumi-human">Human</span> rights, governed together.
        </p>
      </Container>
    </footer>
  );
}
