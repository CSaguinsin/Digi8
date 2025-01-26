"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"

const Navbar = () => {
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

  return (
    <nav className="fixed w-full z-50 bg-white/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#F5B301] font-sans hover:text-[#F5B301]/80 transition-colors
                           px-3 py-2 text-sm md:text-base"
                >
                  {item.name}
                </Link>
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
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {mounted && theme === "dark" ? (
                <Sun size={20} className="text-white" />
              ) : (
                <Moon size={20} className="text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-white/10"
            >
              {mounted && theme === "dark" ? (
                <Sun size={20} className="text-white" />
              ) : (
                <Moon size={20} className="text-white" />
              )}
            </button>
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
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
        <div className="bg-black/95 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg
                       transition-colors font-sans"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
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
    </nav>
  )
}

export default Navbar