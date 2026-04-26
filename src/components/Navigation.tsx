"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/why-us", label: "Why Us" },
  { href: "/carbon-footprint", label: "Carbon Footprint" },
  { href: "/eco-cart", label: "Eco Cart" },
  { href: "/soil-monitor", label: "Soil Monitor" },
  { href: "/about-us", label: "About Us" },
  { href: "/game", label: "Game" },
  { href: "/sdg-goals", label: "SDG Goals" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-900/5 shadow-[0_4px_20px_-4px_rgba(45,90,39,0.08)]">
      <div className="max-w-[1400px] mx-auto px-8 h-20 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-extrabold text-emerald-900 tracking-tighter"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          TerraWise
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-tight transition-all duration-300 ${
                pathname === link.href
                  ? "text-emerald-900 border-b-2 border-emerald-800 pb-1"
                  : "text-slate-600 hover:text-emerald-800"
              }`}
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}