

"use client";
import Footer from "./components/molecules/Footer";
import Header from "./components/molecules/Header";
import ContactSection from "./components/sections/ContactSection";
import FeaturesSection from "./components/sections/FeaturesSetions";
import HeroSection from "./components/sections/HeroSection";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); 
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        scrollToSection(hash);
      }
    };
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onNavClick={scrollToSection}
      />
      <main
        className={`${
          isMenuOpen ? "backdrop-blur-lg" : ""
        } transition-all duration-300`}
      >
        <div id="home">
          <HeroSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}