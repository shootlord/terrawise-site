import type { Metadata } from "next";
import CarbonFootprintClient from "@/components/CarbonFootprintClient";

export const metadata: Metadata = {
  title: "Carbon Footprint | TerraWise",
  description: "Calculate your carbon footprint and discover how your choices impact the planet.",
};

export default function CarbonFootprintPage() {
  return <CarbonFootprintClient />;
}