"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale";
  delay?: number;
}

export function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const element = ref.current;
          if (element) {
            setTimeout(() => {
              element.classList.add("animate-in");
            }, delay);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-in": "opacity-0",
    "fade-left": "opacity-0 -translate-x-8",
    "fade-right": "opacity-0 translate-x-8",
    scale: "opacity-0 scale-95",
  }[animation];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClass} ${className}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
}

export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 100,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <div className={`${className}`}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <AnimateOnScroll key={i} delay={i * staggerDelay}>
              {child}
            </AnimateOnScroll>
          ))
        : children}
    </div>
  );
}