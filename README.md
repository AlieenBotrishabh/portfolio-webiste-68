# Rishabh Kumar — Portfolio Website

A modern, fully scrollable portfolio website built with **React + Vite + Tailwind CSS v4**, featuring a dark glassmorphism aesthetic, HLS background video, scroll-triggered animations, and a Node.js/Express/MongoDB backend for email lead capture.

**🌐 Live:** https://portfolio-website68-2cs59ceve-alieenbotrishabhs-projects.vercel.app  
**📁 Repo:** https://github.com/AlieenBotrishabh/portfolio-webiste-68

---

## ✨ Features

- **100vh Hero** — fullscreen HLS video background (Mux stream via hls.js), glassmorphism navbar, email CTA with typewriter animation
- **About Section** — bio, animated stats cards, social links
- **Skills Section** — 6 color-coded categories with staggered pill reveal on scroll
- **Projects Section** — all 4 projects with featured badges, descriptions, tech stacks, and GitHub links
- **Education Section** — timeline for BE degree + Oracle Cloud AI certification
- **Contact Section** — email form with typewriter placeholder + social link buttons
- **Scroll Animations** — every section uses `useInView` + `framer-motion` for smooth entrance
- **Responsive** — mobile-first with hamburger nav, fluid grids, and adaptive typography
- **Dark Glassmorphism Theme** — `liquid-glass`, `glass-card`, `glass-pill` CSS primitives

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite 6, Tailwind CSS v4 |
| Animations | Framer Motion (motion/react) |
| Icons | Lucide React |
| Video | hls.js (Mux HLS stream) |
| Backend | Node.js, Express.js |
| Database | MongoDB (optional — graceful fallback) |
| Deployment | Vercel (frontend SPA + serverless API) |
| Fonts | Inter (UI), Instrument Serif (headings) |

---

## 📁 Project Structure

```
portfolio-website68/
├── api/
│   └── [...all].js          # Vercel serverless entry (serverless-http)
├── server/
│   ├── app.js               # Express app (routes: /api/resume, /api/leads)
│   ├── index.js             # Local dev server entry
│   ├── data/resumeData.js   # Re-exports from shared/
│   └── lib/mongo.js         # MongoDB connection + storeLead helper
├── shared/
│   └── resumeData.js        # Single source of truth for all portfolio data
├── src/
│   ├── App.jsx              # Root layout — renders all sections
│   ├── main.jsx
│   ├── index.css            # Global styles + glassmorphism utilities
│   ├── components/
│   │   ├── BackgroundVideo.jsx  # Fixed HLS video background
│   │   ├── Hero.jsx             # 100vh hero with CTA
│   │   ├── Navbar.jsx           # Fixed navbar with scroll blur
│   │   ├── sections/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── EducationSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/
│   │       └── SectionWrapper.jsx  # Reusable scroll-reveal wrapper
│   ├── hooks/
│   │   ├── useResumeData.js    # Fetches /api/resume, falls back to local data
│   │   ├── useScrolled.js      # Detects scroll depth for navbar blur
│   │   └── useTypewriter.js    # Character-by-character typewriter effect
│   └── lib/
│       └── api.js              # fetch wrapper with 5s timeout + AbortController
├── vercel.json              # Vercel routing config
└── vite.config.js           # Vite + Tailwind v4 + dev proxy
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- npm

### 1. Clone and install

```bash
git clone https://github.com/AlieenBotrishabh/portfolio-webiste-68.git
cd portfolio-webiste-68
npm install
```

### 2. Environment variables (optional)

```bash
cp .env.example .env
# Edit .env and add your MongoDB URI:
# MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
```

Without `MONGODB_URI`, email leads are stored in-memory (reset on restart). The app works fully without MongoDB.

### 3. Run locally

```bash
npm run dev
```

This starts:
- **Vite dev server** on `http://localhost:5173`
- **Express API** on `http://localhost:3001`
- Vite proxies `/api/*` → Express

---

## ☁️ Deployment (Vercel)

The project is pre-configured for Vercel:

- `vercel.json` routes all non-API traffic to `index.html` (SPA)
- `api/[...all].js` wraps Express with `serverless-http`
- Vite builds to `dist/`

### Deploy from CLI

```bash
npx vercel --prod
```

### Environment Variables on Vercel

In **Vercel Dashboard → Project → Settings → Environment Variables**, add:

| Variable | Value |
|----------|-------|
| `MONGODB_URI` | Your MongoDB Atlas connection string |
| `MONGODB_DB` | `portfolio` (optional, default) |

---

## 📡 API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/health` | Health check — returns `{ ok: true }` |
| `GET` | `/api/resume` | Returns the full resume data object |
| `POST` | `/api/leads` | Captures an email lead. Body: `{ email, source? }` |

---

## 🎨 Design System

### CSS Utilities

| Class | Description |
|-------|-------------|
| `.liquid-glass` | Glassmorphism base — blur, luminosity blend, gradient border via `::before` |
| `.glass-card` | Card-level glass — stronger backdrop blur, subtle border |
| `.glass-pill` | Tag/badge — round, saturated blur, no shadow |
| `.section-title` | Gradient white-to-white/70 text for section headings |
| `.section-divider` | 1px horizontal gradient separator |

### Fonts
- **Inter** (300–600) — body text and UI
- **Instrument Serif** (regular/italic) — hero and section headings

---

## 🤝 Contact

**Rishabh Kumar**  
📧 rishabhk1324@gmail.com  
📍 Mohali, India  
🔗 [GitHub](https://github.com/AlieenBotrishabh) · [LinkedIn](https://linkedin.com/in/rishabh-kumar)