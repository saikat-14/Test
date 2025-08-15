export default function Features() {
  const features = [
    {
      icon: "🔤",
      title: "Dyslexia-Friendly Fonts",
      description: "Uses OpenDyslexic font and other accessible typography options designed specifically for readers with dyslexia."
    },
    {
      icon: "📏",
      title: "Optimized Spacing",
      description: "Increased letter spacing, word spacing, and line height to reduce visual crowding and improve readability."
    },
    {
      icon: "📁",
      title: "File Upload Support",
      description: "Upload TXT, DOC, DOCX, PDF, and RTF files to convert them to dyslexia-friendly format automatically."
    },
    {
      icon: "🌐",
      title: "Webpage Conversion",
      description: "Convert entire webpages by simply entering the URL and let our tool extract and format the content."
    },
    {
      icon: "⚡",
      title: "Instant Conversion",
      description: "Real-time text transformation with no waiting time, providing immediate feedback and results."
    },
    {
      icon: "🔧",
      title: "Customizable Options",
      description: "Adjust font size, line spacing, and other formatting options to suit individual reading preferences."
    }
  ]

  const benefits = [
    {
      title: "Improved Reading Speed",
      description: "Studies show that dyslexia-friendly formatting can increase reading speed by up to 30% for individuals with dyslexia."
    },
    {
      title: "Reduced Reading Errors",
      description: "Better spacing and typography help reduce common reading mistakes and improve comprehension."
    },
    {
      title: "Enhanced Focus",
      description: "Cleaner text layout helps maintain attention and reduces cognitive load during reading."
    }
  ]

  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 dark:text-slate-100">
            Why Choose DyslexiaText?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto dark:text-slate-300">
            Our application is built with accessibility in mind, incorporating research-based 
            techniques to make reading easier for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 dark:text-slate-100">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed dark:text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl p-8 mb-16 dark:from-slate-700 dark:to-slate-600">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 dark:text-slate-100">
              Proven Benefits
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Research-backed improvements that make a real difference in reading experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-teal-100">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2 dark:text-slate-100">
                  {benefit.title}
                </h4>
                <p className="text-slate-600 text-sm dark:text-slate-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 dark:bg-slate-800 dark:border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 dark:text-slate-100">
              How It Works
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Simple steps to transform your text into a dyslexia-friendly format
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-teal-100">
                <span className="text-teal-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2 dark:text-slate-100">Choose Input</h4>
              <p className="text-slate-600 text-sm dark:text-slate-300">Text, file upload, or webpage URL</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-teal-100">
                <span className="text-teal-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2 dark:text-slate-100">Select Options</h4>
              <p className="text-slate-600 text-sm dark:text-slate-300">Font size and line spacing</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-teal-100">
                <span className="text-teal-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2 dark:text-slate-100">Convert</h4>
              <p className="text-slate-600 text-sm dark:text-slate-300">Click convert to transform</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-teal-100">
                <span className="text-teal-600 font-bold text-lg">4</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2 dark:text-slate-100">Format</h4>
              <p className="text-slate-600 text-sm dark:text-slate-300">Apply dyslexia-friendly styling</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-teal-100">
                <span className="text-teal-600 font-bold text-lg">5</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2 dark:text-slate-100">Read</h4>
              <p className="text-slate-600 text-sm dark:text-slate-300">Enjoy improved readability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
