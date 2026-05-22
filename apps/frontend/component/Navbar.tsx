'use client';

import { useState } from "react";
import Link from "next/link";

const navLinks = ["Markets", "Crypto", "Futures", "Lend", "BP", "Wallet"];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0e0f14]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-white tracking-tight">
              DEX
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-sm text-[#969faf] hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:inline-flex text-sm text-[#969faf] hover:text-white transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="text-sm bg-white text-[#14151b] px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Get Started
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-[#969faf] hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="block py-2 text-sm text-[#969faf] hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            ))}
            <Link
              href="/login"
              className="block py-2 text-sm text-[#969faf] hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
