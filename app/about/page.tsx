import Link from 'next/link'

export default function AboutPage() {
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
            About DyslexiaText
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to make reading accessible for everyone, especially individuals with dyslexia
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Empowering individuals with dyslexia through accessible technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                Dyslexia affects up to 20% of the population, making reading a daily challenge. 
                Traditional text formatting can create barriers that prevent individuals from 
                accessing information effectively and enjoying the reading experience.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                DyslexiaText transforms regular text into dyslexia-friendly format using 
                research-backed techniques: specialized fonts, optimized spacing, and 
                improved text structure that enhance readability and comprehension.
              </p>
            </div>
          </div>
        </div>

        {/* Research Section */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Research-Based Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Typography Research</h3>
              <p className="text-gray-600 text-sm">
                Based on studies showing that specific fonts and spacing can improve reading speed by up to 30%
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cognitive Science</h3>
              <p className="text-gray-600 text-sm">
                Incorporating findings from cognitive psychology about how the brain processes written text
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">User Testing</h3>
              <p className="text-gray-600 text-sm">
                Developed with input from individuals with dyslexia and accessibility experts
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Jane Doe</h3>
              <p className="text-primary-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Passionate about accessibility and inclusive technology
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">John Smith</h3>
              <p className="text-primary-600 font-medium mb-2">Lead Developer</p>
              <p className="text-gray-600 text-sm">
                Expert in web accessibility and user experience design
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">SJ</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Sarah Johnson</h3>
              <p className="text-primary-600 font-medium mb-2">Accessibility Specialist</p>
              <p className="text-gray-600 text-sm">
                Certified accessibility professional with expertise in dyslexia support
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility First</h3>
              <p className="text-gray-600">
                We believe that digital content should be accessible to everyone, regardless of 
                their reading abilities or learning differences.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-Based</h3>
              <p className="text-gray-600">
                Our solutions are grounded in scientific research and validated through 
                user testing and feedback from the dyslexia community.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Centered</h3>
              <p className="text-gray-600">
                We prioritize the needs and experiences of our users, continuously improving 
                our tools based on their feedback and requirements.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We're constantly exploring new technologies and approaches to make reading 
                more accessible and enjoyable for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Join Us in Making Reading Accessible
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're an individual with dyslexia, an educator, or someone who cares about 
              accessibility, DyslexiaText is here to help. Try our tool today and experience 
              the difference it can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary text-lg px-8 py-4">
                Try DyslexiaText
              </Link>
              <Link href="/demo" className="btn-secondary text-lg px-8 py-4">
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
