# MyPortfolio

Minimal, responsive game portfolio for Joshy M Raj. Plain HTML and CSS, with a little TypeScript. Hosted on GitHub Pages.

## Layout

| Path | What |
|---|---|
| `site/` | The published site: `index.html`, `css/style.css`, `assets/` thumbnails, `favicon.svg` |
| `src/main.ts` | Swaps a broken thumbnail for a title tile, and sets the footer year. Compiles to `site/js/main.js` (gitignored). |
| `.github/workflows/pages.yml` | Builds the TypeScript and deploys `site/` to GitHub Pages on every push to `main` |

## Run locally

```bash
npm install
npm run build
npm run serve
```

Then open http://localhost:4173. Use `npm run watch` in another terminal while editing `src/`.

## Add a game

1. Put a thumbnail in `site/assets/`. 16:9 landscape works best.
2. In `site/index.html`, copy one `<article class="card">` block and change the title, meta line, description, tags and links. Remove any store button the game doesn't have.
3. Portrait-only screenshots have two options:
   - Three side by side: use `class="thumb thumb--strip"`, as on the Fashion Stylist card.
   - One image centred on a blurred copy of itself: use `class="thumb thumb--portrait"`, as on the Dugout Dice card.

## Publish on GitHub Pages

1. Push this folder to a GitHub repo, using the `main` branch.
   - Name it `joshymraj.github.io` to serve the site at `https://joshymraj.github.io/`.
   - Any other name serves it at `https://joshymraj.github.io/<repo>/`.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Each push to `main` redeploys. All paths are relative, so either URL works.
