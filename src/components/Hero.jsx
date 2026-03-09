import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative overflow-hidden bg-primary-900 min-h-screen flex items-center justify-center pt-20">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          Your Trusted <span className="text-gold-500">Legal Partner</span>
        </h1>
        
        <p className="font-sans text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Premier legal solutions for corporate, litigation, and business matters. With over 30 years of excellence, we deliver results.
        </p>

        <button
          onClick={scrollToContact}
          className="inline-block px-8 py-4 bg-gold-500 text-primary-900 font-sans font-bold text-lg rounded-lg hover:bg-gold-600 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 glow"
        >
          Schedule Consultation
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
