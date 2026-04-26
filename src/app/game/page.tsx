import type { Metadata } from "next";
import GameClient from "@/components/GameClient";

export const metadata: Metadata = {
  title: "EcoQuest: Trash Trackers | TerraWise",
  description: "Join Ezra and Zaiel in EcoQuest: Trash Trackers, a fun adventure where every piece of trash you collect helps save the planet!",
};

export default function GamePage() {
  return <GameClient />;
}