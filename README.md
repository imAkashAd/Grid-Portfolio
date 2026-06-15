# Akash Adhikary — Portfolio

A dark, monospace-grid portfolio site built with **React + Vite + Framer Motion**.

---

## Folder Structure

```
src/
├── data/
│   └── portfolio.js       ← ALL YOUR CONTENT — edit only this file
├── components/
│   ├── layout/            ← Header, Grid (3-col layout)
│   ├── sections/          ← Intro, Projects, Experience, Academic, InterestsHobbies
│   └── ui/                ← Tag, Chip, SectionLabel, WavyDivider, StatusDot
├── styles/
│   └── globals.css        ← CSS variables (colors, fonts, layout)
├── App.jsx
└── main.jsx
```

---

## How to Update Your Content

Everything lives in `src/data/portfolio.js`. Edit that file only:

- `meta` — name, title, email, availableForWork toggle
- `links` — GitHub, LinkedIn, email, resume PDF
- `intro` — paragraphs about yourself
- `projects` — project cards with tags and links
- `experience` — work history with bullets
- `education`, `certifications` — academic section
- `researchInterests` — for higher studies applications
- `interests`, `hobbies`, `skills` — right column

---

## Local Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
```

---

## Deploy to Vercel (Free)

1. Push to GitHub
2. Go to vercel.com → Add New Project → import your repo
3. Framework: Vite | Build: `npm run build` | Output: `dist`
4. Deploy — done. Auto-deploys on every git push.

## Deploy to Netlify (Free alternative)

1. Run `npm run build`
2. Drag the `dist/` folder onto netlify.com
# Grid-Portfolio
