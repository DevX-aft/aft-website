"use client"

import { Brain, Globe, Zap } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Cutting-edge artificial intelligence solutions",
    },
    {
      icon: Globe,
      title: "African Transformation",
      description: "Empowering businesses across the continent",
    },
    {
      icon: Zap,
      title: "Machine Learning Expertise",
      description: "Advanced ML algorithms and implementations",
    },
  ]

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Afrainity
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are pioneering the future of artificial intelligence in Africa, creating innovative solutions that bridge
            the gap between cutting-edge technology and practical business applications. Our mission is to democratize
            AI access and drive digital transformation across the continent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
