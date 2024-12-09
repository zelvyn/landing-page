"use client";
import Footer from "./components/molecules/Footer";
import Header from "./components/molecules/Header";
import ContactSection from "./components/sections/ContactSection";
import FeaturesSection from "./components/sections/FeaturesSetions";
import HeroSection from "./components/sections/HeroSection";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main
        className={`${
          isMenuOpen ? "backdrop-blur-lg" : ""
        } transition-all duration-300`}
      >
        <HeroSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
