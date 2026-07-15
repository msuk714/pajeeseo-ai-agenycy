"use client";

import { useEffect, useState } from "react";
import { TrendingUp, LineChart as LineChartIcon } from "lucide-react";
import { useCountUp, useInView } from "./hooks";

const WINS = [
  { name: "Roofing Co, Dallas", stat: "+427% organic keywords" },
  { name: "FinTech SaaS", stat: "AI agent cut response time 92%" },
  { name: "D2C Skincare", stat: "+260% revenue from organic" },
  { name: "Legal Firm, Lahore", stat: "#1 ranking, 12 target terms" },
];

export default function LiveResultsPanel() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const traffic = useCountUp(184300, 1800, inView);
  const leads = useCountUp(1247, 1800, inView);
  const agents = useCountUp(38, 1200, inView);

  const [winIdx, setWinIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWinIdx((i) => (i + 1) % WINS.length), 2800);
    return () => clearInterval(id);
  }, []);

  const points = [22, 30, 26, 40, 38, 52, 61, 58, 74, 90];
  const w = 240;
  const h = 64;
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - (p / 100) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div ref={ref} className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-6 bg-gradient-to-br from-teal-400/20 via-cyan-400/10 to-transparent blur-2xl rounded-[2rem]" />
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-5 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-[11px] tracking-wide uppercase text-teal-300/90 font-medium">
              Live results
            </span>
          </div>
          <LineChartIcon className="w-4 h-4 text-white/40" />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="rounded-xl bg-white/[0.05] border border-white/10 p-3">
            <p className="text-[10px] text-white/50 mb-1">Organic traffic</p>
            <p className="text-lg font-semibold text-white">{traffic.toLocaleString()}</p>
          </div>
          <div className="rounded-xl bg-white/[0.05] border border-white/10 p-3">
            <p className="text-[10px] text-white/50 mb-1">Leads generated</p>
            <p className="text-lg font-semibold text-white">{leads.toLocaleString()}</p>
          </div>
          <div className="rounded-xl bg-white/[0.05] border border-white/10 p-3">
            <p className="text-[10px] text-white/50 mb-1">AI agents live</p>
            <p className="text-lg font-semibold text-white">{agents}</p>
          </div>
        </div>

        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 mb-4">
          <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16">
            <defs>
              <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${path} L${w},${h} L0,${h} Z`} fill="url(#fillGrad)" />
            <path
              d={path}
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-teal-500/15 to-transparent border border-teal-400/20 px-3 py-2.5 flex items-center gap-2 transition-all duration-500">
          <TrendingUp className="w-3.5 h-3.5 text-teal-300 shrink-0" />
          <div className="min-w-0">
            <p className="text-[11px] text-white/50 leading-tight truncate">{WINS[winIdx].name}</p>
            <p className="text-[12px] text-teal-200 font-medium leading-tight truncate">
              {WINS[winIdx].stat}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
