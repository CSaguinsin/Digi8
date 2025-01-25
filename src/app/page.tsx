'use client'

import HeroSection from "./components/HeroSection";
import OurStory from "./components/Our_Story";
import OurOffers from "./components/Our_Offers";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
        <HeroSection />
        <OurStory />
        <OurOffers />
        <Footer />
    </>
  );
}
