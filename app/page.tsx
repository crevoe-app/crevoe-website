"use client"
import FeaturesSection from "@/components/sections/EndlessPossibilities";
import HeroSection from "@/components/HeroSection";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-50/20">
      <Header />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
