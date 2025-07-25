"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-white font-bold text-xl">Afrainity Technologies</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#solutions" className="text-gray-300 hover:text-purple-400 transition-colors">
              Solutions
            </a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
              Contact
            </a>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-purple-500/20 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
                About
              </a>
              <a href="#solutions" className="text-gray-300 hover:text-purple-400 transition-colors">
                Solutions
              </a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
