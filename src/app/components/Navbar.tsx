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
    <nav className="fixed w-full z-10 bg-white/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
            <Image 
                src="/assets/logo/digi.png"  // Updated path
                alt="Digi8 Logo" 
                width={150} 
                height={150} 
                priority 
                className="w-auto h-12 md:h-16" 
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
                  className="text-[#F5B301] font-sans text-[1rem] hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center">
            <div className="bg-[#F5B301] p-2 space-x-2 rounded-full mr-4">
             <p>Work with us!</p>
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20"
            >
              {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white hover:bg-opacity-20 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <div className="bg-[#F5B301] p-2 rounded-full">
              <Image src="/logo-icon.png" alt="Logo Icon" width={24} height={24} />
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20"
            >
              {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

