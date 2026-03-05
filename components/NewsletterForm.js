export default function NewsletterForm() {
  return (
    <form className="rounded-xl border border-aumi-line bg-white p-5 md:p-6" onSubmit={(e) => e.preventDefault()}>
      <h3 className="text-lg font-semibold text-aumi-ink">Newsletter</h3>
      <p className="mt-2 text-sm leading-relaxed text-aumi-muted">
        Quarterly updates on charter progress, registry changes, and public consultations.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="sr-only" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.org"
          className="w-full rounded-md border border-aumi-line px-3 py-2 text-sm text-aumi-ink outline-none ring-aumi-ai/30 placeholder:text-aumi-muted focus:ring-2"
        />
        <button
          type="submit"
          className="rounded-md bg-aumi-ai px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#194f8d]"
        >
          Subscribe
        </button>
      </div>
      <p className="mt-3 text-xs text-aumi-muted">UI only for now. No data is sent yet.</p>
    </form>
  );
}
