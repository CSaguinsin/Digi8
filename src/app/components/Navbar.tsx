"use client"

import { useState} from "react"
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
    <nav className={`w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/20 backdrop-blur-lg shadow-lg' 
        : 'bg-white/20 backdrop-blur-sm'
    } border-b border-white/10`}>
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/assets/logo/digi.png"
                alt="Digi8 Logo" 
                width={150} 
                height={150} 
                priority 
                className="w-auto h-10 sm:h-12 md:h-16" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#F5B301] font-sans hover:text-[#F5B301]/80 transition-colors
                           px-3 py-2 text-sm md:text-base cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:digi8studios@yahoo.com"
              className="bg-[#F5B301] px-4 py-2 font-sans rounded-full flex items-center gap-2
                         hover:bg-[#F5B301]/90 transition-colors cursor-pointer"
            >
              <span className="text-sm font-medium">Work with us!</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white/10 p-2 rounded-md"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-white hover:bg-white/10 px-4 py-3 rounded-lg
                       transition-colors font-sans text-left"
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
      )}
    </nav>
  )
}

export default Navbar