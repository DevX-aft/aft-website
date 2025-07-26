"use client"

import {
  Robot,
  Student,
  PuzzlePiece,
  GearSix,
  ArrowRight,
} from "phosphor-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function SolutionsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const solutions = [
    {
      icon: Robot,
      title: "Mutumwa AI",
      description: "AI-powered customer service platform",
      features: ["Multilingual Support", "Task Automation", "Customer Insights"],
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-900/30 to-cyan-900/30",
      glow: "from-white/30 to-cyan-300/20",
      accent: "bg-purple-400/20",
      delay: "0s"
    },
    {
      icon: Student,
      title: "Dzidzo SMS",
      description: "School Management System",
      features: ["Academic Tracking", "Simplified Admin", "Parent Portal"],
      gradient: "from-cyan-400 to-blue-400",
      bgGradient: "from-cyan-900/30 to-blue-900/30",
      glow: "from-white/30 to-cyan-300/20",
      accent: "bg-purple-400/20",
      delay: "0.1s"
    },
    {
      icon: PuzzlePiece,
      title: "Custom Software",
      description: "Tailored systems for African businesses",
      features: ["Bespoke Solutions", "Local Integration", "Scalable Architecture"],
      gradient: "from-blue-400 to-cyan-300",
      bgGradient: "from-blue-900/30 to-cyan-900/30",
      glow: "from-white/30 to-cyan-300/20",
      accent: "bg-purple-400/20",
      delay: "0.2s"
    },
    {
      icon: GearSix,
      title: "AI Automation",
      description: "Streamlined intelligent workflows",
      features: ["Process Optimization", "Smart Analytics", "Real-time Monitoring"],
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-900/30 to-blue-900/30",
      glow: "from-white/30 to-cyan-300/20",
      accent: "bg-purple-400/20",
      delay: "0.3s"
    },
  ]

  return (
    <section ref={sectionRef} id="solutions" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          {/* Horizontal Lines */}
          <line x1="0" y1="150" x2="800" y2="150" stroke="url(#circuit-gradient)" strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="300" x2="800" y2="300" stroke="url(#circuit-gradient)" strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="450" x2="800" y2="450" stroke="url(#circuit-gradient)" strokeWidth="1" opacity="0.3" />
          
          {/* Vertical Lines */}
          <line x1="200" y1="0" x2="200" y2="600" stroke="url(#circuit-gradient)" strokeWidth="1" opacity="0.3" />
          <line x1="400" y1="0" x2="400" y2="600" stroke="url(#circuit-gradient)" strokeWidth="1" opacity="0.3" />
          <line x1="600" y1="0" x2="600" y2="600" stroke="url(#circuit-gradient)" strokeWidth="1" opacity="0.3" />
          
          {/* Circuit Nodes */}
          <circle cx="200" cy="150" r="3" fill="url(#node-gradient)" />
          <circle cx="400" cy="150" r="3" fill="url(#node-gradient)" />
          <circle cx="600" cy="150" r="3" fill="url(#node-gradient)" />
          <circle cx="200" cy="300" r="3" fill="url(#node-gradient)" />
          <circle cx="400" cy="300" r="3" fill="url(#node-gradient)" />
          <circle cx="600" cy="300" r="3" fill="url(#node-gradient)" />
          <circle cx="200" cy="450" r="3" fill="url(#node-gradient)" />
          <circle cx="400" cy="450" r="3" fill="url(#node-gradient)" />
          <circle cx="600" cy="450" r="3" fill="url(#node-gradient)" />
          
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id="node-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.2" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Electrons */}
      {isVisible && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Main Circuit Path Electrons */}
          <div className="electron electron-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50">
              <div className="w-full h-full bg-white/60 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="electron electron-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50">
              <div className="w-full h-full bg-white/60 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="electron electron-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50">
              <div className="w-full h-full bg-white/60 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="electron electron-4">
            <div className="w-2 h-2 bg-cyan-300 rounded-full shadow-lg shadow-cyan-300/50">
              <div className="w-full h-full bg-white/60 rounded-full animate-pulse" />
            </div>
          </div>
          
          {/* Secondary Electrons */}
          <div className="electron electron-5">
            <div className="w-1.5 h-1.5 bg-blue-300 rounded-full shadow-md shadow-blue-300/50">
              <div className="w-full h-full bg-white/40 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="electron electron-6">
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-md shadow-cyan-500/50">
              <div className="w-full h-full bg-white/40 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Our Solutions</span>
          <h2 className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-snug animate-fade-in-up mb-2 inline-block">
              Comprehensive AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <p className={`text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Comprehensive AI-powered solutions designed to transform how African businesses operate and grow.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className={`group relative bg-slate-800/30 border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden backdrop-blur-sm ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: solution.delay }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Electric Blue/White Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${solution.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <CardHeader className="pb-4 relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-cyan-300/30 ${solution.accent}`}>
                  <solution.icon size={28} weight="duotone" className="text-white" />
                </div>
                <CardTitle className="text-white text-xl group-hover:text-cyan-300 transition-colors">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-gray-300 group-hover:text-white transition-colors">
                  {solution.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-cyan-200 text-sm flex items-center group-hover:text-white transition-colors">
                      <div className="w-1.5 h-1.5 bg-white/70 rounded-full mr-3 group-hover:bg-cyan-300 transition-colors border border-cyan-400/40" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Hover Particles */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping border border-cyan-300/40"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Card-specific floating electrons on hover */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="card-electron card-electron-1">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full shadow-sm shadow-cyan-400/50" />
                  </div>
                  <div className="card-electron card-electron-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full shadow-sm shadow-blue-400/50" />
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        .electron {
          position: absolute;
          z-index: 5;
        }

        /* Main circuit electrons - flowing in a complex path */
        .electron-1 {
          animation: circuit-flow-1 8s linear infinite;
        }

        .electron-2 {
          animation: circuit-flow-2 10s linear infinite;
          animation-delay: -2s;
        }

        .electron-3 {
          animation: circuit-flow-3 12s linear infinite;
          animation-delay: -4s;
        }

        .electron-4 {
          animation: circuit-flow-4 9s linear infinite;
          animation-delay: -1s;
        }

        .electron-5 {
          animation: circuit-flow-5 7s linear infinite;
          animation-delay: -3s;
        }

        .electron-6 {
          animation: circuit-flow-6 11s linear infinite;
          animation-delay: -5s;
        }

        /* Card-specific electrons */
        .card-electron {
          position: absolute;
        }

        .card-electron-1 {
          animation: card-circuit-1 3s linear infinite;
        }

        .card-electron-2 {
          animation: card-circuit-2 4s linear infinite;
          animation-delay: -1s;
        }

        /* Main circuit flow animations */
        @keyframes circuit-flow-1 {
          0% { left: 0%; top: 25%; }
          25% { left: 25%; top: 25%; }
          50% { left: 25%; top: 50%; }
          75% { left: 75%; top: 50%; }
          100% { left: 100%; top: 50%; }
        }

        @keyframes circuit-flow-2 {
          0% { left: 100%; top: 75%; }
          25% { left: 75%; top: 75%; }
          50% { left: 75%; top: 25%; }
          75% { left: 25%; top: 25%; }
          100% { left: 0%; top: 25%; }
        }

        @keyframes circuit-flow-3 {
          0% { left: 50%; top: 0%; }
          25% { left: 50%; top: 25%; }
          50% { left: 75%; top: 25%; }
          75% { left: 75%; top: 75%; }
          100% { left: 50%; top: 100%; }
        }

        @keyframes circuit-flow-4 {
          0% { left: 0%; top: 50%; }
          33% { left: 33%; top: 50%; }
          66% { left: 66%; top: 75%; }
          100% { left: 100%; top: 75%; }
        }

        @keyframes circuit-flow-5 {
          0% { left: 25%; top: 100%; }
          50% { left: 25%; top: 50%; }
          100% { left: 75%; top: 0%; }
        }

        @keyframes circuit-flow-6 {
          0% { left: 100%; top: 25%; }
          25% { left: 50%; top: 25%; }
          50% { left: 50%; top: 75%; }
          75% { left: 0%; top: 75%; }
          100% { left: 0%; top: 0%; }
        }

        /* Card-specific circuit animations */
        @keyframes card-circuit-1 {
          0% { left: 10%; top: 10%; }
          25% { left: 90%; top: 10%; }
          50% { left: 90%; top: 90%; }
          75% { left: 10%; top: 90%; }
          100% { left: 10%; top: 10%; }
        }

        @keyframes card-circuit-2 {
          0% { left: 50%; top: 0%; }
          25% { left: 100%; top: 50%; }
          50% { left: 50%; top: 100%; }
          75% { left: 0%; top: 50%; }
          100% { left: 50%; top: 0%; }
        }
      `}</style>
    </section>
  )
}