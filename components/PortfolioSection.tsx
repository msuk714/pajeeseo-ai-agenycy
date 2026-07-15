"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink, MapPin, Target, TrendingUp, X } from "lucide-react";

type Keyword = { term: string; position: string; url: string };
type CaseStudy = {
  name: string;
  category: string;
  before: string;
  after: string;
  metric: string;
  keywords: Keyword[];
  achievements: string[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    name: "Qualis Roofing Co.",
    category: "SEO · Local Service",
    before: "1,240",
    after: "6,540",
    metric: "Organic impressions / mo",
    keywords: [
      { term: "roofing contractor dallas", position: "#3", url: "qualisroofing.com/dallas-roofing" },
      { term: "roof repair near me", position: "#5", url: "qualisroofing.com/services/repair" },
      { term: "commercial roofing dallas tx", position: "#2", url: "qualisroofing.com/commercial" },
    ],
    achievements: [
      "+427% top-10 keywords YoY",
      "+68% organic conversions in 6 months",
      "#1 Google Maps pack for 4 core terms",
    ],
  },
  {
    name: "Northline Skincare",
    category: "Content + Web Development",
    before: "18,900",
    after: "68,200",
    metric: "Monthly organic sessions",
    keywords: [
      { term: "vitamin c serum pakistan", position: "#1", url: "northlineskincare.com/vitamin-c-serum" },
      { term: "best skincare brand lahore", position: "#4", url: "northlineskincare.com" },
      { term: "niacinamide serum benefits", position: "#2", url: "northlineskincare.com/blog/niacinamide" },
    ],
    achievements: [
      "+260% organic revenue in 9 months",
      "New Next.js site: 1.4s LCP",
      "38 ranking blog articles published",
    ],
  },
  {
    name: "Vanta Legal Associates",
    category: "AI Agent + SEO",
    before: "310",
    after: "2,150",
    metric: "Qualified leads / mo",
    keywords: [
      { term: "immigration lawyer lahore", position: "#1", url: "vantalegal.com/immigration" },
      { term: "corporate law firm pakistan", position: "#3", url: "vantalegal.com" },
      { term: "legal consultation online", position: "#2", url: "vantalegal.com/consult" },
    ],
    achievements: [
      "AI intake agent qualifies 100% of inbound leads",
      "#1 ranking on 12 target terms",
      "92% faster first response time",
    ],
  },
];

function MiniAnalyticsCard({
  before,
  after,
  metric,
}: {
  before: string;
  after: string;
  metric: string;
}) {
  const bars = [30, 42, 38, 55, 48, 66, 60, 78, 72, 90];
  return (
    <div className="rounded-xl bg-slate-900 border border-white/10 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] uppercase tracking-wide text-white/40">{metric}</span>
        <span className="text-[10px] text-teal-300 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> trending up
        </span>
      </div>
      <div className="flex items-end gap-1 h-14 mb-3">
        {bars.map((b, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-teal-500/70 to-teal-300/80"
            style={{ height: `${b}%` }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-[13px]">
        <span className="text-white/40">{before}</span>
        <ArrowRight className="w-3.5 h-3.5 text-white/30" />
        <span className="text-white font-semibold">{after}</span>
      </div>
    </div>
  );
}

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg hover:border-teal-300/60 transition-all">
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-medium text-teal-700 bg-teal-50 rounded-full px-2.5 py-1">
            {cs.category}
          </span>
        </div>
        <h3 className="text-base font-semibold text-slate-900 mb-3">{cs.name}</h3>
        <MiniAnalyticsCard before={cs.before} after={cs.after} metric={cs.metric} />
        <button
          onClick={() => setOpen(true)}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white text-sm font-medium py-2.5 hover:bg-teal-600 transition-colors"
        >
          <Target className="w-4 h-4" /> View results
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(8,12,20,0.6)" }}
          onClick={() => setOpen(false)}
        >
          <div className="max-w-md w-full rounded-2xl bg-white p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <p className="text-[11px] font-medium text-teal-700 bg-teal-50 inline-block rounded-full px-2.5 py-1 mb-2">
              {cs.category}
            </p>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">{cs.name}</h3>

            <p className="text-[11px] uppercase tracking-wide text-slate-400 mb-2">Ranked keywords</p>
            <div className="space-y-2 mb-4">
              {cs.keywords.map((k) => (
                <div key={k.term} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                  <div className="min-w-0">
                    <p className="text-[13px] text-slate-800 truncate">{k.term}</p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 truncate">
                      <ExternalLink className="w-3 h-3 shrink-0" /> {k.url}
                    </p>
                  </div>
                  <span className="shrink-0 ml-3 text-[12px] font-semibold text-teal-700 bg-teal-50 rounded-md px-2 py-1">
                    {k.position}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] uppercase tracking-wide text-slate-400 mb-2">Achievements</p>
            <ul className="space-y-1.5">
              {cs.achievements.map((a) => (
                <li key={a} className="text-[13px] text-slate-700 flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-teal-500 shrink-0" /> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[12px] font-medium text-teal-600 mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Real results, real keywords
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
              Portfolio &amp; keyword-level proof
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-xs">
            Click any project to see exact rankings, live URLs, and the achievements behind the
            stats.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.name} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
