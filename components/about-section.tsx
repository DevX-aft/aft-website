"use client"

import { Brain, Globe, Zap, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Tilt from 'react-parallax-tilt'

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Cutting-edge artificial intelligence solutions tailored for African markets",
      color: "from-blue-500 to-cyan-400",
      delay: "0s"
    },
    {
      icon: Globe,
      title: "Continental Impact",
      description: "Empowering businesses across Africa with scalable technology solutions",
      color: "from-cyan-500 to-blue-400",
      delay: "0.2s"
    },
    {
      icon: Zap,
      title: "Advanced ML",
      description: "Machine learning algorithms designed for real-world African challenges",
      color: "from-sky-500 to-blue-600",
      delay: "0.4s"
    },
  ]

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="py-32 bg-black relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Floating glow effects */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] top-0 left-0 animate-pulse-slow" />
        <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] bottom-0 right-0 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-20">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">About Afrainity</span>
          <h2 
            id="about-heading"
            className={`text-5xl md:text-7xl font-bold mb-8 leading-[1.15] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="bg-gradient-to-r from-white via-blue-300 to-cyan-200 bg-clip-text text-transparent animate-fade-in-up mb-2 inline-block leading-snug">
              Pioneering the Future
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
              of African AI
            </span>
          </h2>
          <p className={`text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We are pioneering the future of artificial intelligence in Africa, creating innovative solutions that bridge
            the gap between cutting-edge technology and practical business applications.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={false}
              scale={1.02}
              transitionSpeed={1000}
              key={index}
            >
              <div
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: feature.delay }}
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 backdrop-blur-md hover:shadow-xl hover:scale-105 transition-all duration-500 group-hover:border-blue-500/30">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Mission Statement */}
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 backdrop-blur-md shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              To empower everyone in Africa with accessible
AI solutions for enhanced productivity and
seamless growth.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  )
}
