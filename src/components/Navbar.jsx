import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Premium navbar with React Router navigation, mobile hamburger menu, and sticky blur background
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Track scroll position for blur background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when page changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
  ]

  // Check if current page matches nav item
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Interactive Link to Home */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 group"
          >
            <div className="text-3xl font-bold text-gold-500 group-hover:scale-110 transition-transform duration-300">
              CL
            </div>
            <div>
              <h1
                className={`font-serif font-bold text-2xl transition-colors duration-300 ${
                  isScrolled ? 'text-primary-800' : 'text-primary-800'
                }`}
              >
                Contoh Lawfirm
              </h1>
              <p
                className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-gold-500'
                }`}
              >
                & Associates
              </p>
            </div>
          </Link>

          {/* Navigation Menu - Desktop */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 font-sans font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-gold-500'
                    : isScrolled
                    ? 'text-primary-800 hover:text-gold-500'
                    : 'text-primary-800 hover:text-gold-500'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'hover:bg-primary-100'
                : 'hover:bg-white hover:bg-opacity-10'
            }`}
          >
            <svg
              className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-primary-800' : 'text-primary-800'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Smooth Dropdown Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'max-h-80' : 'max-h-0'
          }`}
        >
          <div
            className={`px-4 py-4 space-y-2 border-t transition-colors duration-300 ${
              isScrolled
                ? 'border-gray-200 bg-gray-50'
                : 'border-white border-opacity-10 bg-gray-50 bg-opacity-95'
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg font-sans font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gold-500 text-primary-900 font-semibold'
                    : isScrolled
                    ? 'text-primary-800 hover:bg-primary-100'
                    : 'text-primary-800 hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
