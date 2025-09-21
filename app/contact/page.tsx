import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Afrainity Technologies - Harare, Zimbabwe',
  description: 'Get in touch with Afrainity Technologies in Harare, Zimbabwe. Contact our AI experts at HIT Innovation Hub for consultation, partnerships, or support across Africa.',
  keywords: 'contact afrainity technologies, harare zimbabwe, AI consultation, HIT innovation hub, artificial intelligence services africa',
  openGraph: {
    title: 'Contact Afrainity Technologies - Harare, Zimbabwe',
    description: 'Connect with our AI experts at Harare Institute of Technology Innovation Hub for consultation and support across Africa.',
    url: 'https://afrainity.com/contact',
    siteName: 'Afrainity Technologies',
    locale: 'en_ZW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Afrainity Technologies - Harare, Zimbabwe',
    description: 'Connect with our AI experts at HIT Innovation Hub for consultation and support.',
  }
}

// Add structured data for local business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Afrainity Technologies",
  "description": "Leading AI and technology solutions provider in Zimbabwe and Africa",
  "url": "https://afrainity.com",
  "telephone": ["+263779826816", "+263779503948"],
  "email": ["sales@afrainity.com", "sales@hit.ac.zw"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Harare Institute of Technology Innovation Hub, Belvedere",
    "addressLocality": "Harare",
    "addressCountry": "Zimbabwe",
    "addressRegion": "Harare Province"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-17.837902",
    "longitude": "31.0096247"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Zimbabwe"
    },
    {
      "@type": "Continent",
      "name": "Africa"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "-17.837902",
      "longitude": "31.0096247"
    },
    "geoRadius": "5000000"
  },
  "openingHours": [
    "Mo-Fr 08:00-17:00",
    "Sa 09:00-13:00"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+263779826816",
    "contactType": "sales",
    "availableLanguage": ["English", "Shona", "Ndebele"]
  }
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
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
        <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to transform your business with AI? Let's discuss how Afrainity Technologies can help you achieve your goals from our base in Harare, Zimbabwe.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Get in Touch</h2>
                  <div className="space-y-6">
                    {/* Location */}
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Harare Institute of Technology Innovation Hub</p>
                        <p className="text-gray-300">Belvedere, Harare, Zimbabwe</p>
                      </div>
                    </div>

                    {/* Emails */}
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                        <a href="mailto:sales@afrainity.com" className="hover:text-cyan-400 transition-colors">
                          sales@afrainity.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                        <a href="mailto:sales@hit.ac.zw" className="hover:text-cyan-400 transition-colors">
                          sales@hit.ac.zw
                        </a>
                      </div>
                    </div>

                    {/* Phone Numbers */}
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                        <a href="tel:+263779826816" className="hover:text-cyan-400 transition-colors">
                          +263 77 982 6816
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                        <a href="tel:+263779503948" className="hover:text-cyan-400 transition-colors">
                          +263 77 950 3948
                        </a>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                      <span>Monday - Friday, 8:00 AM - 5:00 PM (CAT)</span>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Office Hours</h3>
                  <div className="text-gray-300 space-y-2">
                    <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                    <p className="text-sm text-gray-400 mt-2">All times in Central Africa Time (CAT)</p>
                  </div>
                </div>

                {/* Embedded Map */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Find Us</h3>
                  <div className="rounded-lg overflow-hidden border border-slate-700">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.8234567890123!2d31.0070498!3d-17.837902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5dfe5fd5487%3A0x1da0e6cf280f7196!2sInnovation%20Hub%20(HIT)!5e0!3m2!1sen!2szw!4v1634567890123!5m2!1sen!2szw"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Innovation Hub (HIT) - Harare Institute of Technology"
                    />
                  </div>
                  <div className="mt-3">
                    <a 
                      href="https://maps.google.com/?q=Harare+Institute+of+Technology+Innovation+Hub+Belvedere+Harare+Zimbabwe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Send us a Message</h2>
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    required
                    aria-required="true"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    required
                    aria-required="true"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+263 77 XXX XXXX"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-consultation">AI Consultation</option>
                    <option value="custom-ai-solutions">Custom AI Solutions</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="machine-learning">Machine Learning</option>
                    <option value="automation">Process Automation</option>
                    <option value="training">AI Training & Workshops</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project or how we can help you..."
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    required
                    aria-required="true"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Send Message
                </button>
                
                <p className="text-xs text-gray-400 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>

          {/* Additional Contact Methods */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-8 text-white">Other Ways to Connect</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">General Inquiries</h3>
                <p className="text-gray-300 text-sm mb-3">
                  For general questions about our services and capabilities.
                </p>
                <a href="mailto:sales@afrainity.com" className="text-cyan-400 hover:text-cyan-300">
                  sales@afrainity.com
                </a>
              </div>
              
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">Partnership Opportunities</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Interested in partnering with us? Let's explore collaboration opportunities.
                </p>
                <a href="mailto:sales@hit.ac.zw" className="text-cyan-400 hover:text-cyan-300">
                  sales@hit.ac.zw
                </a>
              </div>
              
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">Quick Response</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Need immediate assistance? Call us during business hours.
                </p>
                <div className="space-y-1">
                  <a href="tel:+263779503948" className="block text-cyan-400 hover:text-cyan-300">
                    +263 77 950 3948
                  </a>
                  <a href="tel:+263779826816" className="block text-cyan-400 hover:text-cyan-300">
                    +263 77 982 6816
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}
