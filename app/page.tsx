"use client"
import FeaturesSection from "@/components/sections/EndlessPossibilities";
import HeroSection from "@/components/HeroSection";
import { Header } from "@/components/Header";
import LearnTerms from "@/components/sections/LearnTerms";
import EverythingYouNeed from "@/components/sections/EverythingYouNeed";
import WhatPeopleAreSaying from "@/components/sections/WhatPeopleAreSaying";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-50/20">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <LearnTerms />
      <EverythingYouNeed />
      <WhatPeopleAreSaying />
      <Faq />
      <Footer />
    </div>
  );
}
