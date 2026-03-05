import Container from "./Container";

export default function PageIntro({ kicker, title, description }) {
  return (
    <section className="border-b border-aumi-line/70">
      <Container className="py-12 md:py-16">
        {kicker ? (
          <p className="text-sm font-medium uppercase tracking-wide text-aumi-ai">{kicker}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-aumi-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-aumi-muted md:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
