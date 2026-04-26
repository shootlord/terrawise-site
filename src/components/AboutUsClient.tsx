"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutUsClient() {
  return (
    <div className="pb-24 md:pb-0">
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover animate-slow-zoom"
            alt="Nature landscape"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq6YxkgiJ-QaW6SLP0fwwkqZ9oQWhlZnFTZEqpi4-dFV3RUkfJtEyT84-u1pYt3N37P_lX3pxpQbvT0Xz34zUtBPk-27ErUTQp2RC5D--ySf1ol-4jSZl81o6uFUk8uh_Zod3K0kXskyhagOehH1IqNsKc-Nejz9x1vDuz_qYWRXj5Ys8iuGnSx20bWudzhoRmu51lwPIL3iDjFecQ-MxAaD8H1GVdeFmo31CbV7KXoymJVqoQ82Y0knv9XW6huxjSVk3d9NSAETWO"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center">
          <AnimateOnScroll>
            <h1
              className="text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.02em] font-extrabold text-primary mb-6 animate-title"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              About TerraWise
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-lg leading-[1.6] text-on-surface-variant max-w-2xl mx-auto animate-subtitle">
              We are a team of innovators, environmentalists, and technologists
              dedicated to creating tools that empower communities to make
              sustainable choices.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "eco",
              title: "Our Mission",
              desc: "To provide transparent environmental data that empowers individuals and communities to make informed decisions about sustainability.",
            },
            {
              icon: "groups",
              title: "Our Community",
              desc: "From students to farmers, we serve diverse communities across the UAE who are passionate about environmental stewardship.",
            },
            {
              icon: "trending_up",
              title: "Our Impact",
              desc: "Working toward the UN Sustainable Development Goals through technology, education, and community engagement.",
            },
          ].map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 100}>
              <div className="text-center p-8 bg-white rounded-3xl border border-secondary-fixed/20 hover-lift group">
                <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-on-surface-variant">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="bg-surface-container py-20">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <AnimateOnScroll>
            <h2
              className="text-[36px] md:text-[48px] leading-[1.3] tracking-[-0.01em] font-bold text-primary mb-8"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Join Our Journey
            </h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              Whether you are a researcher, developer, or environmental enthusiast,
              there is a place for you in the TerraWise community.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-container hover:scale-105 hover:shadow-xl transition-all group"
            >
              <span>Contact Us</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}