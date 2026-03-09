import React from 'react'

const Team = () => {
  const team = [
    {
      id: 1,
      name: 'James Richardson',
      role: 'Senior Partner & Founder',
      bio: 'Former judge with 30+ years of experience in corporate and international law.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Lead Litigation Attorney',
      bio: 'Renowned for her strategic approach in complex commercial litigation cases.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Corporate Law Specialist',
      bio: 'Expert in M&A transactions and corporate restructuring with global experience.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Emma Johnson',
      role: 'Compliance & Regulatory',
      bio: 'Specializes in regulatory frameworks and compliance solutions for financial institutions.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      id: 5,
      name: 'Michael Torres',
      role: 'Contract Drafting Specialist',
      bio: 'Meticulous in contract creation with expertise across multiple industries.',
      image: 'https://images.unsplash.com/photo-1507237998391-03c146fc2e94?w=400&h=400&fit=crop',
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      role: 'Investment Advisory',
      bio: 'Strategic advisor for investment opportunities and portfolio structuring.',
      image: 'https://images.unsplash.com/photo-1502126613773-3d29598e4585?w=400&h=400&fit=crop',
    },
  ]

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500 rounded-full opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-serif font-bold text-5xl text-primary-900 mb-4">
            Meet Our <span className="text-gold-500">Expert Team</span>
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to your success
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-gold-600 rounded"></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group text-center"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500 to-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="mb-4">
                <h3 className="font-serif font-bold text-2xl text-primary-900 mb-2 group-hover:text-gold-500 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-sans font-semibold text-gold-500 text-sm mb-3">
                  {member.role}
                </p>
                <p className="font-sans text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-10 h-10 rounded-full bg-gold-500 text-white flex items-center justify-center hover:bg-gold-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gold-500 text-white flex items-center justify-center hover:bg-gold-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
