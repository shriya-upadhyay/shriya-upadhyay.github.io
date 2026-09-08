# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Production build → dist/
npm run preview      # Preview the production build locally
npm run lint         # ESLint (zero warnings allowed)
npm run deploy       # Build + push dist/ to gh-pages branch

# Data fetch scripts (run before dev if data files are stale)
npm run fetch-medium   # Pulls latest Medium articles → public/medium.json
npm run fetch-github   # Pulls GitHub activity → public/github.json (needs GITHUB_TOKEN)
npm run fetch-spotify  # Pulls Spotify tracks → public/spotify.json (needs SPOTIFY_* env vars)
```

The fetch scripts only need to run once per clone (or when you want fresh data). The GitHub Actions workflow handles them automatically on push to `main` and on a daily 8am UTC cron.

## Architecture

This is a React 18 + Vite personal portfolio site deployed to GitHub Pages.

**Routing:** React Router v6 with flat routes in `src/App.jsx`. All pages live in `src/pages/` — one `.jsx` + one `.css` per page: `Home`, `AboutMe`, `Experience`, `Portfolio`, `Writing`, `Leisure`.

**Theming:** Light/dark mode is managed by `src/context/ThemeContext.jsx`. Theme is persisted to `localStorage` and applied as `data-theme` on `<html>`. All color variables are CSS custom properties defined in `src/index.css` — add new theme-sensitive colors there, not inline.

**Static data fetching:** External data (Medium articles, GitHub activity, Spotify tracks) is fetched at build time by scripts in `scripts/` and written as JSON to `public/`. The React app reads these static files at runtime to avoid CORS issues. If a fetch script fails in CI, the build fails.

**Deployment:** Pushes to `main` trigger `.github/workflows/deploy.yml` which runs the three fetch scripts, builds, then deploys `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`. The repo's Workflow permissions must be set to **Read and write** in GitHub Settings → Actions → General.

**Shared components:** `src/components/` holds `Navbar`, `Footer`, `GitHubGraph`, and `SpotifyWidget` — each has a co-located CSS file. The navbar reads `ThemeContext` to render the dark mode toggle.
