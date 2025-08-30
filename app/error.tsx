'use client'

import { useEffect } from 'react'
import { Metadata } from 'next'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-red-400 mb-4">Something went wrong!</h1>
        <p className="text-gray-300 mb-8">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Try again
          </button>
          <a 
            href="/"
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 inline-block"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}
