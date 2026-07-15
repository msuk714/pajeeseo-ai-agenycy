const COLUMNS = [
  {
    title: "Services",
    links: ["Digital Marketing", "Web & App Development", "UI/UX Design", "Content Marketing", "AI Agents & Automation"],
  },
  {
    title: "Company",
    links: ["About", "Portfolio", "Blog", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white/50 py-14">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="text-white font-semibold text-lg mb-2">
            Pajee<span className="text-teal-300">SEO</span>
          </p>
          <p className="text-[13px] leading-relaxed max-w-xs">
            Digital marketing, development, design, content and AI agents — one connected growth
            partner for local and international brands.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-white text-[13px] font-medium mb-3">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l} className="text-[13px] hover:text-white transition-colors cursor-pointer">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-[12px] flex flex-wrap gap-2 justify-between">
        <span>© {new Date().getFullYear()} PajeeSEO. All rights reserved.</span>
        <span>pajeeseo.com</span>
      </div>
    </footer>
  );
}
