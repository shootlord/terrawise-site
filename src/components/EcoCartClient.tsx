"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EcoCartClient() {
  return (
    <div className="pb-24 md:pb-0">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover animate-slow-zoom"
            alt="Nature-inspired hero background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKb5Rl36gTAC_UpBT1B-NTNj0cbfz4biwNzohhngVgn2gkkQQvaGfbxo9nmgGKXBLny5Es9DKiifoSY6yf1oEqCDGQeiXsY5EK0guDDCjH1OE2nSPpQmuVLB2qPuQx0Lk4TudUvFFaBb9A5Mbl0Irr_i1WdXQJPAZ3BavqvtllqwV2LShvlA-MR00Z7-CoGsngI91aQ1rElQ5Tog7ilpHVvwrQ5N0BOmQFrD5W6qWnV0WtuYnO0r35gKLF0tUUdP8S7Bc3oTlVBw5s"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/65 to-primary/45" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-[800px] mx-auto">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 animate-badge">
              <span className="material-symbols-outlined">eco</span>
              Sustainable Shopping
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1
              className="text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.02em] font-extrabold text-white mb-6 animate-title"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Eco Cart
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <p className="text-lg leading-[1.6] text-white/90 mb-8 animate-subtitle">
              Our Eco Cart helps you make conscious shopping choices by showcasing
              eco-friendly products. Click the button below to start your
              sustainable shopping journey.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={600}>
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-xl transition-all group animate-button"
            >
              <span>Shop Now</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined">loop</span>
              The Process
            </span>
            <h2
              className="text-[36px] md:text-[48px] leading-[1.3] tracking-[-0.01em] font-bold text-primary mt-4"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              How it Works
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "search",
              title: "Browse Products",
              desc: "Explore a curated catalog of high-quality goods vetted for their environmental impact and durability.",
              delay: 0,
            },
            {
              icon: "eco",
              title: "Check Eco-Rating",
              desc: "Every item features a transparent sustainability score based on carbon footprint and ethical sourcing.",
              delay: 150,
            },
            {
              icon: "volunteer_activism",
              title: "Shop Sustainably",
              desc: "Complete your purchase knowing your choices support reforestation and community-driven climate projects.",
              delay: 300,
            },
          ].map((step, index) => (
            <AnimateOnScroll key={step.title} animation="fade-up" delay={step.delay}>
              <div className="bg-white p-8 rounded-3xl border border-secondary-fixed/20 shadow-sm hover-lift group">
                <div className="relative mb-6">
                  <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-secondary-container/30 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">0{index + 1}</span>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      {step.icon}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-on-surface-variant">{step.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface-container">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-[36px] md:text-[48px] leading-[1.3] tracking-[-0.01em] font-bold text-primary mb-6">
              Start Your Sustainable Journey
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-8">
              Every purchase you make through Eco Cart contributes to
              reforestation and environmental conservation projects.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-xl transition-all group"
            >
              <span className="material-symbols-outlined text-2xl">shopping_basket</span>
              <span>Browse Catalog</span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}