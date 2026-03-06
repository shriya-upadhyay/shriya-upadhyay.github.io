# shriya-upadhyay.github.io

Personal website built with React + Vite. Deployed to GitHub Pages.

Live at [shriya-upadhyay.github.io](https://shriya-upadhyay.github.io)

---

## Stack

- **React 18** + **Vite**
- **React Router** for client-side routing
- **CSS custom properties** for light/dark theming
- **GitHub Actions** for automated builds and deploys

---

## Local Dev

```bash
npm install
npm run fetch-medium   # one-time: pulls Medium articles into public/medium.json
npm run dev            # http://localhost:5173
```

> `fetch-medium` only needs to run once per clone, or whenever you want fresh articles locally. The GitHub Action handles it automatically in production.

---

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Me |
| `/experience` | Experience (vertical timeline) |
| `/portfolio` | Projects |
| `/writing` | Writing (Medium articles) |
| `/leisure` | Leisure |

---

## Deployment

Pushes to `main` trigger a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. Fetches the latest Medium articles → writes `public/medium.json`
2. Runs `vite build`
3. Deploys `dist/` to the `gh-pages` branch

The workflow also runs on a **daily cron at 8am UTC** so new Medium posts appear automatically without needing a code push.

**One-time setup required:** In your repo Settings → Actions → General, set Workflow permissions to **Read and write**.

---

## Theming

Light/dark mode is driven by CSS custom properties in `src/index.css`. The active theme is stored in `localStorage` and applied via `data-theme` on `<html>`. Toggle logic lives in `src/context/ThemeContext.jsx`.

---

## Writing Feed

Medium articles are fetched at build time (not runtime) to avoid CORS. The script lives at `scripts/fetch-medium.js` — it uses `rss-parser` to pull the feed, strips HTML from excerpts, extracts thumbnails, and writes clean JSON to `public/medium.json`. The React app just reads that static file.
