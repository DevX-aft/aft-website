"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#solutions", label: "Solutions" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-purple-500/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <a href="/" className="flex items-center space-x-3 group">
            <img src="/aft.svg" alt="Afrainity Logo" className="h-10 w-auto" />
            <span className="text-white font-bold text-xl group-hover:text-purple-300 transition-colors">
              Afrainity Technologies
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-gray-300 hover:text-purple-400 transition-colors duration-300 group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 rounded-lg hover:bg-purple-500/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-purple-500/20 pt-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-purple-500/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full mt-4 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}