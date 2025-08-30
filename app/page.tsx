import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SolutionsSection } from "@/components/solutions-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Solutions for Africa | Afrainity Technologies',
  description: 'Transform your business with cutting-edge AI solutions designed for African markets. Expert AI development, automation, and digital transformation services.',
  openGraph: {
    title: 'AI Solutions for Africa | Afrainity Technologies',
    description: 'Transform your business with cutting-edge AI solutions designed for African markets. Expert AI development, automation, and digital transformation services.',
  },
}

export default function Home() {
  return (
    <>
      {/* Additional JSON-LD for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Afrainity Technologies",
            "url": "https://afrainity.com",
            "description": "Leading AI solutions provider transforming Africa through innovative technology",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://afrainity.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-slate-950">
        <Header />
        <main role="main">
          <HeroSection />
          <AboutSection />
          <SolutionsSection />
          <WhyChooseUsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
