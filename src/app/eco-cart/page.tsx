import type { Metadata } from "next";
import EcoCartClient from "@/components/EcoCartClient";

export const metadata: Metadata = {
  title: "Eco Cart | TerraWise",
  description: "Our Eco Cart helps you make conscious shopping choices by showcasing eco-friendly products.",
};

export default function EcoCartPage() {
  return <EcoCartClient />;
}