# Design System Reference

## Color Palette

### Primary Colors
```css
--bg-dark-1: #0a0a0a      /* Darkest background */
--bg-dark-2: #121212      /* Medium dark background */
--bg-dark-3: #1a1a1a      /* Light dark background */
```

### Accent Colors
```css
--accent: #6366f1         /* Indigo - Primary accent */
--accent-hover: #7c3aed   /* Purple - Hover state */
```

### Text Colors
```css
--text-main: #ffffff      /* Primary text (white) */
--text-muted: rgba(255, 255, 255, 0.5)  /* Secondary text (50% opacity) */
```

### Borders
```css
--border-light: rgba(255, 255, 255, 0.1)  /* Subtle borders */
```

## Typography

### Font Family
- **Primary**: Inter (Light 300 weight)
- **Fallback**: system-ui, sans-serif

### Font Weights
- 300 (Light) - Body text, headings
- 400 (Regular) - Standard text
- 500 (Medium) - Emphasis
- 600 (Semi-bold) - Strong emphasis
- 700 (Bold) - Titles

### Heading Styles
```css
letter-spacing: -0.03em  /* Tight tracking */
font-weight: 300         /* Light weight */
opacity: 1.0             /* Full opacity */
```

### Body Text Styles
```css
font-weight: 300         /* Light weight */
opacity: 0.6             /* 60% opacity for non-headings */
line-height: 1.6         /* Comfortable reading */
```

### Font Sizes
- **Hero Title**: 5rem (80px) desktop, 3rem (48px) mobile
- **Section Titles**: 3.75rem (60px) desktop, 2.5rem (40px) mobile
- **Subsection Titles**: 1.5rem (24px)
- **Body Text**: 1rem (16px)
- **Small Text**: 0.875rem (14px)

## Components

### Glassmorphism Cards

```css
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-strong {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

**Usage**: Cards, navigation menu, overlays

### Neumorphic Buttons

```css
.neuro-button {
  background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
  box-shadow:
    8px 8px 16px rgba(0, 0, 0, 0.5),
    -8px -8px 16px rgba(40, 40, 40, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.neuro-button:hover {
  transform: translateY(-2px);
  box-shadow:
    10px 10px 20px rgba(0, 0, 0, 0.6),
    -10px -10px 20px rgba(50, 50, 50, 0.1),
    inset 0 0 30px rgba(99, 102, 241, 0.2),
    0 0 40px rgba(99, 102, 241, 0.4);
}
```

**Features**:
- 3D depth effect
- Glow on hover
- Gradient border animation
- Smooth transitions
- Active press state

### Navigation Blur

```css
.nav-blur {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
```

**Applied**: When user scrolls past 20px from top

## Icons

### Library
Phosphor Icons (https://phosphoricons.com/)

### Style
- **Weight**: Light (thin strokes)
- **Size**: Varies by context (20px - 32px typically)
- **Color**: White with varying opacity

### Common Icons Used
- `List` - Mobile menu trigger
- `X` - Close button
- `Play` - Video play button
- `ChatCircle` - Discovery call step
- `VideoCamera` - Content creation step
- `Rocket` - Launch & optimize step
- `Plus` / `Minus` - FAQ expand/collapse
- `CaretLeft` / `CaretRight` - Carousel navigation
- Social icons: `InstagramLogo`, `YoutubeLogo`, `TwitterLogo`, `LinkedinLogo`
- `EnvelopeSimple` - Email input

## Spacing Scale

### Padding/Margin
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

### Section Spacing
- **Section padding**: 6rem (96px) vertical, 1.5rem (24px) horizontal
- **Component spacing**: 4rem (64px) between major elements
- **Grid gaps**: 2rem (32px) desktop, 1.5rem (24px) mobile

## Border Radius

- **Small**: 0.5rem (8px)
- **Medium**: 1rem (16px)
- **Large**: 1.5rem (24px) - Cards
- **Extra Large**: 2rem (32px) - Hero elements
- **Full**: 9999px - Circles, pills

## Shadows

### Neumorphic Shadow
```css
box-shadow:
  8px 8px 16px rgba(0, 0, 0, 0.5),
  -8px -8px 16px rgba(40, 40, 40, 0.1);
```

### Glow Effect
```css
box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
```

### Subtle Card Shadow
```css
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
```

## Animations

### Duration
- **Quick**: 200ms - 300ms (hover states, simple transitions)
- **Medium**: 400ms - 600ms (component animations)
- **Slow**: 800ms - 1000ms (page load, scroll reveals)

### Easing Functions
- **Default**: cubic-bezier(0.4, 0, 0.2, 1)
- **Spring**: Framer Motion spring with damping: 30, stiffness: 300
- **Ease-in-out**: For smooth two-way transitions

### Types

#### Page Load Animation
```javascript
// Body fades in
opacity: 0 → 1 (800ms)

// Elements fade in + slide up
opacity: 0 → 1
translateY: 30px → 0
(800ms with staggered delays)
```

#### Scroll Reveal Animation
```javascript
opacity: 0 → 1
translateY: 30px → 0
filter: blur(10px) → blur(0px)
(600ms - 800ms)
```

#### Hover Animations
```javascript
// Button lift
transform: translateY(0) → translateY(-2px)

// Scale up
transform: scale(1) → scale(1.05)

// Icon movement
transform: translateX(0) → translateX(4px)
```

#### Mobile Menu Animation
```javascript
// Slide in from right
transform: translateX(100%) → translateX(0)
opacity: 0 → 1
(300ms spring animation)
```

## Responsive Breakpoints

### Mobile First Approach

```css
/* Mobile (default) */
Base styles

/* Tablet */
@media (min-width: 768px) {
  md: prefix
}

/* Desktop */
@media (min-width: 1024px) {
  lg: prefix
}

/* Large Desktop */
@media (min-width: 1280px) {
  xl: prefix
}
```

### Layout Changes

#### Navigation
- **Mobile** (< 768px): Burger menu
- **Tablet+** (≥ 768px): Full horizontal navigation

#### Grid Systems
- **Hero Stats**: 1 column → 3 columns with dividers
- **Clients**: 2 columns → 4 columns → 8 columns
- **Portfolio**: 1 column → 2 columns → 3 columns
- **How It Works**: 1 column → 3 columns with connectors
- **Footer**: 1 column → 2 columns → 5 columns

## Effects & Filters

### Backdrop Blur
```css
backdrop-filter: blur(20px);  /* Standard */
backdrop-filter: blur(30px);  /* Strong */
```

### Blur Animation
```css
filter: blur(10px);  /* Initial hidden state */
filter: blur(0px);   /* Revealed state */
```

### Gradient Backgrounds
```css
/* Page background */
background: linear-gradient(to bottom right, #0a0a0a, #000000);

/* Orb accents */
background: #6366f1;  /* Indigo */
background: #7c3aed;  /* Purple */
opacity: 0.15;
blur: 120px;
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Interaction States

### Buttons
- **Default**: Neumorphic style with subtle shadow
- **Hover**: Lift up 2px, increase glow, gradient border
- **Active**: Press down, reduced shadow
- **Focus**: Maintain hover state

### Cards
- **Default**: Glassmorphic with subtle transparency
- **Hover**: Increase background opacity, scale 1.02
- **Active**: Maintain hover state

### Links
- **Default**: White with 60% opacity
- **Hover**: 100% opacity
- **Active**: Accent color

## Accessibility

### Color Contrast
- White text on dark backgrounds: WCAG AAA compliant
- Muted text (60% opacity): WCAG AA compliant for large text
- Accent colors tested for sufficient contrast

### Focus States
- All interactive elements have visible focus states
- Keyboard navigation supported
- ARIA labels on icon-only buttons

### Motion
- Respects `prefers-reduced-motion` (should be implemented)
- Animations are decorative, not essential to functionality

## Best Practices

### Do's
✅ Use light font weight (300) for all text
✅ Apply 60% opacity to non-heading text
✅ Use tight letter spacing (-0.03em) on headings
✅ Maintain consistent glassmorphic style on cards
✅ Apply neumorphic style to primary CTA buttons
✅ Use Phosphor icons with light weight
✅ Implement smooth scroll behavior
✅ Add blur effect to scroll animations

### Don'ts
❌ Don't use bold font weights excessively
❌ Don't make all text full opacity (loses hierarchy)
❌ Don't mix icon libraries
❌ Don't use harsh box shadows
❌ Don't skip the blur effect in glassmorphism
❌ Don't make buttons flat (use neumorphic style)
❌ Don't use instant transitions (add easing)

---

This design system creates a cohesive, luxury feel through:
- Consistent use of glassmorphism and neumorphism
- Light typography with strategic opacity
- Smooth, purposeful animations
- Premium color palette with indigo/purple accents
- Generous spacing and clean layouts
