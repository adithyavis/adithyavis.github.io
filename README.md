# adithyavis.github.io

Personal site — React + TypeScript, built with Vite, deployed to GitHub Pages by GitHub Actions.

## Local development

```sh
npm install
npm run dev      # dev server with hot reload
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build locally
```

## Editing content

Content lives in [`src/data/`](src/data/) as plain TypeScript — no JSX. To change what
the site says, edit these and nothing else:

| File | Section |
| --- | --- |
| `profile.ts` | Name, eyebrow, social links, MAU badge, email |
| `skills.ts` | Technical focus chips |
| `experience.ts` | Experience cards |
| `talks.ts` | Talks |
| `openSource.ts` | Open source list (incl. star counts) |
| `projects.ts` | Project cards |
| `articles.ts` | Writing list |
| `contact.ts` | Contact copy |

Images go in [`public/assets/`](public/assets/) and are referenced by absolute path
(e.g. `/assets/logo.webp`).

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages.

> **Repository setting required:** Settings → Pages → Build and deployment → Source must
> be **GitHub Actions** (not "Deploy from a branch"). The root `index.html` is now a Vite
> template, not the built page, so branch-based serving would break the site.
