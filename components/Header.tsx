import { ArrowRight } from "lucide-react";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a1120]/90 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-white font-semibold tracking-tight text-lg">
          Pajee<span className="text-teal-300">SEO</span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-teal-400 text-slate-900 text-[13px] font-medium px-4 py-2 hover:bg-teal-300 transition-colors"
        >
          Get a free proposal <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}
