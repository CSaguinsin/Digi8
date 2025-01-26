'use client'

import Navbar from "../components/Navbar";
import HeroComponent from "./HeroSection_Component"

export default function HeroSection() {

  
    return(
        <div className="relative">
            <div 
                className="relative min-h-screen bg-cover bg-center" 
                style={{ backgroundImage: `url(/assets/HeroSection_BG.jpg)` }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#2B1B17] via-[#2B1B17]/70 to-transparent z-10" />    
                
                {/* Navbar positioned at top */}
                <div className="sticky top-0 z-50">
                    <Navbar />
                </div>
                
                {/* Hero content */}
                <div className="relative z-20">
                    <HeroComponent />
                </div>
            </div>
        </div>
    )
}