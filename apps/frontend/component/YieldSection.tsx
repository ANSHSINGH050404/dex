export const YieldSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Built for traders who demand more<span className="text-[#4c94ff]">.</span>
          </h2>
          <p className="mt-4 text-lg text-[#969faf]">
            The most capital-efficient margin system in crypto, designed so every dollar works harder.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#14151b] border border-[#202127] rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white">Yield on everything — even your PnL</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Yield on idle and locked collateral",
                "Yield on PnL from open positions",
                "Boosted treasury rates on USD",
                "Native staking rewards on assets like SOL",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#969faf]">
                  <svg className="w-5 h-5 text-[#4c94ff] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#14151b] border border-[#202127] rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white">Cross margin & multi-collateral</h3>
            <p className="mt-3 text-sm text-[#969faf] leading-relaxed">
              Maximize capital efficiency with the Unified Account. Trade perps, predictions, spot, and more — all in the same account. Use BTC, ETH, SOL, and many more assets as collateral.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["BTC", "ETH", "SOL", "USDC", "USDT", "100+"].map((asset) => (
                <div
                  key={asset}
                  className="bg-[#202127] rounded-lg px-3 py-2 text-center text-sm text-white"
                >
                  {asset}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
