import { ArrowRight, Sparkles } from "lucide-react";
import LiveResultsPanel from "./LiveResultsPanel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1120] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-teal-500/20 blur-[100px]" />
        <div className="absolute top-20 -right-20 w-[26rem] h-[26rem] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-400/10 px-3 py-1 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span className="text-[12px] text-teal-200 font-medium">Digital growth, built with AI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.08] tracking-tight mb-5">
            Marketing, design and AI agents that{" "}
            <span className="text-teal-300">compound your growth.</span>
          </h1>
          <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-md">
            PajeeSEO combines SEO, web development, UI/UX design, content, and custom AI agents
            into one connected growth system — for local and international brands alike.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-400 text-slate-900 font-medium text-sm px-5 py-3 hover:bg-teal-300 transition-colors"
            >
              Get a free proposal <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 text-white/80 text-sm px-5 py-3 hover:bg-white/5 transition-colors"
            >
              See our results
            </a>
          </div>
          <div className="flex items-center gap-6 mt-10 text-white/35 text-[11px] uppercase tracking-wider">
            <span>300+ projects</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>98% retention</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Pakistan &amp; global clients</span>
          </div>
        </div>

        <LiveResultsPanel />
      </div>
    </section>
  );
}
