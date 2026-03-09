import React, { useState, useEffect } from 'react'

const About = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Parallax background elements */}
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-gold-500 rounded-full opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Section */}
          <div className="animate-slide-in-left">
            <div className="relative">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-gold-500 to-primary-500 rounded-2xl opacity-20"></div> */}
              <div className="relative bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop"
                  alt="Modern Law Office"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500 rounded-full opacity-20"></div> */}
            </div>
          </div>

          {/* Right - Content Section */}
          <div className="animate-slide-in-right">
            <div className="mb-8">
              <h2 className="font-serif font-bold text-5xl text-primary-900 mb-4">
                About <span className="text-gold-500">Lexus</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-gold-500 to-gold-600 rounded"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary-800 mb-3">Our Story</h3>
                <p className="font-sans text-gray-600 leading-relaxed text-lg">
                  Founded in 1993, Lexus & Associates has established itself as one of the most respected law firms in the region. Our commitment to excellence and client satisfaction has been the cornerstone of our success.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-primary-800 mb-3">Our Vision</h3>
                <p className="font-sans text-gray-600 leading-relaxed text-lg">
                  To be the leading provider of innovative legal solutions, recognized for our integrity, expertise, and unwavering commitment to advancing our clients' interests.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-primary-800 mb-3">Our Mission</h3>
                <p className="font-sans text-gray-600 leading-relaxed text-lg">
                  Empowering businesses and individuals through strategic legal counsel, delivering exceptional results while maintaining the highest ethical and professional standards.
                </p>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <p className="font-serif text-4xl font-bold text-gold-500">30+</p>
                  <p className="font-sans text-gray-600 text-sm mt-2">Years Experience</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-bold text-gold-500">500+</p>
                  <p className="font-sans text-gray-600 text-sm mt-2">Clients Served</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-bold text-gold-500">95%</p>
                  <p className="font-sans text-gray-600 text-sm mt-2">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
