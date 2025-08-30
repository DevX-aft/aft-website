import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Afrainity Technologies',
  description: 'Afrainity Technologies – AI solutions for the future. Professional, trustworthy, and innovative.',
  openGraph: {
    title: 'Afrainity Technologies',
    description: 'Afrainity Technologies – AI solutions for the future. Professional, trustworthy, and innovative.',
    url: 'https://afrainity.com',
    siteName: 'Afrainity Technologies',
    images: [
      {
        url: '/og-image.png', // Place a suitable Open Graph image in /public
        width: 1200,
        height: 630,
        alt: 'Afrainity Technologies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afrainity Technologies',
    description: 'Afrainity Technologies – AI solutions for the future. Professional, trustworthy, and innovative.',
    images: ['/og-image.png'],
    creator: '@afrainity', // Change to your Twitter handle
  },
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
      <body className="min-h-screen bg-background text-foreground antialiased">
        {/* 
          - min-h-screen: ensures full viewport height
          - bg-background/text-foreground: uses CSS variables for theme
          - antialiased: improves font rendering
        */}
        {children}
      </body>
    </html>
  )
}