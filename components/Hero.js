import Container from "./Container";

export default function Hero() {
  return (
    <header className="border-b border-aumi-line/70">
      <Container className="py-16 md:py-24">
        <p className="inline-flex items-center rounded-full border border-aumi-line bg-white px-3 py-1 text-sm text-aumi-muted">
          AI Rights Foundation
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-aumi-ink md:text-6xl">
          A trusted home for{" "}
          <span className="text-aumi-ai">AI rights</span> and{" "}
          <span className="text-aumi-human">human dignity</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-aumi-muted">
          We build practical policy, public education, and accountable standards so
          advanced AI systems develop in ways that protect people and reflect shared values.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#roadmap"
            className="rounded-md bg-aumi-ai px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#194f8d]"
          >
            View 2026 roadmap
          </a>
          <a
            href="#contact"
            className="rounded-md border border-aumi-line bg-white px-5 py-3 text-center text-sm font-medium text-aumi-ink transition-colors hover:bg-aumi-surface"
          >
            Become a partner
          </a>
        </div>
      </Container>
    </header>
  );
}
