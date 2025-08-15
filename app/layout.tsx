import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DyslexiaText - Convert Text to Dyslexia-Friendly Format',
  description: 'Transform normal written text into dyslexia-friendly format with improved readability and accessibility.',
  keywords: 'dyslexia, text converter, accessibility, reading, font, OpenDyslexic',
  authors: [{ name: 'DyslexiaText Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
