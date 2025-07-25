"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-slate-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Empower Your Future with Afrainity</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the AI revolution in Africa. Transform your business with our cutting-edge solutions and unlock
            unprecedented growth opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
            >
              Talk to Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
