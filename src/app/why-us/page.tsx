import type { Metadata } from "next";
import WhyUsClient from "@/components/WhyUsClient";

export const metadata: Metadata = {
  title: "Why Us | TerraWise",
  description: "TerraWise aligns with the UAE's vision for innovation, sustainability, and community action.",
};

export default function WhyUsPage() {
  return <WhyUsClient />;
}