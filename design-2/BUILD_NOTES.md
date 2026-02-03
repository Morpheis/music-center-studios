# Design 2: "Modern & Bold" — Build Notes

## What Was Built
Complete static site for Music Center Studios — a premium, high-impact single-page scrolling design with a separate Kindermusik page.

## Files
- **index.html** — Main single-page site with section anchors (#about, #programs, #stats, #kindermusik, #summer, #activities, #locations, #contact)
- **kindermusik.html** — Dedicated Kindermusik page with class levels, pricing, enrollment info
- **styles.css** — Full responsive stylesheet, mobile-first, ~1375 lines
- **scripts.js** — Sticky nav, scroll animations, animated counters, copy toggle, parallax
- **netlify.toml** — Deployment config with caching headers and security headers

## Design Decisions
- **Color palette:** Deep navy (#1a1a2e), charcoal (#0f0f23), coral (#ff6b6b), gold (#ffd93d)
- **Typography:** Montserrat 400–900 for headings, Source Sans 3 for body (Google Fonts)
- **Layout:** Full-width alternating dark/light sections with bold gradients
- **Nav:** Sticky with blur-glass effect, scrolled state, mobile hamburger
- **Hero:** Full-viewport with parallax background, gradient text title, dual CTA buttons
- **Programs:** 3-column card grid with hover animations and gradient top-borders
- **Stats:** Animated counters (10+ years, 2 locations, 6 programs, 100s of students)
- **Kindermusik page:** Class levels (Foundations, Mixed-Age, Level 3) with pricing cards
- **All hover states:** Lift effects with shadow transitions throughout

## Copy Toggle
Floating button (bottom-right) lets users switch between original and improved copy. 13 toggle points on the main page, 4 on Kindermusik. Improved copy is punchier, more action-oriented, and better structured for web scanning.

## Responsive Breakpoints
- 1024px: 2-column programs, stacked about grid
- 768px: Mobile nav, single-column programs, adjusted spacing
- 480px: Tight mobile layout, hidden toggle label

## Assets
All assets referenced via relative path `../original-assets/`:
- MCS logo (white, nav + footer)
- Favicon
- Kindermusik logo
- Piano hero background image

## Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- `prefers-reduced-motion` support
- Focus-visible styles via browser defaults
- ARIA labels on interactive elements
- Sufficient color contrast (white on navy, gold accents)

## No Dependencies
Pure HTML/CSS/JS. No build step. No frameworks. Drop-in deployable to Netlify.
