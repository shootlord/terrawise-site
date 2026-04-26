"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t border-emerald-900/10">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div
            className="font-bold text-emerald-900 text-lg"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            TerraWise
          </div>
          <p className="font-manrope text-xs text-slate-500">
            2024 TerraWise. Stewardship through transparency.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <Link
            className="font-manrope text-xs text-slate-500 hover:text-emerald-700 transition-colors"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="font-manrope text-xs text-slate-500 hover:text-emerald-700 transition-colors"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="font-manrope text-xs text-slate-500 hover:text-emerald-700 transition-colors"
            href="#"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-slate-400 hover:text-emerald-800 cursor-pointer">
            public
          </span>
          <span className="material-symbols-outlined text-slate-400 hover:text-emerald-800 cursor-pointer">
            eco
          </span>
        </div>
      </div>
    </footer>
  );
}