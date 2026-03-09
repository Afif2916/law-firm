# Quick Start Guide

## 🚀 5-Minute Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Dev Server
```bash
npm run dev
```
Your site opens at `http://localhost:5173`

### Step 3: Edit Content
- **Company Info**: `src/pages/About.jsx`
- **Services**: `src/pages/Services.jsx`
- **Team**: `src/pages/Team.jsx`
- **Contact Info**: `src/pages/Contact.jsx`
- **Colors**: `tailwind.config.js`

### Step 4: Build for Production
```bash
npm run build
```
Output folder: `dist/`

---

## 📝 Essential Files to Customize

| File | What to Change |
|------|---|
| `src/components/Navbar.jsx` | Logo, company name |
| `src/pages/Home.jsx` | Hero text, featured services |
| `src/pages/About.jsx` | Company story, team members |
| `src/pages/Services.jsx` | Service offerings, features |
| `src/pages/Team.jsx` | Team members, expertise |
| `src/pages/Contact.jsx` | Contact info, phone, email |
| `tailwind.config.js` | Colors (primary, gold) |
| `index.html` | Page title, meta tags |

---

## 🎯 Key Features Implemented

✅ Multi-page routing with React Router
✅ Sticky navbar with blur background
✅ Active route highlighting
✅ Mobile hamburger menu with animations
✅ Parallax hero section on home page only
✅ Fully responsive (320px to 2560px)
✅ Professional animations and transitions
✅ Contact form with validation
✅ Team & Services showcase
✅ Modern corporate design
✅ Footer with links and info
✅ Performance optimized

---

## 📱 Testing Responsive Design

### Desktop View
- Open at `http://localhost:5173`
- Full navbar, all features visible

### Tablet View (iPad)
- Press F12, toggle device toolbar
- Select "iPad" or set width to 768px
- Menu shows 2-column grids

### Mobile View (iPhone)
- Set width to 375px
- Hamburger menu appears
- Content stacks in single column

---

## 🎨 Customization Examples

### Change Company Name
```jsx
// In src/components/Navbar.jsx
<h1>Your Law Firm</h1>
<p>Your Tagline</p>
```

### Update Contact Information
```jsx
// In src/pages/Contact.jsx
const phoneNumber = '+1-555-123-4567'
const email = 'hello@example.com'
const address = 'Your Address Here'
```

### Modify Colors
```js
// In tailwind.config.js
primary: { 500: '#your-blue' }
gold: { 500: '#your-gold' }
```

### Add New Team Member
```jsx
// In src/pages/Team.jsx add to team array:
{
  id: 7,
  name: 'New Person',
  role: 'Attorney',
  bio: 'Bio text',
  image: 'https://...',
}
```

---

## 🚀 Deployment

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
# Follow prompts
```

### Netlify
```bash
npm run build
# Drag-drop 'dist' folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload 'dist' folder via FTP
```

---

## 📂 New Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      ← Navigation with React Router
│   └── Footer.jsx      ← Footer with links
├── pages/
│   ├── Home.jsx        ← / route (Hero + Services)
│   ├── About.jsx       ← /about route
│   ├── Services.jsx    ← /services route
│   ├── Team.jsx        ← /team route
│   └── Contact.jsx     ← /contact route
├── App.jsx             ← Router setup
├── main.jsx            ← Entry point
└── index.css           ← Global styles
```

---

## ✨ What Changed from Original

### Before (Single-Page Scrolling)
- Navbar with scroll detection to sections
- All sections on one page
- Scroll-to-section buttons
- Hero with parallax always visible

### After (Multi-Page)
- Each section is a separate page
- Navigation using React Router Links
- Cleaner URL structure (/about, /services, etc.)
- Parallax only on home page
- Professional footer on every page
- Better mobile experience
- Easier to add new pages

---

## 🎬 Animations Included

- **Fade In**: Page load animations
- **Slide In**: Elements slide from sides
- **Hover**: Card scaling and color changes
- **Smooth Transitions**: 300ms ease transitions
- **Parallax**: Hero background effect
- **Scale Transform**: Button interactions

---

## 🔗 Routes Reference

| Route | Page | Description |
|-------|------|--|
| `/` | Home | Hero with parallax + services preview |
| `/about` | About | Company info, mission, vision, stats |
| `/services` | Services | All legal services with features |
| `/team` | Team | Team members and expertise |
| `/contact` | Contact | Contact form + information |

---

## ⚙️ Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install
```

---

## 🎓 Learning Resources

- **React Router**: https://reactrouter.com/docs
- **TailwindCSS**: https://tailwindcss.com/docs
- **React**: https://react.dev/learn
- **Vite**: https://vitejs.dev/guide/

---

## 💡 Pro Tips

1. **Mobile First**: Always design for mobile, then add tablet/desktop styles
2. **Test Responsive**: Use DevTools device toolbar to test all sizes
3. **Optimize Images**: Use Unsplash's optimized URLs or optimize locally
4. **Cache Busting**: When deploying, verify new CSS/JS loads
5. **SEO**: Add meta tags in each page component
6. **Analytics**: Add Google Analytics in `index.html`
7. **Performance**: Use Lighthouse DevTools to audit

---

## 🆘 Troubleshooting

**App won't start?**
```bash
rm -rf node_modules
npm install
npm run dev
```

**Styles not loading?**
```bash
# Restart dev server
# Clear browser cache (Ctrl+Shift+Delete)
```

**Routes not working?**
- Check file paths in imports
- Verify path in `<Route>` matches `<Link to>` exactly
- Restart dev server

**Mobile menu not closing?**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check console for errors

---

## 📞 Next Steps

1. ✅ Customize content for your law firm
2. ✅ Update colors to match branding
3. ✅ Replace images with actual photos
4. ✅ Set up email/contact form
5. ✅ Test on mobile devices
6. ✅ Deploy to production
7. ✅ Add custom domain
8. ✅ Set up SSL certificate
9. ✅ Monitor with analytics

---

**Happy building! 🚀**

For detailed questions, see [ARCHITECTURE.md](./ARCHITECTURE.md) or [README.md](./README.md)
