"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WhyUsClient() {
  return (
    <div>
      <header className="pt-32 pb-16 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-widest">
                <span className="material-symbols-outlined">visibility</span>
                Our Vision
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h1
                className="text-[48px] md:text-[56px] leading-[1.2] tracking-[-0.02em] font-extrabold text-primary"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Why TerraWise?
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-lg leading-[1.6] text-on-surface-variant max-w-lg">
                Terrawise aligns with the UAE&apos;s &apos;Contribute&apos; vision, which
                emphasizes innovation, sustainability, and community action to
                tackle local and global challenges. Our platform addresses pressing
                issues like climate change, resource depletion, and soil degradation,
                providing practical tools that empower individuals and communities
                to take action.
              </p>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="scale">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-fixed/20 rounded-3xl blur-2xl transition-all duration-700 group-hover:bg-primary-fixed/30" />
              <img
                alt="Visionary nature landscape"
                className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-lg border border-white/20 group-hover:shadow-2xl transition-shadow duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq6YxkgiJ-QaW6SLP0fwwkqZ9oQWhlZnFTZEqpi4-dFV3RUkfJtEyT84-u1pYt3N37P_lX3pxpQbvT0Xz34zUtBPk-27ErUTQp2RC5D--ySf1ol-4jSZl81o6uFUk8uh_Zod3K0kXskyhagOehH1IqNsKc-Nejz9x1vDuz_qYWRXj5Ys8iuGnSx20bWudzhoRmu51lwPIL3iDjFecQ-MxAaD8H1GVdeFmo31CbV7KXoymJVqoQ82Y0knv9XW6huxjSVk3d9NSAETWO"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </header>

      <section className="py-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "sensors",
                title: "Smart Soil Monitoring",
                desc: "Get real-time insights into soil health to help plants and crops thrive.",
              },
              {
                icon: "shopping_cart",
                title: "Sustainable E-Shopping",
                desc: "Make eco-friendly choices effortlessly while browsing products online.",
              },
              {
                icon: "footprint",
                title: "Carbon Footprint Tracking",
                desc: "Understand your daily environmental impact and discover ways to reduce it.",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 150}>
                <div className="bg-surface-container-lowest p-6 lg:p-8 rounded-3xl border border-secondary-container/20 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group hover-lift">
                  <div className="w-14 h-14 bg-tertiary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-fixed group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl leading-[1.4] font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimateOnScroll>
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-emerald-100 flex flex-col md:flex-row items-center gap-8 hover-lift">
              <div className="flex-1 space-y-6">
                <h2
                  className="text-[36px] md:text-[48px] leading-[1.3] tracking-[-0.01em] font-bold text-primary"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Join the Movement
                </h2>
                <p className="text-lg text-on-surface-variant">
                  Whether you&apos;re a student researcher, an environmental ambassador,
                  or a software developer, your skills are the key to a sustainable
                  future.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Universities", "Ambassadors", "Developers"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-tertiary-fixed text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-fixed hover:text-primary transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 mt-6 bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold shadow-sm hover:scale-[1.02] hover:shadow-lg transition-all group"
                >
                  <span>Become a Partner</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
              <div className="flex-1 w-full">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAqPx6cogMyqjnLokAV_wFd8SuMvvep0yPcgv0h31tShCpXFVfHxfkTBgxebC6vJBUali7ziyXPv9YKkx7aX85lECRzUd5-2Qfu4CwmbnpXWSxNu2a3xKO2SVZkkeVjg9Yb7vFpw5FSMxgPCgPAJNKMbz1YiJcLQ35kq7EcX576Vt_noUp4TdwPPFezkwx8JJNUVbVQ3iw8-n80T8fr5wjiBYLy1D8tjqUOcCMtTKJZ7zPcpY3wS_w8jHRURyhhk8DVGFVP4P2gZCry",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCxUCR3Ze6cIjQL8hW4HAMhAXJ7_ML5omHcmbXSOsZeUa-C4o19y1lyS739PPzEEddeb2xKJRj4-CDH0evvP3xZtTkMrNDjcN4i6k5yBcIycWRhdmqSvt2YIXr6UthzDzDT6FIhO4HOg0rbLlKOz_qTvCyRcfqoeZOYD5GSpY6YyGyebCnYIflBKI71sIAVgTt1RFRDtzeTdJJtiZoWaEtyU4PWVpITaRCCcnfPXx95dmXobEZ-kCwzTwa3tx-79CQMwvRv_udRrBFy",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className={`image-zoom rounded-2xl overflow-hidden ${
                        i === 1 ? "translate-y-6" : ""
                      }`}
                    >
                      <img
                        alt={i === 0 ? "Collaborative students" : "Sustainable technology"}
                        className="w-full aspect-square object-cover"
                        src={src}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}