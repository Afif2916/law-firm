# Architecture & Setup Guide

## 📋 Table of Contents
1. [New Multi-Page Architecture](#new-multi-page-architecture)
2. [React Router Setup](#react-router-setup)
3. [Responsive Design Implementation](#responsive-design-implementation)
4. [Navbar Features](#navbar-features)
5. [Migration from Single-Page to Multi-Page](#migration-from-single-page-to-multi-page)
6. [Customization Examples](#customization-examples)

---

## New Multi-Page Architecture

The website has been refactored from a single-page scrolling layout to a multi-page application using React Router.

### Before (Single-Page)
```
App.jsx
├── Navbar (with scroll detection)
├── Hero (section with id="home")
├── About (section with id="about")
├── Services (section with id="services")
├── Team (section with id="team")
└── Contact (section with id="contact")
```

### After (Multi-Page)
```
App.jsx (with React Router)
├── Navbar (with Link navigation)
├── Routes
│   ├── <Home /> (/home - Hero + Services preview)
│   ├── <About /> (/about)
│   ├── <Services /> (/services)
│   ├── <Team /> (/team)
│   └── <Contact /> (/contact)
└── Footer
```

---

## React Router Setup

### Installation
React Router DOM is already installed. If needed:
```bash
npm install react-router-dom
```

### App.jsx Router Configuration

The main App component wraps everything with BrowserRouter and defines all routes:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
```

### Navigation Links in Navbar

The navbar uses React Router's `Link` component and `useLocation` hook:

```jsx
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path
  
  return (
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    // ...
  )
}
```

---

## Responsive Design Implementation

### Breakpoints Used

- **Mobile**: 320px - 640px (xs to sm)
- **Tablet**: 641px - 1024px (md to lg)
- **Desktop**: 1025px+ (lg+, xl)

### TailwindCSS Responsive Classes

```jsx
// Example: Text size scaling
<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
  Title
</h1>

// Example: Grid layout
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {/* Card */}
</div>

// Example: Padding scaling
<div className="px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Mobile-First Approach

All components are built mobile-first:
1. Base styles apply to mobile (320px)
2. `sm:` prefix adds tablet styles
3. `md:` and `lg:` prefixes add larger screen styles

Example pattern:
```jsx
<div className="
  h-80              /* Mobile: 320px height */
  sm:h-96           /* Tablet: 384px height */
  lg:h-full         /* Desktop: 100% height */
  px-4              /* Mobile: 16px padding */
  sm:px-6           /* Tablet: 24px padding */
  lg:px-8           /* Desktop: 32px padding */
">
```

---

## Navbar Features

### 1. Active Link Detection

The navbar automatically highlights the current page:

```jsx
const location = useLocation()
const isActive = (path) => location.pathname === path

// In the nav items:
{isActive(item.path) && (
  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gold-400 to-gold-600"></span>
)}
```

### 2. Sticky Blur Background

When scrolling, the navbar becomes sticky with a blur effect:

```jsx
const [isScrolled, setIsScrolled] = useState(false)

// On scroll Y > 50px:
// Class changes to: 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
```

### 3. Mobile Hamburger Menu

Smooth dropdown animation for mobile navigation:

```jsx
{isMobileMenuOpen ? 'max-h-80' : 'max-h-0'}  /* Smooth collapse */
```

### 4. Auto-Close Menu on Navigation

Menu automatically closes when navigating to a different page:

```jsx
useEffect(() => {
  setIsMobileMenuOpen(false)
}, [location])
```

---

## Migration from Single-Page to Multi-Page

### What Changed

1. **Navigation**: Using React Router's `<Link>` instead of scroll-to-section buttons
2. **Hero**: Now only on home page with parallax
3. **Contact Form**: Moved to dedicated `/contact` page
4. **Footer**: New footer component added
5. **Imports**: Page components imported and routed in App.jsx

### What Stayed the Same

- TailwindCSS styling
- Component animations
- Color scheme
- Typography
- Overall design aesthetic

### Key Differences in Implementation

#### Before (Single-Page)
```jsx
// Navbar scrolling to section
<button onClick={() => scrollToSection('about')}>About</button>

// Contact form in main app
<Contact />
```

#### After (Multi-Page)
```jsx
// Navbar routing to page
<Link to="/about">About</Link>

// Contact is a separate page
<Route path="/contact" element={<Contact />} />
```

---

## Customization Examples

### 1. Add a New Page

Step 1: Create new file `src/pages/Blog.jsx`
```jsx
const Blog = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Your blog content */}
    </div>
  )
}
export default Blog
```

Step 2: Import in `App.jsx`
```jsx
import Blog from './pages/Blog'
```

Step 3: Add route
```jsx
<Route path="/blog" element={<Blog />} />
```

Step 4: Add to navbar (Navbar.jsx)
```jsx
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  // ...
]
```

### 2. Change Page Title on Route Change

```jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  
  useEffect(() => {
    const titles = {
      '/': 'Home - Lexus & Associates',
      '/about': 'About Us - Lexus & Associates',
      '/services': 'Services - Lexus & Associates',
      '/team': 'Our Team - Lexus & Associates',
      '/contact': 'Contact - Lexus & Associates',
    }
    document.title = titles[location.pathname] || 'Lexus & Associates'
  }, [location])
}
```

### 3. Add Animated Page Transitions

Create `src/components/PageTransition.jsx`:
```jsx
import { useEffect, useState } from 'react'

export const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <div className={isVisible ? 'opacity-100' : 'opacity-0'} 
         style={{transition: 'opacity 300ms ease-in-out'}}>
      {children}
    </div>
  )
}
```

Then wrap page content:
```jsx
<PageTransition>
  <main className="flex-grow">
    <Routes>
      {/* Routes */}
    </Routes>
  </main>
</PageTransition>
```

### 4. Add Breadcrumb Navigation

```jsx
import { useLocation, Link } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  const paths = location.pathname.split('/').filter(Boolean)
  
  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      {paths.map((path, i) => (
        <span key={i}>
          {' / '}
          <Link to={`/${paths.slice(0, i + 1).join('/')}`}>
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </Link>
        </span>
      ))}
    </nav>
  )
}
```

### 5. Modify Service Cards

Edit `src/pages/Services.jsx`:
```jsx
const services = [
  {
    id: 1,
    title: 'Corporate Law',
    icon: '🏢',
    description: 'Strategic legal guidance...',
    features: [
      'Business Formation',
      'M&A Support',
      'Corporate Governance',
    ],
  },
  // Add/modify services here
]
```

### 6. Update Team Members

Edit `src/pages/Team.jsx`:
```jsx
const team = [
  {
    id: 1,
    name: 'New Attorney',
    role: 'Senior Counsel',
    bio: 'Experienced in...',
    image: 'https://...',
  },
  // Add/modify team members
]
```

### 7. Change Logo

Edit `src/components/Navbar.jsx`:
```jsx
{/* Change this emoji or add an image */}
<div className="text-3xl font-bold text-gold-500">⚖</div>

{/* Or use an image */}
<img src="/logo.png" alt="Logo" className="h-10 w-10" />
```

---

## Performance Considerations

### Code Splitting

React Router automatically code splits pages. Each route only loads what's needed.

### Image Optimization

Currently using Unsplash which provides optimized images. For production:
```jsx
// Use Next.js Image component or lazy loading
<img loading="lazy" src="..." alt="..." />
```

### Lazy Loading Routes

For large applications, you can lazy-load routes:
```jsx
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

// In Routes:
<Suspense fallback={<div>Loading...</div>}>
  <Route path="/" element={<Home />} />
</Suspense>
```

---

## Testing the Responsive Design

### Using Browser Tools

1. Open DevTools (F12)
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Test sizes: 320px (mobile), 768px (tablet), 1440px (desktop)

### Test Different Screen Sizes

- iPhone SE: 375px
- iPad: 768px
- Desktop: 1440px
- Large Desktop: 1920px

---

## Troubleshooting

### Route Not Working
- Make sure file path is correct in import
- Check that path in `<Route>` matches navigation links
- Clear browser cache and restart dev server

### Navbar Not Highlighting Active Link
- Ensure `useLocation()` is being used in Navbar
- Check that paths in `navItems` match `<Route>` paths exactly
- Verify `isActive()` function logic

### Responsive Classes Not Working
- Check that TailwindCSS is properly compiled
- Verify class names follow TailwindCSS syntax
- Restart dev server if classes were just added

### Mobile Menu Not Closing
- Verify `useEffect` with `[location]` dependency exists
- Check that menu is properly toggled on click
- Ensure mobile breakpoint is set correctly

---

## Quick Reference

### Essential Imports
```jsx
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
```

### Common Patterns

**Link to page:**
```jsx
<Link to="/about" className="...">About</Link>
```

**Get current route:**
```jsx
const location = useLocation()
const isHomePage = location.pathname === '/'
```

**Responsive container:**
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

**Responsive grid:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

**Responsive text:**
```jsx
<h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
```

---

## Next Steps

1. Test the website on different screen sizes
2. Customize colors, content, and branding
3. Set up form submission (email service, Firebase, backend API)
4. Add analytics (Google Analytics, Mixpanel)
5. Deploy to production (Vercel, Netlify, or your hosting)
6. Set up custom domain
7. Add SSL certificate
8. Monitor performance

---

**For detailed questions, refer to:**
- React Router Docs: https://reactrouter.com
- TailwindCSS Docs: https://tailwindcss.com
- React Docs: https://react.dev
