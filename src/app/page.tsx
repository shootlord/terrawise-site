import type { Metadata } from "next";
import Home from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "TerraWise | Stewardship through transparency",
  description: "Empowering the next generation of environmental stewards through transparent data and mindful consumption patterns.",
};

export default function HomePage() {
  return <Home />;
}