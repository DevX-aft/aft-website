"use client"

import { MessageSquare, GraduationCap, Code, Workflow, ArrowRight, Sparkles } from "lucide-react"
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
      icon: MessageSquare,
      title: "Mutumwa AI",
      description: "AI-powered customer service platform",
      features: ["Multilingual Support", "Task Automation", "Customer Insights"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900/20 to-pink-900/20",
      delay: "0s"
    },
    {
      icon: GraduationCap,
      title: "Dzidzo SMS",
      description: "School Management System",
      features: ["Academic Tracking", "Simplified Admin", "Parent Portal"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      delay: "0.1s"
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored systems for African businesses",
      features: ["Bespoke Solutions", "Local Integration", "Scalable Architecture"],
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-900/20 to-blue-900/20",
      delay: "0.2s"
    },
    {
      icon: Workflow,
      title: "AI Automation",
      description: "Streamlined intelligent workflows",
      features: ["Process Optimization", "Smart Analytics", "Real-time Monitoring"],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-900/20 to-purple-900/20",
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Our Solutions</span>
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Comprehensive AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
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
              className={`group relative bg-slate-800/30 border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden backdrop-blur-sm ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: solution.delay }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="pb-4 relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-white text-xl group-hover:text-purple-300 transition-colors">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-center group-hover:text-white transition-colors">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-300 transition-colors" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm font-medium mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>

              {/* Hover Particles */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400/50 rounded-full animate-ping"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how our AI solutions can revolutionize your operations and drive unprecedented growth.
            </p>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <span className="mr-3">Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}