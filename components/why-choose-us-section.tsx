"use client"

import { Languages, Zap, BarChart3, Users } from "lucide-react"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Languages,
      title: "Multilingual Agents",
      description: "Support for multiple African languages and dialects",
    },
    {
      icon: Zap,
      title: "Real-time Task Execution",
      description: "Instant processing and response capabilities",
    },
    {
      icon: BarChart3,
      title: "Human Agent Dashboard",
      description: "Comprehensive oversight and control interface",
    },
    {
      icon: Users,
      title: "Customer Insights",
      description: "Deep analytics and behavioral understanding",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of AI solutions built specifically for the African market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
