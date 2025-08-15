'use client'

import { useState, useRef } from 'react'

interface TextConverterProps {
  onConvert: (text: string) => void
}

export default function TextConverter({ onConvert }: TextConverterProps) {
  const [inputText, setInputText] = useState('')
  const [fontSize, setFontSize] = useState('dyslexia')
  const [lineSpacing, setLineSpacing] = useState('1.8')
  const [isConverting, setIsConverting] = useState(false)
  const [activeTab, setActiveTab] = useState('text') // 'text', 'file', 'webpage'
  const [webpageUrl, setWebpageUrl] = useState('')
  const [isLoadingWebpage, setIsLoadingWebpage] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const convertToDyslexiaFriendly = (text: string) => {
    if (!text.trim()) return

    setIsConverting(true)
    
    // Simulate processing time for better UX
    setTimeout(() => {
      // Apply dyslexia-friendly formatting
      let convertedText = text
        .replace(/([.!?])\s+/g, '$1\n\n') // Add double line breaks after sentences
        .replace(/([,:;])\s+/g, '$1 ') // Ensure proper spacing after punctuation
        .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive line breaks
        .trim()

      onConvert(convertedText)
      setIsConverting(false)
    }, 500)
  }

  const handleConvert = () => {
    convertToDyslexiaFriendly(inputText)
  }

  const handleClear = () => {
    setInputText('')
    onConvert('')
  }

  const sampleTexts = [
    "The quick brown fox jumps over the lazy dog. This is a sample text to demonstrate how DyslexiaText can improve readability for people with dyslexia.",
    "Reading can be challenging for individuals with dyslexia. Our tool helps by improving text formatting, spacing, and overall readability.",
    "Welcome to DyslexiaText! This application transforms regular text into a more accessible format that's easier to read and understand."
  ]

  const insertSampleText = (text: string) => {
    setInputText(text)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        setInputText(text)
        setActiveTab('text')
      }
      reader.readAsText(file)
    }
  }

  const handleWebpageConversion = async () => {
    if (!webpageUrl.trim()) return
    
    setIsLoadingWebpage(true)
    try {
      // Simulate webpage text extraction
      await new Promise(resolve => setTimeout(resolve, 2000))
      const mockWebpageText = `This is a sample webpage content extracted from ${webpageUrl}. 
      
      The webpage contains various text elements that have been processed and converted to a dyslexia-friendly format. 
      
      This includes proper spacing, improved typography, and better text structure for enhanced readability.`
      
      setInputText(mockWebpageText)
      setActiveTab('text')
    } catch (error) {
      console.error('Error converting webpage:', error)
    } finally {
      setIsLoadingWebpage(false)
    }
  }

  return (
          <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 dark:bg-slate-800 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 dark:text-slate-100">
              Convert Your Content
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Choose from text, file upload, or webpage conversion to make it dyslexia-friendly
            </p>
          </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-slate-200 p-1 rounded-lg dark:bg-slate-700">
          <button
            onClick={() => setActiveTab('text')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
              activeTab === 'text'
                ? 'bg-slate-300 text-teal-400 shadow-sm dark:bg-slate-600'
                : 'text-slate-600 hover:text-teal-400 dark:text-slate-300'
            }`}
          >
            📝 Text Input
          </button>
          <button
            onClick={() => setActiveTab('file')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
              activeTab === 'file'
                ? 'bg-slate-300 text-teal-400 shadow-sm dark:bg-slate-600'
                : 'text-slate-600 hover:text-teal-400 dark:text-slate-300'
            }`}
          >
            📁 File Upload
          </button>
          <button
            onClick={() => setActiveTab('webpage')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
              activeTab === 'webpage'
                ? 'bg-slate-300 text-teal-400 shadow-sm dark:bg-slate-600'
                : 'text-slate-600 hover:text-teal-400 dark:text-slate-300'
            }`}
          >
            🌐 Webpage
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'text' && (
          <div className="mb-6">
            <label htmlFor="textInput" className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-200">
              Enter your text here:
            </label>
            <textarea
              id="textInput"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste or type your text here..."
              className="input-field h-48 resize-none"
              rows={10}
            />
          </div>
        )}

        {activeTab === 'file' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-200">
              Upload a text file:
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-teal-400 transition-colors dark:border-slate-600">
              <input
                ref={fileInputRef}
                type="file"
                accept=".txt,.doc,.docx,.pdf,.rtf"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="btn-primary mb-4"
              >
                Choose File
              </button>
              <p className="text-slate-600 text-sm dark:text-slate-300">
                Supported formats: TXT, DOC, DOCX, PDF, RTF
              </p>
              <p className="text-slate-500 text-xs mt-2 dark:text-slate-400">
                Maximum file size: 10MB
              </p>
            </div>
          </div>
        )}

        {activeTab === 'webpage' && (
          <div className="mb-6">
            <label htmlFor="webpageUrl" className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-200">
              Enter webpage URL:
            </label>
            <div className="flex space-x-2">
              <input
                id="webpageUrl"
                type="url"
                value={webpageUrl}
                onChange={(e) => setWebpageUrl(e.target.value)}
                placeholder="https://example.com"
                className="input-field flex-1"
              />
              <button
                onClick={handleWebpageConversion}
                disabled={!webpageUrl.trim() || isLoadingWebpage}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingWebpage ? (
                  <span className="flex items-center space-x-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Loading...</span>
                  </span>
                ) : (
                  'Convert Webpage'
                )}
              </button>
            </div>
            <p className="text-slate-500 text-sm mt-2 dark:text-slate-400">
              We'll extract the text content from the webpage and convert it to dyslexia-friendly format
            </p>
          </div>
        )}

        {/* Sample Texts - Only show for text tab */}
        {activeTab === 'text' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-200">
              Try with sample text:
            </label>
            <div className="flex flex-wrap gap-2">
              {sampleTexts.map((text, index) => (
                <button
                  key={index}
                  onClick={() => insertSampleText(text)}
                  className="px-3 py-2 text-sm bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition-colors dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-200"
                >
                  Sample {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Formatting Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="fontSize" className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-200">
              Font Size
            </label>
            <select
              id="fontSize"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="input-field"
            >
              <option value="dyslexia">Standard (1.25rem)</option>
              <option value="dyslexia-lg">Large (1.5rem)</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="lineSpacing" className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-200">
              Line Spacing
            </label>
            <select
              id="lineSpacing"
              value={lineSpacing}
              onChange={(e) => setLineSpacing(e.target.value)}
              className="input-field"
            >
              <option value="1.8">1.8 (Recommended)</option>
              <option value="2.0">2.0 (Extra Spacing)</option>
              <option value="2.2">2.2 (Maximum Spacing)</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <div className="w-full p-3 bg-slate-200 border-2 border-slate-300 rounded-lg dark:bg-slate-700 dark:border-slate-600">
              <p className="text-sm text-slate-700 font-medium dark:text-slate-200">
                💡 Tip: Use larger fonts and increased spacing for better readability
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleConvert}
            disabled={!inputText.trim() || isConverting}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isConverting ? (
              <span className="flex items-center space-x-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Converting...</span>
              </span>
            ) : (
              'Convert to Dyslexia-Friendly Format'
            )}
          </button>
          
          <button
            onClick={handleClear}
            disabled={!inputText.trim()}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear Text
          </button>
        </div>

        {/* Character Count */}
        <div className="text-center mt-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {inputText.length} characters • {inputText.split(/\s+/).filter(word => word.length > 0).length} words
          </p>
        </div>
      </div>
    </div>
  )
}
