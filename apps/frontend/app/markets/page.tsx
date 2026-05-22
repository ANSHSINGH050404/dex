'use client';

import { useState } from "react";
import { Navbar } from "../../component/Navbar";
import { Footer } from "../../component/Footer";
import { OrderBook } from "../../component/OrderBook";
import { TradeForm } from "../../component/TradeForm";

const markets = [
  { pair: "BTC/USDC", price: 67842.00, change: 2.34, volume: "28.5B", high: 68120.00, low: 66210.00 },
  { pair: "ETH/USDC", price: 3456.70, change: 1.82, volume: "15.2B", high: 3510.00, low: 3390.00 },
  { pair: "SOL/USDC", price: 172.45, change: 5.67, volume: "4.8B", high: 178.00, low: 163.50 },
  { pair: "LINK/USDC", price: 18.23, change: -1.45, volume: "890M", high: 18.80, low: 17.90 },
  { pair: "JUP/USDC", price: 1.08, change: 12.30, volume: "210M", high: 1.12, low: 0.96 },
  { pair: "PYTH/USDC", price: 0.52, change: -3.21, volume: "145M", high: 0.55, low: 0.50 },
  { pair: "RENDER/USDC", price: 9.87, change: 4.56, volume: "320M", high: 10.20, low: 9.45 },
  { pair: "HNT/USDC", price: 7.34, change: -2.18, volume: "85M", high: 7.60, low: 7.15 },
];

export default function MarketsPage() {
  const [selected, setSelected] = useState(markets[0]);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2">
            Markets
          </h1>
          <p className="text-[#969faf] mb-8">Real-time order book and market data.</p>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <div className="bg-[#14151b] border border-[#202127] rounded-2xl overflow-hidden">
                <div className="px-5 py-3 border-b border-[#202127] flex items-center gap-2">
                  {["Spot", "Futures"].map((t) => (
                    <button
                      key={t}
                      className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                        t === "Spot" ? "bg-[#383a45] text-white" : "text-[#969faf] hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#202127]">
                        {["Market", "Price", "24h Change", "Volume", "24h High", "24h Low"].map((h) => (
                          <th
                            key={h}
                            className="text-left px-5 py-3 text-xs font-medium text-[#75798a] uppercase tracking-wider"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {markets.map((m) => (
                        <tr
                          key={m.pair}
                          onClick={() => setSelected(m)}
                          className={`border-b border-[#202127] cursor-pointer transition-colors ${
                            selected.pair === m.pair ? "bg-[#202127]/80" : "hover:bg-[#202127]/50"
                          }`}
                        >
                          <td className="px-5 py-4">
                            <span className="text-white font-medium">{m.pair}</span>
                          </td>
                          <td className="px-5 py-4 text-white tabular-nums">
                            ${m.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                          <td className="px-5 py-4">
                            <span
                              className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${
                                m.change >= 0 ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                              }`}
                            >
                              {m.change >= 0 ? "+" : ""}{m.change}%
                            </span>
                          </td>
                          <td className="px-5 py-4 text-[#969faf]">${m.volume}</td>
                          <td className="px-5 py-4 text-[#969faf]">
                            ${m.high.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </td>
                          <td className="px-5 py-4 text-[#969faf]">
                            ${m.low.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <OrderBook />
              <TradeForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
