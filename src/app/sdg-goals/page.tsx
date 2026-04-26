import type { Metadata } from "next";
import SdgGoalsClient from "@/components/SdgGoalsClient";

export const metadata: Metadata = {
  title: "SDG Goals | TerraWise",
  description: "TerraWise is committed to aligning our technology and research with the United Nations' Sustainable Development Goals.",
};

export default function SdgGoalsPage() {
  return <SdgGoalsClient />;
}