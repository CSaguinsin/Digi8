'use client'

import HeroSection from "./components/HeroSection";
import OurStory from "./components/Our_Story";
import OurOffers from "./components/Our_Offers";
import Footer from "./components/Footer"
import Client_Partners from "./components/Client_Partners";

export default function Home() {
  return (
    <>
        <HeroSection />
        <OurStory />
        <OurOffers />
        <Client_Partners />
        <Footer />
    </>
  );
}
