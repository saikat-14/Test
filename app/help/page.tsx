import Link from 'next/link'

export default function HelpPage() {
  const faqs = [
    {
      question: "What is DyslexiaText?",
      answer: "DyslexiaText is a web application that converts regular text into dyslexia-friendly format. It uses specialized fonts, optimized spacing, and improved text structure to make reading easier for individuals with dyslexia."
    },
    {
      question: "How does it work?",
      answer: "Simply paste or type your text into the converter, choose your preferred formatting options (font size, line spacing), and click convert. The tool will transform your text into a dyslexia-friendly format that you can read or copy."
    },
    {
      question: "What makes text dyslexia-friendly?",
      answer: "Dyslexia-friendly text typically includes: OpenDyslexic font (designed to reduce letter confusion), increased letter and word spacing, optimized line height, high contrast colors, and improved text structure with better paragraph breaks."
    },
    {
      question: "Is DyslexiaText free to use?",
      answer: "Yes! DyslexiaText is completely free to use. We believe that accessibility tools should be available to everyone who needs them."
    },
    {
      question: "What browsers are supported?",
      answer: "DyslexiaText works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your browser for the best experience."
    },
    {
      question: "Can I use this for educational purposes?",
      answer: "Absolutely! DyslexiaText is perfect for educators, students, and anyone who wants to make reading materials more accessible. You can convert textbooks, articles, assignments, and more."
    }
  ]

  const tips = [
    "Use larger font sizes for better readability",
    "Try different line spacing options to find what works best for you",
    "Take breaks when reading long texts",
    "Use the sample texts to test the tool before converting your own content",
    "Consider printing converted text for offline reading"
  ]

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
            Help & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions and learn how to get the most out of DyslexiaText
          </p>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Quick Start Guide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Go to Converter</h3>
              <p className="text-gray-600 text-sm">Navigate to the main converter page</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Paste Text</h3>
              <p className="text-gray-600 text-sm">Copy and paste your text into the input field</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Choose Options</h3>
              <p className="text-gray-600 text-sm">Select font size and line spacing preferences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Convert & Read</h3>
              <p className="text-gray-600 text-sm">Click convert and enjoy your dyslexia-friendly text</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Reading Tips
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm font-bold">💡</span>
                  </div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Need More Help?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                If you can't find the answer you're looking for, we're here to help!
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> support@dyslexiatext.com
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Response Time:</span> Within 24 hours
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/demo" className="text-primary-600 hover:text-primary-700 transition-colors">
                    View Demo →
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-primary-600 hover:text-primary-700 transition-colors">
                    Learn About Us →
                  </Link>
                </li>
                <li>
                  <a href="#research" className="text-primary-600 hover:text-primary-700 transition-colors">
                    Research & Studies →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Now that you know how DyslexiaText works, try it out for yourself! 
              Convert your first text and experience the difference it can make.
            </p>
            <Link href="/" className="btn-primary text-lg px-8 py-4">
              Start Converting Text
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
