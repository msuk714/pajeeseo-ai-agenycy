"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const SERVICES = [
  "Digital Marketing (SEO/PPC/Social)",
  "Web & App Development",
  "UI/UX Design",
  "Content Marketing",
  "AI Agents & Automation",
];

export default function ProposalForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  function toggleService(s: string) {
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to a serverless form handler (e.g. /api/contact) before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mx-auto mb-3">
          <Check className="w-5 h-5 text-white" />
        </div>
        <p className="text-slate-900 font-medium mb-1">Thanks — request received</p>
        <p className="text-sm text-slate-500">We&apos;ll follow up within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input required placeholder="Name" className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm w-full" />
        <input required type="email" placeholder="Email" className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm w-full" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input placeholder="Phone / WhatsApp" className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm w-full" />
        <input placeholder="Company" className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm w-full" />
      </div>

      <div>
        <p className="text-[13px] font-medium text-slate-700 mb-2">Services needed</p>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => toggleService(s)}
              className={`text-[12px] rounded-full px-3 py-1.5 border transition-colors ${
                selected.includes(s)
                  ? "bg-teal-500 border-teal-500 text-white"
                  : "border-slate-200 text-slate-600 hover:border-teal-300"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <select className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm w-full text-slate-600">
        <option>Monthly budget</option>
        <option>Under $500</option>
        <option>$500 - $1,500</option>
        <option>$1,500 - $5,000</option>
        <option>$5,000+</option>
      </select>

      <textarea
        placeholder="Tell us about your project"
        rows={4}
        className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm w-full"
      />

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white text-sm font-medium px-6 py-3 hover:bg-teal-600 transition-colors"
      >
        Submit request <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
