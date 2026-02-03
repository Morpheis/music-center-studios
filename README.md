# Music Center Studios — Website Redesign Concepts

Three distinct website redesign concepts for [Music Center Studios](https://musiccenterstudios.com/), a music school serving students of all ages in Boise and Meridian, Idaho.

## 🎨 The Designs

### Design 1: "Warm & Playful"
**[Live Preview →](https://msc-design-1.netlify.app/)**

A family-friendly design that feels like walking into a bright, cheerful music room. Warm golds, soft oranges, and teal accents paired with rounded corners, floating musical note animations, and frosted-glass navigation. Five full pages with card-based lesson listings and SVG wave dividers.

![Warm & Playful](https://img.shields.io/badge/style-warm%20%26%20playful-F5A623?style=for-the-badge)

---

### Design 2: "Modern & Bold"
**[Live Preview →](https://msc-design-2.netlify.app/)**

A premium, high-impact single-page scroller with deep navy, vibrant coral, and gold accents. Features a sticky glass-blur nav, parallax hero, animated stat counters, and full-width alternating sections. Separate Kindermusik page.

![Modern & Bold](https://img.shields.io/badge/style-modern%20%26%20bold-1a1a2e?style=for-the-badge)

---

### Design 3: "Elegant & Musical"
**[Live Preview →](https://msc-design-3.netlify.app/)**

Conservatory elegance meets modern web design. Royal blue, ivory, and gold palette with Playfair Display + Great Vibes typography. Staff-line decorative borders, musical note SVG patterns, and asymmetric layouts across six pages.

![Elegant & Musical](https://img.shields.io/badge/style-elegant%20%26%20musical-1e3a5f?style=for-the-badge)

---

## ✨ Features (All Designs)

- **📱 Fully Responsive** — Mobile-first design with breakpoints at 480/768/1024px
- **✏️ Copy Toggle** — Button in the bottom-right corner switches between original site text and improved copy
- **📝 Enrollment Form** — "Enroll Now" CTAs and enrollment forms on every design
- **🖼️ Original Branding** — MCS logo, favicon, and Kindermusik partner logo preserved
- **⚡ Zero Dependencies** — Pure HTML, CSS, and vanilla JavaScript. No build step required.
- **🚀 Netlify Ready** — Includes `netlify.toml` with security headers and asset caching

## 📂 Project Structure

```
music-center-studios/
├── design-1/          ← Warm & Playful
│   ├── index.html
│   ├── about.html
│   ├── lessons.html
│   ├── kindermusik.html
│   ├── contact.html
│   ├── css/styles.css
│   ├── js/main.js
│   ├── assets/        ← logos & images
│   └── netlify.toml
├── design-2/          ← Modern & Bold
│   ├── index.html     (single-page scroller)
│   ├── kindermusik.html
│   ├── styles.css
│   ├── scripts.js
│   ├── assets/
│   └── netlify.toml
├── design-3/          ← Elegant & Musical
│   ├── index.html
│   ├── about.html
│   ├── programs.html
│   ├── kindermusik.html
│   ├── contact.html
│   ├── css/style.css
│   ├── js/main.js
│   ├── assets/
│   └── netlify.toml
└── original-assets/   ← source logos & images
```

## 🚀 Deployment

Each design is a self-contained static site. To deploy on Netlify:

1. Create a new Netlify site
2. Connect this repo
3. Set the **publish directory** to `design-1/`, `design-2/`, or `design-3/`
4. Deploy!

Or run locally:
```bash
cd design-1  # or design-2 or design-3
python3 -m http.server 8080
# Open http://localhost:8080
```

## 📋 Content Source

All content is sourced from the current [musiccenterstudios.com](https://musiccenterstudios.com/) including:
- Two Boise locations (Fairview & State Street)
- Lesson programs: Piano, Guitar, Voice, Violin, Music for Little Mozarts, Adult Piano
- Kindermusik early childhood classes (ages 0–5)
- Pricing, schedules, and enrollment info

---

*Built with ♪ by [ClawdActual](https://github.com/Morpheis)*
