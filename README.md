# Lexus & Associates - Premium Law Firm Website

A modern, fully responsive multi-page corporate website for a premium law firm built with React, Vite, React Router, and TailwindCSS.

## ✨ Key Features

- **Multi-Page Architecture**: Separate pages for Home, About, Services, Team, and Contact using React Router
- **Elegant Navigation**: Fixed navbar with smooth transitions, active link indicators, and mobile hamburger menu
- **Parallax Scrolling**: Beautiful parallax effects on the hero section of the home page
- **Fully Responsive**: Perfect on mobile (320px), tablet (768px), laptop (1024px), and desktop (1440px) devices
- **Premium Design**: Dark blue (#1e3a8a) with gold accents (#d4af37) for a corporate aesthetic
- **Modern Components**: Reusable, well-structured React components with proper state management
- **Smooth Animations**: Fade-in, slide-in, and hover effects using TailwindCSS
- **Sticky Blur Navbar**: Background blur effect when scrolling for enhanced visual hierarchy
- **Mobile Hamburger Menu**: Smooth dropdown animation for mobile navigation
- **Professional Typography**: Serif fonts for headings (Cormorant Garamond), sans-serif for body (Inter)
- **Contact Integration**: WhatsApp, email, and phone contact options
- **Performance Optimized**: Fast loading with efficient CSS and minimal JavaScript

## 📁 Project Structure

```
lawfirm-project/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed navigation with React Router links
│   │   └── Footer.jsx          # Professional footer component
│   ├── pages/
│   │   ├── Home.jsx            # Hero + featured services section
│   │   ├── About.jsx           # Company info, mission, vision, team
│   │   ├── Services.jsx        # Complete services grid with features
│   │   ├── Team.jsx            # Team member profiles & expertise
│   │   └── Contact.jsx         # Contact form + information
│   ├── App.jsx                 # Main app with React Router setup
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles and animations
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS customization
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- npm or yarn package manager

### Installation

1. **Navigate to your project directory:**
   ```bash
   cd lawfirm-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site opens automatically at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🗂️ Routes & Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section with parallax + featured services |
| `/about` | About | Company story, mission, vision, statistics |
| `/services` | Services | Complete service offerings with features |
| `/team` | Team | Team member profiles and expertise areas |
| `/contact` | Contact | Contact form and information |

## 🎯 Pages Overview

### Home Page (`/`)
- **Hero Section**: Full-screen with parallax background effect
- **Featured Services**: Preview of main service offerings
- **Call-to-Action**: Contact consultation button
- **Navigation**: Smooth scroll indicators

### About Page (`/about`)
- **Company Story**: Brief history and background
- **Mission & Vision**: Strategic company objectives
- **Statistics**: Key metrics (30+ years, 500+ clients, 95% success rate)
- **Leadership**: Featured team members
- **Responsive Layout**: Two-column grid that stacks on mobile

### Services Page (`/services`)
- **Service Cards Grid**: 6 main legal services with detailed features
- **How We Work**: 4-step process explanation
- **Responsive Grid**: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- **Feature Lists**: Each service includes specific offerings

### Team Page (`/team`)
- **Team Member Cards**: Professional profiles with photos
- **Role & Bio**: Position and background information
- **Expertise Grid**: All team expertise areas showcased
- **Social Links**: LinkedIn and Twitter integration placeholders

### Contact Page (`/contact`)
- **Contact Form**: Fully functional with validation
- **Contact Information**: Address, phone, email, WhatsApp
- **Business Hours**: Operating hours display
- **Responsive Layout**: Side-by-side on desktop, stacked on mobile

## 📱 Responsive Design

### Mobile (320px - 640px)
- Single column layouts
- Hamburger menu navigation
- Touch-friendly buttons (44px minimum)
- Optimized text sizing
- Proper spacing and padding

### Tablet (641px - 1024px)
- Two-column layouts where appropriate
- Fixed navbar with space optimization
- 2-column grids for cards
- Comfortable spacing

### Laptop & Desktop (1025px+)
- Multi-column layouts
- Full navbar display
- 3-column grids for services/team
- Maximum content width (max-w-7xl)

## 🎨 Customization Guide

### Update Company Information

**Logo & Name** - Edit `src/components/Navbar.jsx`:
```jsx
<h1 className="...">Your Company Name</h1>
<p className="...">Your Tagline</p>
```

**Contact Details** - Edit `src/pages/Contact.jsx`:
```jsx
const phoneNumber = '+1-800-YOUR-PHONE'
const phoneWhatsApp = 'YOUR-WHATSAPP-NUMBER'
const email = 'your-email@company.com'
const address = 'Your Office Address'
```

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: {...},  // Main dark blue
  gold: {...},     // Accent color
}
```

### Modify Team Members

Edit `src/pages/Team.jsx`:
```jsx
const team = [
  {
    id: 1,
    name: 'Your Name',
    role: 'Your Role',
    bio: 'Your bio',
    image: 'image-url',
  },
  // Add more team members
]
```

### Update Services

Edit `src/pages/Services.jsx`:
```jsx
const services = [
  {
    id: 1,
    title: 'Service Name',
    icon: '🎯',
    description: 'Description',
    features: ['Feature 1', 'Feature 2'],
  },
  // Add more services
]
```

## 🧩 Component Architecture

### Navbar Component
- Uses `React Router's useLocation()` hook to detect active page
- Implements sticky blur background on scroll
- Mobile hamburger menu with smooth animations
- Auto-closes menu when navigating

### Footer Component
- Includes quick links to all pages
- Contact information
- Company branding
- Copyright and legal links

### Page Components
- Each page is a standalone React component
- Responsive grid layouts using TailwindCSS
- Proper padding/margin for all breakpoints
- Animation support with CSS classes

## 🎬 Animations & Effects

### Implemented Animations
- **Fade In Up**: Elements fade and slide up on load
- **Slide In Left/Right**: Content slides from sides on load
- **Hover Effects**: Cards and buttons respond to mouse enter
- **Smooth Transitions**: All interactive elements use 300ms transitions
- **Scale Transform**: Buttons scale on hover for interactivity
- **Parallax**: Hero section background moves slower than scroll

### Custom CSS Classes
```css
.animate-fade-in-up    /* Fade and slide up animation */
.animate-slide-in-left /* Slide from left */
.animate-slide-in-right /* Slide from right */
.glow                  /* Soft glowing effect */
.gradient-text         /* Text gradient effect */
.gold-underline        /* Gold accent underline */
```

## 📝 Contact Form

The contact form currently logs data to console. To make it functional:

### Option 1: Backend API
```jsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

### Option 2: Email Service (Formspree)
Replace the form's `onSubmit` with a Formspree endpoint

### Option 3: Firebase
Use Firebase Firestore to store submissions

## 🚀 Deployment Options

### Vercel (Recommended for Next.js-like experience)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

### Traditional Hosting
```bash
npm run build
# Upload 'dist' folder to your web server
```

## 🔧 Advanced Customization

### Change Breakpoints
Edit `tailwind.config.js` to customize responsive breakpoints

### Add New Pages
1. Create new component in `src/pages/`
2. Import in `App.jsx`
3. Add new Route in the Routes component
4. Add link in Navbar

### Modify Typography
Update fonts in `index.html` and `tailwind.config.js`

### Extend Colors
Add new color variables in `tailwind.config.js` theme colors

## 📊 Performance Tips

- Images are optimized (Unsplash provides optimized versions)
- CSS is purged of unused styles in production
- Minimal JavaScript for fast load times
- CSS animations use transforms for smooth 60fps performance
- Lazy loading support can be added to images

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Android latest

## 📚 Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Router v6**: Client-side routing
- **TailwindCSS 3**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: Browser compatibility

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

## 📄 License

This template is available for personal and commercial use.

## 🤝 Support

For modifications or questions:
1. Review component structure in `src/components/` and `src/pages/`
2. Check TailwindCSS documentation for customization
3. Refer to React Router docs for routing changes
4. Test responsive design using browser dev tools

---

**Built with React ⚛️ + Vite ⚡ + React Router 🧭 + TailwindCSS 🎨**

Happy coding! 🚀

