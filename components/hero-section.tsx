"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import BubbleLogo from "./BubbleLogo";

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Mouse Interaction */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-blue-950/20">
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120,119,198,0.15), transparent 40%)`
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(120,119,198,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120,119,198,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && (
          <>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </>
        )}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Bubble Logo on the left */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <BubbleLogo />
          </div>
          {/* Headline and subtext on the right */}
          <div className="text-center md:text-left flex-1">
            {/* Animated Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 group">
              <Sparkles className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
              <span className="text-purple-300 text-sm font-medium">AI Innovation for Africa</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            {/* Main Heading with Stagger Animation */}
            <div className="space-y-4 mb-8">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-fade-in-up">
                  Transforming
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
                  Africa Through
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-400">
                  AI Innovation
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up animation-delay-600">
              Accessible AI solutions to power productivity and seamless growth across the continent. 
              Building the future of African technology, one innovation at a time.
            </p>
            {/* CTA Buttons with Hover Effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center animate-fade-in-up animation-delay-800">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="mr-3">Discover Our Solutions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-10 py-6 text-lg bg-transparent rounded-full backdrop-blur-sm hover:border-purple-400 transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 mt-20 animate-fade-in-up animation-delay-1000">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-400 text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}