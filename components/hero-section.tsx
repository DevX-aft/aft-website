"use client"

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

    const nodes: Array<{x: number, y: number, vx: number, vy: number, connections: number[]}> = []
    const nodeCount = 80

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        connections: []
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        const mouseDistance = Math.sqrt(
          Math.pow(mousePosition.x - node.x, 2) + Math.pow(mousePosition.y - node.y, 2)
        )
        if (mouseDistance < 120) {
          const attraction = 0.005
          node.vx += (mousePosition.x - node.x) * attraction / mouseDistance
          node.vy += (mousePosition.y - node.y) * attraction / mouseDistance
        }

        node.vx *= 0.98
        node.vy *= 0.98
      })

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
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section introducing Afrainity Technologies"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.95) 100%)',
          minHeight: "100vh",
          width: "100vw",
          height: "100vh"
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 py-10 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 max-w-3xl md:max-w-6xl mx-auto">
          <div className="flex-shrink-0 mb-2 sm:mb-4 md:mb-0 w-24 h-24 sm:w-32 sm:h-32 md:w-auto md:h-auto flex items-center justify-center">
            <BubbleLogo />
          </div>
          <div className="text-center md:text-left flex-1 w-full">
            <header className="space-y-2 sm:space-y-3 md:space-y-4 mb-3 sm:mb-5 md:mb-8 py-3 sm:py-6 md:py-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-[1.3]">
                <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-fade-in-up leading-snug">
                  Transforming
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent animate-fade-in-up animation-delay-200 leading-snug">
                  Africa Through
                </span>
                <span className="block bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-snug">
                  AI
                </span>
              </h1>
            </header>
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-7 sm:mb-10 md:mb-12 max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up animation-delay-600">
              Accessible AI solutions to power productivity and seamless growth across the continent. 
              Building the future of African technology, one innovation at a time.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-800">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="Get started with AI solutions"
              >
                Get Started
              </a>
              <a 
                href="#solutions" 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="Learn about our AI solutions"
              >
                Our Solutions
              </a>
            </div>
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
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
      `}</style>
    </section>
  )
}