import React from 'react'
import { FaBullseye, FaBalanceScale, FaGem } from "react-icons/fa";


const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
            About <span className="text-gold-500">Contoh Lawfirm & Associates</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-gray-300">
            Leading the legal industry with excellence, integrity, and innovation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two Column Layout - Image and Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24">
            {/* Left - Image */}
            <div className="animate-slide-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 sm:h-96 lg:h-full">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop"
                  alt="Modern Law Office"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="animate-slide-in-right">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-6">
                Our <span className="text-gold-500">Story</span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 1993, Contoh Lawfirm & Associates has established itself as one of the most respected law firms in the region. Our commitment to excellence and client satisfaction has been the cornerstone of our success.
              </p>

              <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
                With a team of highly experienced attorneys and support staff, we have successfully served over 500 clients across various industries. Our expertise spans corporate law, litigation, compliance, and investment advisory services.
              </p>
            </div>
          </div>

          {/* Mission, Vision, Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 mb-16 sm:mb-20 lg:mb-24">
            {/* Vision */}
            <div className="group bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-200">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-full mb-4">
                <FaBullseye className="text-2xl text-gold-500" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-neutral-900 mb-4">Our Vision</h3>
              <p className="font-sans text-gray-600 leading-relaxed">
                To be the leading provider of innovative legal solutions, recognized for our integrity, expertise, and unwavering commitment to advancing our clients' interests.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-gradient-to-br from-gold-50 to-white rounded-xl p-8 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold-200">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-full mb-4">
                <FaBalanceScale className="text-2xl text-gold-500" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-neutral-900 mb-4">Our Mission</h3>
              <p className="font-sans text-gray-600 leading-relaxed">
                Empowering businesses and individuals through strategic legal counsel, delivering exceptional results while maintaining the highest ethical and professional standards.
              </p>
            </div>

            {/* Values */}
            <div className="group bg-gradient-to-br from-primary-100 to-white rounded-xl p-8 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-300">
              <div className="w-16 h-16 flex items-center justify-center bg-gold-100 rounded-full mb-4">
                <FaGem className="text-2xl text-gold-500" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-neutral-900 mb-4">Our Values</h3>
              <p className="font-sans text-gray-600 leading-relaxed">
                Integrity, excellence, client-focused service, and continuous innovation. These core values guide every decision and action we take.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-primary-700 to-primary-500 rounded-2xl p-8 sm:p-12 lg:p-16 text-white">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-center mb-12 sm:mb-16">
              By The Numbers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
              <div className="text-center">
                <p className="font-serif text-5xl sm:text-6xl font-bold text-gold-500 mb-2">30+</p>
                <p className="font-sans text-gray-300">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-5xl sm:text-6xl font-bold text-gold-500 mb-2">500+</p>
                <p className="font-sans text-gray-300">Clients Served</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-5xl sm:text-6xl font-bold text-gold-500 mb-2">95%</p>
                <p className="font-sans text-gray-300">Success Rate</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-5xl sm:text-6xl font-bold text-gold-500 mb-2">50+</p>
                <p className="font-sans text-gray-300">Award Winning</p>
              </div>
            </div>
          </div>

          {/* Team Highlight */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 text-center mb-6 sm:mb-8">
              Our <span className="text-gold-500">Leadership</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              Led by some of the most talented and experienced legal professionals in the industry
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
              {[
                { name: 'James Sinaga S.H', role: 'Senior Partner & Founder' },
                { name: 'Sarah Sechan S.H', role: 'Lead Litigation Attorney' },
                { name: 'David Alman S.H', role: 'Corporate Law Specialist' },
              ].map((member, i) => (
                <div key={i} className="text-center group cursor-pointer">
                  <div className="rounded-xl overflow-hidden shadow-lg mb-4 h-64 bg-gray-200 group-hover:shadow-2xl transition-all duration-300">
                    <img
                      src={`https://i.pravatar.cc/300?u=${member.name}`}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-primary-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="font-sans text-gold-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
