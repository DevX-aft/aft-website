"use client"

import { Brain, Globe, Zap, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  const features = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Cutting-edge artificial intelligence solutions tailored for African markets",
      color: "from-purple-500 to-pink-500",
      delay: "0s"
    },
    {
      icon: Globe,
      title: "Continental Impact",
      description: "Empowering businesses across Africa with scalable technology solutions",
      color: "from-blue-500 to-cyan-500",
      delay: "0.2s"
    },
    {
      icon: Zap,
      title: "Advanced ML",
      description: "Machine learning algorithms designed for real-world African challenges",
      color: "from-indigo-500 to-purple-500",
      delay: "0.4s"
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-slate-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">About Afrainity</span>
          </div>
          <h2 className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Pioneering the Future
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              of African AI
            </span>
          </h2>
          <p className={`text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We are pioneering the future of artificial intelligence in Africa, creating innovative solutions that bridge
            the gap between cutting-edge technology and practical business applications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: feature.delay }}
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm font-medium mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="p-12 rounded-3xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              To democratize AI access and drive digital transformation across the continent, 
              empowering African businesses with intelligent solutions that understand local contexts and challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}