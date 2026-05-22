'use client';

import { useState } from "react";
import { Navbar } from "../../component/Navbar";
import { Footer } from "../../component/Footer";

const tokens = [
  { rank: 1, name: "Bitcoin", symbol: "BTC", price: 67842.00, change24h: 2.34, marketCap: "1.32T", volume: "28.5B", supply: "19.6M" },
  { rank: 2, name: "Ethereum", symbol: "ETH", price: 3456.70, change24h: 1.82, marketCap: "415.2B", volume: "15.2B", supply: "120.2M" },
  { rank: 3, name: "Solana", symbol: "SOL", price: 172.45, change24h: 5.67, marketCap: "78.4B", volume: "4.8B", supply: "454.5M" },
  { rank: 4, name: "USD Coin", symbol: "USDC", price: 1.00, change24h: 0.01, marketCap: "34.2B", volume: "6.1B", supply: "34.2B" },
  { rank: 5, name: "Tether", symbol: "USDT", price: 1.00, change24h: -0.01, marketCap: "95.8B", volume: "42.3B", supply: "95.8B" },
  { rank: 6, name: "Chainlink", symbol: "LINK", price: 18.23, change24h: -1.45, marketCap: "10.7B", volume: "890M", supply: "587.1M" },
  { rank: 7, name: "Jupiter", symbol: "JUP", price: 1.08, change24h: 12.30, marketCap: "1.5B", volume: "210M", supply: "1.4B" },
  { rank: 8, name: "Pyth Network", symbol: "PYTH", price: 0.52, change24h: -3.21, marketCap: "1.9B", volume: "145M", supply: "3.6B" },
  { rank: 9, name: "Render", symbol: "RENDER", price: 9.87, change24h: 4.56, marketCap: "3.8B", volume: "320M", supply: "386.4M" },
  { rank: 10, name: "Helium", symbol: "HNT", price: 7.34, change24h: -2.18, marketCap: "1.2B", volume: "85M", supply: "160.9M" },
];

type Filter = "all" | "movers" | "losers";

export default function CryptoPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = tokens.filter((t) => {
    if (filter === "movers") return t.change24h > 3;
    if (filter === "losers") return t.change24h < -1;
    return true;
  });

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Crypto Prices
            </h1>
            <p className="mt-4 text-lg text-[#969faf] leading-relaxed">
              Discover the latest trends in the world of digital assets. From top movers
              and biggest losers to top cryptocurrencies, stay up to date with real-time
              prices and market shifts.
            </p>
          </div>

          <div className="mt-6 bg-[#14151b] border border-[#202127] rounded-2xl p-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Begin with DEX</h3>
              <p className="text-sm text-[#969faf] mt-1">
                Trade and store securely with the DEX wallet and exchange.
              </p>
            </div>
            <a
              href="/signup"
              className="bg-white text-[#14151b] px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-white/90 transition-colors shrink-0"
            >
              Sign up
            </a>
          </div>

          <div className="mt-8 bg-[#14151b] border border-[#202127] rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-[#202127]">
              <h2 className="text-xl font-semibold text-white">Today's Crypto Prices</h2>
              <p className="text-sm text-[#969faf] mt-1">
                Stay on top of the latest crypto prices with live market data.
              </p>
            </div>

            <div className="px-6 pt-4 pb-2 flex gap-2">
              {[
                { key: "all", label: "All Crypto" },
                { key: "movers", label: "Top Movers" },
                { key: "losers", label: "Top Losers" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as Filter)}
                  className={`px-4 py-1.5 text-sm rounded-lg transition-colors ${
                    filter === tab.key
                      ? "bg-[#383a45] text-white"
                      : "text-[#969faf] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#202127]">
                    {["#", "Asset", "Price", "24h Change", "Market Cap", "Volume (24h)", "Supply"].map(
                      (header) => (
                        <th
                          key={header}
                          className="text-left px-6 py-3 text-xs font-medium text-[#75798a] uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((token) => (
                    <tr
                      key={token.symbol}
                      className="border-b border-[#202127] hover:bg-[#202127]/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-[#75798a]">{token.rank}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#202127] flex items-center justify-center text-xs font-medium text-white">
                            {token.symbol[0]}
                          </div>
                          <div>
                            <div className="text-white font-medium">{token.name}</div>
                            <div className="text-[#75798a] text-xs">{token.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-white font-medium">
                        ${token.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${
                            token.change24h >= 0
                              ? "bg-green-500/10 text-green-400"
                              : "bg-red-500/10 text-red-400"
                          }`}
                        >
                          {token.change24h >= 0 ? "+" : ""}
                          {token.change24h}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#969faf]">${token.marketCap}</td>
                      <td className="px-6 py-4 text-[#969faf]">${token.volume}</td>
                      <td className="px-6 py-4 text-[#969faf]">{token.supply}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
