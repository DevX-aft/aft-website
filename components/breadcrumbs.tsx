"use client"

import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const pathname = usePathname()
  
  // Default breadcrumbs based on current path
  const defaultItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" }
  ]
  
  // If we're on a section, add it to breadcrumbs
  if (typeof window !== 'undefined' && window.location.hash) {
    const hash = window.location.hash.replace('#', '')
    const sectionMap: Record<string, string> = {
      'about': 'About',
      'solutions': 'Solutions', 
      'why-choose-us': 'Why Choose Us',
      'contact': 'Contact'
    }
    
    if (sectionMap[hash]) {
      defaultItems.push({
        label: sectionMap[hash],
        href: `/#${hash}`,
        current: true
      })
    }
  }
  
  const breadcrumbItems = items || defaultItems
  
  if (breadcrumbItems.length <= 1) return null
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://afrainity.com${item.href}`
    }))
  }
  
  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <nav 
        aria-label="Breadcrumb navigation"
        className={`flex items-center space-x-2 text-sm text-gray-400 ${className}`}
      >
        <ol className="flex items-center space-x-2">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-500" aria-hidden="true" />
              )}
              
              {item.current ? (
                <span 
                  className="text-cyan-400 font-medium"
                  aria-current="page"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1 inline" aria-hidden="true" />}
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  aria-label={`Go to ${item.label}`}
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1 inline" aria-hidden="true" />}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
