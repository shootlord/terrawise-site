import type { Metadata } from "next";
import AboutUsClient from "@/components/AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | TerraWise",
  description: "Learn about TerraWise - empowering environmental stewardship through transparent data.",
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}