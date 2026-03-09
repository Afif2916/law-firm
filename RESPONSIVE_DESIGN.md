# Responsive Design & Mobile Optimization Guide

## 📱 Device Sizes Supported

```
320px   - iPhone SE
375px   - iPhone 12/13
425px   - iPhone 14/15
640px   - Small tablets (landscape)
768px   - iPad
1024px  - iPad Pro / Large tablets
1280px  - Desktop (HD)
1440px  - Wide screens
1920px  - Full HD
2560px  - 4K displays
```

## 🎯 Responsive Classes Pattern

All components follow this TailwindCSS pattern:

```jsx
// Responsive Text Sizes
className="
  text-base        /* 320px - 640px (mobile) */
  sm:text-lg       /* 641px - 1024px (tablet) */
  lg:text-xl       /* 1025px - 1439px (laptop) */
  xl:text-2xl      /* 1440px+ (desktop) */
"

// Responsive Spacing
className="
  px-4             /* Mobile: 16px padding */
  sm:px-6          /* Tablet: 24px padding */
  lg:px-8          /* Desktop: 32px padding */
"

// Responsive Grid
className="
  grid-cols-1      /* Mobile: 1 column */
  sm:grid-cols-2   /* Tablet: 2 columns */
  lg:grid-cols-3   /* Desktop: 3 columns */
"
```

---

## 📐 Responsive Patterns Implemented

### 1. Hero Section

**Mobile (320px)**
```jsx
<h1 className="text-4xl">Title</h1>
<p className="text-lg">Subtitle</p>
```
- Single column
- Large readable text
- Mobile-first padding

**Desktop (1024px+)**
```jsx
<h1 className="lg:text-7xl">Title</h1>
<p className="lg:text-2xl">Subtitle</p>
```
- Much larger display
- Impressive visual hierarchy
- Breathing room

### 2. Service Cards Grid

**Mobile**: 1 column
```jsx
grid-cols-1
```

**Tablet (768px)**: 2 columns
```jsx
sm:grid-cols-2
```

**Desktop (1024px)**: 3 columns
```jsx
lg:grid-cols-3
```

### 3. Contact Form Layout

**Mobile**: Stacked form (100% width)
```jsx
<div className="grid grid-cols-1">
```

**Desktop**: Side-by-side (50/50 split)
```jsx
<div className="lg:grid-cols-2">
```

### 4. Team Member Cards

**Mobile**: Full width, simple layout
```jsx
<h3 className="text-2xl">Name</h3>
```

**Desktop**: Optimized spacing
```jsx
<h3 className="lg:text-2xl">Name</h3>
```

---

## 🎨 Responsive Component Examples

### Example 1: Feature Card

```jsx
<div className="group bg-white rounded-xl shadow-lg 
  hover:shadow-2xl transition-all duration-300 
  overflow-hidden hover:-translate-y-2
  p-6 sm:p-8">
  
  {/* Icon - scales on hover */}
  <span className="text-4xl sm:text-5xl 
    group-hover:scale-110 transition-transform duration-300">
    🏢
  </span>
  
  {/* Title - responsive size */}
  <h3 className="font-serif font-bold 
    text-xl sm:text-2xl 
    text-primary-900 mb-2">
    Corporate Law
  </h3>
  
  {/* Description - readable on all screens */}
  <p className="font-sans 
    text-gray-600 
    text-sm sm:text-base 
    leading-relaxed">
    Strategic legal guidance...
  </p>
</div>
```

### Example 2: Image with Text

```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
  {/* Image - responsive height */}
  <div className="animate-slide-in-left">
    <img 
      src="..." 
      alt="..." 
      className="w-full 
        h-64 sm:h-80 lg:h-96 
        object-cover rounded-2xl" 
    />
  </div>
  
  {/* Text - responsive layout */}
  <div className="animate-slide-in-right">
    <h2 className="font-serif font-bold 
      text-2xl sm:text-3xl lg:text-4xl 
      text-primary-900 mb-6">
      Heading
    </h2>
    
    <p className="font-sans 
      text-sm sm:text-base lg:text-lg 
      text-gray-600 leading-relaxed 
      mb-4 sm:mb-6">
      Paragraph text...
    </p>
  </div>
</div>
```

### Example 3: Statistics Section

```jsx
<div className="grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-4 
  gap-6 sm:gap-8">
  
  {[...stats].map((stat) => (
    <div key={stat.id} className="text-center">
      <p className="font-serif 
        text-4xl sm:text-5xl lg:text-6xl 
        font-bold text-gold-500 mb-2">
        {stat.number}
      </p>
      <p className="font-sans 
        text-xs sm:text-sm lg:text-base 
        text-gray-600">
        {stat.label}
      </p>
    </div>
  ))}
</div>
```

---

## 📋 Responsive Checklist

Use this when creating new components:

- [ ] **Typography**
  - [ ] Text sizes scale (xs → sm → lg → xl)
  - [ ] Line heights are readable on all screens
  - [ ] Headings don't overflow on mobile

- [ ] **Spacing**
  - [ ] Padding increases from mobile to desktop
  - [ ] Margins are consistent and responsive
  - [ ] Gap between items scales appropriately

- [ ] **Layout**
  - [ ] Single column on mobile
  - [ ] Multi-column on tablet/desktop
  - [ ] No horizontal scrolling on any device

- [ ] **Images**
  - [ ] Maintain aspect ratio on all screens
  - [ ] Responsive heights with mobile-first approach
  - [ ] Touch-friendly on mobile

- [ ] **Forms**
  - [ ] Inputs are 44px minimum height (touch-friendly)
  - [ ] Labels are above inputs on mobile
  - [ ] Buttons are easily tappable

- [ ] **Navigation**
  - [ ] Hamburger menu on mobile
  - [ ] Visible links on desktop
  - [ ] Touch-friendly target sizes (48px+)

- [ ] **Testing**
  - [ ] Tested at 320px, 768px, 1024px, 1440px
  - [ ] No horizontal scrolling
  - [ ] All buttons clickable on mobile
  - [ ] Forms submittable on all devices

---

## 🔍 Testing Responsive Design

### Using Chrome DevTools

1. **Open DevTools**: Press F12
2. **Toggle Device Toolbar**: Ctrl+Shift+M
3. **Test Devices**:
   - iPhone SE (375x667)
   - iPad (768x1024)
   - Desktop (1440x900)

### Manual Testing Checklist

```
Mobile (375px)
├─ [ ] Navigation hamburger menu visible
├─ [ ] Text readable without zooming
├─ [ ] Buttons tap-friendly (44px min)
├─ [ ] No horizontal scrolling
├─ [ ] Images scale properly
└─ [ ] Forms fill full width

Tablet (768px)
├─ [ ] 2-column grids show
├─ [ ] Navbar menu shows
├─ [ ] Spacing appropriate
├─ [ ] Images have room
└─ [ ] All content visible

Desktop (1440px)
├─ [ ] 3-column grids show
├─ [ ] Full navbar visible
├─ [ ] Max width (max-w-7xl) applied
├─ [ ] Layout centered
└─ [ ] Spacing generous
```

### Real Device Testing

Test on actual devices:
- iPhone SE (smallest)
- iPad (tablet)
- MacBook (desktop)
- Android phone
- Android tablet

---

## 📊 Responsive Utilities Used

### Display Properties
```jsx
hidden           /* Hide on small screens */
md:hidden        /* Show on desktop, hide on mobile */
lg:flex          /* Show as flex on large screens */
```

### Sizing
```jsx
w-full           /* Full width */
sm:w-1/2         /* Half width on small screens */
lg:w-1/3         /* Third width on large screens */
max-w-7xl        /* Maximum width container */
```

### Spacing
```jsx
p-4              /* Padding all sides */
px-4 py-6       /* Horizontal and vertical */
sm:p-6           /* Different padding on tablet */
lg:p-8           /* Different padding on desktop */
```

### Grid
```jsx
grid             /* Grid container */
grid-cols-1      /* One column (mobile) */
sm:grid-cols-2   /* Two columns (tablet) */
lg:grid-cols-3   /* Three columns (desktop) */
gap-4            /* Gap between items */
```

---

## 💡 Responsive Design Best Practices

### 1. Mobile-First Approach
```jsx
// ✅ GOOD: Start with mobile, add complexity
<h1 className="text-2xl sm:text-3xl lg:text-5xl">

// ❌ BAD: Start with desktop
<h1 className="text-5xl sm:text-3xl lg:text-2xl">
```

### 2. Touch-Friendly
```jsx
// ✅ GOOD: Buttons large enough to tap
<button className="px-6 py-3 h-12">Click</button>

// ❌ BAD: Too small to tap easily
<button className="px-2 py-1">Click</button>
```

### 3. Readable Text
```jsx
// ✅ GOOD: Readable line length
<p className="max-w-2xl text-base leading-relaxed">

// ❌ BAD: Too much text on small screen
<p className="text-xs leading-tight">
```

### 4. Flexible Layouts
```jsx
// ✅ GOOD: Flexible grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

// ❌ BAD: Fixed layout
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
```

### 5. Container Queries
```jsx
// ✅ GOOD: Use max-w for content width
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content stays readable */}
</div>
```

---

## 🎬 Responsive Animations

### Scroll Animations Only on Desktop
```jsx
useEffect(() => {
  if (window.innerWidth >= 1024) {
    // Add scroll listeners only on desktop
  }
}, [])
```

### Simplified Animations on Mobile
```jsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const duration = prefersReducedMotion ? 0 : 300
```

---

## 📈 Performance on Mobile

### Image Optimization
```jsx
// Use responsive images
<img 
  srcSet="
    small.jpg 320w,
    medium.jpg 768w,
    large.jpg 1440w
  "
  src="medium.jpg"
  alt="Description"
/>
```

### Lazy Loading
```jsx
<img 
  loading="lazy"
  src="..."
  alt="..."
/>
```

### Minimize Repaints
```jsx
// Use will-change carefully
<div className="hover:scale-105 transition-transform">
  {/* Content */}
</div>
```

---

## 🔧 Debugging Responsive Issues

### Check Breakpoints
```jsx
// Add debug indicator
<div className="
  fixed bottom-4 right-4 p-4 bg-black text-white text-xs
">
  <span className="sm:hidden">Mobile</span>
  <span className="hidden sm:inline md:hidden">Tablet</span>
  <span className="hidden md:inline">Desktop</span>
</div>
```

### Inspect with DevTools
1. Right-click element → Inspect
2. Check computed styles
3. Look for responsive classes
4. Verify breakpoint behavior

### Mobile Emulation Tips
- Disable smooth scrolling for testing
- Check landscape mode
- Test with keyboard navigation
- Test with screen reader

---

## 📚 Reference

### TailwindCSS Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Common Container Patterns
```jsx
// Centered content container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Single column layout
<div className="grid grid-cols-1">

// Two column (tablet+)
<div className="grid grid-cols-1 md:grid-cols-2">

// Three column (desktop+)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Four column (large desktop)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
```

---

## 🎯 Summary

The website is fully responsive and tested across all major device sizes:
- ✅ Mobile (320px - 640px)
- ✅ Tablet (641px - 1024px)
- ✅ Desktop (1025px+)
- ✅ Large screens (1440px+)

All components scale appropriately with proper typography, spacing, and grid layouts for optimal user experience on any device.
