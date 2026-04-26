"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CarbonFootprintClient() {
  return (
    <div>
      <section className="relative min-h-[716px] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover animate-slow-zoom"
            alt="Misty redwood forest at sunrise"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsZk5L0t3Afv_ajaQTH2ZNzJ6Tt3k0C5NxfG4utDcOYQWepbTiL7TZ5wAHJ5vShm2FtPXezTQCi6es50njrwewkbMB1PAdtqm5riPp8J-ct6nSn54ntdt-L5PN0cianbHfFeUcHWH709uc0G2d1LrBrU7AC7E3w_Oj_mGWEig7KnHyZmGmY_SZVe9-CRLUsE6hC8y_y3aqHAn3Qa2JnoBFYb0LfX96OY95XXGguzeqsHUMGvEaVnVUE61X9TM3uq691RgXpt591zuS"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-background" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <AnimateOnScroll>
            <span className="inline-block px-4 py-2 mb-6 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-sm font-semibold uppercase tracking-widest animate-badge">
              <span className="material-symbols-outlined mr-2">transparency</span>
              Environmental Clarity
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1
              className="text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.02em] font-extrabold text-white mb-6 drop-shadow-md animate-title"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Carbon Footprint
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed animate-subtitle">
              Your carbon footprint is the total amount of greenhouse gases
              produced by your daily activities. You can calculate it by clicking
              the button below and see how your choices impact the planet, helping
              you make smarter, greener decisions.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={600}>
            <Link
              href="#"
              className="group relative inline-flex items-center gap-4 bg-primary px-10 py-5 rounded-full text-white shadow-xl shadow-primary/20 hover:bg-primary-container hover:shadow-2xl transition-all transform hover:-translate-y-1 animate-button"
            >
              <span className="font-bold text-lg tracking-widest">CALCULATE</span>
              <span className="material-symbols-outlined bg-white/20 p-2 rounded-full group-hover:translate-x-1 group-hover:bg-white/30 transition-all">
                arrow_forward
              </span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold mb-6">
              <span className="material-symbols-outlined">lightbulb</span>
              Impact
            </span>
            <h2
              className="text-[36px] md:text-[48px] leading-[1.3] tracking-[-0.01em] font-bold text-primary mb-4"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Why Understanding Your Impact Matters
            </h2>
            <div className="w-20 h-1 bg-secondary-fixed mx-auto rounded-full" />
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <AnimateOnScroll className="md:col-span-8" animation="fade-left">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl flex flex-col justify-between h-full hover-lift group">
              <div>
                <div className="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    energy_savings_leaf
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-tertiary mb-6">
                  Personal Agency in Climate Change
                </h3>
                <p className="text-on-surface-variant mb-6">
                  While systemic change is crucial, individual actions account for
                  approximately 20% of global greenhouse gas emissions. By
                  measuring your footprint, you identify high-impact areas like
                  travel, food, and energy consumption where your choices can
                  directly drive market demand for sustainable alternatives.
                </p>
              </div>
              <div className="flex items-center gap-4 text-primary font-semibold cursor-pointer group/link">
                <span>Learn about mitigation strategies</span>
                <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
                  trending_down
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="md:col-span-4" animation="fade-right">
            <div className="bg-surface-container-low p-8 rounded-3xl border border-secondary-container/20 hover-lift h-full">
              <div className="w-12 h-12 bg-secondary-fixed rounded-2xl flex items-center justify-center mb-6 hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-xl">
                  data_exploration
                </span>
              </div>
              <h3 className="text-xl font-bold text-tertiary mb-3">
                Visualizing the Invisible
              </h3>
              <p className="text-on-surface-variant">
                Carbon dioxide is invisible. Our calculator translates your daily
                habits into tangible metrics, comparing your footprint to global
                averages.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="md:col-span-4" animation="fade-up">
            <div className="bg-surface-container-low p-8 rounded-3xl border border-secondary-container/20 hover-lift h-full">
              <div className="w-12 h-12 bg-secondary-fixed rounded-2xl flex items-center justify-center mb-6 hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-xl">
                  history_edu
                </span>
              </div>
              <h3 className="text-xl font-bold text-tertiary mb-3">
                Scientific Foundation
              </h3>
              <p className="text-on-surface-variant">
                We use the latest IPCC-aligned methodologies to ensure your
                calculations are accurate and scientifically grounded.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="md:col-span-8" animation="fade-up" delay={150}>
            <div className="relative overflow-hidden rounded-3xl bg-primary-container text-white p-8 flex flex-col md:flex-row items-center gap-8 hover-lift group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:rotate-6 transition-all duration-500">
                <span className="material-symbols-outlined text-[120px]">public</span>
              </div>
              <div className="relative z-10 md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">
                  The &quot;Network Effect&quot; of Change
                </h3>
                <p className="opacity-90">
                  When you track and share your journey toward a lower-carbon
                  lifestyle, you influence friends, family, and your local
                  community, creating a ripple effect that amplifies your
                  individual contribution.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-secondary-container/30 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2 image-zoom">
                <img
                  className="rounded-3xl shadow-lg border-4 border-white hover:shadow-2xl transition-shadow duration-500"
                  alt="Person holding young green seedling"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAblLg0_2HkkM9ikPV2d7sqrq61lRLHvvItdcBi9QYXvtphfY9h9CBQ17NyNQsLKftsaMMgnqcqCymNAsctuF4nkicUC6flRgHh0S6fYGU01FRlpUCKmgtOa9BgrCmq0DVrVXjyqYVcyhw1XszytW6_XBwC5TFth3Yl6I0o7UFa5bMkSZSU2pgshN6HoDW99QBbM45BQQkHnZ8Ohb4ogOQnJs_J4ujEcti6lxdxvlRbTotJstArTikSpjcQnsZwhMdg8-R6dIUDvMg7"
                />
              </div>
              <div className="md:w-1/2">
                <span className="font-semibold text-primary-container mb-4 block">
                  PROCESS
                </span>
                <h2
                  className="text-[36px] md:text-[48px] leading-[1.3] tracking-[-0.01em] font-bold text-primary mb-8"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Simple steps to a greener future
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Input Your Habits",
                      desc: "Answer simple questions about your commute, dietary preferences, and home energy use.",
                    },
                    {
                      step: 2,
                      title: "Analyze Your Breakdown",
                      desc: "View a detailed chart showing which parts of your life contribute most to your footprint.",
                    },
                    {
                      step: 3,
                      title: "Receive Tailored Advice",
                      desc: "Get actionable, realistic suggestions on how to reduce your impact starting today.",
                    },
                  ].map((item, i) => (
                    <AnimateOnScroll key={item.step} animation="fade-left" delay={i * 100}>
                      <div className="flex gap-6 group">
                        <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2 text-primary">
                            {item.title}
                          </h4>
                          <p className="text-on-surface-variant">{item.desc}</p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-20 text-center">
        <AnimateOnScroll>
          <div className="bg-surface-container-highest rounded-3xl p-12 shadow-sm border border-secondary-container/10 relative overflow-hidden group hover-lift">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:rotate-6 transition-all duration-500">
              <span className="material-symbols-outlined text-[200px]">nature</span>
            </div>
            <h2
              className="text-[36px] md:text-[48px] leading-[1.3] tracking-[-0.01em] font-bold text-primary mb-6 relative z-10"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Ready to make a difference?
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 max-w-xl mx-auto relative z-10">
              Join thousands of students and professionals who are already
              tracking their journey toward sustainability.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-primary-container text-white px-8 py-4 rounded-xl text-xl hover:bg-primary hover:shadow-lg transition-all group"
            >
              <span>Start Calculation</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      <Footer />
    </div>
  );
}