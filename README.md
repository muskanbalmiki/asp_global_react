# ASP Global LLC FZ – Website (React + Vite)

## Run locally (VS Code)
1. Install Node.js 18+ from https://nodejs.org
2. Open this folder in VS Code → Terminal → New Terminal
3. `npm install`
4. `npm run dev`  → open http://localhost:5173

## Edit content
All text, products, phone and email are in `src/data.js`. Colours are in `src/styles.css` (`:root`).

## Build for hosting
`npm run build` creates a `dist/` folder. Upload `dist/` to any host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, or cPanel `public_html`).
Netlify: drag & drop the `dist` folder at app.netlify.com/drop – live in a minute.

## Make the form send emails (optional)
Currently the form opens the visitor's email app. For direct delivery, create a free form at formspree.io
and replace the `submit` function in `src/components/Contact.jsx` with a `fetch` POST to your Formspree URL.
