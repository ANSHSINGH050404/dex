export const OrderBook = () => {
  const asks = [
    { price: 67850.00, size: 1.234, total: 83742.89 },
    { price: 67848.50, size: 0.567, total: 38470.09 },
    { price: 67845.20, size: 2.890, total: 196072.63 },
    { price: 67842.10, size: 0.890, total: 60379.47 },
    { price: 67840.00, size: 3.456, total: 234455.04 },
    { price: 67838.80, size: 1.100, total: 74622.68 },
    { price: 67835.50, size: 4.200, total: 284909.10 },
    { price: 67832.30, size: 0.345, total: 23402.14 },
    { price: 67830.00, size: 2.100, total: 142443.00 },
    { price: 67828.60, size: 0.780, total: 52906.31 },
  ];

  const bids = [
    { price: 67822.00, size: 0.920, total: 62396.24 },
    { price: 67820.50, size: 3.450, total: 233980.73 },
    { price: 67818.30, size: 1.230, total: 83416.51 },
    { price: 67815.00, size: 0.560, total: 37976.40 },
    { price: 67812.80, size: 2.780, total: 188519.58 },
    { price: 67810.20, size: 1.450, total: 98324.79 },
    { price: 67808.00, size: 0.340, total: 23054.72 },
    { price: 67805.50, size: 4.100, total: 278002.55 },
    { price: 67803.20, size: 0.890, total: 60344.85 },
    { price: 67800.00, size: 2.000, total: 135600.00 },
  ];

  const maxAskTotal = Math.max(...asks.map((a) => a.total));
  const maxBidTotal = Math.max(...bids.map((b) => b.total));

  return (
    <div className="bg-[#14151b] border border-[#202127] rounded-2xl overflow-hidden">
      <div className="px-5 py-3 border-b border-[#202127] flex items-center justify-between">
        <h3 className="text-sm font-medium text-white">Order Book</h3>
        <span className="text-xs text-[#75798a]">BTC/USDC</span>
      </div>

      <div className="grid grid-cols-3 px-5 py-2 text-xs text-[#75798a] font-medium uppercase tracking-wider border-b border-[#202127]">
        <span>Price (USDC)</span>
        <span className="text-right">Size (BTC)</span>
        <span className="text-right">Total (USDC)</span>
      </div>

      <div className="px-5">
        {asks.slice().reverse().map((row) => (
          <div key={row.price} className="relative grid grid-cols-3 py-1.5 text-xs">
            <div
              className="absolute right-0 top-0 bottom-0 bg-red-500/10 rounded"
              style={{ width: `${(row.total / maxAskTotal) * 100}%` }}
            />
            <span className="relative z-10 text-red-400 font-medium tabular-nums">
              {row.price.toFixed(2)}
            </span>
            <span className="relative z-10 text-right text-[#969faf] tabular-nums">
              {row.size.toFixed(3)}
            </span>
            <span className="relative z-10 text-right text-[#969faf] tabular-nums">
              {row.total.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
          </div>
        ))}
      </div>

      <div className="px-5 py-3 border-y border-[#202127] flex items-center justify-between bg-[#0e0f14]">
        <div>
          <div className="text-lg font-semibold text-white">$67,842.00</div>
          <div className="text-xs text-green-400">+2.34%</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-[#75798a]">Spread</div>
          <div className="text-xs text-white">$20.00 (0.03%)</div>
        </div>
      </div>

      <div className="px-5">
        {bids.map((row) => (
          <div key={row.price} className="relative grid grid-cols-3 py-1.5 text-xs">
            <div
              className="absolute right-0 top-0 bottom-0 bg-green-500/10 rounded"
              style={{ width: `${(row.total / maxBidTotal) * 100}%` }}
            />
            <span className="relative z-10 text-green-400 font-medium tabular-nums">
              {row.price.toFixed(2)}
            </span>
            <span className="relative z-10 text-right text-[#969faf] tabular-nums">
              {row.size.toFixed(3)}
            </span>
            <span className="relative z-10 text-right text-[#969faf] tabular-nums">
              {row.total.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
