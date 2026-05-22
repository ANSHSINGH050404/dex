export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
            Modern finance<span className="text-[#4c94ff]">.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#969faf] max-w-2xl mx-auto leading-relaxed">
            Your brokerage, your exchange, your money. Trade, borrow, spend, and earn
            in the most powerful margin account in finance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="/signup"
              className="bg-white text-[#14151b] px-8 py-3 rounded-lg font-medium text-base hover:bg-white/90 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/markets"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-medium text-base hover:bg-white/5 transition-colors"
            >
              View Markets
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: "Volume", value: "$400B+" },
            { label: "Transactions", value: "1B" },
            { label: "Under Custody", value: "$350M+" },
            { label: "Countries", value: "150+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#14151b] border border-[#202127] rounded-xl p-5 text-center"
            >
              <div className="text-2xl font-semibold text-white">{stat.value}</div>
              <div className="text-sm text-[#969faf] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#14151b] border border-[#202127] rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-[#202127] flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-[#969faf]">BTC/USDC · Spot</span>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 h-80 bg-[#0e0f14] rounded-xl border border-[#202127] flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-semibold text-white">$67,842</div>
                <div className="text-green-400 text-sm mt-1">+2.34%</div>
                <div className="mt-4 flex gap-6 text-sm text-[#969faf]">
                  <span>24h High: $68,120</span>
                  <span>24h Low: $66,210</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex bg-[#202127] rounded-lg p-1">
                <button className="flex-1 py-2 text-sm font-medium text-white bg-[#383a45] rounded-md transition-colors">
                  Buy
                </button>
                <button className="flex-1 py-2 text-sm font-medium text-[#969faf] rounded-md transition-colors">
                  Sell
                </button>
              </div>
              <div className="flex gap-2">
                {["Limit", "Market"].map((t) => (
                  <button
                    key={t}
                    className={`flex-1 py-2 text-xs rounded-md transition-colors ${
                      t === "Limit"
                        ? "bg-[#4c94ff] text-white"
                        : "bg-[#202127] text-[#969faf]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div>
                <div className="flex justify-between text-xs text-[#969faf] mb-1">
                  <span>Price</span>
                  <span>$67,842.00</span>
                </div>
                <input
                  type="text"
                  value="67842.00"
                  readOnly
                  className="w-full bg-[#202127] border border-[#383a45] rounded-lg px-3 py-2 text-sm text-white"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs text-[#969faf] mb-1">
                  <span>Amount</span>
                  <span>0.0000 BTC</span>
                </div>
                <input
                  type="text"
                  placeholder="0.00"
                  className="w-full bg-[#202127] border border-[#383a45] rounded-lg px-3 py-2 text-sm text-white placeholder:text-[#75798a]"
                />
              </div>
              <div className="flex gap-1">
                {["25%", "50%", "75%", "100%"].map((pct) => (
                  <button
                    key={pct}
                    className="flex-1 py-1 text-xs bg-[#202127] text-[#969faf] rounded hover:bg-[#383a45] transition-colors"
                  >
                    {pct}
                  </button>
                ))}
              </div>
              <button className="w-full bg-[#4c94ff] text-white py-3 rounded-lg font-medium text-sm hover:bg-[#4c94ff]/90 transition-colors">
                Buy BTC
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
