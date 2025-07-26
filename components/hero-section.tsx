"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import BubbleLogo from "./BubbleLogo";

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Neural Network Canvas Effect
  useEffect(() => {
    if (!mounted || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Neural network nodes
    const nodes: Array<{x: number, y: number, vx: number, vy: number, connections: number[]}> = []
    const nodeCount = 80

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.1, // Reduced from 0.5 to 0.1
        vy: (Math.random() - 0.5) * 0.1, // Reduced from 0.5 to 0.1
        connections: []
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Mouse attraction (gentler)
        const mouseDistance = Math.sqrt(
          Math.pow(mousePosition.x - node.x, 2) + Math.pow(mousePosition.y - node.y, 2)
        )
        if (mouseDistance < 120) { // Reduced range from 150 to 120
          const attraction = 0.005 // Reduced from 0.02 to 0.005 for much gentler attraction
          node.vx += (mousePosition.x - node.x) * attraction / mouseDistance
          node.vy += (mousePosition.y - node.y) * attraction / mouseDistance
        }
        
        // Velocity damping to prevent wild movement
        node.vx *= 0.98
        node.vy *= 0.98
      })

      // Draw connections
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)'
      ctx.lineWidth = 1
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2)
          )
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.3})`
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        const mouseDistance = Math.sqrt(
          Math.pow(mousePosition.x - node.x, 2) + Math.pow(mousePosition.y - node.y, 2)
        )
        
        const size = mouseDistance < 100 ? 3 + (100 - mouseDistance) / 25 : 2
        const opacity = mouseDistance < 100 ? 0.8 : 0.4
        
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
        ctx.fill()
        
        // Glow effect for nearby nodes
        if (mouseDistance < 80) {
          ctx.shadowBlur = 20
          ctx.shadowColor = 'rgba(59, 130, 246, 0.5)'
          ctx.beginPath()
          ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [mounted, mousePosition])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* OPTION 1: Neural Network Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.95) 100%)' }}
      />

      {/* OPTION 2: Matrix-style Digital Rain (Alternative) */}
      {/* Uncomment this and comment out canvas for Matrix effect */}
      {/*
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="absolute inset-0 opacity-40">
          {mounted && [...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400/30 font-mono text-sm select-none"
              style={{
                left: `${Math.random() * 100}%`,
                animation: `matrix-rain ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Math.random().toString(36).substring(2, 15)}
            </div>
          ))}
        </div>
      </div>
      */}

      {/* OPTION 3: Circuit Board Pattern (Alternative) */}
      {/* Uncomment this for circuit board effect */}
      {/*
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-blue-950">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px),
              linear-gradient(45deg, transparent 40%, rgba(59,130,246,0.1) 40%, rgba(59,130,246,0.1) 60%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(139,92,246,0.1) 40%, rgba(139,92,246,0.1) 60%, transparent 60%)
            `,
            backgroundSize: '100px 100px, 150px 150px, 20px 20px, 20px 20px',
            animation: 'circuit-pulse 4s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-500"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.2), transparent 70%)`
          }}
        />
      </div>
      */}

      {/* OPTION 4: Hexagonal Tech Pattern (Alternative) */}
      {/* Uncomment this for hexagonal tech pattern */}
      {/*
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-blue-950/30">
        <div className="absolute inset-0 opacity-25">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 35px,
                  rgba(59,130,246,0.1) 35px,
                  rgba(59,130,246,0.1) 36px
                ),
                repeating-linear-gradient(
                  60deg,
                  transparent,
                  transparent 35px,
                  rgba(139,92,246,0.1) 35px,
                  rgba(139,92,246,0.1) 36px
                ),
                repeating-linear-gradient(
                  120deg,
                  transparent,
                  transparent 35px,
                  rgba(59,130,246,0.1) 35px,
                  rgba(59,130,246,0.1) 36px
                )
              `,
              animation: 'hex-rotate 20s linear infinite'
            }}
          />
        </div>
        <div 
          className="absolute inset-0 opacity-40 transition-all duration-700"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 60%)`
          }}
        />
      </div>
      */}

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Bubble Logo on the left */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <BubbleLogo />
          </div>
          {/* Headline and subtext on the right */}
          <div className="text-center md:text-left flex-1">
            {/* Main Heading with Stagger Animation */}
            <div className="space-y-4 mb-8 py-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.25] md:leading-[1.3]">
                <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-fade-in-up">
                  Transforming
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
                  Africa Through
                </span>
                <span className="block bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  AI
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up animation-delay-600">
              Accessible AI solutions to power productivity and seamless growth across the continent. 
              Building the future of African technology, one innovation at a time.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        
        @keyframes matrix-rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes circuit-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes hex-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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