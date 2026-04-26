"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress(scrolled / scrollHeight);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[9999] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary-fixed to-secondary transition-all duration-150"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-fixed/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary-fixed/10 blur-3xl animate-float-medium" />
      <div className="absolute top-3/4 left-1/2 w-48 h-48 rounded-full bg-tertiary-fixed/10 blur-2xl animate-float-fast" />
    </div>
  );
}