# Luxury YouTube Content Agency Landing Page

## Overview

A premium, high-end landing page built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Phosphor Icons. Features stunning animations, glassmorphism effects, neumorphic buttons, and a fully responsive design.

## What's Included

### Design Features
- ✨ **Inter font** with light weight and tight letter spacing
- 🎨 **Glassmorphism cards** with background blur and low opacity
- 🔘 **Neumorphic 3D buttons** with glow effects on hover
- 🌊 **Scroll animations** with opacity and blur effects
- 📱 **Responsive design** with mobile burger menu
- 🎭 **Page load animations** (fade in + slide up)
- 📍 **Sticky navigation** with blur effect on scroll

### Sections

1. **Navigation**
   - Sticky header with blur effect when scrolling
   - Anchor links to all page sections
   - Animated burger menu on tablet/mobile
   - Smooth scroll behavior
   - Location: `components/layout/Navigation.tsx`

2. **Hero Section** (#hero)
   - Centered title with gradient text effect
   - Compelling copy
   - "Book a Call" CTA button (neumorphic style)
   - Secondary "View Our Work" button
   - Stats display (500M+ views, 100+ creators, 4.9/5 rating)
   - Animated gradient background orbs
   - Scroll indicator
   - Location: `components/sections/HeroLuxury.tsx`

3. **Worked With Section** (#clients)
   - Grid of client profile pictures
   - 8 placeholder avatars (ready to replace with real channels)
   - Hover effects with glow
   - Subscriber count display
   - Location: `components/sections/WorkedWith.tsx`

4. **Portfolio Section** (#portfolio)
   - Interactive carousel with navigation controls
   - 6 video thumbnails with play button overlay
   - View counts and channel names
   - Previous/Next buttons
   - Dot indicators
   - Smooth transitions
   - Location: `components/sections/PortfolioCarousel.tsx`

5. **How It Works Section** (#how-it-works)
   - 3 cards with custom icons:
     - **01 - Discovery Call** (ChatCircle icon)
     - **02 - Content Creation** (VideoCamera icon)
     - **03 - Launch & Optimize** (Rocket icon)
   - Glassmorphic card styling
   - Numbered badges
   - Connector lines between cards (desktop)
   - CTA button at bottom
   - Location: `components/sections/HowItWorks.tsx`

6. **FAQ Section** (#faq)
   - 6 expandable FAQ items
   - Smooth accordion animations
   - Plus/Minus icons
   - "Still have questions?" CTA card
   - Location: `components/sections/FAQSection.tsx`

7. **Footer**
   - Brand description
   - Email newsletter signup
   - Link columns (Company, Resources, Legal)
   - Social media icons (Instagram, YouTube, Twitter, LinkedIn)
   - Copyright notice
   - Location: `components/layout/FooterLuxury.tsx`

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Phosphor Icons** - Light-weight icon library
- **React Hooks** - useInView for scroll animations

## Custom Styling

### Global CSS Features (`app/globals.css`)

- **Glassmorphism classes**: `.glass`, `.glass-strong`
- **Neumorphic buttons**: `.neuro-button`
- **Navigation blur**: `.nav-blur`
- **Text utilities**: `.text-muted`, `.gradient-text`
- **Animation classes**: `.animate-fade-in-up`, `.delay-100` through `.delay-600`
- **Custom scrollbar** with indigo accent
- **Mobile menu animations**

### Button Styles

The neumorphic buttons feature:
- 3D depth with shadows
- Gradient border on hover
- Glow effect
- Smooth transitions
- Active press state

### Card Styles

Glassmorphic cards include:
- Semi-transparent background
- Backdrop blur effect
- Subtle borders
- Hover state transitions

## Running the Project

### Option 1: From Internal Drive (Recommended)

Due to macOS security restrictions on external volumes, copy the project to your internal drive:

```bash
# Copy project to your home directory
cp -r "/Volumes/MAIN DIRVE/Ziscol Media /Branding /Website/website/ks-media" ~/ks-media

# Navigate to project
cd ~/ks-media

# Install dependencies (if needed)
npm install

# Start development server
npm run dev
```

### Option 2: From External Drive

If you need to run from the external drive, you may need to:

1. Remount the drive with exec permissions:
```bash
# Unmount the drive first
diskutil unmount "/Volumes/MAIN DIRVE"

# Remount with exec permissions
sudo mount -t apfs -o exec,rw /dev/diskXsY "/Volumes/MAIN DIRVE"
```

2. Or use Node directly:
```bash
cd "/Volumes/MAIN DIRVE/Ziscol Media /Branding /Website/website/ks-media"
node node_modules/next/dist/bin/next dev
```

The site will be available at `http://localhost:3000`

## Customization Guide

### 1. Replace Placeholder Content

#### Agency Name
Replace `[Agency Name]` in:
- `components/layout/Navigation.tsx` (line 64)
- `components/layout/FooterLuxury.tsx` (line 59)

#### Book a Call Link
Update Calendly link in:
- `components/sections/HeroLuxury.tsx` (line 12)
- `components/sections/HowItWorks.tsx` (line 131)
- `components/sections/FAQSection.tsx` (line 145)

Replace `'https://calendly.com/your-link'` with your actual Calendly URL

#### Client Avatars
In `components/sections/WorkedWith.tsx`, replace the placeholder avatars:
```typescript
const clients = [
  {
    name: 'Real Channel Name',
    image: '/path/to/channel-avatar.jpg', // or URL
    subscribers: '2M'
  },
  // ... more clients
]
```

#### Portfolio Videos
In `components/sections/PortfolioCarousel.tsx`, replace placeholder thumbnails:
```typescript
const portfolioVideos = [
  {
    id: 1,
    title: 'Your Video Title',
    thumbnail: '/path/to/thumbnail.jpg', // Use real YouTube thumbnails
    views: '2.5M',
    channel: 'Channel Name'
  },
  // ... more videos
]
```

### 2. Customize Colors

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  'accent': '#6366f1', // Primary accent color
  'accent-hover': '#7c3aed', // Hover state
  // ... other colors
}
```

### 3. Update Copy

#### Hero Section
- Title: Line 52-54 in `HeroLuxury.tsx`
- Description: Line 58-63 in `HeroLuxury.tsx`
- Stats: Lines 77-92 in `HeroLuxury.tsx`

#### How It Works Steps
Update the `steps` array in `HowItWorks.tsx` (lines 8-34) with your actual process

#### FAQ Content
Update the `faqs` array in `FAQSection.tsx` (lines 8-45) with your actual questions

### 4. Footer Links
Update `footerLinks` object in `FooterLuxury.tsx` (lines 19-38) with your actual pages

### 5. Social Media Links
Update `socialLinks` array in `FooterLuxury.tsx` (lines 11-16) with your actual social URLs

## Mobile Responsiveness

The design includes breakpoints for:
- **Mobile**: < 768px (burger menu, single column layouts)
- **Tablet**: 768px - 1024px (2-column grids, burger menu)
- **Desktop**: > 1024px (full multi-column layouts, desktop navigation)

The burger menu:
- Slides in from the right
- Full-height overlay
- Glassmorphic background
- Smooth animations

## Animation Details

### Page Load
- Body fades in from 0 to 100% opacity
- Content slides up 30px while fading in
- Staggered delays for sequential elements

### Scroll Animations
- Elements animate when they enter viewport
- Opacity + blur transition
- Uses Framer Motion's `useInView` hook
- Triggers once per element

### Interactive Elements
- Buttons scale on hover/press
- Cards lift on hover
- Smooth color transitions
- Icon movements (arrows, etc.)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - CSS backdrop-filter
  - CSS Grid
  - Flexbox
  - Custom properties (CSS variables)

## Performance Considerations

- Images should be optimized (WebP format recommended)
- Consider lazy loading for portfolio images
- Framer Motion animations are GPU-accelerated
- Glassmorphism effects use hardware acceleration

## Next Steps

1. **Replace all placeholder content** with your actual agency information
2. **Add real client avatars** and portfolio videos
3. **Connect Calendly** or your booking system
4. **Set up email newsletter** integration (currently placeholder)
5. **Add real footer links** for your pages
6. **Test on mobile devices** to ensure responsiveness
7. **Optimize images** before deployment
8. **Set up analytics** (Google Analytics, etc.)

## File Structure

```
ks-media/
├── app/
│   ├── globals.css          # Custom styles & utilities
│   ├── layout.tsx            # Root layout with Inter font
│   └── page.tsx              # Main landing page
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx    # Sticky nav with mobile menu
│   │   └── FooterLuxury.tsx  # Footer component
│   └── sections/
│       ├── HeroLuxury.tsx    # Hero section
│       ├── WorkedWith.tsx    # Client showcase
│       ├── PortfolioCarousel.tsx  # Video carousel
│       ├── HowItWorks.tsx    # Process cards
│       └── FAQSection.tsx    # FAQ accordion
├── tailwind.config.ts        # Tailwind configuration
└── package.json              # Dependencies

## Dependencies Installed

- `@phosphor-icons/react` - Icon library
- `framer-motion` - Animation library (already installed)
- `next`, `react`, `react-dom` - Core framework

## Copyright Notice

As per your document:

© CuttingEdge - All rights reserved. Do not share, copy, reproduce or sell any part of this document unless you have written permission from CuttingEdge. All infringements will be prosecuted.

---

Built with ❤️ by Claude Code
