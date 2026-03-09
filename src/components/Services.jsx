import React, { useState, useEffect } from 'react'

const Services = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      id: 1,
      title: 'Corporate Law',
      description: 'Strategic legal guidance for business formation, governance, M&A transactions, and corporate compliance.',
      icon: '🏢',
    },
    {
      id: 2,
      title: 'Litigation',
      description: 'Aggressive representation in civil, commercial, and corporate disputes with proven track record of success.',
      icon: '⚖️',
    },
    {
      id: 3,
      title: 'Legal Consultation',
      description: 'Expert advisory services on complex legal matters affecting your business operations and growth strategy.',
      icon: '📋',
    },
    {
      id: 4,
      title: 'Contract Drafting',
      description: 'Precision-crafted contracts and agreements protecting your interests in all business transactions.',
      icon: '✍️',
    },
    {
      id: 5,
      title: 'Compliance & Regulatory',
      description: 'Comprehensive compliance solutions ensuring your organization meets all regulatory requirements.',
      icon: '✅',
    },
    {
      id: 6,
      title: 'Investment Advisory',
      description: 'Legal structuring and due diligence services for investment opportunities and portfolio management.',
      icon: '💼',
    },
  ]

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div
        className="absolute top-40 left-0 w-96 h-96 bg-primary-500 rounded-full opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-serif font-bold text-5xl text-primary-900 mb-4">
            Our <span className="text-gold-500">Services</span>
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to meet the unique needs of your business
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-gold-600 rounded"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Card Header with Icon */}
              <div className="relative h-40 bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gold-500 transition-opacity duration-300"></div>
                <span className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h3 className="font-serif font-bold text-2xl text-primary-900 mb-3 group-hover:text-gold-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="font-sans font-semibold text-gold-500 hover:text-gold-600 flex items-center gap-2 transition-colors duration-300">
                  Learn More
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-gold-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
