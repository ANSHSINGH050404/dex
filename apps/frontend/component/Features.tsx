'use client';

import { useState } from "react";

export const Features = () => {
  const [tab, setTab] = useState<"trade" | "invest">("trade");

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Trade<span className="text-[#969faf]"> . </span>Invest<span className="text-[#969faf]"> . </span>Earn<span className="text-[#969faf]"> . </span>
          </h2>
          <p className="mt-4 text-lg text-[#969faf]">
            All from one account. Whether you&apos;re a trader executing complex strategies or just want a better place for your money.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-[#202127] rounded-lg p-1 inline-flex">
            {(["trade", "invest"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-colors capitalize ${
                  tab === t
                    ? "bg-[#383a45] text-white"
                    : "text-[#969faf] hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-[#14151b] border border-[#202127] rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white capitalize">{tab}</h3>
              <p className="mt-3 text-[#969faf] leading-relaxed">
                {tab === "trade"
                  ? "Cross-margined trading across spot, futures, and margin markets. Execute complex strategies with institutional-grade tools."
                  : "Earn yield on every asset in your account. Auto-lending, staking rewards, and boosted rates on stablecoins."}
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Perpetual Futures",
                  "Spot Trading",
                  "Margin Trading",
                  tab === "trade" ? "Predictions" : "Auto Lending",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#969faf]">
                    <svg className="w-4 h-4 text-[#4c94ff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0e0f14] rounded-xl border border-[#202127] p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-white">Portfolio Overview</span>
                <span className="text-xs text-[#969faf]">Cross-margin account</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Equity Total", value: "$42,580.50", positive: true },
                  { label: "Available", value: "$38,240.00", positive: true },
                  { label: "Open PnL", value: "+$1,240.50", positive: true },
                  { label: "Portfolio APY", value: "4.31%", positive: true },
                  { label: "Margin Used", value: "18%", positive: false },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span className="text-[#969faf]">{row.label}</span>
                    <span className={row.positive ? "text-green-400" : "text-white"}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
