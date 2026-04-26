"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function HomeClient() {
  return (
    <div className="pb-24 md:pb-0">
      <section className="relative min-h-[870px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Lush forest"
            className="w-full h-full object-cover animate-slow-zoom"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2dfPwQ05HfoOcHIg9rWrA5MM8V8HMTEHKhcC4S_d5Wg020ME3S2wL0x_4pfeVQB_ZSJdH6znJpomJ2lLpzEi_22lo3YaI5gdw_hu7NU7rhdUekmU9ftsh4gl-bQA41ib67goJlyU7hU88CsQV6iLMwrZYKCFBndWaA4sinUWZw4jZq4y5U8Z4p7pCL1Ha2B5-imcDrQodD5m2luvb6H8c1q0PCYgHYuY-XU8Qi6S-aLpgTTYWzxGcO1h5Wf18CVJbXvooEXK2JD-g"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] animate-fade-overlay"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center text-white">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Live from UAE
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1
              className="text-[48px] md:text-[72px] leading-[1.1] tracking-[-0.02em] font-extrabold mb-6 text-white drop-shadow-sm animate-hero-title"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              TerraWise
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <p
              className="text-lg md:text-xl leading-[1.6] max-w-2xl mx-auto mb-10 text-white/90 animate-hero-subtitle"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              Empowering the next generation of environmental stewards through
              transparent data and mindful consumption patterns.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-hero-buttons">
              <Link
                href="/soil-monitor"
                className="group inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full shadow-xl hover:bg-surface-container transition-all duration-300 hover:scale-105 active:scale-95 font-medium tracking-wider"
              >
                <span>Explore Now</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/sdg-goals"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 font-medium tracking-wider"
              >
                <span className="material-symbols-outlined">eco</span>
                <span>Our Mission</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold mb-6">
                <span className="material-symbols-outlined">auto_awesome</span>
                Features
              </span>
              <h2
                className="text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-primary mb-4"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Explore Our Platform
              </h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">
                Discover tools designed to help you live more sustainably
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                href: "/soil-monitor",
                icon: "terrain",
                title: "Soil Monitor",
                desc: "Track soil health across the UAE with real-time data",
                color: "from-green-600 to-green-800",
              },
              {
                href: "/carbon-footprint",
                icon: "footprint",
                title: "Carbon Footprint",
                desc: "Calculate and reduce your environmental impact",
                color: "from-emerald-600 to-emerald-800",
              },
              {
                href: "/eco-cart",
                icon: "shopping_basket",
                title: "Eco Cart",
                desc: "Shop sustainably with eco-friendly products",
                color: "from-lime-600 to-lime-800",
              },
              {
                href: "/game",
                icon: "sports_esports",
                title: "EcoQuest Game",
                desc: "Learn through play with our interactive game",
                color: "from-teal-600 to-teal-800",
              },
              {
                href: "/sdg-goals",
                icon: "flag",
                title: "SDG Goals",
                desc: "Aligning with UN Sustainable Development Goals",
                color: "from-cyan-600 to-cyan-800",
              },
              {
                href: "/why-us",
                icon: "favorite",
                title: "Why Us",
                desc: "Learn about our mission and vision",
                color: "from-emerald-600 to-emerald-800",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.href} delay={i * 100}>
                <Link
                  href={item.href}
                  className="group relative block p-8 bg-white rounded-3xl border border-secondary-fixed/20 hover-lift overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined text-primary text-2xl">
                        {item.icon}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold text-primary mb-3"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant mb-4">{item.desc}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Learn more
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface-container">
        <div className="max-w-[1200px] mx-auto">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-sm font-semibold mb-6">
                  <span className="material-symbols-outlined">insights</span>
                  Impact
                </span>
                <h2
                  className="text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-primary mb-6"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Making a Real Difference
                </h2>
                <p className="text-on-surface-variant text-lg mb-8">
                  TerraWise connects students, farmers, and communities with
                  the data and tools they need to make sustainable choices that
                  protect our environment.
                </p>
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn about our impact
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "7", label: "Emirates Covered" },
                  { value: "10K+", label: "Active Users" },
                  { value: "50+", label: "Sensors Deployed" },
                  { value: "4", label: "SDG Goals" },
                ].map((stat, i) => (
                  <AnimateOnScroll key={stat.label} animation="scale" delay={i * 100}>
                    <div className="bg-white p-6 rounded-2xl text-center hover-lift">
                      <div className="text-4xl font-bold text-primary mb-2 text-shimmer">
                        {stat.value}
                      </div>
                      <div className="text-sm text-on-surface-variant">
                        {stat.label}
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}