"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

// Navigation links as a constant outside the component for performance
const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const mobileNavRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Enhanced scroll tracking for smooth effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    
    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Focus trap for mobile nav
  useEffect(() => {
    if (isMenuOpen && mobileNavRef.current) {
      mobileNavRef.current.focus()
    }
  }, [isMenuOpen])

  // Close mobile nav on Escape key
  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isMenuOpen])

  // Accessibility: return focus to menu button when menu closes
  useEffect(() => {
    if (!isMenuOpen && menuButtonRef.current) {
      menuButtonRef.current.blur()
    }
  }, [isMenuOpen])

  // Track hash in state for instant underline update
  const [currentHash, setCurrentHash] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  )

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash)
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  // Calculate scroll-based effects
  const isScrolled = scrollY > 32
  const textOpacity = Math.max(0, 1 - (scrollY / 120)) // Text fades out over first 120px of scroll
  const logoScale = Math.max(0.85, 1 - (scrollY / 800)) // Logo scales slightly smaller
  const headerHeight = Math.max(60, 76 - (scrollY / 20)) // Header shrinks slightly

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300
        ${isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-slate-800/90 shadow-lg"
          : "bg-black/40 backdrop-blur-sm border-b border-transparent"}
      `}
      style={{ 
        height: `${headerHeight}px`,
        minHeight: '60px'
      }}
      role="banner"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo and Brand with Anthropic-style effects */}
        <Link
          href="/"
          aria-label="Afrainity Technologies Home"
          className="flex items-center gap-3 group relative"
        >
          <div 
            className="relative transition-transform duration-300 ease-out"
            style={{ 
              transform: `scale(${logoScale})`,
            }}
          >
            <Image
              src="/aft.svg"
              alt="Afrainity Technologies Logo"
              width={40}
              height={40}
              priority
              className="h-10 w-10"
            />
          </div>
          
          {/* Company name with fade-out effect */}
          <span 
            className="text-white font-bold text-xl tracking-tight group-hover:text-blue-400 transition-all duration-300 whitespace-nowrap overflow-hidden"
            style={{ 
              opacity: textOpacity,
              transform: `translateX(${Math.max(-20, -scrollY / 10)}px)`,
              maxWidth: textOpacity > 0.1 ? '280px' : '0px',
            }}
          >
            Afrainity Technologies
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-gray-300 hover:text-blue-400 transition-colors duration-200 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded group
                ${currentHash === item.href ? "text-blue-400 font-semibold" : ""}
              `}
            >
              {item.label}
              {/* Animated underline on hover/focus */}
              <span
                className={`
                  pointer-events-none absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full
                  group-hover:w-full group-focus:w-full transition-all duration-300
                  ${currentHash === item.href ? "w-full" : ""}
                `}
                aria-hidden="true"
              />
            </Link>
          ))}
          <Button
            className="ml-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-blue-500/30 transition-all duration-200 font-semibold"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          ref={menuButtonRef}
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-nav"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav"
        ref={mobileNavRef}
        tabIndex={-1}
        role="navigation"
        aria-label="Mobile main navigation"
        className={`
          md:hidden fixed inset-x-0 top-0 z-40 bg-black/95 backdrop-blur-2xl border-b border-slate-800/80
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-8 opacity-0 pointer-events-none"}
        `}
        style={{ outline: "none" }}
      >
        <div className="container mx-auto px-4 pt-20 pb-8 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg text-gray-200 hover:text-blue-400 transition-colors duration-200 py-3 px-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            className="mt-2 w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full shadow-md hover:shadow-blue-500/30 transition-all duration-200 font-semibold"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}