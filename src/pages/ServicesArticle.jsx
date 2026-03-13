import React, { useEffect } from 'react'
import corporateIcon from "../assets/corporate.webp"
import litigationIcon from "../assets/litigation.webp"
import consultationIcon from "../assets/consultation.webp"
import contractIcon from "../assets/contract.webp"
import compilanceIcon from "../assets/compilance.jpg"
import investmentIcon from "../assets/invest.jpg"
import WhyChooseUs from '../components/WhyChooseUs'
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

/**
 * SEO Meta Information for ServicesArticle.jsx
 * 
 * Meta Title: Comprehensive Corporate Law Firm Services | [Firm Name]
 * Meta Description: Expert legal services including corporate law, litigation, contract drafting, and compliance. Trusted by businesses for professional legal consultation and representation.
 * SEO Keywords: law firm services, legal consultation, corporate law, litigation lawyer, contract drafting, legal compliance, business law, commercial litigation, investment advisory
 * 
 * Article Headings:
 * H1: Legal Services - Comprehensive Corporate Law Solutions
 * H2: Introduction to Our Legal Services
 * H2: Corporate Law Services
 * H2: Litigation Services
 * H2: Legal Consultation Services
 * H2: Contract Law Services
 * H2: Compliance Services
 * H2: Investment Advisory Services
 * H2: Why Choose Our Law Firm
 * H2: Schedule Your Legal Consultation
 */

// Service articles data with detailed content for SEO
const serviceArticles = [
  {
    id: 'corporate-law',
    title: 'Corporate Law',
    icon: corporateIcon,
    shortSummary: 'Strategic legal guidance for business formation, governance, M&A transactions, and corporate compliance.',
    detailedExplanation: 'Our corporate law practice provides comprehensive legal solutions for businesses of all sizes, from startups to established corporations. We understand that corporate legal matters require a delicate balance between protecting your interests and enabling business growth. Our experienced attorneys assist with business entity formation, corporate governance structures, merger and acquisition transactions, and ongoing compliance requirements. We work closely with board members, executives, and shareholders to ensure that every corporate action is legally sound and strategically advantageous.',
    keyBenefits: [
      'Expert guidance through complex merger and acquisition processes',
      'Comprehensive corporate governance frameworks',
      'Strategic business formation and structuring',
      'Protection of shareholder interests and rights',
      'Compliance with all regulatory requirements',
    ],
    whenNeeded: [
      'Starting a new business or enterprise',
      'Expanding through mergers or acquisitions',
      ' restructuring corporate governance',
      'Drafting or revising shareholder agreements',
      'Navigating complex regulatory requirements',
    ],
    includedServices: [
      'Business Formation & Registration',
      'Merger & Acquisition Support',
      'Corporate Governance',
      'Shareholder Agreements',
      'Board Advisory Services',
      'Corporate Restructuring',
    ],
  },
  {
    id: '1',
    title: 'Cihuy',
    icon: litigationIcon,
    shortSummary: 'Aggressive representation in civil, commercial, and corporate disputes with proven track record of success.',
    detailedExplanation: 'When disputes arise, you need a legal team that is ready to fight for your interests. Our litigation practice handles a wide range of civil, commercial, and corporate disputes with a track record of successful outcomes. We approach every case with careful strategic planning, whether through negotiation, mediation, or aggressive courtroom representation. Our attorneys are experienced in handling complex commercial litigation, contract disputes, partnership disagreements, and appellate matters. We understand that litigation can be stressful for businesses, and we work tirelessly to achieve the best possible resolution while minimizing disruption to your operations.',
    keyBenefits: [
      'Aggressive and strategic courtroom representation',
      'Proven track record in commercial disputes',
      'Skilled negotiation and mediation',
      'Comprehensive appellate services',
      'Minimized business disruption during legal proceedings',
    ],
    whenNeeded: [
      'Facing civil or commercial lawsuits',
      'Contract disputes with business partners',
      'Partnership or shareholder conflicts',
      'Need for appellate representation',
      'Enforcement of legal rights and remedies',
    ],
    includedServices: [
      'Tag 1',
      'TAG 2 ',
      'TAG 3',
      'TAG 4',
      'TAG 5',
      'TAG 6',
    ],
  },
  {
    id: 'consultation',
    title: 'Legal Consultation',
    icon: consultationIcon,
    shortSummary: 'Expert advisory services on complex legal matters affecting your business operations and growth strategy.',
    detailedExplanation: 'Our legal consultation services provide businesses with the expert guidance needed to navigate complex legal landscapes and make informed decisions. We believe that proactive legal counsel is essential for preventing problems before they arise. Our experienced attorneys offer comprehensive advisory services covering business operations, strategic planning, risk assessment, and compliance reviews. Whether you are launching a new product, entering a new market, or facing a complex business decision, our legal consultation team provides the insights and expertise you need to move forward with confidence.',
    keyBenefits: [
      'Proactive identification of legal risks',
      'Strategic guidance for business growth',
      'Comprehensive compliance reviews',
      'Informed decision-making with legal expertise',
      'Prevention of costly legal problems',
    ],
    whenNeeded: [
      'Planning significant business decisions',
      'Entering new markets or industries',
      'Developing new products or services',
      'Conducting periodic compliance reviews',
      'Addressing complex regulatory questions',
    ],
    includedServices: [
      'Business Advice',
      'Legal Risk Assessment',
      'Compliance Review',
      'Strategic Planning',
      'Regulatory Advisory',
      'Transaction Support',
    ],
  },
  {
    id: 'contract-law',
    title: 'Contract Law',
    icon: contractIcon,
    shortSummary: 'Precision-crafted contracts and agreements protecting your interests in all business transactions.',
    detailedExplanation: 'Well-drafted contracts are the foundation of successful business relationships. Our contract law practice focuses on creating precise, enforceable agreements that protect your interests in every transaction. We understand that every contract must balance comprehensive protection with practical enforceability. Our attorneys draft, review, and negotiate a wide variety of commercial agreements, from service contracts to complex partnership arrangements. We ensure that your contracts address all potential scenarios, include appropriate protections, and comply with applicable laws. When disputes arise, we also provide expert guidance on contract enforcement and interpretation.',
    keyBenefits: [
      'Precisely drafted agreements tailored to your needs',
      'Comprehensive protection of your legal interests',
      'Expert negotiation of favorable terms',
      'Clear dispute resolution mechanisms',
      'Compliance with all legal requirements',
    ],
    whenNeeded: [
      'Entering new business relationships',
      'Negotiating significant agreements',
      'Reviewing contracts before signing',
      'Enforcing existing contractual rights',
      'Modifying or terminating agreements',
    ],
    includedServices: [
      'Service Agreements',
      'Partnership Contracts',
      'Non-Disclosure Agreements',
      'Employment Contracts',
      'Vendor Agreements',
      'License Agreements',
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance',
    icon: compilanceIcon,
    shortSummary: 'Comprehensive compliance solutions ensuring your organization meets all regulatory requirements.',
    detailedExplanation: 'In today\'s complex regulatory environment, maintaining compliance is essential for business survival and success. Our compliance practice helps organizations navigate the intricate web of regulations affecting their industry. We provide comprehensive compliance solutions, from initial assessments to ongoing monitoring and reporting. Our attorneys stay current with changing regulations and help you implement effective compliance programs that minimize risk and avoid costly penalties. Whether you need help with regulatory licensing, audit preparation, or developing internal compliance procedures, we have the expertise to guide you through every aspect of regulatory compliance.',
    keyBenefits: [
      'Comprehensive regulatory compliance frameworks',
      'Reduced risk of penalties and sanctions',
      'Streamlined audit preparation processes',
      'Proactive monitoring of regulatory changes',
      'Peace of mind through proper compliance',
    ],
    whenNeeded: [
      'Starting operations requiring licenses',
      'Preparing for regulatory audits',
      'Developing compliance programs',
      'Responding to regulatory inquiries',
      'Navigating new regulatory requirements',
    ],
    includedServices: [
      'Regulatory Compliance',
      'License Applications',
      'Audit Preparation',
      'Regulatory Updates',
      'Compliance Training',
      'Risk Assessment',
    ],
  },
  {
    id: 'investment-advisory',
    title: 'Investment Advisory',
    icon: investmentIcon,
    shortSummary: 'Legal structuring and due diligence services for investment opportunities and portfolio management.',
    detailedExplanation: 'Our investment advisory services provide essential legal support for investors and businesses seeking to capitalize on investment opportunities. We understand that successful investing requires careful legal structuring and thorough due diligence. Our attorneys help clients evaluate investment opportunities, structure transactions for optimal tax efficiency and liability protection, and manage ongoing portfolio legal matters. We work with individual investors, family offices, and institutional investors to develop investment strategies that align with their goals while minimizing legal risks. From private equity investments to real estate transactions, we provide the legal expertise needed to make informed investment decisions.',
    keyBenefits: [
      'Thorough due diligence on investment opportunities',
      'Tax-efficient investment structuring',
      'Protection of investment capital',
      'Comprehensive portfolio legal management',
      'Expertise across multiple asset classes',
    ],
    whenNeeded: [
      'Evaluating new investment opportunities',
      'Structuring complex transactions',
      'Conducting due diligence reviews',
      'Managing investment portfolio legal matters',
      'Optimizing tax efficiency of investments',
    ],
    includedServices: [
      'Due Diligence Review',
      'Investment Structure',
      'Portfolio Management',
      'Tax Optimization',
      'Securities Advisory',
      'Transaction Documentation',
    ],
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

// Reusable Service Article Card Component
const ServiceArticleCard = ({ service, index }) => {
  const isEven = index % 2 === 0
  
  return (
    <article 
      id={service.id}
      className="py-16 sm:py-20 lg:py-24 border-t border-gray-200"
      aria-labelledby={`service-title-${service.id}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image Section */}
          <div className={`relative rounded-xl overflow-hidden shadow-2xl ${!isEven ? 'lg:order-2' : ''}`}>
            <img
              src={service.icon}
              alt={service.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
            {/* <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-3 py-1 bg-gold-500 text-neutral-900 text-sm font-semibold rounded-full">
                Legal Service
              </span>
            </div> */}
          </div>

          {/* Content Section */}
          <div className={!isEven ? 'lg:order-1' : ''}>
            <h2 
              id={`service-title-${service.id}`}
              className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4"
            >
              {service.title}
            </h2>
            
            <p className="font-sans text-lg text-gray-600 mb-6 leading-relaxed">
              {service.shortSummary}
            </p>

            {/* <div className="prose prose-lg max-w-none mb-8">
              <p className="font-sans text-gray-700 leading-relaxed">
                {service.detailedExplanation}
              </p>
            </div> */}

            {/* Key Benefits */}
            {/* <div className="mb-8">
              <h3 className="font-serif font-bold text-xl text-neutral-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Key Benefits
              </h3>
              <ul className="space-y-3">
                {service.keyBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* When Clients Need This Service */}
            {/* <div className="mb-8">
              <h3 className="font-serif font-bold text-xl text-neutral-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                When You Need This Service
              </h3>
              <ul className="space-y-3">
                {service.whenNeeded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center mt-0.5 text-xs">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Included Services */}
            <div className="mb-8">
              <h3 className="font-serif font-bold text-xl text-neutral-900 mb-4">
                Keyword
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.includedServices.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 font-sans text-gray-700 bg-gray-50 px-4 py-2 rounded-lg"
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-neutral-900 font-sans font-bold rounded-lg hover:bg-gold-600 transition-all duration-300"
            >
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

// Consultation CTA Section
const ConsultationCTA = () => {
  return (
    <section 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-600 to-primary-800"
      aria-labelledby="consultation-cta-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          id="consultation-cta-title"
          className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4"
        >
          Schedule Your Legal Consultation Today
        </h2>
        <p className="font-sans text-lg text-white mb-8 max-w-2xl mx-auto">
          Our experienced attorneys are ready to discuss your legal needs and help you navigate complex legal challenges. Contact us now to schedule a consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gold-500 text-neutral-900 font-sans font-bold rounded-lg hover:bg-gold-600 transition-all duration-300 hover:scale-105"
          >
            Contact Us Now
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-sans font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
          >
            Call: +1 (234) 567-890
          </a>
        </div>
      </div>
    </section>
  )
}

// Main ServicesArticle Component
const ServicesArticle = () => {
  // Set page metadata for SEO
  useEffect(() => {
    // Update document title
    document.title = 'Comprehensive Corporate Law Firm Services | Legal Consultation'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert legal services including corporate law, litigation, contract drafting, and compliance. Trusted by businesses for professional legal consultation and representation.')
    } else {
      const newMeta = document.createElement('meta')
      newMeta.name = 'description'
      newMeta.content = 'Expert legal services including corporate law, litigation, contract drafting, and compliance. Trusted by businesses for professional legal consultation and representation.'
      document.head.appendChild(newMeta)
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      const newKeywords = document.createElement('meta')
      newKeywords.name = 'keywords'
      newKeywords.content = 'law firm services, legal consultation, corporate law, litigation lawyer, contract drafting, legal compliance, business law, commercial litigation, investment advisory'
      document.head.appendChild(newKeywords)
    }
  }, [])

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="bg-neutral-900 text-white py-16 sm:py-20 lg:py-24"
        aria-labelledby="hero-title"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            id="hero-title"
            className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6"
          >
            Legal <span className="text-gold-500">Services</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to your business needs. From corporate law to litigation, our experienced team provides expert representation and strategic counsel.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section 
        className="py-16 sm:py-20 lg:py-24 bg-white"
        aria-labelledby="intro-title"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              id="intro-title"
              className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-6"
            >
              Introduction to Our Legal Services
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="font-sans text-gray-700 leading-relaxed text-lg">
              At our law firm, we understand that navigating the legal landscape can be complex and challenging for businesses and individuals alike. Whether you are starting a new venture, facing a legal dispute, or seeking to protect your business interests, having the right legal team by your side is essential. Our comprehensive range of <strong>legal services</strong> is designed to address the diverse needs of our clients, from <strong>corporate law</strong> and <strong>litigation</strong> to <strong>contract drafting</strong> and <strong>legal compliance</strong>.
            </p>
            <p className="font-sans text-gray-700 leading-relaxed text-lg mt-6">
              With years of experience serving businesses across various industries, our attorneys bring a deep understanding of both the legal and practical aspects of your challenges. We believe in building long-term relationships with our clients, providing personalized attention and tailored legal solutions that align with your specific goals and objectives. Our commitment to excellence and client satisfaction has made us a trusted partner for businesses seeking <strong>professional legal consultation</strong> and representation.
            </p>
            <p className="font-sans text-gray-700 leading-relaxed text-lg mt-6">
              Explore our range of services below to learn how we can assist you with your legal needs. Each service area is designed to provide comprehensive support, ensuring that you have the legal foundation necessary to succeed in today's competitive business environment.
            </p>
          </div>
        </div>
      </section>

      {/* Service Article Sections */}
      <main>
        {serviceArticles.map((service, index) => (
          <ServiceArticleCard 
            key={service.id} 
            service={service} 
            index={index} 
          />
        ))}
      </main>

      {/* Why Choose Our Firm Section */}
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

      {/* Consultation CTA Section */}
      <ConsultationCTA />
    </div>
  )
}

export default ServicesArticle

// Export SEO metadata for external use
export const servicesArticleSEO = {
  metaTitle: 'Comprehensive Corporate Law Firm Services | Legal Consultation',
  metaDescription: 'Expert legal services including corporate law, litigation, contract drafting, and compliance. Trusted by businesses for professional legal consultation and representation.',
  keywords: [
    'law firm services',
    'legal consultation',
    'corporate law',
    'litigation lawyer',
    'contract drafting',
    'legal compliance',
    'business law',
    'commercial litigation',
    'investment advisory',
  ],
  headings: [
    'Legal Services - Comprehensive Corporate Law Solutions',
    'Introduction to Our Legal Services',
    'Corporate Law Services',
    'Litigation Services',
    'Legal Consultation Services',
    'Contract Law Services',
    'Compliance Services',
    'Investment Advisory Services',
    'Why Choose Our Law Firm',
    'Schedule Your Legal Consultation',
  ],
}
