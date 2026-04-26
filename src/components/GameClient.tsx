"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function GameClient() {
  return (
    <div>
      <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover animate-slow-zoom"
            alt="Vibrant 3D digital forest environment"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBTsK_hq4KAeIQnm_GVXJjhy2QvhNJjnRd7xZs_d_MxGgQdv1IcFyqN1QsmkYBwBkn0HeY1Ocj2Qg9X5Nx5zqUlgsi2FeHyTyIACDz-tVnY20YQRwYItx4RbtAzaTUtsiKDhFABjm_RsdxkClsRuPYMXeo2DUwrgd60kMgLQhtGLLN-rrUcqyNg3KYf68-J7fEDdVr11P6_nRgLTQU8o3QTXp-y3qCgTjq_CMREPtd-DO67YyP3EK2gnAniDeTn8PYo72fhBWND8a"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/20 backdrop-blur-md border border-primary-container/30 text-primary mb-6 animate-badge">
              <span className="material-symbols-outlined text-sm animate-spin-slow">
                videogame_asset
              </span>
              <span className="font-semibold uppercase tracking-widest text-xs">
                Featured Adventure
              </span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1
              className="text-[48px] md:text-[64px] leading-none tracking-[-0.02em] font-extrabold text-primary mb-6 leading-none animate-title"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              ECOQUEST: TRASH TRACKERS
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <p className="text-lg leading-[1.6] text-on-surface-variant max-w-2xl mx-auto mb-10 animate-subtitle">
              Join Ezra and Zaiel in EcoQuest: Trash Trackers, a fun, fast-paced
              adventure where every piece of trash you collect boosts your score
              and helps save the planet! Play, clean, and become the hero Earth
              needs!
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={600}>
            <div className="flex flex-wrap justify-center gap-4 animate-buttons">
              <button className="group bg-primary px-10 py-5 rounded-xl text-on-primary flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-105 hover:shadow-2xl transition-all active:scale-95">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                  play_arrow
                </span>
                <span className="font-bold text-lg">Play</span>
              </button>
              <button className="bg-white border-2 border-primary/10 px-10 py-5 rounded-xl text-primary font-bold text-lg hover:bg-primary-container/5 hover:scale-105 transition-all active:scale-95">
                Leaderboard
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 max-w-[1200px] mx-auto px-8 mb-20">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold mb-6">
              <span className="material-symbols-outlined">joystick</span>
              Gameplay
            </span>
            <h2
              className="text-[36px] md:text-[48px] leading-[1.3] tracking-[-0.01em] font-bold text-primary mb-4"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              How to Play
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Master the art of environmental stewardship through intuitive
              controls and strategic cleanup.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "swipe",
              title: "Navigate",
              desc: "Use arrows or swipe to guide Ezra and Zaiel through the polluted terrain. Speed is key, but precision matters.",
            },
            {
              icon: "recycling",
              title: "Sort & Score",
              desc: "Match trash types—Plastic, Paper, and Glass—to their corresponding bins for massive score multipliers and power-ups.",
              large: true,
              tags: ["COMPOSTING", "UPCYCLING"],
            },
            {
              icon: "bolt",
              title: "Power-Ups",
              desc: "Collect Eco-Orbs to unlock the vacuum rush or the sorting magnet to clear the screen instantly.",
            },
            {
              icon: "timer",
              title: "Time Trial",
              desc: "Clear each zone before the sun sets to maintain the maximum ecosystem health bonus.",
            },
            {
              icon: "tips_and_updates",
              title: "Game Tip",
              desc: "\"Watch out for the 'Smog Monsters'—they slow you down and dirty the environment!\"",
              tip: true,
            },
          ].map((card, i) => (
            <AnimateOnScroll
              key={card.title}
              animation={card.large ? "scale" : "fade-up"}
              delay={i * 100}
            >
              <div
                className={`bg-white p-8 rounded-3xl border border-secondary-container/20 shadow-sm shadow-primary/5 hover-lift group ${
                  card.large ? "md:row-span-2 bg-primary text-on-primary" : ""
                } ${card.tip ? "bg-secondary-container/30" : ""}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    card.large ? "bg-white/10" : "bg-secondary-container"
                  } group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <span
                    className={`material-symbols-outlined text-2xl ${
                      card.large ? "text-white" : "text-primary"
                    }`}
                  >
                    {card.icon}
                  </span>
                </div>
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    card.large ? "text-white" : "text-primary"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`${
                    card.large ? "text-on-primary/80" : "text-on-surface-variant"
                  } mb-6`}
                >
                  {card.desc}
                </p>
                {card.tags && (
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface-container">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <AnimateOnScroll>
            <h2
              className="text-[36px] md:text-[48px] leading-[1.3] tracking-[-0.01em] font-bold text-primary mb-6"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Ready to Play?
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-8">
              Join thousands of players making a difference one piece of trash
              at a time.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 hover:shadow-xl transition-all group"
            >
              <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
                play_arrow
              </span>
              Start Playing Now
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}