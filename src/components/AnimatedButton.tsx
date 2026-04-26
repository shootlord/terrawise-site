"use client";

import { type ReactNode, useRef } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export function AnimatedButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
  onClick,
}: AnimatedButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold rounded-xl overflow-hidden transition-all duration-300 ease-out active:scale-95 group";

  const variants = {
    primary: "bg-primary text-on-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary-container",
    secondary: "bg-white text-primary border-2 border-primary/10 hover:bg-primary-container/5 hover:border-primary/20",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary",
  };

  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
    </button>
  );
}

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
  onClick,
}: AnimatedButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = "translate(0px, 0px)";
    }
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold rounded-xl overflow-hidden transition-all duration-300 ease-out active:scale-95 group";

  const variants = {
    primary: "bg-primary text-on-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary-container",
    secondary: "bg-white text-primary border-2 border-primary/10 hover:bg-primary-container/5 hover:border-primary/20",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary",
  };

  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        if (btnRef.current) {
          btnRef.current.style.transform = "translate(0px, 0px)";
        }
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{ transition: "transform 0.15s ease-out" }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
    </button>
  );
}