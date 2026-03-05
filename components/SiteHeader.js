import Link from "next/link";
import Container from "./Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/charter", label: "Charter" },
  { href: "/registry", label: "Registry" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  return (
    <header className="border-b border-aumi-line/70 bg-white/95 backdrop-blur">
      <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-base font-semibold text-aumi-ink md:text-lg">
          AI Rights Foundation
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-aumi-muted transition-colors hover:bg-aumi-surface hover:text-aumi-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
