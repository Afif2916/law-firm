import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

// Professional footer component
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-50 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div>

            
            <img
                src={logo}
                alt="Contoh Lawfirm"
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 mb-5"
            />
           
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Premier legal solutions for corporate, litigation, and business matters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Team', path: '/team' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-600 hover:text-primary-500 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex items-center gap-2">
                <span className="text-gold-500">📧</span>
                <a href="mailto:contact@lexusassociates.com" className="hover:text-primary-500 transition-colors duration-300">
                  contact@lexusassociates.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-500">📞</span>
                <a href="tel:+1-800-LAW-FIRM" className="hover:text-primary-500 transition-colors duration-300">
                  +1-800-LAW-FIRM
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-500">💬</span>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors duration-300"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-sm">
              © {currentYear} Lexus & Associates. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
