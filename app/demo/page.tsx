'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DemoPage() {
  const [originalText] = useState(`The quick brown fox jumps over the lazy dog. This pangram contains every letter of the English alphabet at least once. Pangrams are often used to display font samples and test keyboards. They are also useful for practicing typing and improving reading skills.`)

  const [convertedText] = useState(`The quick brown fox jumps over the lazy dog.

This pangram contains every letter of the English alphabet at least once.

Pangrams are often used to display font samples and test keyboards.

They are also useful for practicing typing and improving reading skills.`)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DT</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">DyslexiaText</h1>
                <p className="text-xs text-gray-500">Accessible Reading</p>
              </div>
            </Link>
            <Link href="/" className="btn-primary">
              Back to Converter
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            See the Difference
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare regular text with dyslexia-friendly formatted text to understand how our tool improves readability
          </p>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Original Text */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Original Text</h2>
              <p className="text-gray-600">Standard formatting</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-800 leading-relaxed font-sans">
                {originalText}
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-500 text-center">
              <p>Standard font • Normal spacing • Regular line height</p>
            </div>
          </div>

          {/* Converted Text */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Dyslexia-Friendly Text</h2>
              <p className="text-gray-600">Optimized for readability</p>
            </div>
            <div className="dyslexia-text p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-200">
              {convertedText}
            </div>
            <div className="mt-4 text-sm text-gray-500 text-center">
              <p>OpenDyslexic font • Increased spacing • Optimized line height</p>
            </div>
          </div>
        </div>

        {/* Key Improvements */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Key Improvements Made
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl">🔤</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Font Change</h3>
              <p className="text-gray-600 text-sm">
                Switched to OpenDyslexic font, designed specifically to reduce letter confusion
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl">📏</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Spacing</h3>
              <p className="text-gray-600 text-sm">
                Increased letter spacing, word spacing, and line height for better readability
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Structure</h3>
              <p className="text-gray-600 text-sm">
                Added paragraph breaks and improved text structure for easier comprehension
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Text?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the difference for yourself. Convert your own text and see how DyslexiaText 
              can improve readability and make reading more accessible.
            </p>
            <Link href="/" className="btn-primary text-lg px-8 py-4">
              Try It Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
