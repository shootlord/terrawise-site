import type { Metadata } from "next";
import SoilMonitorClient from "@/components/SoilMonitorClient";

export const metadata: Metadata = {
  title: "Soil Monitor | TerraWise",
  description: "Our Soil Monitor tracks soil health across all seven emirates of the UAE, using interactive visuals and 3D models to provide real-time insights.",
};

export default function SoilMonitorPage() {
  return <SoilMonitorClient />;
}