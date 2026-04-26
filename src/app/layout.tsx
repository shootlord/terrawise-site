import type { Metadata } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingElements } from "@/components/ScrollProgress";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TerraWise | Environmental Stewardship",
  description: "Empowering the next generation of environmental stewards through transparent data and mindful consumption patterns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} ${workSans.variable} antialiased`}>
        <ScrollProgress />
        <FloatingElements />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <MobileNav />
      </body>
    </html>
  );
}