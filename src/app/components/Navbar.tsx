"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId) as HTMLElement | null;
    if (element) {
      const navbarHeight = scrolled ? 64 : 80;
      const elementPosition = element.offsetTop - navbarHeight;
  
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Testimonials", href: "#testimonials" },
  ]

  return (
    <div className="w-full">
      <nav className={`relative w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/20 backdrop-blur-lg shadow-lg' 
          : 'bg-white/20 backdrop-blur-sm'
      } border-b border-white/10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" onClick={() => window.location.href = "/"}>
                <Image 
                  src="/assets/logo/digi.png"
                  alt="Digi8 Logo" 
                  width={200} 
                  height={200} 
                  priority 
                  className="w-auto h-12 sm:h-16 md:h-20" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-4 lg:ml-10 flex items-baseline space-x-2 lg:space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-[#F5B301] font-sans hover:text-[#F5B301]/80 transition-colors
                             px-2 lg:px-3 py-2 text-sm lg:text-base cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center">
              <a
                href="mailto:digi8studios@yahoo.com"
                className="bg-[#F5B301] px-3 lg:px-4 py-1.5 lg:py-2 font-sans rounded-full flex items-center gap-2
                           hover:bg-[#F5B301]/90 transition-colors cursor-pointer"
              >
                <span className="text-sm font-medium whitespace-nowrap">Work with us!</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#F5B301] hover:bg-[#F5B301]/10 p-1.5 rounded-md"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-x-0 top-[64px] bg-black/95 z-50">
              <div className="px-4 py-6 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-[#F5B301] hover:bg-[#F5B301]/10 px-4 py-3 rounded-lg
                             transition-colors font-sans text-left text-lg"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <a
                    href="mailto:digi8studios@yahoo.com"
                    className="w-full bg-[#F5B301] px-4 py-3 font-sans rounded-full flex items-center justify-center gap-2
                               hover:bg-[#F5B301]/90 transition-colors text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="font-medium">Work with us!</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar