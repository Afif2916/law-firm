import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaBalanceScale, 
  FaGavel, 
  FaBuilding, 
  FaHandshake, 
  FaClock, 
  FaShieldAlt,
  FaAward,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaQuoteLeft,
  FaUserTie
} from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import WhyChooseUs from '../components/WhyChooseUs'

// Home page with comprehensive professional law firm sections
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
    { 
      icon: FaBuilding, 
      title: 'Corporate Law', 
      desc: 'Strategic legal guidance for business formation, governance, and M&A transactions.',
      link: '/services'
    },
    { 
      icon: FaGavel, 
      title: 'Litigation', 
      desc: 'Expert representation in complex commercial and civil disputes.',
      link: '/services'
    },
    { 
      icon: HiDocumentText, 
      title: 'Consultation', 
      desc: 'Professional advisory services for legal risk assessment and compliance.',
      link: '/services'
    },
  ]

    const whyChooseUs = [
    {
        icon: FaBalanceScale,
        title: "Experienced Attorneys",
        desc: "Our lawyers bring years of experience handling complex legal matters."
    },
    {
        icon: FaUserTie,
        title: "Professional Service",
        desc: "We maintain the highest standards of professionalism and integrity."
    },
    {
        icon: FaShieldAlt,
        title: "Client Protection",
        desc: "Your legal interests and confidentiality are always protected."
    },
    {
        icon: FaHandshake,
        title: "Trusted Partnership",
        desc: "We build long-term relationships with our clients based on trust."
    }
    ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      desc: 'We listen to your needs and analyze your legal situation thoroughly.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      desc: 'Our experts craft a customized legal strategy aligned with your goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      desc: 'We execute the strategy with precision and proactive communication.'
    },
    {
      step: '04',
      title: 'Resolution',
      desc: 'Achieving the best possible outcome for your case or matter.'
    },
  ]

  const stats = [
    { value: '500+', label: 'Cases Won' },
    { value: '30+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Legal Experts' },
  ]

  const teamPreview = [
    {
      name: 'James Richardson',
      role: 'Senior Partner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Lead Litigation',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'David Chen',
      role: 'Corporate Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
  ]


  return (
    <div className="min-h-screen">
      {/* Hero Section - 2 Column Layout */}
      <section className="relative overflow-hidden bg-primary-500 min-h-screen flex items-center">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-500 to-primary-900"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-300/10 border border-gold-300/50 rounded-full mb-6">
                <FaAward className="text-gold-500 text-sm" />
                <span className="text-gold-500 font-sans text-sm font-medium">Trusted Legal Excellence</span>
              </div>
              
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-neutral-50 mb-6 leading-tight">
                Protecting Your <span className="text-gold-500">Rights</span>, <br />
                Securing Your <span className="text-gold-500">Future</span>
              </h1>

              <p className="font-sans text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Premier legal solutions for corporate, litigation, and business matters. With over 30 years of excellence, we deliver results that matter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-neutral-900 font-sans font-bold rounded-lg hover:bg-gold-600 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/20"
                >
                  Free Consultation
                  <FaArrowRight className="text-sm" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-sans font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <FaPlay className="text-xs" />
                  Our Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-neutral-50 text-sm mb-4">Trusted by industry leaders</p>
                <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="font-serif font-bold text-2xl lg:text-3xl text-gold-500">{stat.value}</div>
                      <div className="text-neutral-50 text-xs sm:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Image/Visual */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=700&fit=crop" 
                    alt="Professional law firm"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
                </div>
                
                {/* Floating Card */}
                {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 z-20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
                      <FaBalanceScale className="text-gold-500 text-xl" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-neutral-900">98% Success Rate</div>
                      <div className="text-gray-500 text-sm">Winning Cases</div>
                    </div>
                  </div>
                </div> */}

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section - Modern Cards */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-500 font-sans text-sm font-medium rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
              Comprehensive Legal <span className="text-gold-500">Solutions</span>
            </h2>
            <p className="font-sans text-lg text-gray-600 leading-relaxed">
              Delivering expert legal services across multiple practice areas with a commitment to excellence and client satisfaction.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                    <Icon className="text-2xl text-gold-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-serif font-bold text-xl text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-primary-500 font-sans font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-sans font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
            >
              View All Services
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=500&fit=crop" 
                  alt="Our firm"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Decorative */}
              <div className="absolute top-8 -left-8 w-full h-full border-2 border-gold-500 rounded-2xl -z-0"></div>
            </div>

            {/* Right - Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-gold-500/10 text-gold-600 font-sans text-sm font-medium rounded-full mb-4">
                About Our Firm
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-6">
                A Legacy of <span className="text-gold-500">Legal Excellence</span>
              </h2>
              <p className="font-sans text-lg text-gray-600 mb-6 leading-relaxed">
                At Lexus & Associates, we believe that great legal representation goes beyond winning cases—it's about building lasting relationships and protecting your interests with integrity and expertise.
              </p>
              <p className="font-sans text-gray-600 mb-8 leading-relaxed">
                Our team of seasoned attorneys brings decades of combined experience in corporate law, litigation, and business advisory services. We pride ourselves on delivering personalized attention and strategic solutions tailored to your unique needs.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-gold-500 text-xl" />
                  <span className="font-sans text-neutral-700">Client-Focused Approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-gold-500 text-xl" />
                  <span className="font-sans text-neutral-700">Proven Track Record</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-gold-500 text-xl" />
                  <span className="font-sans text-neutral-700">Industry Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-gold-500 text-xl" />
                  <span className="font-sans text-neutral-700">Global Perspective</span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-sans font-bold rounded-lg hover:bg-neutral-800 transition-all duration-300"
              >
                More About Us
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs
        subtitle="Why Choose Us"
        title={
          <>
            Built on <span className="text-gold-500">Trust & Excellence</span>
          </>
        }
        description="We combine legal expertise with unwavering dedication to achieve the best outcomes for our clients."
        items={whyChooseUs}
      />

      {/* How We Work - Timeline */}
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

      {/* Team Preview Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold-500/10 text-gold-600 font-sans text-sm font-medium rounded-full mb-4">
              Our Team
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
              Meet Our <span className="text-gold-500">Experts</span>
            </h2>
            <p className="font-sans text-lg text-gray-600 leading-relaxed">
              Experienced attorneys dedicated to protecting your interests and achieving your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamPreview.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-serif font-bold text-xl text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <p className="font-sans text-gold-500 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-sans font-bold rounded-lg hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              Meet Full Team
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="font-sans text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation with our experienced attorneys. We're here to help you navigate your legal challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-neutral-900 font-sans font-bold rounded-lg hover:bg-gold-600 transition-all duration-300 hover:shadow-xl"
            >
              Get Free Consultation
              <FaArrowRight className="text-sm" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-sans font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
