'use client'

import { useState } from 'react'
import Header from './components/Header'
import TextConverter from './components/TextConverter'
import Features from './components/Features'
import Footer from './components/Footer'

export default function Home() {
  const [convertedText, setConvertedText] = useState('')

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 dark:text-slate-100">
            Welcome to{' '}
            <span className="text-teal-400">DyslexiaText</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto dark:text-slate-300">
            Transform normal written text into dyslexia-friendly format with improved readability, 
            better spacing, and accessibility features designed specifically for readers with dyslexia.
          </p>
        </div>
        
        <TextConverter onConvert={setConvertedText} />
        
        {convertedText && (
          <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 dark:text-slate-200">Converted Text</h2>
            <div className="dyslexia-text p-6 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg border-2 border-slate-300 text-slate-900 dark:from-slate-700 dark:to-slate-600 dark:border-slate-600 dark:text-slate-100">
              {convertedText}
            </div>
          </div>
        )}
        
        <Features />
      </div>
      <Footer />
    </main>
  )
}
