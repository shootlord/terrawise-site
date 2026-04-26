"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/eco-cart", label: "Shop", icon: "eco" },
  { href: "/soil-monitor", label: "Monitor", icon: "monitoring" },
  { href: "/about-us", label: "Profile", icon: "person" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full md:hidden flex justify-around items-center px-4 py-3 pb-safe bg-white border-t border-emerald-100 shadow-[0_-4px_20px_rgba(45,90,39,0.08)] z-50 rounded-t-2xl">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex flex-col items-center justify-center px-5 py-2 transition-transform active:scale-95 duration-150 ${
            pathname === link.href
              ? "bg-green-50 text-green-800 rounded-xl"
              : "text-zinc-400"
          }`}
        >
          <span className="material-symbols-outlined">{link.icon}</span>
          <span
            className="text-[10px] font-semibold uppercase tracking-wider mt-1"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}