"use client";

import { useEffect, useState } from "react";
import { Bot, MessageSquare, Workflow, Zap } from "lucide-react";

const USE_CASES = [
  {
    icon: MessageSquare,
    title: "Lead qualification agent",
    desc: "Chats with inbound leads, scores intent, books calls automatically.",
  },
  {
    icon: Bot,
    title: "Support chatbot",
    desc: "Resolves common questions instantly, escalates the rest to a human.",
  },
  {
    icon: Workflow,
    title: "Workflow automation agent",
    desc: "Connects your tools — CRM, sheets, WhatsApp — into one automated flow.",
  },
  {
    icon: Zap,
    title: "AI SEO / content agent",
    desc: "Drafts briefs, tracks rankings, and flags content gaps weekly.",
  },
];

function AgentBubble({ text, delay }: { text: string; delay: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(id);
  }, [delay]);
  return (
    <div className={`transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
      <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white/[0.07] border border-white/10 px-4 py-2.5 text-[13px] text-white/80">
        {text}
      </div>
    </div>
  );
}

export default function AIAgentsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a1120] text-white py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-400/10 px-3 py-1 mb-5">
            <Bot className="w-3.5 h-3.5 text-teal-300" />
            <span className="text-[12px] text-teal-200 font-medium">Flagship service</span>
          </div>
          <h2 className="text-3xl sm:text-[2.25rem] font-semibold tracking-tight leading-tight mb-4">
            AI agents that work while your team sleeps
          </h2>
          <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-md">
            We design and deploy custom AI agents that qualify leads, answer support questions,
            and automate the busywork — trained on your business, not a generic script.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {USE_CASES.map((u) => (
              <div
                key={u.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.07] hover:border-teal-400/30 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-400/15 flex items-center justify-center mb-3">
                  <u.icon className="w-4 h-4 text-teal-300" />
                </div>
                <p className="text-sm font-medium text-white mb-1">{u.title}</p>
                <p className="text-[12px] text-white/45 leading-snug">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-teal-500/10 blur-2xl rounded-[2rem]" />
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center">
                <Bot className="w-3.5 h-3.5 text-slate-900" />
              </div>
              <span className="text-[12px] text-white/60">PajeeSEO Assistant · online</span>
            </div>
            <div className="space-y-3">
              <AgentBubble text="Hi! I'm looking for SEO help for my clinic website." delay={200} />
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-teal-400 text-slate-900 px-4 py-2.5 text-[13px] font-medium">
                  Got it — clinic websites usually need local SEO first. Want me to check your
                  Google Business ranking now?
                </div>
              </div>
              <AgentBubble text="Yes please!" delay={900} />
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-teal-400 text-slate-900 px-4 py-2.5 text-[13px] font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900/50 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900/50 animate-bounce [animation-delay:120ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900/50 animate-bounce [animation-delay:240ms]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
