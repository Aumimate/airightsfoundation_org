export default function SectionHeader({ title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      <h2 className="text-2xl font-semibold tracking-tight text-aumi-ink md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-aumi-muted">{description}</p>
    </div>
  );
}
