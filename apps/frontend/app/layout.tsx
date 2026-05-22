import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEX - Modern Finance",
  description:
    "Your brokerage, your exchange, your money. Trade, borrow, spend, and earn in the most powerful margin account in finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
