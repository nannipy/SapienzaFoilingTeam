'use client'

import React from "react";
import { useLanguage } from "./context/LanguageContext";

import HeroSection from "./components/HeroSection";
import UpcomingEventsSection from "./components/UpcomingEventsSection";
import SocialMediaSection from "./components/SocialMediaSection";
import CallToActionSection from "./components/CallToActionSection";

export default function Home() {
  useLanguage();

  const handleChevronClick = () => {
    const targetElement = document.querySelector('#upcoming-events');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <main className="relative min-h-screen bg-black" data-testid="home-page">
        <HeroSection onChevronClick={handleChevronClick} />
        <UpcomingEventsSection />
        <SocialMediaSection />
        <CallToActionSection />
      </main>
    </>
  );
}
