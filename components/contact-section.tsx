"use client"

import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Harare Institute of Technology",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@hit.ac.zw", "sales@afrainity.com"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+263 77 982 6816", "+263 77 950 3948"],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Contact us today to discuss your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
              {Array.isArray(info.details) ? (
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-300">
                      {detail}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-300">{info.details}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <social.icon className="w-6 h-6 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
