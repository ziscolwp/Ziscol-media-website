# Session Context — Ziscol Media Website

## What This Project Is
A landing page for **Ziscol Media**, a premium YouTube video editing / content agency targeting B2B founders aged 25-30+. Goal: conversion-focused, mature/premium aesthetic that builds trust and drives Calendly bookings.

**Live URL:** https://ks-media-ecru.vercel.app (also mapped to ziscolmedia.com — DNS pending)
**Vercel project:** `ziscolwp-4682s-projects/ks-media`
**GitHub repo:** https://github.com/ziscolwp/Ziscol-media-website
**Deploy:** Push to `main` → Vercel auto-deploys (GitHub connected to Vercel)

---

## Tech Stack
- **Framework**: Next.js 14.2.35 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1 + custom CSS
- **Animations**: Framer Motion 11
- **Icons**: Phosphor Icons React
- **Calendly**: react-calendly 4.3.0 — **wired and live** (`https://calendly.com/ziscolmedia/30min`)
- **Fonts**: Inter (body) + Playfair Display (headings h1/h2/h3)

## How to Run the Dev Server
Because the project lives on an external drive, npm scripts can't execute binaries directly. Use this instead:
```bash
cd "/Volumes/MAIN DIRVE/Ziscol Media /Branding /Website/website/ks-media"
node node_modules/next/dist/bin/next dev
```
Runs on **http://localhost:3000** (or 3001 if 3000 is taken).

**Note:** If the website looks broken (white screen, no styles), delete `.next` and restart:
```bash
rm -rf .next && node node_modules/next/dist/bin/next dev
```

---

## Project Structure
```
ks-media/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, favicon, Figma capture script
│   ├── icon.svg                # Favicon — ZM logo (pulled from Figma, SVG format)
│   ├── page.tsx                # Main landing page — assembles all sections (overflow-clip, not overflow-hidden)
│   └── globals.css             # Global styles, design tokens, btn-primary, btn-secondary
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Sticky nav, "Ziscol Media" text logo, "Book a Call" pill CTA, mobile menu
│   │   └── FooterLuxury.tsx    # Brand col + Contact col (email/X/Calendly)
│   ├── sections/
│   │   ├── HeroLuxury.tsx      # ACTIVE — hero with floating service elements, trust badge, count-up stats
│   │   ├── WorkedWith.tsx      # ACTIVE — 9 real clients with real PFPs via unavatar.io
│   │   ├── PortfolioCarousel.tsx # ACTIVE — 2x2 grid of 4 real YouTube videos (inline embeds)
│   │   ├── HowItWorks.tsx      # ACTIVE — 6-step sticky scroll, SVG illustrations, CSS transitions, text size controls
│   │   ├── FAQSection.tsx      # ACTIVE — FAQ accordion (9 real Q&As) + inline Calendly booking widget
│   │   ├── Results.tsx         # UNUSED — real client case study cards
│   │   ├── Testimonials.tsx    # UNUSED — testimonial cards
│   │   └── [other unused components...]
│   └── ui/
│       ├── AnimateInView.tsx   # Reusable scroll-triggered fade+slide
│       ├── CalendlyButton.tsx  # Calendly popup button (ready to use)
│       ├── SectionLabel.tsx    # Small badge/pill label above section headings
│       └── FloatingElementsEditor.tsx  # DEV TOOL — visual editor for hero floating elements
├── tailwind.config.ts          # accent: #E6EB2F, fonts: sans=Inter, display=Playfair
├── next.config.mjs
└── public/images/
    ├── logo.png                # ZM logo (SVG data, pulled from Figma node 32:15)
    └── ob-health.jpg           # OB Health profile picture (manually provided)
```

---

## Active Page Layout (app/page.tsx)
1. `<Navigation />` — sticky top nav
2. `<HeroLuxury />` — hero section
3. `<WorkedWith />` — trusted by creators
4. `<PortfolioCarousel />` — portfolio
5. `<HowItWorks />` — process steps
6. `<FAQSection />` — FAQ + inline Calendly booking
7. `<FooterLuxury />` — footer

---

## Design System

**Brand Direction:** Trust, authority, professionalism. Mature, clean, premium. Target: B2B founders 25-30+.
**Reference site:** https://ks-media.co/ (clean dark aesthetic, pill buttons, bold typography)

**Colors:**
- Background: `#0a0a0a` / `#121212` / `#1e1e1e`
- **Accent: `#E6EB2F`** (yellow-green) — primary accent
- Text: `#ffffff` / `rgba(255,255,255,0.5)` muted

**CSS Utility Classes (globals.css):**
- `.btn-primary` — yellow pill button (`#E6EB2F` bg, black text, `border-radius: 9999px`)
- `.btn-secondary` — outline pill button (transparent, white border)
- `.glass` — glassmorphism card (backdrop-filter blur 20px)
- `.glass-strong` — stronger glass
- `.card` — clean dark card (`#121212` bg, subtle border)
- `.gradient-text` — white gradient text clip
- `.glow-accent` — yellow drop-shadow

**Fonts:**
- `font-display` → Playfair Display — h1, h2, h3, logo
- `font-sans` → Inter — all body text, stats (bold for numbers)

---

## Hero Section Details (HeroLuxury.tsx)

**Headline:** "Stop Producing Content / Start Closing From It" (yellow accent on second line)

**Trust badge:** 3 real client PFPs (BullRunners, Jake Claver, OB Health) + "Trusted by 15+ B2B Founders"

**Subheading:** "We handle every part of YouTube scripts, thumbnails, editing, packaging so you can focus on closing clients. You just show up and record. We do the rest."

**Stats (animated count-up, mobile: 3-col grid, desktop: flex row with dividers):**
- $400K+ | Revenue Made for Clients
- 15+ | Business Creators Helped
- 4.9/5 | Client Rating

**Floating service elements** (xl screens only, configured via FloatingElementsEditor):
```
{ label: 'Script Writing', side: 'left',  top: 24, edge: 9,  opacity: 40, size: 18, floatSpeed: 5.5 }
{ label: 'Video Editing',  side: 'left',  top: 56, edge: 12, opacity: 43, size: 14, floatSpeed: 6   }
{ label: 'Thumbnails',     side: 'right', top: 34, edge: 7,  opacity: 45, size: 24, floatSpeed: 5.0 }
{ label: 'Distribution',   side: 'right', top: 58, edge: 15, opacity: 36, size: 14, floatSpeed: 5.5 }
```
Each element has a soft yellow glow (`box-shadow: 0 0 18px rgba(230,235,47,0.12)`).
The `⚙ Edit Floats` button (bottom-right) opens the live editor.

**Scroll indicator:** 3 cascading yellow chevrons (pulsing sequentially).

---

## WorkedWith Section (WorkedWith.tsx)
- 9 real clients with actual profile pictures via `unavatar.io`
- Layout: `flex flex-wrap justify-center` — all 9 on one row desktop, centered wrap on mobile
- OB Health uses local image `/images/ob-health.jpg` (Instagram blocks unavatar)
- All others use `https://unavatar.io/youtube/{handle}`

| Client | Label | Source |
|--------|-------|--------|
| BullRunners | 375K subs | unavatar.io/youtube/bullrunners |
| Jake Claver | 100K+ subs | unavatar.io/youtube/jakeclaver |
| OB Health | 290K followers | /images/ob-health.jpg (local) |
| Jesse Hoffman | Founder of MindPeak | unavatar.io/youtube/jessehhoffman |
| Hamilton Emails | Founder, Hamilton Emails | unavatar.io/youtube/hamiltonemails |
| Will Cannon | Founder, iamwillcannon | unavatar.io/youtube/iamwillcannon |
| Morgan Nelson | Founder @ Dream Out Loud | unavatar.io/youtube/morgantnelson |
| Tarun Kamath | CEO of Arcady Media | unavatar.io/youtube/tarunkamath |
| CJ Weber | 149K TikTok followers | unavatar.io/youtube/cjweber7 |

---

## Portfolio Section (PortfolioCarousel.tsx)
2x2 grid of 4 real YouTube videos, embedded directly as iframes (all play independently):
- `1R9IhYDPZ00` — Putatoputato
- `KHhxjd7rI0Q` — Ob_Health
- `yzXtIMTNdZk` — Nelson Morgan
- `V2IjSkYAuvM` — Milan Raviji

---

## HowItWorks Section (HowItWorks.tsx)
- **Desktop:** sticky scroll (360vh tall container), page locks while user scrolls through 6 steps
- **Sticky fix:** `app/page.tsx` uses `overflow-clip` (not `overflow-hidden`) — critical, do not revert
- **6 steps:** Market Research → Video Ideation → Scripting → Video Recording → Post-production → Distribution
- **Animations:** CSS transitions (no Framer Motion on step items) — GPU-accelerated, no re-renders
- **Height animation:** CSS grid trick (`gridTemplateRows: 0fr → 1fr`) for smooth expand/collapse
- **State:** `setActiveStep` only fires on step boundary change (not every scroll tick)
- **Right column:** SVG illustrations fade + slide (cubic-bezier easing)
- **Mobile:** accordion layout
- **Dev tool:** `✏ Text Sizes` button (bottom-right) — sliders for all text + circle sizes
- **Baked-in text config:** `heading: 62, subheading: 16, stepTitle: 23, stepDesc: 14, circleSize: 46, circleNum: 21`

---

## FAQ Section (FAQSection.tsx)
- 9 real Q&As with actual brand copy (all placeholders replaced)
- Accordion with AnimatePresence expand/collapse
- **Inline Calendly widget** at bottom — dark theme, yellow accent, event details hidden
- Calendly URL: `https://calendly.com/ziscolmedia/30min`
- "What do I need to provide" answer uses numbered list (JSX answer type)

---

## Contact Details (all live)
- **Email:** `contact@ziscolmedia.com`
- **X/Twitter:** `@ziscolwp` → `https://x.com/ziscolwp`
- **Calendly:** `https://calendly.com/ziscolmedia/30min`

---

## Favicon & Branding
- **Favicon:** `app/icon.svg` — ZM logo pulled from Figma (file: `N0ETXZnRyW9sFjNP61fBap`, node: `32:15`)
- **Tab title:** `Ziscol Media` (no subtitle)
- **Nav logo:** "Ziscol Media" text (Playfair Display font)

---

## MCP Integrations
- **Figma MCP**: `https://mcp.figma.com/mcp` — configured in `~/.claude.json`
  - Figma file (main designs): `https://www.figma.com/design/G6CwXYCtZkHVnoUXOa6MAk/ziscolmedia.com`
  - Figma file (original + logo): `https://www.figma.com/design/N0ETXZnRyW9sFjNP61fBap/Ziscol-Media`
  - Logo node ID: `32:15` (vector named "Logo")
  - Capture script is in `app/layout.tsx` — leave it there for future Figma captures

---

## Deployment
- **Auto-deploy:** GitHub `main` → Vercel (connected)
- **To deploy:** `git add . && git commit -m "message" && git push`
- **Domain:** `ziscolmedia.com` — purchased, being connected to Vercel (DNS propagating)
- **Vercel alias:** https://ks-media-ecru.vercel.app

---

## Work Completed (All Sessions)
- Full rebrand: indigo/purple → `#E6EB2F` yellow across all components
- Navigation, Hero, WorkedWith, PortfolioCarousel, HowItWorks, FAQSection, FooterLuxury all built
- HowItWorks: smooth CSS transitions, text/circle size dev controls, sticky scroll fixed
- FAQSection: 9 real Q&As, inline Calendly booking widget wired
- All Calendly placeholders replaced with real URL
- Contact details updated (email: contact@ziscolmedia.com, X: @ziscolwp → x.com/ziscolwp)
- GitHub repo created and connected to Vercel for auto-deploy
- Domain `ziscolmedia.com` purchased and being connected
- WorkedWith: replaced all placeholder clients with 9 real clients + real PFPs
- Hero trust badge: updated to use real client profile pictures
- Hero stats: fixed mobile alignment (3-col grid, hidden dividers on mobile)
- Favicon: ZM logo added as `app/icon.svg` (pulled from Figma MCP)
- Tab title: simplified to just "Ziscol Media"

---

## Next Session — Start Here

**Priority 1: Results / Testimonials sections**
- `Results.tsx` and `Testimonials.tsx` exist but are UNUSED — activate when real testimonial data is ready

**Priority 2: Any remaining mobile fixes**
- Review full mobile layout for other misalignment issues

**Priority 3: Domain**
- Check if `ziscolmedia.com` DNS has propagated and site is live on custom domain
