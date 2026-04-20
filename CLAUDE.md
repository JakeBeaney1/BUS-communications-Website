# CLAUDE.md — Samsonite Freeform Presentation Website

## Project Overview

This is a **scroll-driven, cinematic single-page presentation website** for the Samsonite Freeform — a new product concept featuring built-in vacuum compression technology. It replaces a traditional slideshow. The site functions as both a product launch website and a class presentation, so it must be visually stunning, interactive, and brand-consistent with Samsonite.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React + Vite | Core framework |
| Tailwind CSS | Styling |
| React Three Fiber + Drei | 3D rendering and scene management |
| GSAP + ScrollTrigger | Scroll-driven animations, section reveals |
| Lenis | Smooth scroll (wrap the app in Lenis) |
| Recharts or Chart.js | Interactive market/financial charts |
| Framer Motion | Supplemental UI micro-animations |

Install all of these before writing any component code.

```bash
npm install @react-three/fiber @react-three/drei gsap @gsap/react lenis framer-motion recharts three
```

---

## File & Folder Structure

```
src/
├── assets/
│   └── 3d/
│       └── Video For 3D interaction.mp4   ← main hero scroll video
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          ← fixed top nav with Samsonite logo
│   │   └── SmoothScroll.jsx    ← Lenis wrapper
│   ├── sections/
│   │   ├── Hero.jsx            ← full-screen video scroll section
│   │   ├── AboutUs.jsx         ← Samsonite intro + problem statement
│   │   ├── OurProduct.jsx      ← product specs + 3D/visual reveal
│   │   ├── MarketCompetition.jsx ← interactive charts + competitor cards
│   │   ├── Strategies.jsx      ← marketing + sales funnel
│   │   ├── Financials.jsx      ← interactive financial charts
│   │   ├── Future.jsx          ← placeholder section
│   │   └── MeetTheTeam.jsx     ← team member cards
│   └── ui/
│       ├── SectionTitle.jsx    ← reusable animated section header
│       ├── StatCard.jsx        ← animated number stat card
│       └── PlaceholderBlock.jsx ← obvious yellow/dashed placeholder
├── hooks/
│   └── useScrollAnimation.js  ← reusable GSAP ScrollTrigger hook
├── App.jsx
└── main.jsx
```

---

## Visual Style

**Dark, cinematic, immersive.** Think Apple product page meets airline safety video meets a luxury brand campaign.

### Color Palette
```
Background:     #0a0a0a  (near black)
Surface:        #111111  (card backgrounds)
Border:         #1f1f1f  (subtle dividers)
Primary text:   #f5f5f5  (off white)
Secondary text: #888888  (muted gray)
Accent gold:    #c8a96e  (Samsonite-adjacent luxury gold)
Accent blue:    #1e3a5f  (deep navy, Samsonite brand color)
Highlight:      #ffffff  (pure white for key callouts)
```

### Typography
- Headings: `font-light tracking-widest uppercase` — wide, airy, premium feel
- Body: `font-light leading-relaxed` — readable, never cramped
- Stats/Numbers: `font-bold tabular-nums` — bold contrast against light body text

### Global Tailwind base (add to index.css)
```css
body {
  background-color: #0a0a0a;
  color: #f5f5f5;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

::selection {
  background: #c8a96e33;
}
```

---

## Navbar (Always Visible)

- Fixed top, full width, `backdrop-blur-md bg-black/40`
- **Top-left:** Samsonite wordmark logo (use official SVG from public CDN or an `<img>` tag — do NOT recreate the logo in custom CSS)
  - Official logo source: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Samsonite_logo.svg/1280px-Samsonite_logo.svg.png`
  - Display at ~120px wide, white/inverted if needed
- **Top-right:** Navigation dots or text links to each section (smooth scroll on click)
- Nav links: About | Product | Market | Strategies | Financials | Future | Team

---

## Section-by-Section Specifications

---

### 1. HERO — Full Screen Video Scroll

**File:** `src/components/sections/Hero.jsx`

- The video `Video For 3D interaction.mp4` (located at `src/assets/3d/`) should be used as a **scroll-scrubbed video** — meaning as the user scrolls down, the video plays frame by frame using GSAP ScrollTrigger.
- Implementation pattern:
  ```jsx
  // Use a ref on the <video> element
  // Set currentTime manually via ScrollTrigger progress × video.duration
  // video should be: autoPlay={false} muted playsInline preload="auto"
  ```
- The video fills 100vw × 100vh. No controls shown.
- Overlay text fades in on load:
  - `SAMSONITE FREEFORM` in large, spaced uppercase
  - Subtitle: `"More Space. More Freedom."` in gold
  - Scroll indicator arrow at the bottom (animates bounce)
- Once video scroll completes, pin releases and the next section snaps in.

---

### 2. ABOUT US

**File:** `src/components/sections/AboutUs.jsx`

Three sub-sections that stagger in on scroll:

**A. Brand Introduction**
- Headline: `"Founded in 1910"`
- Body: Samsonite is the world's largest travel luggage company, known for quality and durability. Brief, punchy. Not a wall of text.
- Visual: Large number `"114"` animating up (years in business) as a scroll-triggered counter

**B. Executive Summary**
- Headline: `"What We Built"`
- Body: The Freeform takes Samsonite's proven hard-shell construction and adds what has always been missing — vacuum compressible pockets built directly into the case. Pack more. Bring less.
- Visual: A simple two-panel diagram — normal suitcase vs. Freeform (use CSS/SVG illustration or placeholder image)

**C. Problem Statement**
- Headline: `"The Problem"`
- Body: Travelers consistently overpack or bring extra bags — not because they want to, but because hard-shell suitcases waste internal space. The Freeform eliminates that waste.
- Visual: A stat callout card — `"2 in 3 travelers"` checked an extra bag in 2023 — [PLACEHOLDER: source needed]

---

### 3. OUR PRODUCT

**File:** `src/components/sections/OurProduct.jsx`

**Product specs layout** — two product cards side by side (or stacked on mobile):

| | Large Check-In | Carry-On |
|---|---|---|
| Dimensions | 31.1" × 20.9" × 13.8" | 23" × 15" × 10" |
| Weight | 9.6 lbs | 6.5 lbs |
| Colors | Navy, Black, Blackout | Navy, Black, Blackout |

- Cards should have a subtle border glow on hover (`border-gold`)
- Each card animates in from opposite sides on scroll

**Key Feature Callout — Vacuum Compression:**
- Full-width section with two columns:
  - Left: "Built-In Vacuum Compression on Both Sides" with a brief description
  - Right: Product image placeholder (dark card with text `[ Product Image — Compressed View ]`)
- Below: Handheld vacuum compressor callout — "Compact. Powerful. Travel-Ready." with a small product image placeholder

**3D Element:**
- If a 3D model file (`.glb` or `.gltf`) is provided later, render it here with React Three Fiber. Orbit controls enabled, auto-rotating.
- Until then, use a placeholder: a spinning dark box with gold wireframe edges using R3F primitives.

---

### 4. MARKET & COMPETITION

**File:** `src/components/sections/MarketCompetition.jsx`

**A. Market Size — Interactive Chart**

Use Recharts `PieChart` or `RadialBarChart`:

```
Global Travel Luggage Market Share (2024 est.)
- Samsonite Group (incl. Tumi, Hartmann, American Tourister): 20%
- Away: [PLACEHOLDER — est. 3-5%]
- Monos: [PLACEHOLDER — est. 1-2%]
- Travelpro: [PLACEHOLDER — est. 2-3%]
- Other: remainder
```

- Color the Samsonite slice in gold (`#c8a96e`), others in muted gray tones
- Animate slices in on scroll with Framer Motion `whileInView`
- Below the chart: `Total Market Size: $[PLACEHOLDER — est. $XX billion]`

**B. Competitor Comparison Table**

Interactive cards for: Away, Monos, Travelpro

Each card shows:
- Brand name
- Price range (placeholder if unknown)
- Key weakness vs. Freeform
- "Has Vacuum Compression?" → NO (red X)

Freeform card at the end: all green checkmarks.

**C. Key Differentiator Callout**
- Bold headline: `"No suitcase like this exists."`
- Subtext: No competitor in the premium hard-shell category offers built-in vacuum compression. This is a category-defining feature.

---

### 5. OUR STRATEGIES

**File:** `src/components/sections/Strategies.jsx`

**A. Marketing**

Three marketing pillars — reveal with stagger animation:

1. **Digital Campaign** — Re-engage Bench Media + Tourist Tracka data partnership. Video ads across programmatic channels.
2. **Influencer PR Boxes** — Three target influencers:
   - @jeraldinejeronimojorjette — Family & travel (3.5M IG / 3.7M TikTok)
   - @thebucketlistfamily — Family travel adventures (3.7M IG / 0.5M TikTok)
   - @hjevelyn — GenZ lifestyle & fashion (2.3M IG / 4.4M TikTok / 4.96M YouTube)
3. **Retail Activation** — In-store display showing compressed vs. uncompressed suitcase side by side

**B. Sales Funnel — Interactive Visual**

Render the funnel as a vertical animated flow diagram (CSS/SVG, not just a list):

```
Awareness    →   Social media demo videos
     ↓
Interest     →   Website + reviews
     ↓
Consideration →  Comparison vs. standard luggage
     ↓
Purchase     →   Online (DTC via Samsonite.com) or in-store
     ↓
Post-Purchase →  UGC content + share experience
```

Each node should glow gold as the user scrolls through it.

---

### 6. FINANCIALS

**File:** `src/components/sections/Financials.jsx`

**A. Pricing Cards — animated reveal**

Three cards:
- Large Check-In: **$316.49**
- Carry-On: **$238.74**
- Bundle: **$439.74**

**B. Breakeven Chart — Recharts BarChart**

```
Breakeven Units Required:
- Large Check-In: 32,259
- Carry-On: 43,012
- Bundle: 25,807
```

Animate bars from 0 on scroll entry.

**C. Pro Forma — Year 1 / Year 2 (Recharts grouped BarChart)**

| Scenario | Year 1 Revenue | Year 2 Revenue |
|---|---|---|
| Best | $31,213,900 | $40,578,070 |
| Most Likely | $21,336,750 | $27,737,775 |
| Worst Case | $14,324,500 | $18,621,850 |

Show Revenue, COGS, Gross Profit, Operating Income per scenario.

**D. Forecasted Sales (Year 1) — Recharts LineChart or BarChart**

| SKU | Best | Most Likely | Worst |
|---|---|---|---|
| Carry-On Units | 60,000 | 40,000 | 25,000 |
| Large Check-In Units | 50,000 | 35,000 | 25,000 |
| Carry-On Revenue | $15.4M | $10.3M | $6.4M |
| Large Check-In Revenue | $15.8M | $11.1M | $7.9M |

---

### 7. FUTURE

**File:** `src/components/sections/Future.jsx`

This section content is not yet defined. Render a full-height section with:

```
⚠️ PLACEHOLDER — Future section content coming soon.
Add your future roadmap, expansion plans, or next product here.
```

Style the placeholder using `PlaceholderBlock.jsx`:
- Dashed yellow border (`border-2 border-dashed border-yellow-400`)
- Yellow text label clearly reading `[ PLACEHOLDER ]`
- Dark background so it doesn't break the visual theme
- Add a subtle pulsing animation so it's impossible to miss in a live demo

---

### 8. MEET THE TEAM

**File:** `src/components/sections/MeetTheTeam.jsx`

Five team member cards in a responsive grid (2-3 columns desktop, 1 column mobile).

Team:
- **Jake Beaney**
- **Daniel Talisman**
- **Y Phinh Ly**
- **Elise Kney**
- **Sena Furat**

Each card:
- Dark surface with subtle gold border on hover
- Name in white, large
- Role: `[ PLACEHOLDER — Add role/title ]`
- Headshot: circular image placeholder with initials as fallback (e.g., `JB`)
- Card lifts slightly on hover (`hover:-translate-y-1 transition-transform`)

Cards stagger in from below on scroll using Framer Motion `variants` + `staggerChildren`.

---

## Placeholder Guidelines

Whenever content is missing or unconfirmed, use the `PlaceholderBlock` component. It must be:
- Visually distinct (yellow dashed border, yellow text)
- Labeled with `[ PLACEHOLDER ]` in all caps
- Include a brief note on what content goes there (e.g., `[ PLACEHOLDER — Add product photo here ]`)
- Never styled to blend in — it should be obvious even in a live demo

---

## Scroll & Animation Rules

1. **Lenis** wraps the entire app. Initialize in `main.jsx` or a `SmoothScroll.jsx` provider.
2. **GSAP ScrollTrigger** must be registered at the top of any file using it:
   ```js
   import { gsap } from 'gsap'
   import { ScrollTrigger } from 'gsap/ScrollTrigger'
   gsap.registerPlugin(ScrollTrigger)
   ```
3. Each section gets a `useEffect` with a `ScrollTrigger` that fires when the section enters the viewport (`start: "top 80%"`).
4. Default animation pattern: elements start `opacity: 0, y: 40` and tween to `opacity: 1, y: 0` with `duration: 0.8, ease: "power2.out"`.
5. Stagger children with `stagger: 0.15`.
6. The hero video is the only pinned/scrubbed section. All other sections scroll naturally.
7. Clean up all ScrollTrigger instances in the `useEffect` return function to avoid memory leaks.

---

## Branding Rules

- The Samsonite logo must appear in the top-left corner of the navbar at all times.
- Use official brand colors: navy (`#1e3a5f`) and white/gold as accents.
- Do not distort, recolor, or recreate the logo in CSS.
- Treat this as a real Samsonite product page — the presentation should look like something that could ship.

---

## Build Order

Build in this sequence:

1. `main.jsx` — Lenis wrapper + GSAP registration
2. `Navbar.jsx` — logo + nav links
3. `Hero.jsx` — video scroll effect (most complex, verify it works first)
4. `AboutUs.jsx`
5. `OurProduct.jsx`
6. `MarketCompetition.jsx` — charts
7. `Strategies.jsx` — funnel diagram
8. `Financials.jsx` — all charts
9. `Future.jsx` — placeholder
10. `MeetTheTeam.jsx`
11. Wire everything in `App.jsx`
12. Final pass: spacing, responsive layout, dark mode polish

---

## Assets

| Asset | Path | Status |
|---|---|---|
| Hero scroll video | `src/assets/3d/Video For 3D interaction.mp4` | ✅ Provided |
| Samsonite logo | External URL (Wikipedia SVG) | ✅ Use CDN |
| Product photos | TBD | ⚠️ Placeholder |
| 3D suitcase model | TBD | ⚠️ Placeholder (spinning box) |
| Team headshots | TBD | ⚠️ Placeholder (initials) |

---

## Do Not Do

- Do not use a white or light background anywhere — the entire site is dark
- Do not use default browser scrollbars if Lenis is active
- Do not put all content in one giant component — keep each section in its own file
- Do not use `<form>` tags — use `onClick` / `onChange` handlers
- Do not hardcode chart data inline in JSX — define it in a `data/` folder or at the top of each section file
- Do not use lorem ipsum — if content is missing, use a labeled `PlaceholderBlock`
