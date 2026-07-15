import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PajeeSEO | Digital Marketing, Dev & AI Agency",
  description:
    "Full-service digital marketing, web development, UI/UX design, content marketing and AI agent agency. Get a free proposal and grow with data-backed strategy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
