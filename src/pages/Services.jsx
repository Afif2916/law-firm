import React from 'react'
import corporateIcon from "../assets/corporate.webp"
import litigationIcon from "../assets/litigation.webp"
import consultationIcon from "../assets/consultation.webp"
import contractIcon from "../assets/contract.webp"
import compilanceIcon from "../assets/compilance.jpg"
import investmentIcon from "../assets/invest.jpg"

// Services page with all legal services
const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Corporate Law',
      icon: corporateIcon,
      description: 'Strategic legal guidance for business formation, governance, M&A transactions, and corporate compliance.',
      features: [
        'Business Formation & Registration',
        'Merger & Acquisition Support',
        'Corporate Governance',
        'Shareholder Agreements',
      ],
    },
    {
      id: 2,
      title: "litigationIcon",
      icon: litigationIcon,
      description: 'Aggressive representation in civil, commercial, and corporate disputes with proven track record of success.',
      features: [
        'Civil Litigation',
        'Commercial Disputes',
        'Contract Disputes',
        'Appellate Services',
      ],
    },
    {
      id: 3,
      title: "Consultation",
      icon: consultationIcon,
      description: 'Expert advisory services on complex legal matters affecting your business operations and growth strategy.',
      features: [
        'Business Advice',
        'Legal Risk Assessment',
        'Compliance Review',
        'Strategic Planning',
      ],
    },
    {
      id: 4,
      title: "contractIcon",
      icon: contractIcon,
      description: 'Precision-crafted contracts and agreements protecting your interests in all business transactions.',
      features: [
        'Service Agreements',
        'Partnership Contracts',
        'Non-Disclosure Agreements',
        'Employment Contracts',
      ],
    },
    {
      id: 5,
      title: "compilanceIcon",
      icon: compilanceIcon,
      description: 'Comprehensive compliance solutions ensuring your organization meets all regulatory requirements.',
      features: [
        'Regulatory Compliance',
        'License Applications',
        'Audit Preparation',
        'Regulatory Updates',
      ],
    },
    {
      id: 6,
      title: investmentIcon,
      icon: investmentIcon,
      description: 'Legal structuring and due diligence services for investment opportunities and portfolio management.',
      features: [
        'Due Diligence Review',
        'Investment Structure',
        'Portfolio Management',
        'Tax Optimization',
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
            Our <span className="text-gold-500">Legal Services</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-gray-300">
            Comprehensive solutions tailored to your specific business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 border border-gray-200"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s backwards`,
                }}
              >
                {/* Card Header with Icon */}
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center overflow-hidden">
  
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gold-500 transition-opacity duration-300"></div>

                    <img
                        src={service.icon}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-serif font-bold text-2xl text-primary-900 mb-3 group-hover:text-gold-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 font-sans text-sm text-gray-600">
                        <span className="text-gold-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="font-sans font-semibold text-gold-500 hover:text-gold-600 flex items-center gap-2 transition-colors duration-300 text-sm sm:text-base">
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

      {/* How We Work Section */}
     <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Title */}
    <div className="text-center mb-16">
      <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-900">
        How We <span className="text-gold-500">Work</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Our structured approach ensures every case receives strategic planning
        and professional execution.
      </p>
    </div>

    <div className="relative">

      {/* Horizontal connector (desktop) */}
      <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gray-200"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {[
          { num: '01', title: 'Consultation', desc: 'Discuss your legal needs and objectives' },
          { num: '02', title: 'Analysis', desc: 'In-depth review of your situation' },
          { num: '03', title: 'Strategy', desc: 'Develop tailored legal strategy' },
          { num: '04', title: 'Execution', desc: 'Implement and manage your case' },
        ].map((step, i) => (

          <div key={i} className="relative flex flex-col items-center text-center group">

            {/* Step circle */}
            <div className="z-10 w-16 h-16 flex items-center justify-center rounded-full bg-gold-500 text-primary-900 font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
              {step.num}
            </div>

            {/* Card */}
            <div className="mt-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 max-w-xs">

              <h3 className="font-serif font-bold text-xl text-primary-900 mb-2">
                {step.title}
              </h3>

              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>

            </div>

          </div>

        ))}

      </div>
    </div>

  </div>
</section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Need Legal Assistance?
          </h2>
          <p className="font-sans text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
            Contact us to discuss how we can help with your legal needs
          </p>
          <a
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gold-500 text-primary-900 font-sans font-bold rounded-lg hover:bg-gold-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  )
}

export default Services
