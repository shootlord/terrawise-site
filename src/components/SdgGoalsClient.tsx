"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SdgGoalsClient() {
  const sdgCards = [
    {
      icon: "shopping_cart",
      goal: "12",
      title: "Responsible Consumption and Production",
      desc: "The platform promotes sustainable shopping choices and responsible use of resources through its e-shopping feature.",
      action: "Learn more",
    },
    {
      icon: "thermostat",
      goal: "13",
      title: "Climate Action",
      desc: "Terrawise encourages individuals to calculate and reduce their carbon footprint, promoting awareness and action against climate change.",
      action: "Track progress",
    },
    {
      icon: "potted_plant",
      goal: "15",
      title: "Life on Land",
      desc: "By monitoring soil health, Terrawise contributes to the conservation of ecosystems and biodiversity through real-time environmental data.",
      action: "Monitor health",
    },
    {
      icon: "restaurant",
      goal: "2",
      title: "Zero Hunger",
      desc: "Improved soil quality supports better agricultural productivity, ensuring food security and sustainable farming practices for future generations.",
      action: "Impact reports",
    },
  ];

  return (
    <div>
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover animate-slow-zoom"
            alt="Lush sun-drenched forest"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC063MKNWPLy9tIVu8XGiNtplpW-l3PFxa4W_tm3TD_u8WnMPfpOqTmauIC9jAEomProqP5nMTrUFBX2MPXWmU7skDYdFxPILdwU2wzpZCnwJaDQwy01Iq_WVs3ZySd9sVaQjHkTlrw0W1-3APz3ZImXAp57Rp_BCsP-bNyRN55TI4Et9qSMQgPaqJb4bmPa6lv_e_JBcZSlAEmOafuJeEKsOrsqHs8HLjeNxT7jvqa_mRIpseijF4YP6gaNjQ2EXR0RddiYi5IFwko"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-background" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimateOnScroll>
            <span className="inline-block px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold uppercase tracking-widest mb-6 animate-badge">
              <span className="material-symbols-outlined mr-2">public</span>
              Global Impact
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1
              className="text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.02em] font-extrabold text-primary mb-6 leading-tight animate-title"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              SUPPORTING SUSTAINABLE DEVELOPMENT GOALS
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <p className="text-lg text-secondary max-w-2xl mx-auto animate-subtitle">
              TerraWise is committed to aligning our technology and research with
              the United Nations&apos; blueprint for a better and more sustainable
              future for all.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sdgCards.map((card, i) => (
            <AnimateOnScroll
              key={card.goal}
              animation={i % 2 === 0 ? "fade-left" : "fade-right"}
              delay={i * 100}
            >
              <div className="group bg-surface-container-lowest p-8 rounded-3xl border border-secondary-fixed/20 hover:border-primary/30 hover-lift transition-all duration-300 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {card.icon}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-primary-container block mb-1">
                      GOAL {card.goal}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-on-background">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="h-px bg-outline-variant/30 w-full" />
                <p className="text-on-surface-variant leading-relaxed flex-1">
                  {card.desc}
                </p>
                <div className="mt-auto pt-4 flex items-center text-primary font-semibold group-hover:gap-3 group-hover:text-primary transition-all cursor-pointer">
                  {card.action}
                  <span className="material-symbols-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface-container">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-3 bg-white px-8 py-6 rounded-3xl shadow-lg">
              <span className="material-symbols-outlined text-primary text-4xl animate-pulse-slow">
                eco
              </span>
              <div className="text-left">
                <h3 className="text-xl font-bold text-primary">
                  Every Action Counts
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Join thousands making a difference
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}