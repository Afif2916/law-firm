import React, { useState } from 'react'

// Contact page with form and contact information
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const phoneNumber = '+62895363839759'
  const phoneWhatsApp = '0895363839759'
  const email = 'contact@lexusassociates.com'
  const address = '123 Legal Avenue, Law District, City 12345'

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
            Get In <span className="text-gold-500">Touch</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-gray-300">
            We're here to help with your legal needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left - Contact Information */}
            <div className="animate-slide-in-left">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-neutral-900 mb-8">
                Contact <span className="text-gold-500">Information</span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-gray-600 mb-12 leading-relaxed">
                Have questions? Our team is ready to provide expert legal guidance for your business needs. Contact us today for a consultation.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 sm:space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold-500 text-primary-900">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-neutral-900 mb-2">Office Location</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold-500 text-primary-900">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v1M3 5l6.86 20.121a2 2 0 003.28 0L21 5m-9-3v2m0 16v2" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-neutral-900 mb-2">Phone Number</h3>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-gold-500 hover:text-gold-600 transition-colors duration-300 text-sm sm:text-base"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold-500 text-primary-900">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-neutral-900 mb-2">Email Address</h3>
                    <a
                      href={`mailto:${email}`}
                      className="text-gold-500 hover:text-gold-600 transition-colors duration-300 text-sm sm:text-base"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold-500 text-primary-900">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.719.738 5.38 2.136 7.718L2.885 23.129l8.06-2.629a9.844 9.844 0 004.761 1.204h.004c5.428 0 9.835-4.41 9.835-9.85 0-2.624-.648-5.094-1.881-7.263-1.233-2.17-2.977-4.04-5.095-5.303-2.117-1.262-4.57-1.937-7.156-1.937z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-neutral-900 mb-2">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${phoneWhatsApp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-500 hover:text-gold-600 transition-colors duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
                    >
                      Chat With Us
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-sans font-semibold text-lg text-primary-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600 font-sans text-sm sm:text-base">
                  <p>Monday - Friday: 09:00 AM - 06:00 PM</p>
                  <p>Saturday: 10:00 AM - 02:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 sm:p-10 lg:p-8 shadow-lg border border-gray-200">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-neutral-900 mb-8">Send us a Message</h3>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-500 text-white rounded-lg font-sans font-semibold animate-fade-in-up">
                    ✓ Thank you! We'll contact you shortly.
                  </div>
                )}

                <div className="space-y-4 sm:space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block font-sans font-semibold text-primary-900 mb-2 text-sm sm:text-base">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-primary-900 placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors duration-300 font-sans text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-sans font-semibold text-primary-900 mb-2 text-sm sm:text-base">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-primary-900 placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors duration-300 font-sans text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-sans font-semibold text-primary-900 mb-2 text-sm sm:text-base">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-primary-900 placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors duration-300 font-sans text-sm sm:text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-sans font-semibold text-primary-900 mb-2 text-sm sm:text-base">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-primary-900 placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors duration-300 font-sans text-sm sm:text-base"
                      placeholder="Legal consultation inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-sans font-semibold text-primary-900 mb-2 text-sm sm:text-base">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-primary-900 placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors duration-300 font-sans resize-none text-sm sm:text-base"
                      placeholder="Tell us about your legal needs..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gold-500 text-neutral-900 font-sans font-bold rounded-lg hover:bg-gold-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-base sm:text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Optional */}
      <section className="bg-gray-200 h-96 sm:h-96 lg:h-80 flex items-center justify-center">
        <div className="text-center">
          <p className="font-sans text-gray-500">Map integration coming soon</p>
        </div>
      </section>
    </div>
  )
}

export default Contact
