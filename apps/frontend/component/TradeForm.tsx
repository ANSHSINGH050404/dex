'use client';

import { useState } from "react";

export const TradeForm = () => {
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [orderType, setOrderType] = useState<"limit" | "market">("limit");
  const [price, setPrice] = useState("67842.00");
  const [amount, setAmount] = useState("");

  return (
    <div className="bg-[#14151b] border border-[#202127] rounded-2xl overflow-hidden">
      <div className="flex">
        <button
          onClick={() => setSide("buy")}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            side === "buy" ? "bg-green-500 text-white" : "bg-[#202127] text-[#969faf] hover:text-white"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setSide("sell")}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            side === "sell" ? "bg-red-500 text-white" : "bg-[#202127] text-[#969faf] hover:text-white"
          }`}
        >
          Sell
        </button>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex gap-2">
          {(["limit", "market"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setOrderType(t)}
              className={`flex-1 py-1.5 text-xs rounded-md capitalize transition-colors ${
                orderType === t
                  ? "bg-[#383a45] text-white"
                  : "text-[#969faf] hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div>
          <div className="flex justify-between text-xs text-[#969faf] mb-1">
            <span>Price</span>
            <span>USDC</span>
          </div>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full bg-[#202127] border border-[#383a45] rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#4c94ff] transition-colors"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs text-[#969faf] mb-1">
            <span>Amount</span>
            <span>BTC</span>
          </div>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full bg-[#202127] border border-[#383a45] rounded-lg px-3 py-2 text-sm text-white placeholder:text-[#75798a] outline-none focus:border-[#4c94ff] transition-colors"
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

        <div className="flex justify-between text-xs text-[#969faf]">
          <span>Available</span>
          <span>0.0000 BTC</span>
        </div>

        <button
          className={`w-full py-3 rounded-lg font-medium text-sm text-white transition-colors ${
            side === "buy"
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {side === "buy" ? "Buy" : "Sell"} BTC
        </button>
      </div>
    </div>
  );
};
