'use client'

import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-50 dark:bg-slate-800 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DT</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">DyslexiaText</h1>
              <p className="text-xs text-slate-600 dark:text-slate-300">Accessible Reading</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-teal-400 transition-colors dark:text-slate-300">
              Features
            </a>
            <a href="/demo" className="text-slate-600 hover:text-teal-400 transition-colors dark:text-slate-300">
              Demo
            </a>
            <a href="/about" className="text-slate-600 hover:text-teal-400 transition-colors dark:text-slate-300">
              About
            </a>
            <a href="/help" className="text-slate-600 hover:text-teal-400 transition-colors dark:text-slate-300">
              Help
            </a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition-colors dark:bg-slate-700 dark:hover:bg-slate-600"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? '💡' : '🌙'}
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

                {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-slate-600 hover:text-teal-400 transition-colors dark:text-slate-300">
                Features
              </a>
              <a href="/demo" className="text-slate-600 hover:text-teal-400 transition-colors dark:text-slate-300">
                Demo
              </a>
              <a href="/about" className="text-slate-600 hover:text-teal-400 transition-colors dark:text-slate-300">
                About
              </a>
              <a href="/help" className="text-slate-600 hover:text-teal-400 transition-colors dark:text-slate-300">
                Help
              </a>
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 text-slate-600 hover:text-teal-400 transition-colors dark:text-slate-300"
              >
                <span>{theme === 'dark' ? '💡' : '🌙'}</span>
                <span>Switch to {theme === 'dark' ? 'light' : 'dark'} theme</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
