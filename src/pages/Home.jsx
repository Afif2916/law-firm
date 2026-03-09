import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBalanceScale, FaGavel, FaBuilding } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'

// Home page with hero and featured sections
const Home = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
  { icon: FaBuilding, title: 'Corporate Law', desc: 'Strategic legal guidance for business' },
  { icon: FaGavel, title: 'Litigation', desc: 'Expert representation in disputes' },
  { icon: HiDocumentText, title: 'Consultation', desc: 'Professional advisory services' },
];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Parallax */}
      <section className="relative overflow-hidden bg-primary-900 min-h-screen flex items-center justify-center">
        {/* Parallax Background with Pattern */}
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up">
            Your Trusted <span className="text-gold-500">Legal Partner</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Premier legal solutions for corporate, litigation, and business matters. With over 2 years of excellence, we deliver results.
          </p>

          <Link
            to="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gold-500 text-primary-900 font-sans font-bold text-base sm:text-lg rounded-lg hover:bg-gold-600 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 glow"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-900 mb-3 sm:mb-4">
              Our <span className="text-gold-500">Services</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal solutions tailored to your business needs
            </p>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, i) => {
                const Icon = service.icon

                return (
                <div
                    key={i}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 p-6 sm:p-8"
                >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-4xl sm:text-5xl text-gold-500" />
                    </div>

                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-primary-900 mb-2">
                    {service.title}
                    </h3>

                    <p className="font-sans text-gray-600 text-sm sm:text-base">
                    {service.desc}
                    </p>
                </div>
                )
            })}
        </div>

          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/services"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary-900 text-white font-sans font-bold rounded-lg hover:bg-primary-800 transition-all duration-300"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Ready to Work With Us?
          </h2>
          <p className="font-sans text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
            Get in touch with our team to discuss your legal needs
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gold-500 text-primary-900 font-sans font-bold rounded-lg hover:bg-gold-600 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
