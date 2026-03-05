import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-aumi-line/70 py-8">
      <Container className="flex flex-col gap-2 text-sm text-aumi-muted md:flex-row md:items-center md:justify-between">
        <p>© 2026 AI Rights Foundation</p>
        <p>Blue for AI. Green for Human.</p>
      </Container>
    </footer>
  );
}
