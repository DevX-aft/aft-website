import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const siteConfig = {
  name: 'Afrainity Technologies',
  description: 'Leading AI solutions provider transforming Africa through innovative technology. We offer accessible AI solutions for productivity, business growth, and digital transformation across the African continent.',
  url: 'https://afrainity.com',
  ogImage: '/og-image.png',
  keywords: ['AI solutions', 'artificial intelligence', 'Africa technology', 'business automation', 'digital transformation', 'machine learning', 'productivity tools', 'African innovation', 'tech consulting', 'AI development'],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: 'Afrainity Technologies',
      url: siteConfig.url,
    },
  ],
  creator: 'Afrainity Technologies',
  publisher: 'Afrainity Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - AI Solutions for Africa`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@afrainity',
    site: '@afrainity',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    yandex: 'your-yandex-verification-code', // Add if targeting Yandex
    yahoo: 'your-yahoo-verification-code', // Add if needed
  },
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark light" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen bg-background text-foreground antialiased`}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": siteConfig.name,
              "description": siteConfig.description,
              "url": siteConfig.url,
              "logo": `${siteConfig.url}/aft.svg`,
              "image": `${siteConfig.url}${siteConfig.ogImage}`,
              "sameAs": [
                "https://twitter.com/afrainity",
                "https://linkedin.com/company/afrainity-technologies",
                "https://github.com/afrainity"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "AF",
                "availableLanguage": ["English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Africa"
              },
              "foundingDate": "2024",
              "industry": "Information Technology",
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Business Automation",
                "Digital Transformation",
                "Software Development"
              ]
            })
          }}
        />
        
        {/* Navigation & Sitelinks Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": siteConfig.name,
              "url": siteConfig.url,
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              },
              "mainEntity": {
                "@type": "SiteNavigationElement",
                "name": "Main Navigation",
                "url": siteConfig.url,
                "hasPart": [
                  {
                    "@type": "SiteNavigationElement",
                    "name": "About",
                    "description": "Learn about Afrainity Technologies and our mission",
                    "url": `${siteConfig.url}#about`
                  },
                  {
                    "@type": "SiteNavigationElement", 
                    "name": "AI Solutions",
                    "description": "Discover our innovative AI solutions for African businesses",
                    "url": `${siteConfig.url}#solutions`
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "name": "Why Choose Us",
                    "description": "Understand why businesses choose Afrainity for AI transformation",
                    "url": `${siteConfig.url}#why-choose-us`
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "name": "Contact",
                    "description": "Get in touch with our AI experts",
                    "url": `${siteConfig.url}#contact`
                  }
                ]
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  )
}