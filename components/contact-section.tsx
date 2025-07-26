"use client"

import { MapPin, Mail, Phone, Facebook, Linkedin, Twitter } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ContactSection() {
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

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Harare Institute of Technology Innovation Hub, Belvedere, Harare, Zimbabwe",
    },
    {
      icon: Mail,
      label: "Primary Email",
      value: "sales@hit.ac.zw",
    },
    {
      icon: Mail,
      label: "Secondary Email",
      value: "sales@afrainity.com",
    },
    {
      icon: Phone,
      label: "Primary Phone",
      value: "+263 77 982 6816"
    },
    {
      icon: Phone,
      label: "Secondary Phone",
      value: "+263 77 950 3948"
    },
  ]

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "#", // Replace with your real link
      sr: "Visit our Facebook page"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "#", // Replace with your real link
      sr: "Visit our LinkedIn profile"
    },
    {
      icon: Twitter,
      name: "X",
      href: "#", // Replace with your real link
      sr: "Visit our X profile"
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-slate-950 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Contact Us
          </h2>
          <p className={`text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            We'd love to hear from you. Reach out using the information or social handles below.
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-3xl mx-auto">
          {/* Contact Info Grid */}
          <div className={`grid gap-8 mb-12 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {contactInfo.map((info, idx) => (
              <div 
                key={idx} 
                className="flex items-start space-x-4 p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-900/70"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-400 mb-1 uppercase tracking-wide">
                    {info.label}
                  </div>
                  <div className="text-base text-white font-medium leading-relaxed break-words">
                    {info.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
              <p className="text-sm text-gray-400">Stay connected on social media</p>
            </div>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.sr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="text-white group-hover:text-blue-400 font-medium transition-colors duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection