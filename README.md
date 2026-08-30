# adithyavis.github.io

Personal site — React + TypeScript, built with Vite, deployed to GitHub Pages by GitHub Actions.

## Local development

```sh
npm install
npm run dev      # dev server with hot reload
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build locally
```

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages.

> **Repository setting required:** Settings → Pages → Build and deployment → Source must
> be **GitHub Actions** (not "Deploy from a branch"). The root `index.html` is now a Vite
> template, not the built page, so branch-based serving would break the site.
