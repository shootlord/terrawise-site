"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SoilMonitorClient() {
  return (
    <div className="pb-24 md:pb-0">
      <section className="relative min-h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover animate-slow-zoom"
            alt="Organic farm in UAE desert"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjMaOyQ3A04Sjt0yGoJ4rq_lZidEkaAK6Zi3Q2B7GrgNFnFjGcKt1TmpwAiuLLMVZ18We-LrcNxZAFzuQP6Hrzcyf0L9tD9FKEL5O1JQHDfeDnNIdo7RhN0P71afDEBURtOFck3gu0diuQWO8Z8CSHpvQ4jeayHJbrNPgJHXrfZxEegMuo7kHAOOv_Y3bfS3-CsrnDT8f9AO1zGJ78wUJqOFykpNxAf7_znvLl5U6mS_RHnKOLlJGBZqkaFzrfKHzomNRhPpPoq1fr"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-hero-content">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold tracking-wider uppercase animate-badge">
              <span className="material-symbols-outlined mr-2 text-lg">
                monitoring
              </span>
              LIVE FROM SEVEN EMIRATES
            </div>
            <h1
              className="text-[48px] md:text-[56px] leading-[1.2] tracking-[-0.02em] font-extrabold text-primary"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Soil Monitor
            </h1>
            <p className="text-lg leading-[1.6] text-on-surface-variant max-w-xl">
              Our Soil Monitor tracks soil health across all seven emirates of
              the UAE, using interactive visuals and 3D models to provide
              real-time insights into moisture, nutrients, and overall soil
              quality. This helps farmers, students, and communities make
              smarter choices for sustainable agriculture and greener spaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 active:scale-95"
              >
                <span className="material-symbols-outlined mr-2 group-hover:rotate-12 transition-transform">
                  insights
                </span>
                MONITOR
              </Link>
              <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 active:scale-95">
                <span className="material-symbols-outlined mr-2 group-hover:rotate-12 transition-transform">
                  view_in_ar
                </span>
                3D MODEL
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-primary/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-[1200px] mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold mb-6">
              <span className="material-symbols-outlined">technology</span>
              Technology
            </span>
            <h2
              className="text-[36px] md:text-[48px] leading-[1.3] tracking-[-0.01em] font-bold text-primary mb-4"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Precision Technology
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Harnessing advanced data science and spatial modeling to protect
              our most vital resource.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimateOnScroll className="md:col-span-2" animation="fade-left">
            <div className="bg-white p-8 rounded-3xl border border-[#A9BBA8]/20 shadow-sm shadow-[#2D5A27]/05 flex flex-col md:flex-row gap-8 items-center hover-lift">
              <div className="flex-1 space-y-4">
                <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-primary hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">query_stats</span>
                </div>
                <h3
                  className="text-2xl leading-[1.4] font-bold text-primary"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Interactive Visuals
                </h3>
                <p className="text-on-surface-variant">
                  Dynamic heatmaps and nutrient gradients mapping the entire UAE
                  landscape. Visualize phosphorus, nitrogen, and potassium levels
                  with street-level precision.
                </p>
              </div>
              <div className="flex-1 w-full h-64 image-zoom bg-surface-container rounded-2xl overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Digital map interface showing soil health zones"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcnMbNs_x0Tm1j69TG1EsS8jJvyrsf5-Gfk4_qvzAjc6-1ESfMDZLpXC0BXPfD8a7YWao1HIrY4IpaPg2_I8YpF3Ahdji2k5hX75T6Qhcc8sgTX2QUSLBPyzeg_ay0KSsrYLAUH3Ze0LfegT_lJz6CLIjHmyvVnP0_muyCMIrne-3IHed6QVYuhn44xz0lgdn8ug0RzKpxNOA8t_ya8gb4HrkiAaNfLC6cr1SIt7STnzd973T__vB0YDGa-_PDcbkm9v33uBKOo9QR"
                />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-right">
            <div className="bg-primary text-on-primary p-8 rounded-3xl flex flex-col justify-between h-full hover-lift hover-glow">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">3d_rotation</span>
                </div>
                <h3
                  className="text-2xl leading-[1.4] font-bold"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  3D Soil Modeling
                </h3>
                <p className="text-white/80">
                  Explore subterranean layers and root-zone moisture through
                  immersive three-dimensional renderings.
                </p>
              </div>
              <div className="mt-8 border-t border-white/20 pt-6">
                <a
                  className="inline-flex items-center font-bold hover:gap-3 transition-all group"
                  href="#"
                >
                  <span>Launch Explorer</span>
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up">
            <div className="bg-white p-8 rounded-3xl border border-[#A9BBA8]/20 shadow-sm shadow-[#2D5A27]/05 space-y-4 hover-lift">
              <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-primary hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">sensors</span>
              </div>
              <h3
                className="text-2xl leading-[1.4] font-bold text-primary"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Real-time Data
              </h3>
              <p className="text-on-surface-variant">
                Live feeds from our sensor network across Sharjah, Dubai, and Abu
                Dhabi, updated every 15 minutes for unparalleled accuracy.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="md:col-span-2" animation="fade-up" delay={200}>
            <div className="bg-surface-container-low p-8 rounded-3xl border border-[#A9BBA8]/20 flex flex-col md:flex-row gap-8 items-center hover-lift">
              <div className="flex-1 h-48 image-zoom w-full bg-white rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Agricultural sensor probe"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4lBzkV6luh7jGWIVdI3n1Zw47lN-EvisYWK988UuMkyQSvwf40LpGyRC8X0rTFpfhmF0g7YdFIH_pyE9Ep4RC6bWWqyQcrhRsTUW-dy2OT-yPZUT1bDWm5N4fIzlTV7qAAmbBU6d98nSArdA0e6i7mhgW-DwM6W4A8zn_3ax1JN-VIOpXlH7X1xRcNoVGhC8P17BTeiIZMCrafRBO-uLza0pwVh0d4GujvPXwM-oUEZDuvUN7J5jobv5WhY4_OG3QUmvStB8o8MMx"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h3
                  className="text-2xl leading-[1.4] font-bold text-primary"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Smart Alerts
                </h3>
                <p className="text-on-surface-variant">
                  Receive automated notifications when moisture levels drop below
                  the threshold for specific local crops like dates and ghaf trees.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-surface-container py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-sm font-semibold mb-6">
                  <span className="material-symbols-outlined">grass</span>
                  Mission
                </span>
                <h2
                  className="text-[36px] md:text-[48px] leading-[1.3] tracking-[-0.01em] font-bold text-primary mb-8"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Cultivating a Greener Future
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center group-hover:scale-110 transition-transform group-hover:rotate-6">
                      <span className="material-symbols-outlined text-2xl">agriculture</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary mb-2">
                        For Farmers
                      </h4>
                      <p className="text-on-surface-variant">
                        Reduce water waste by 30% and increase crop yields through
                        precision nutrient management and hyper-local weather
                        forecasting.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center group-hover:scale-110 transition-transform group-hover:rotate-6">
                      <span className="material-symbols-outlined text-2xl">school</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary mb-2">
                        For Students
                      </h4>
                      <p className="text-on-surface-variant">
                        Access raw environmental data for research projects and
                        participate in nationwide soil health surveys through
                        interactive workshops.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <AnimateOnScroll animation="scale">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary-fixed/20 rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative aspect-square bg-white rounded-[40px] p-4 shadow-xl overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <img
                      className="w-full h-full object-cover rounded-[32px]"
                      alt="Students in outdoor laboratory"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5ZBkzsCEasFzUGkqgpX01UbXb5X4YKj_z5j-w8EgJSa_6kvOE8gDrjJsH7SN-1rypJCe2w4I_ivnC0RrL_rSvhE_VfANJAK7zZJ6fqBkmi5qcPcQHi9nOOsOBckiXkd73z1aDQkIr7mvClDyy_v1lGOAGtzeCG3RlvITSLK5WLYWiJZgumWyB2adQPOUQV0Z6MsJ6tJdyZJsoZZFClLwLE_zzGwlaQJMd24QCbo5NEPs9va8holyoi0Byk7VcfX_dZFdDcysskjo1"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}