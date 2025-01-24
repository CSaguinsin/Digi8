'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import Navbar from "../components/Navbar";
import HeroComponent from "./HeroSection_Component"


export default function HeroSection() {
    const [mounted, setMounted] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    const navItems = [
      { name: "About", href: "#about" },
      { name: "Service", href: "#service" },
      { name: "Testimonials", href: "#testimonials" },
    ]
    return(
        <>
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(/assets/HeroSection_BG.jpg)` }}>
            <Navbar />
            <HeroComponent />
    </div>
        </>
    )
}