import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Brain, Zap, Users, BarChart3, Shield, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Services | Afrainity Technologies',
  description: 'Comprehensive AI services for African businesses. Custom AI development, machine learning solutions, automation, and digital transformation services.',
  keywords: ['AI services', 'machine learning', 'automation', 'digital transformation', 'Africa', 'artificial intelligence'],
  openGraph: {
    title: 'AI Services - Afrainity Technologies',
    description: 'Transform your business with our comprehensive AI services across Africa.',
  },
}

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "Custom AI Development",
      description: "Tailored artificial intelligence solutions designed specifically for your business needs and African market requirements.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: Zap,
      title: "Business Automation", 
      description: "Streamline operations with intelligent automation that reduces costs and improves efficiency across your organization.",
      features: ["Process Automation", "Workflow Optimization", "Task Management", "Quality Control"]
    },
    {
      icon: Users,
      title: "Customer Service AI",
      description: "Enhance customer experience with AI-powered support systems that understand local languages and cultural context.",
      features: ["Chatbot Development", "Multilingual Support", "Sentiment Analysis", "24/7 Availability"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools for better decision-making.",
      features: ["Business Intelligence", "Real-time Dashboards", "Market Analysis", "Performance Metrics"]
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Ensure your AI systems are secure, ethical, and compliant with local and international regulations.",
      features: ["Data Privacy", "Ethical AI", "Compliance Monitoring", "Security Audits"]
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows without disrupting operations.",
      features: ["System Integration", "API Development", "Legacy Modernization", "Cloud Migration"]
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive artificial intelligence solutions designed to transform African businesses through innovation, automation, and intelligent decision-making.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </header>

          {/* Services Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <article 
                key={index}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 backdrop-blur-md rounded-3xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI services can help you achieve your business goals and stay competitive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Experts
              </Link>
              <Link 
                href="/#solutions"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Our Solutions
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
