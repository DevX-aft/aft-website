"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 border-t border-purple-500/20 py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Company Info */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0 group">
            <div className="relative w-10 h-10">
              <Image
                src="/aft.svg"
                alt="Afrainity Logo"
                width={40}
                height={40}
                className="rounded-xl group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <div>
              <span className="text-white font-bold text-xl block group-hover:text-purple-300 transition-colors">
                Afrainity Technologies
              </span>
              <span className="text-gray-400 text-sm">Transforming Africa Through AI</span>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              © 2024 Afrainity Technologies. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="group border-purple-500/50 text-purple-300 hover:bg-purple-500/10 rounded-full backdrop-blur-sm hover:border-purple-400 transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
