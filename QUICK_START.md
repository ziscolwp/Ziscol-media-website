# Quick Start Guide

## Get Running in 5 Minutes

### Step 1: Move to Internal Drive (Recommended)

Due to macOS external drive permission restrictions:

```bash
# Copy to your home directory
cp -r "/Volumes/MAIN DIRVE/Ziscol Media /Branding /Website/website/ks-media" ~/ks-media

# Navigate there
cd ~/ks-media
```

### Step 2: Start Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Step 3: Customize Content (Priority Items)

#### 3.1 Agency Name
Replace `[Agency Name]` in:
- `components/layout/Navigation.tsx` (line 64)
- `components/layout/FooterLuxury.tsx` (line 59)

#### 3.2 Calendly Link
In these files, replace `'https://calendly.com/your-link'`:
- `components/sections/HeroLuxury.tsx` (line 12)
- `components/sections/HowItWorks.tsx` (line 131)
- `components/sections/FAQSection.tsx` (line 145)

#### 3.3 Client Avatars
`components/sections/WorkedWith.tsx` (lines 8-51):
```typescript
const clients = [
  {
    name: 'Real Channel Name',
    image: '/images/avatar1.jpg', // Add images to public/images/
    subscribers: '2M'
  },
  // ... add 8 total
]
```

#### 3.4 Portfolio Videos
`components/sections/PortfolioCarousel.tsx` (lines 8-41):
```typescript
const portfolioVideos = [
  {
    id: 1,
    title: 'Your Video Title',
    thumbnail: '/images/video1-thumb.jpg',
    views: '2.5M',
    channel: 'Channel Name'
  },
  // ... add 6 total
]
```

## Complete Customization Checklist

### Content Updates
- [ ] Replace `[Agency Name]` with your agency name
- [ ] Update Calendly link (3 locations)
- [ ] Add 8 real client avatars
- [ ] Add 6 portfolio video thumbnails
- [ ] Update hero title and description
- [ ] Update hero stats (views, creators, rating)
- [ ] Customize "How It Works" 3-step process
- [ ] Update FAQ questions and answers
- [ ] Add footer links for your pages
- [ ] Update social media URLs

### Images to Add
Place in `public/images/`:
- [ ] Client avatars (8 images)
- [ ] Portfolio thumbnails (6 images)
- [ ] Optional: Logo/brand assets

### Optional Customizations
- [ ] Change accent colors in `tailwind.config.ts`
- [ ] Adjust animation speeds in component files
- [ ] Modify section copy/messaging
- [ ] Add Google Analytics
- [ ] Set up email newsletter integration
- [ ] Configure SEO metadata in `app/layout.tsx`

## Key Features to Know

### Navigation
- Auto-scrolls to sections on click
- Becomes sticky with blur after scrolling 20px
- Burger menu on mobile/tablet

### Animations
- Page loads with fade-in
- Sections animate on scroll (opacity + blur)
- Buttons have hover glow effects
- All interactions are smooth

### Mobile Menu
- Slides in from right
- Click backdrop to close
- Smooth spring animations

### Portfolio Carousel
- Click arrows or dots to navigate
- Displays 3 videos at once (desktop)
- Responsive grid layout

### FAQ Accordion
- Click to expand/collapse
- Only one open at a time
- Smooth height animations

## Styling Guide

### Glassmorphic Cards
Use the `glass` class:
```tsx
<div className="glass rounded-2xl p-8">
  Your content
</div>
```

### Neumorphic Buttons
Use the `neuro-button` class:
```tsx
<button className="neuro-button px-10 py-5 rounded-2xl">
  Click Me
</button>
```

### Muted Text
Apply opacity automatically:
```tsx
<p className="text-muted">
  This text will have 60% opacity
</p>
```

### Gradient Text
For special emphasis:
```tsx
<span className="gradient-text">
  Highlighted Text
</span>
```

## Common Issues & Solutions

### Issue: Dev server won't start from external drive
**Solution**: Copy project to internal drive (see Step 1)

### Issue: Icons not displaying
**Solution**: Ensure `@phosphor-icons/react` is installed:
```bash
npm install @phosphor-icons/react
```

### Issue: Animations not working
**Solution**: Check that `framer-motion` is installed:
```bash
npm install framer-motion
```

### Issue: Blur effects not showing
**Solution**: Test in Chrome/Safari - Firefox has limited backdrop-filter support

### Issue: Mobile menu not animating
**Solution**: Clear browser cache and reload

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow prompts to deploy to production.

### Other Hosting Options
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js host

## Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress before uploading
   - Use appropriate sizes (800x450 for video thumbnails)

2. **Lazy Loading**
   - Images below fold load on demand
   - Consider adding to portfolio images

3. **Font Loading**
   - Inter is loaded via next/font/google
   - Optimized with display: swap

4. **Animation Performance**
   - GPU-accelerated via transform properties
   - Framer Motion optimizes automatically

## Need Help?

### Documentation
- Read `LANDING_PAGE_README.md` for full details
- Check `DESIGN_SYSTEM.md` for styling reference

### Resources
- Next.js: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Phosphor Icons: https://phosphoricons.com/
- Tailwind CSS: https://tailwindcss.com/docs

### Debugging
1. Check browser console for errors
2. Verify all imports are correct
3. Ensure Node.js version >= 18
4. Clear `.next` folder and rebuild:
   ```bash
   rm -rf .next
   npm run dev
   ```

## What's Next?

After launching:
1. Monitor analytics to see user behavior
2. A/B test different hero copy
3. Add testimonials from clients
4. Create case studies for portfolio
5. Add blog section for SEO
6. Implement contact form
7. Set up email automation

---

🎉 **You're all set!** Your luxury landing page is ready to impress visitors and convert leads.

For questions about the code structure, see `LANDING_PAGE_README.md`.
For design details and styling, see `DESIGN_SYSTEM.md`.
