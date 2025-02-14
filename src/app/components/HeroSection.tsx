'use client'

import HeroComponent from "./HeroSection_Component"
import Navbar from "../components/Navbar"

export default function HeroSection() {
    return (
        <div className="relative w-full overflow-hidden">
            <div 
                className="min-h-screen w-full bg-cover bg-center relative"
                style={{ 
                    backgroundImage: `url(/assets/HeroSection_BG.jpg)`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-[50%] md:h-[40%] bg-gradient-to-t from-[#2B1B17] via-[#2B1B17]/80 to-transparent z-10" />
                
                {/* Navbar */}
                <div className="relative w-full z-50">
                    <Navbar />
                </div>

                {/* Hero content */}
                <div className="relative z-20 pt-[8rem] md:pt-24 lg:pt-28">
                    <HeroComponent />
                </div>
            </div>
        </div>
    )
}