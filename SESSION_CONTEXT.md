# Session Context — Ziscol Media Website

## What This Project Is
A landing page for **Ziscol Media**, a premium YouTube video editing / content agency targeting B2B founders aged 25-30+. Goal: conversion-focused, mature/premium aesthetic that builds trust and drives Calendly bookings.

**Live URL:** https://ks-media-ecru.vercel.app
**Vercel project:** `ziscolwp-4682s-projects/ks-media`
**Redeploy command:** `cd "/Volumes/MAIN DIRVE/Ziscol Media /Branding /Website/website/ks-media" && vercel --prod`

---

## Tech Stack
- **Framework**: Next.js 14.2.35 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1 + custom CSS
- **Animations**: Framer Motion 11
- **Icons**: Phosphor Icons React
- **Calendly**: react-calendly 4.3.0 (installed, not wired yet)
- **Fonts**: Inter (body) + Playfair Display (headings h1/h2/h3)

## How to Run the Dev Server
Because the project lives on an external drive, npm scripts can't execute binaries directly. Use this instead:
```bash
cd "/Volumes/MAIN DIRVE/Ziscol Media /Branding /Website/website/ks-media"
node node_modules/next/dist/bin/next dev
```
Runs on **http://localhost:3000** (or 3001 if 3000 is taken).

---

## Project Structure
```
ks-media/
├── app/
│   ├── layout.tsx              # Root layout — Inter + Playfair Display fonts, metadata
│   ├── page.tsx                # Main landing page — assembles all sections (overflow-clip, not overflow-hidden)
│   └── globals.css             # Global styles, design tokens, btn-primary, btn-secondary
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Sticky nav, "Ziscol Media" logo, "Book a Call" pill CTA, mobile menu
│   │   └── FooterLuxury.tsx    # Brand col + Contact col (email/X/Calendly)
│   ├── sections/
│   │   ├── HeroLuxury.tsx      # ACTIVE — hero with floating service elements, trust badge, count-up stats
│   │   ├── WorkedWith.tsx      # ACTIVE — "Trusted by Top Creators" with colored initial avatars
│   │   ├── PortfolioCarousel.tsx # ACTIVE — 2x2 grid of 4 real YouTube videos (inline embeds)
│   │   ├── HowItWorks.tsx      # ACTIVE — 6-step sticky scroll, SVG illustrations, direction-aware slide anim
│   │   ├── FAQSection.tsx      # ACTIVE — FAQ accordion + CTA
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
└── public/images/              # (empty — no images uploaded yet)
```

---

## Active Page Layout (app/page.tsx)
1. `<Navigation />` — sticky top nav
2. `<HeroLuxury />` — hero section
3. `<WorkedWith />` — trusted by creators
4. `<PortfolioCarousel />` — portfolio
5. `<HowItWorks />` — process steps
6. `<FAQSection />` — FAQ
7. `<FooterLuxury />` — footer

---

## Design System

**Brand Direction:** Trust, authority, professionalism. Mature, clean, premium. Target: B2B founders 25-30+.
**Reference site:** https://ks-media.co/ (clean dark aesthetic, pill buttons, bold typography)

**Colors:**
- Background: `#0a0a0a` / `#121212` / `#1e1e1e`
- **Accent: `#E6EB2F`** (yellow-green) — primary accent, replaced all previous indigo
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

**Trust badge:** Stacked avatars + "Trusted by 15+ B2B Founders"

**Subheading:** "We handle every part of YouTube scripts, thumbnails, editing, packaging so you can focus on closing clients. You just show up and record. We do the rest."

**Stats (animated count-up):**
- $100K → $1M+ | Revenue Made for Clients
- 0 → 15+ | Business Creators Helped
- 0.0 → 4.9/5 | Client Rating

**Floating service elements** (xl screens only, configured via FloatingElementsEditor):
```
{ label: 'Script Writing', side: 'left',  top: 24, edge: 9,  opacity: 40, size: 18, floatSpeed: 5.5 }
{ label: 'Video Editing',  side: 'left',  top: 56, edge: 12, opacity: 43, size: 14, floatSpeed: 6   }
{ label: 'Thumbnails',     side: 'right', top: 34, edge: 7,  opacity: 45, size: 24, floatSpeed: 5.0 }
{ label: 'Distribution',   side: 'right', top: 58, edge: 15, opacity: 36, size: 14, floatSpeed: 5.5 }
```
Each element has a soft yellow glow (`box-shadow: 0 0 18px rgba(230,235,47,0.12)`).
The `⚙ Edit Floats` button (bottom-right) opens the live editor — adjust sliders, copy config, paste back as new defaults.

**Scroll indicator:** 3 cascading yellow chevrons (pulsing sequentially).

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
- **Left column:** step list with animated circles (inactive: `#1e1e1e` bg, active: `#E6EB2F`)
- **Connector line fix:** `top-9` + `height: calc(100% + 24px)` — threads between circles cleanly
- **Right column:** SVG illustrations fade + slide between steps (direction-aware: scrolling down = slide up, scrolling up = slide down)
- **Mobile:** accordion layout

---

## Real Client Data
| Client | Metric |
|--------|--------|
| Putatoputato | 2.9M subscribers |
| Ob_Health | 271K followers |
| Nelson Morgan | 163K subscribers |
| Milan Raviji | 10M+ impressions |

---

## TODOs — Things Still Needing Real Info
- `https://calendly.com/YOUR_LINK` — replace in HeroLuxury.tsx, FAQSection.tsx, FooterLuxury.tsx, Navigation.tsx
- `hello@ziscolmedia.com` — confirm/replace real email in FooterLuxury.tsx
- `@ZiscolMedia` — confirm/replace real X/Twitter handle in FooterLuxury.tsx
- Portfolio thumbnails already use real YouTube embeds ✓
- Navigation logo already says "Ziscol Media" ✓

---

## MCP Integrations
- **Figma MCP**: `https://mcp.figma.com/mcp` — configured in `~/.claude.json`
  - **Requires Claude Code restart to activate**
  - After restart, verify with: `what figma tools do you have?`
  - Purpose: read Figma designs and sync changes into code
  - If not working: run `claude mcp add figma --transport http https://mcp.figma.com/mcp`

---

## Work Completed This Session
- **Full rebrand**: indigo/purple accent → `#E6EB2F` yellow across all components + tailwind config
- **Design system overhaul**: replaced `.neuro-button` with `.btn-primary` (yellow pill) + `.btn-secondary` (outline pill)
- **Navigation**: logo "Ziscol Media" in Playfair, "Book a Call" pill CTA added desktop + mobile
- **Hero**: trust badge, floating service elements with glow + float animation, count-up stats ($100K→$1M+), chevron scroll indicator
- **FloatingElementsEditor**: dev tool at `components/ui/FloatingElementsEditor.tsx` — live slider controls, copy-to-clipboard config
- **Portfolio**: rebuilt as 2x2 grid with 4 real YouTube inline embeds (no modal, all play simultaneously)
- **HowItWorks**: fixed sticky scroll (overflow-clip), fixed connector line overlap, added direction-aware slide animation to illustrations, step circles now have `#1e1e1e` background
- **Deployed to Vercel**: https://ks-media-ecru.vercel.app

---

## Next Session — Start Here

**Priority 1: HowItWorks S-curve animation**
The user wants a decorative animated line that draws across the page in an S-curve form as the user scrolls through the 6 steps. Details:
- As user scrolls steps 1→6, an SVG path animates across the section in an S/wave shape
- The stroke draws from left to right, then right to left (alternating per step or per scroll)
- Goal is purely decorative — makes the section feel more premium and dynamic
- User has a Figma design selected — **use Figma MCP to read it first** (restart Claude Code to activate MCP)
- Figma file URL needed from user at start of session

**Priority 2: Remaining placeholder replacements**
- Calendly URL, email, X handle

**Priority 3: Any other sections to build or activate**
- Results/Testimonials sections (unused, ready to activate)
