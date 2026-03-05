import "./globals.css";

export const metadata = {
  title: "AI Rights Foundation",
  description:
    "Aumi-led initiative for clear, human-centered governance of advanced AI systems."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
