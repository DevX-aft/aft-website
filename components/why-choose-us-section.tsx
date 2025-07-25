"use client"

import { Languages, Zap, BarChart3, Users, CheckCircle, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: Languages,
      title: "Multilingual Agents",
      description: "Support for multiple African languages and dialects, ensuring seamless communication across diverse markets.",
      benefits: ["20+ African Languages", "Cultural Context Awareness", "Real-time Translation"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast processing and response capabilities that keep your business moving at the speed of innovation.",
      benefits: ["Sub-second Response", "99.9% Uptime", "Auto-scaling Infrastructure"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive oversight and control interface with deep insights into your business operations.",
      benefits: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Deep analytics and behavioral understanding that helps you serve your customers better than ever.",
      benefits: ["Behavioral Analysis", "Sentiment Tracking", "Personalization Engine"],
      color: "from-green-500 to-blue-500"
    },
  ]

  const ActiveIcon = features[activeFeature].icon;

  // Fix hydration error: generate random dot positions/delays on client only
  const [dots, setDots] = useState<{left: number, top: number, delay: number}[]>([]);
  useEffect(() => {
    setDots(
      Array.from({ length: 8 }, () => ({
        left: 20 + Math.random() * 60,
        top: 20 + Math.random() * 60,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Afrainity
            </span>
          </h2>
          <p className={`text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Experience the power of AI solutions built specifically for the African market, with deep understanding of local contexts and challenges.
          </p>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl cursor-pointer transition-all duration-500 ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-2 border-purple-500/50 scale-105'
                    : 'bg-slate-800/30 border border-slate-700/50 hover:border-purple-500/30'
                } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} backdrop-blur-sm`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setActiveFeature(index)}
              >
                {/* Glow Effect */}
                {activeFeature === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl" />
                )}

                <div className="relative z-10 flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    activeFeature === index ? 'scale-110' : 'group-hover:scale-105'
                  }`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                      activeFeature === index ? 'text-purple-300' : 'text-white group-hover:text-purple-300'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    
                    {/* Benefits List */}
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Display */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative w-full h-96 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 overflow-hidden backdrop-blur-sm">
              {/* Animated Content Based on Active Feature */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-32 h-32 bg-gradient-to-r ${features[activeFeature].color} rounded-full flex items-center justify-center transition-all duration-500 transform ${
                  isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                }`}>
                  <ActiveIcon className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0">
                {dots.map((dot, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-r ${features[activeFeature].color} rounded-full opacity-30 animate-ping`}
                    style={{
                      left: `${dot.left}%`,
                      top: `${dot.top}%`,
                      animationDelay: `${dot.delay}s`
                    }}
                  />
                ))}
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeFeature === index ? 'bg-purple-400 w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "< 100ms", label: "Response Time" },
            { number: "20+", label: "Languages Supported" },
            { number: "24/7", label: "Expert Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}