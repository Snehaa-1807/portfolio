# Sneha Narwaria — Portfolio

A premium dark-themed portfolio built with React + Vite.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Cursor.jsx / .module.css      — Custom cursor
│   ├── Navbar.jsx / .module.css      — Fixed top navigation
│   ├── Hero.jsx / .module.css        — Hero section + portrait card
│   ├── Terminal.jsx / .module.css    — Terminal intro block
│   ├── Skills.jsx / .module.css      — Skills grid
│   ├── Services.jsx / .module.css    — Services cards
│   ├── Projects.jsx / .module.css    — Project cards with links
│   ├── About.jsx / .module.css       — About section
│   ├── Timeline.jsx / .module.css    — Journey timeline
│   ├── Contact.jsx / .module.css     — Contact form
│   ├── CTA.jsx / .module.css         — Call to action
│   └── Footer.jsx / .module.css      — Footer
├── styles/
│   └── global.css                    — Global styles, variables, layout
├── data.js                           — ✏️  ALL your content lives here
├── App.jsx                           — Main layout
└── main.jsx                          — Entry point
```

## ✏️ Customizing Content

**All content is in `src/data.js`:**

- `PHOTO_URL` — set to your photo import or path
- `LINKS` — your GitHub, LinkedIn, email, resume
- `PROJECTS` — update each project's `link` field
- `SKILLS`, `SERVICES`, `TIMELINE` — edit as needed

## 📸 Adding Your Photo

```js
// In src/data.js:
import photo from './assets/sneha.jpg'
export const PHOTO_URL = photo
```

Place your photo in `src/assets/` folder.
