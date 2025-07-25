"use client"

import { MessageSquare, GraduationCap, Code, Workflow } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SolutionsSection() {
  const solutions = [
    {
      icon: MessageSquare,
      title: "Mutumwa AI",
      description: "AI-powered customer service platform",
      features: ["Multilingual Support", "Task Automation", "Customer Insights"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: GraduationCap,
      title: "Dzidzo SMS",
      description: "School Management System",
      features: ["Academic Tracking", "Simplified Admin", "Parent Portal"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored systems for African businesses",
      features: ["Bespoke Solutions", "Local Integration", "Scalable Architecture"],
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: Workflow,
      title: "AI Automation",
      description: "Streamlined intelligent workflows",
      features: ["Process Optimization", "Smart Analytics", "Real-time Monitoring"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to transform how African businesses operate and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${solution.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-gray-400">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
